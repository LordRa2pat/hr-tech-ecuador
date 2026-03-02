import { calcularJubilacionPatronal } from './src/lib/formulas';
import { SBU_2026 } from './src/constants/legal';

const testData = {
    aniosTrabajados: 25,
    mejoresSueldos: [12000, 12000, 12000, 12000, 12000], // Promedio anual 12000
    edadJubilacion: 60,
    sexo: 'm' as const
};

const resultado = calcularJubilacionPatronal(testData);

console.log('--- TEST JUBILACION PATRONAL ---');
console.log('Datos:', testData);
console.log('Resultado:', resultado);

// Verificación manual:
// Promedio = 12000
// Haber Individual = (12000 * 0.05) * 25 = 600 * 25 = 15000
// Coeficiente (Edad 60, Hombre) = 9.50969
// Pensión Anual = 15000 / 9.50969 = 1577.34
// Pensión Mensual = 1577.34 / 12 = 131.44
