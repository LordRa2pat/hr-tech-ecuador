import { PROVINCIAS, ValidacionResult } from '../constants/legal';

export function validarIdentificacion(numero: string): ValidacionResult {
    // Limpiar input y validar que solo sean números
    const id = numero.trim();
    if (!/^\d+$/.test(id)) {
        return { valida: false, tipo: 'Desconocido', mensaje: 'Debe contener solo números.' };
    }

    const longitud = id.length;
    if (longitud !== 10 && longitud !== 13) {
        return { valida: false, tipo: 'Desconocido', mensaje: 'Longitud inválida. Debe tener 10 (cédula) o 13 (RUC) dígitos.' };
    }

    const provinciaCod = parseInt(id.substring(0, 2), 10);
    if (provinciaCod < 1 || (provinciaCod > 24 && provinciaCod !== 30)) {
        return { valida: false, tipo: 'Desconocido', mensaje: `Código de provincia (${id.substring(0, 2)}) inválido.` };
    }

    const provincia = PROVINCIAS[provinciaCod];
    const tercerDigito = parseInt(id[2], 10);

    // Determinar Tipo
    if (longitud === 10) {
        if (tercerDigito > 5) {
            return { valida: false, tipo: 'Cédula', provincia, mensaje: 'Tercer dígito inválido para cédula (debe ser 0-5).' };
        }
        return algoritmoModulo10(id, 'Cédula', provincia);
    } else if (longitud === 13) {
        if (id.substring(10, 13) === '000') {
            return { valida: false, tipo: 'Desconocido', provincia, mensaje: 'Los últimos 3 dígitos del RUC no pueden ser 000.' };
        }

        if (tercerDigito >= 0 && tercerDigito <= 5) {
            return algoritmoModulo10(id, 'RUC Natural', provincia);
        } else if (tercerDigito === 9) {
            return algoritmoModulo11(id, 'RUC Privada', provincia, 9);
        } else if (tercerDigito === 6) {
            return algoritmoModulo11(id, 'RUC Pública', provincia, 6);
        } else {
            return { valida: false, tipo: 'Desconocido', provincia, mensaje: 'Tercer dígito inválido para establecer el tipo de RUC.' };
        }
    }

    return { valida: false, tipo: 'Desconocido', mensaje: 'Estructura no reconocida.' };
}

function algoritmoModulo10(id: string, tipo: ValidacionResult['tipo'], provincia: string): ValidacionResult {
    const coeficientes = [2, 1, 2, 1, 2, 1, 2, 1, 2];
    let suma = 0;

    for (let i = 0; i < 9; i++) {
        let valor = parseInt(id[i], 10) * coeficientes[i];
        if (valor > 9) valor -= 9;
        suma += valor;
    }

    const verificadorCalculado = (10 - (suma % 10)) % 10;
    const verificadorIngresado = parseInt(id[9], 10);

    if (verificadorCalculado === verificadorIngresado) {
        return { valida: true, tipo, provincia, mensaje: `${tipo} válida.` };
    } else {
        return { valida: false, tipo, provincia, mensaje: `Dígito verificador incorrecto. El ID no es válido.` };
    }
}

function algoritmoModulo11(id: string, tipo: ValidacionResult['tipo'], provincia: string, tipoRuc: 9 | 6): ValidacionResult {
    let coeficientes: number[];
    let multiplicadorDigitos: number;
    let verificadorIndex: number;

    if (tipoRuc === 9) { // Privadas
        coeficientes = [4, 3, 2, 7, 6, 5, 4, 3, 2];
        multiplicadorDigitos = 9;
        verificadorIndex = 9; // El décimo dígito es el verificador
    } else { // Públicas (6)
        coeficientes = [3, 2, 7, 6, 5, 4, 3, 2];
        multiplicadorDigitos = 8;
        verificadorIndex = 8; // El noveno dígito es el verificador
    }

    let suma = 0;
    for (let i = 0; i < multiplicadorDigitos; i++) {
        suma += parseInt(id[i], 10) * coeficientes[i];
    }

    const residuo = suma % 11;
    let verificadorCalculado = residuo === 0 ? 0 : 11 - residuo;
    const verificadorIngresado = parseInt(id[verificadorIndex], 10);

    if (verificadorCalculado === verificadorIngresado) {
        // Adicional: RUC pública debe terminar en 0001
        if (tipoRuc === 6 && id.substring(9, 13) !== '0001') {
            return { valida: false, tipo, provincia, mensaje: `RUC Público debe terminar en 0001` };
        }
        // Adicional: RUC privada debe terminar en 001
        if (tipoRuc === 9 && id.substring(10, 13) !== '001') {
            return { valida: false, tipo, provincia, mensaje: `RUC Privado debe terminar en ...001` };
        }
        return { valida: true, tipo, provincia, mensaje: `${tipo} válida.` };
    } else {
        return { valida: false, tipo, provincia, mensaje: `Dígito verificador incorrecto.` };
    }
}
