# GLOBAL_RULES.md — Constitución Técnica y Estratégica

## Ecosistema de 8 One Page Websites Ecuatorianas

**Versión:** 2.0 | **Vigencia:** 26/02/2026 | **Autor:** CTO & Full-Stack Architecture Office
**Stack:** Next.js 14+ · Vercel · n8n · Monetag/AdSense
**Objetivo Financiero:** **$82 USD/día** (~$2,460 USD/mes) | **Tráfico necesario:** ~30,000 pageviews/día

> [!CAUTION]
> Este documento se basa en la legislación laboral y tributaria ecuatoriana vigente al **26/02/2026**. Debe ser auditado **antes del 1 de enero de cada año** para reflejar actualizaciones al SBU, tablas del SRI y reformas al Código del Trabajo.

---

## 1. Filosofía de Desarrollo

### 1.1 Principio "One Thing Well"

Cada sitio existe para resolver **una sola necesidad** de forma impecable. Sin acumulación de features no relacionadas.

| Principio | Regla | Ejemplo |
|---|---|---|
| Single Responsibility | 1 dominio = 1 herramienta | `calculatusliquidaciones.ec` solo calcula haberes |
| Feature Freeze v1 | Sin features nuevas hasta Core al 100% | No agregar blog hasta tests completos |
| Composición | Reutilizar componentes UI, nunca duplicar lógica | `<InputSalario />` compartido vía paquete |

### 1.2 Fase de Simulación (v1.0)

Antes de integrar APIs o webhooks, completar una v1.0 funcional:

1. **UI Pixel-Perfect:** 100% terminada, responsive Mobile-First, animaciones finales.
2. **Datos Hardcodeados:** Cálculos con datos estáticos embebidos (tablas como constantes JSON).
3. **Validación UX:** Formularios con validación client-side, mensajes en español ecuatoriano.
4. **Lighthouse ≥ 90:** Performance, Accessibility, Best Practices y SEO.

> [!IMPORTANT]
> La v1.0 NUNCA se despliega con placeholders "Coming Soon" ni inputs deshabilitados.

### 1.3 Mobile-First Estricto

Breakpoints: `320→375→768→1024→1440px`. Touch targets: ≥`48×48px` (WCAG 2.2). Inputs numéricos: `inputMode="decimal"`. Sin hover-only. Fuentes: `system-ui`. Blog siempre en subdominio `blog.dominio.ec` como proyecto independiente.

### 1.4 Estructura de Proyecto

```
proyecto/
├── app/                    # Lógica (Next.js App Router)
│   ├── page.tsx            # One Page principal
│   ├── components/         # Componentes UI
│   ├── lib/                # Lógica de cálculo pura
│   │   ├── formulas.ts     # Fórmulas legales
│   │   └── validators.ts   # Validadores
│   └── constants/          # Datos legales vigentes
├── public/
│   ├── ads/                # Scripts monetización (lazy)
│   └── og/                 # Imágenes Open Graph
├── n8n/                    # Definiciones de workflows
└── tests/                  # Tests unitarios y E2E
```

---

## 2. Los 8 Proyectos — Legislación Vigente 26/02/2026

> [!WARNING]
> Footer obligatorio en TODOS los sitios: *"Esta herramienta es informativa y no sustituye asesoramiento profesional de un abogado laboralista o contador certificado. Legislación vigente al [FECHA_DINÁMICA]."*

### 2.1 misdecimos.ec — Calculadora de Décimos ⭐⭐⭐⭐⭐

**Tráfico estacional alto:** noviembre-diciembre y marzo-abril.

| Concepto | Fórmula | Base Legal |
|---|---|---|
| **Décimo Tercero** | `Σ(Ingresos 12 Meses) / 12` | Art. 111 CT |
| **Décimo Cuarto** | `1 SBU vigente` | Art. 113 CT |
| **Proporcional 13ro** | `(IngresoTotal × DíasTrabajados) / 360 / 12` | Art. 111 CT |
| **Proporcional 14to** | `(SBU × DíasTrabajados) / 360` | Art. 113 CT |

- Período 13ro: 1 dic anterior → 30 nov actual. Pago: **24 de diciembre**.
- 14to Sierra/Oriente: 1 ago → 31 jul (pago **15 agosto**). Costa/Galápagos: 1 mar → 28/29 feb (pago **15 marzo**).
- SBU 2026: `$VARIABLE_SBU_2026` actualizable vía webhook n8n.
- Ingresos gravables: sueldo base + horas extras + comisiones. NO gravables: viáticos, subsistencias.

### 2.2 validacedula.ec — Validador Cédula/RUC ⭐⭐⭐⭐

Algoritmo Módulo 10: verificar 10 dígitos, provincia (01-24 o 30), tercer dígito (0-5 para persona natural), coeficientes `[2,1,2,1,2,1,2,1,2]`, si resultado >9 restar 9, dígito verificador = `(10 - suma%10) % 10`.

