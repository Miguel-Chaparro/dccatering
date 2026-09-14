# Diego Chaparro Catering — Web Landing Page

Sitio web y landing page de alta gama para **Diego Chaparro Catering (DC Catering)**, desarrollado con **Vue 3**, **Vite**, **TypeScript** y **Tailwind CSS**, optimizado y estructurado para despliegue en **Azure Static Web Apps (SWA)**.

---

## 🏛️ Arquitectura del Proyecto

El proyecto sigue una arquitectura modular y desacoplada basada en el principio de responsabilidad única y buenas prácticas de mantenibilidad:

```
dccatering/
├── .github/
│   └── workflows/
│       └── azure-static-web-apps.yml   # Pipeline CI/CD automático para Azure SWA
├── public/
│   └── robots.txt                      # Control de indexación SEO
├── src/
│   ├── assets/
│   │   └── styles/
│   │       └── main.css                # Directivas Tailwind, fuentes y utilidades visuales
│   ├── components/
│   │   ├── common/                     # Componentes atómicos reutilizables
│   │   ├── layout/                     # Estructura base del sitio
│   │   │   ├── Navbar.vue              # Barra de navegación 'glass-nav' con menú móvil reactivo
│   │   │   └── Footer.vue              # Pie de página corporativo de autor
│   │   └── landing/                    # Secciones modulares de la landing page
│   │       ├── HeroSection.vue         # Encabezado principal, propuesta de valor y CTA
│   │       ├── StorySection.vue        # 01. Nuestra historia, chef y 5 principios de cocina
│   │       ├── ServicesSection.vue     # 03-07. Portafolio de servicios gastronómicos y formatos
│   │       ├── ProcessSection.vue      # 08. Metodología de 5 etapas
│   │       └── QuoteSection.vue        # 10. Canales de contacto y formulario reactivo de cotización
│   ├── constants/
│   │   └── cateringData.ts             # Datos centralizados (textos, enlaces, imágenes, teléfono)
│   ├── types/
│   │   └── catering.ts                 # Definiciones e interfaces de TypeScript
│   ├── views/
│   │   └── LandingView.vue             # Vista contenedora principal
│   ├── App.vue                         # Componente raíz
│   ├── main.ts                         # Punto de entrada de la aplicación Vue
│   └── vite-env.d.ts                   # Declaración de tipos para SFC Vue
├── index.html                          # HTML base con fuentes Cormorant Garamond y Plus Jakarta Sans
├── staticwebapp.config.json            # Configuración oficial de rutas, headers y SPA para Azure SWA
├── tailwind.config.js                  # Paleta de colores personalizada (burgundy, olive, gold, etc.)
├── postcss.config.js                   # Configuración PostCSS
├── tsconfig.json                       # Configuración de TypeScript con alias '@/...'
├── vite.config.ts                      # Configuración del empaquetador Vite
└── package.json                        # Scripts y dependencias
```

---

## ✨ Características y Buenas Prácticas

1. **Mantenibilidad Sin Tocar Código de UI:**
   - Toda la información dinámica (textos del Chef, teléfono, correo, imágenes de platos y servicios) se encuentra centralizada en [`src/constants/cateringData.ts`](src/constants/cateringData.ts). Para actualizar un precio, teléfono o imagen, solo se edita ese archivo.
2. **Componentes Atómicos y Desacoplados:**
   - Cada sección (`Hero`, `Story`, `Services`, `Process`, `Quote`) es un Single File Component (`.vue`) independiente, facilitando agregar nuevas secciones, pruebas unitarias o cambiar el orden.
3. **Formulario Reactivo:**
   - `QuoteSection.vue` maneja el estado con `reactive()` y validación nativa, simulando el envío y proporcionando retroalimentación visual al usuario con temporizador automático.
4. **Diseño Editorial de Lujo & Tipografía:**
   - Paleta personalizada: Burdeos (`burgundy`), Oliva (`olive`), Dorado (`gold`), Pergamino (`parchment`) y Carbón (`charcoal`).
   - Fuentes tipográficas: `Cormorant Garamond` (editorial serif) y `Plus Jakarta Sans` (sans-serif moderna y legible).
5. **Listo para Azure Static Web Apps:**
   - Archivo [`staticwebapp.config.json`](staticwebapp.config.json) con reescritura de rutas fallback para SPA, cabeceras de seguridad (`X-Frame-Options`, `X-Content-Type-Options`) y compresión de assets.
   - Workflow en [`.github/workflows/azure-static-web-apps.yml`](.github/workflows/azure-static-web-apps.yml) para despliegue automatizado con GitHub Actions.

---

## 🚀 Comandos de Desarrollo Local

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo con Hot Module Replacement (HMR)
npm run dev

# 3. Validar tipos de TypeScript
npm run typecheck

# 4. Compilar para producción (genera la carpeta dist/)
npm run build

# 5. Previsualizar la compilación de producción localmente
npm run preview
```

---

## ☁️ Despliegue en Azure Static Web Apps

### Método 1: Despliegue Automático con GitHub (Recomendado)
1. Sube este repositorio a **GitHub**.
2. En el portal de **Azure**, crea un recurso **Static Web Apps**.
3. Selecciona tu repositorio de GitHub y rama (`main`).
4. Configura los presets de construcción:
   - **App location:** `/`
   - **Api location:** *(dejar vacío o configurar Azure Functions si se agregan en el futuro)*
   - **Output location:** `dist`
5. Azure creará automáticamente el secret `AZURE_STATIC_WEB_APPS_API_TOKEN` en tu repositorio y el workflow desplegará la aplicación en cada `git push`.

### Método 2: Despliegue mediante Azure SWA CLI
Si prefieres desplegar directamente desde la terminal:
```bash
# Instalar Azure SWA CLI globalmente
npm install -g @azure/static-web-apps-cli

# Compilar el proyecto
npm run build

# Desplegar a Azure SWA
swa deploy dist --env production
```
