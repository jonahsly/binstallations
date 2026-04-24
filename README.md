# Instally

Aplicación web educativa para contenidos de **Instalaciones Sanitarias**, con navegación por temas, secciones desplegables y apoyo visual/matemático (tablas, fórmulas y utilidades de cálculo).  
Educational web app for **Sanitary Installations** content, with topic-based navigation, expandable sections, and visual/math support (tables, formulas, and calculation utilities).

## Español

### Alcance actual

- Curso activo: `Instalaciones Sanitarias` (`/sanitaria`).
- Cursos en preparación: `Instalacion contra Incendio` (`/incendio`) y `Instalacion de Gas` (`/gas`).
- Navegación por temas (`tema1` a `tema6`) con contenido técnico modular en React.
- Componentes de apoyo para ecuaciones, tablas normativas e imágenes de referencia.
- Modo claro/oscuro persistido en `localStorage`.

### Stack

- React 19
- TypeScript
- React Router DOM 7
- KaTeX (renderizado de fórmulas)
- React Scripts 5 (Create React App)

### Requisitos

- Node.js LTS
- npm

### Ejecución local

```bash
npm install
npm start
```

La app quedará disponible en `http://localhost:3000`.

### Scripts disponibles

- `npm start`: inicia entorno de desarrollo.
- `npm run build`: genera build de producción.
- `npm test`: ejecuta tests (si existieran suites definidas).
- `npm run eject`: expone configuración interna de CRA.

Nota: los scripts `start` y `build` usan `NODE_OPTIONS=--openssl-legacy-provider` con sintaxis de Windows.

### Estructura del proyecto

```text
src/
  components/      UI reutilizable (navbar, sidebar, acordeones, modal)
  contents/        Contenido académico por tema (tema1..tema6)
  context/         Estado global de curso, tema e idioma
  layout/          Composición general de pantalla
  librarys/        Fórmulas, tablas, cálculos e imágenes de apoyo
  pages/           Páginas de entrada (Home, Loading)
  styles/          Estilos globales
```

### Flujo funcional

1. El router redirige `/` a `/sanitaria`.
2. `Home` sincroniza el curso según la ruta y controla comportamiento responsive del sidebar.
3. `LeftSideBar` selecciona el tema activo.
4. `MainContent` renderiza secciones del tema seleccionado (`src/contents/tema*.tsx`).
5. Los temas avanzados reutilizan utilidades de `src/librarys` para fórmulas y tablas.

### Mantenimiento de contenido

- Para agregar o editar material de un tema, modificar `src/contents/temaX.tsx`.
- Para nuevas fórmulas/tablas, crear o actualizar módulos en `src/librarys/`.
- Si se incorporan nuevos temas, registrar IDs y etiquetas en `src/components/LeftSideBar/LeftSideBar.tsx` y mapear contenido en `src/components/MainContent/MainContent.tsx`.

## English

### Current scope

- Active course: `Instalaciones Sanitarias` (`/sanitaria`).
- Courses in progress: `Instalacion contra Incendio` (`/incendio`) and `Instalacion de Gas` (`/gas`).
- Topic-based navigation (`tema1` to `tema6`) with modular technical content in React.
- Support components for equations, standards-based tables, and reference images.
- Light/dark mode persisted in `localStorage`.

### Stack

- React 19
- TypeScript
- React Router DOM 7
- KaTeX (formula rendering)
- React Scripts 5 (Create React App)

### Requirements

- Node.js LTS
- npm

### Local run

```bash
npm install
npm start
```

The app will be available at `http://localhost:3000`.

### Available scripts

- `npm start`: starts the development server.
- `npm run build`: creates a production build.
- `npm test`: runs tests (if test suites are defined).
- `npm run eject`: exposes CRA internal configuration.

Note: `start` and `build` scripts use `NODE_OPTIONS=--openssl-legacy-provider` with Windows syntax.

### Project structure

```text
src/
  components/      Reusable UI (navbar, sidebar, accordions, modal)
  contents/        Academic content by topic (tema1..tema6)
  context/         Global state for course, topic, and language
  layout/          Main screen composition
  librarys/        Formulas, tables, calculations, and support images
  pages/           Entry pages (Home, Loading)
  styles/          Global styles
```

### Functional flow

1. Router redirects `/` to `/sanitaria`.
2. `Home` syncs the selected course from route and controls responsive sidebar behavior.
3. `LeftSideBar` sets the active topic.
4. `MainContent` renders sections for the selected topic (`src/contents/tema*.tsx`).
5. Advanced topics reuse `src/librarys` utilities for formulas and tables.

### Content maintenance

- To add or edit topic material, update `src/contents/temaX.tsx`.
- For new formulas/tables, create or update modules in `src/librarys/`.
- If adding new topics, register IDs/labels in `src/components/LeftSideBar/LeftSideBar.tsx` and map content in `src/components/MainContent/MainContent.tsx`.

## Licencia / License

Este proyecto se distribuye bajo licencia MIT. Ver `LICENSE`.  
This project is distributed under the MIT License. See `LICENSE`.