| Tipo RUC | 3er Dígito | Longitud | Módulo |
|---|---|---|---|
| Persona Natural | 0-5 | 13 | Módulo 10 |
| Sociedad Privada | 9 | 13 | Módulo 11 (coefs: 4.3.2.7.6.5.4.3.2) |
| Sector Público | 6 | 13 | Módulo 11 (coefs: 3.2.7.6.5.4.3.2) |

### 2.3 calculaimpuestos.ec — Impuesto a la Renta SRI ⭐⭐⭐⭐⭐

**Alto tráfico en marzo-abril** (período de declaración).

| Fracción Básica (USD) | Exceso Hasta | Imp. F. Básica | % Excedente |
|---|---|---|---|
| 0 | 11,902 | 0 | 0% |
| 11,902 | 15,159 | 0 | 5% |
| 15,159 | 19,682 | 163 | 10% |
| 19,682 | 26,031 | 615 | 12% |
| 26,031 | 34,255 | 1,377 | 15% |
| 34,255 | 45,407 | 2,611 | 20% |
| 45,407 | 60,450 | 4,841 | 25% |
| 60,450 | 80,605 | 8,602 | 30% |
| 80,605 | En adelante | 14,648 | 37% |

Rebaja por cargas familiares: 0→10%, 1→12.5%, 2→15%, 3→17.5%, 4→20%, 5+→22.5%.
Fórmula: `ImpuestoBase + ((BaseImponible - FracciónBásica) × %Excedente) - Rebaja`.
Límite gastos personales: hasta 7 canastas básicas familiares (`$VARIABLE_CANASTA_BASICA_2026`).

### 2.4 calculatusliquidaciones.ec — Liquidador Laboral ⭐⭐⭐⭐⭐

| Concepto | Fórmula | Art. CT |
|---|---|---|
| Décimos proporcionales | Ver §2.1 | 111, 113 |
| Vacaciones no gozadas | `Remuneración / 24 × AñosTrabajados` | 71 |
| Fondos de Reserva | `Remuneración / 12 × MesesPendientes` | 196 |
| Desahucio | `25% × Remuneración × AñosTrabajados` | 185 |
| Despido Intempestivo ≤3 años | 3 meses de remuneración | 188 |
| Despido Intempestivo >3 años | 1 mes/año (máximo 25 meses) | 188 |

> [!WARNING]
> El despido intempestivo durante el período de prueba (90 días) NO genera indemnización.

### 2.5 mijubilacion.ec — Simulador Jubilación ⭐⭐⭐

Jubilación Patronal (Art. 216 CT): mínimo 25 años con el mismo empleador, promedio 5 mejores años de remuneración. IESS: mínimo 360 imposiciones, promedio 60 mejores sueldos, pensión mínima = SBU vigente.

### 2.6 calculamultas.ec — Mora SRI + Multas Tránsito ⭐⭐⭐⭐

Mora SRI (Art. 21 C. Tributario): `Obligación × TasaBCE×1.1 × (DíasMora / 90)` — interés simple.
Multas ANT: Leve 1ra 5% SBU, 2da 10%, 3ra 15%. Grave 1ra 30%, 2da 40%, 3ra 50%. Muy grave 100% SBU.

### 2.7 facturacionrimpe.ec — Facturación RIMPE ⭐⭐⭐⭐

Negocio Popular: hasta $20,000 (cuota fija desde $3). Emprendedor: $20K-$300K (tabla progresiva 1-2%). IVA 15% (2026). Retención IR Emprendedor: 1%. Exportación a PDF con advertencia "no válida ante SRI".

### 2.8 conversordetierras.ec — Conversor de Tierras ⭐⭐⭐

Cuadra Ecuatoriana=7,056m² (84×84m), Hectárea=10,000m², Solar Guayaquil=560m², Fanegada Sierra=6,400m², Manzana=10,000m², Yugada=3,200m².

---

## 3. Configuración Técnica y Monetización

### 3.1 Arquitectura n8n — Backend Dinámico

Webhooks con autenticación `X-API-Key` (variables de entorno Vercel, NUNCA hardcodeadas):

| Endpoint | Dato | Frecuencia |
|---|---|---|
| `/webhook/sbu-vigente` | SBU 2026 + fechas de pago | Anual (1 de enero) |
| `/webhook/tabla-ir-2026` | Tabla IR completa JSON | Anual (publicación SRI) |
| `/webhook/tasa-bce` | Tasa trimestral BCE | Trimestral |
| `/webhook/canasta-basica` | Valor canasta familiar INEC | Mensual |
| `/webhook/tabla-rimpe` | Tabla RIMPE vigente | Anual |
| `/webhook/multas-ant` | Tabla multas ANT | Anual |

**Fallback:** Si n8n falla, usar constantes locales hardcodeadas como respaldo.

### 3.2 Monetización — Monetag + AdSense

Distribución: 60% Monetag (popunder/push) + 40% AdSense (display). RPM esperado LATAM: $2.50-$4.00.
Ads con **lazy loading** vía IntersectionObserver + **placeholders CSS** (CLS=0).

> [!CAUTION]
> Máximo 3 units display/página. NUNCA ads sobre inputs del formulario. NUNCA auto-reproducir video ads. Contenido principal visible sin scroll en mobile.

### 3.3 Debug Protocol

Logging con niveles `INFO|WARN|ERROR|CALC`. Envío a n8n vía webhook fire-and-forget. Variable: `NEXT_PUBLIC_DEBUG=true`.

---

## 4. SEO Local Ecuatoriano

- Blog en subdominio (`blog.dominio.ec`) con Ghost/WP Headless para cada sitio.
- Schema JSON-LD obligatorio: `WebApplication`, `HowTo`, `FAQPage`, `Organization`.
- Keywords long-tail Ecuador (ej: "cómo calcular décimo tercero 2026", "tabla impuesto renta 2026 ecuador").
- Canonical URLs + meta OG + `robots.txt` + `sitemap.xml` en todos los sitios.
- Calendario: Enero=actualizar constantes, Mar-Abr=push declaración IR, Jul-Ago=décimo 14to Sierra, Nov-Dic=décimo 13ro.

---

## 5. Despliegue y Control de Calidad

Pipeline: `git push → Build → Lint → TypeCheck → Tests → Lighthouse CI → Deploy`.

| Gate | Criterio |
|---|---|
| Lint | 0 errores ESLint |
| Types | 0 errores TypeScript strict |
| Tests | 100% pass, ≥80% coverage en `lib/` |
| Lighthouse | Performance ≥90, SEO ≥95 |
| Bundle | First Load JS ≤100kB |

Variables de entorno: `WEBHOOK_SECRET`, `NEXT_PUBLIC_DEBUG`, `NEXT_PUBLIC_LOG_WEBHOOK`, `NEXT_PUBLIC_MONETAG_ID`, `NEXT_PUBLIC_ADSENSE_ID`, `NEXT_PUBLIC_GA_ID`.

---

## 6. Glosario

| Término | Definición |
|---|---|
| **SBU** | Salario Básico Unificado — mínimo legal mensual |
| **SRI** | Servicio de Rentas Internas — autoridad tributaria |
| **IESS** | Instituto Ecuatoriano de Seguridad Social |
| **ANT** | Agencia Nacional de Tránsito |
| **RIMPE** | Régimen Simplificado para Emprendedores y Negocios Populares |
| **CT** | Código del Trabajo del Ecuador |
| **BCE** | Banco Central del Ecuador |
| **INEC** | Instituto Nacional de Estadística y Censos |

---

## 7. Protocolos n8n & AI Agents

> [!IMPORTANT]
> Reglas de cumplimiento **ESTRICTO** para cualquier agente AI o desarrollador que interactúe con n8n MCP.

### 7.1 Herramientas MCP

- **Descubrimiento:** Siempre `get_node({detail: "standard"})` (1-2K tokens). Reservar `"full"` solo para debugging complejo.
- **Formatos:** Prefijo corto `nodes-base.*` para search/validate. Completo `n8n-nodes-base.*` para crear/editar workflows.
- **Validación:** Perfil `runtime` antes de deploy. Ciclo: `validate_node` → fix → validate (2-3 iteraciones promedio).
- **Updates:** Incluir parámetro `intent` en toda actualización. Usar `branch: "true"` sobre índices manuales.

> [!WARNING]
> Cualquier update ejecuta **Auto-Sanitización** en TODOS los nodos. No corregir manualmente problemas de estructura de operadores; el motor los repara automáticamente.

### 7.2 Configuración de Nodos

1. **Progressive Disclosure:** Config mínima → expandir según errores de validación.
2. **Dependencias:** Campos condicionales (ej: `body` solo si `sendBody=true`). Usar `search_properties` ante dudas.
3. **Contexto:** Nunca asumir que configs son transferibles entre operaciones del mismo nodo.

### 7.3 Código Custom: JavaScript vs Python

> [!CAUTION]
> **REGLA 95/5:** JavaScript para el 95% de los casos. Python solo para estadísticas o manipulación de datos específica.

| Regla Python | Descripción |
|---|---|
| ⛔ Sin imports externos | Solo Standard Library (`json`, `datetime`, `re`, `math`, `statistics`) |
| ⚠️ Retorno obligatorio | `[{"json": {...}}]` — siempre lista con key `"json"` |
| ⚠️ Webhooks | Datos bajo `_json["body"]`, nunca `_json` directo |
| 💡 Modo default | Run Once for All Items con `_input.all()` |
| 💡 Acceso seguro | Siempre `.get()` para evitar `KeyError` |

---

**Versión 2.0 — Febrero 2026.** Fuente única de verdad para decisiones técnicas, legales y estratégicas del ecosistema de One Page Websites ecuatorianas.
