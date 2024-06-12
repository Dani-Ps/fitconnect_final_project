En este repositorio centralizaremos toda la información relativa a los **Proyectos de Desarrollo de Aplicaciones Web del I.E.S Alixar**.
Al continuación encontraremos los **apellidos y nombre** del alumno/a junto al **título de su proyecto**. El enlace nos dará acceso al repositorio del proyecto (no a la página GitHub del usuario).

En este repositorio se debe incluir la documentación especificada en [Requerimientos y criterios a seguir en el desarrollo de los proyectos](https://github.com/iesalixar/plantilla_proyecto_iesalixar/wiki/a.---Criterios-comunes-para-todos-los-proyectos), así como las indicaciones que el tutor haya podido ir a realizando a lo largo del desarrollo del mismo.

El desarrollo de toda Aplicación Web requiere seguir un [proceso estructurado](https://github.com/iesalixar/plantilla_proyecto_iesalixar/wiki/w1.--PROCESO-ESTRUCTURADO-PARA-DESARROLLO-DE-APLICACIONES-WEB), este de contenido de la wiki te puede ayudar.

---

**Los párrafos anteriores son informativos y no deben aparecer en el reposotirio de los alumnos.**

---

# FitConnet

#### Curso Escolar 2023-2024

#### Autor : [Daniel Perez Serrano.](https://github.com/Dani-Ps)

#### Tutor : [Antonio Gabriel González Casado.](https://github.com/antonio-gabriel-gonzalez-casado)

#### Fecha de Inicio: 15-03-2024.

#### Fecha de Finalización: 12-06-2024.

## Breve descripción del proyecto

FitConnet es una aplicación cuyo fin es el ser de una red social que impacte positivamente en la salud de las personas y por tanto en su vida. En ella cada usuario podrá compartir sus entrenamientos, encontrar nuevos amigos incluso invitar a sus entrenos a otros usuarios con el fin de crear una comunidad enfocada en el deporte que junta se retroalimente en este sentido.

## Definición del objetivo de la aplicación

- **¿Qué va a hacer la aplicación?**

  - La aplicación permitirá el registro de usuarios mayores de 18 años, los cuales tendrán su perfil con amigos y entrenamientos, tanto los creados por ellos como los en los que han participado. Además, habrá una página de feed donde podrán ver los últimos entrenamientos que han subido sus amigos.

- **¿Cuál es su atractivo principal?**

  - El eslogan de mi aplicación es "Let's thrive", que se podría traducir como "¡Prosperemos!". El atractivo principal radica en proporcionar una red social alejada del estándar, enfocada en usuarios que desean iniciar actividades deportivas pero no encuentran la suficiente motivación para hacerlo solos. Aquí es donde cobra sentido la aplicación, al construir una comunidad donde compartir entrenamientos facilita el establecimiento de una rutina.

- **¿Qué problema concreto va a resolver?**

  - La aplicación aborda el problema de la falta de una red social similar a Instagram, pero enfocada exclusivamente en compartir entrenamientos. Mientras que en redes sociales como Instagram se pueden realizar acciones similares, también hay una multitud de otros temas y personas con distintos intereses. Con FitConnect, eliminamos ese 'ruido' generado por otras publicaciones de personas con otros intereses y nos centramos en mejorar nuestra rutina de ejercicio.

- **¿Qué necesidad va a cubrir?**
  - La aplicación cubrirá la necesidad de una red social especializada en compartir entrenamientos. Aunque existen algunas aplicaciones para deportes más concretos, estas carecen del componente de construir una comunidad de amigos/seguidores con quienes compartir entrenamientos.

# Estructura del Proyecto

## - **Carpeta src-api**

Esta carpteta contiene el codigo de la APIREST de Fitconnet, aqui se detalla el stack tecnológico usado:

## Stack Tecnológico

El proyecto utiliza las siguientes tecnologías y dependencias:

### Frameworks y Librerías Principales

- **Spring Boot 3.2.3**

- `spring-boot-starter-data-jpa`: Para la persistencia de datos usando JPA.
- `spring-boot-starter-security`: Para la seguridad de la aplicación.
- `spring-boot-starter-web`: Para la creación de servicios web RESTful.
- `spring-boot-devtools`: Herramientas de desarrollo para mejorar la productividad (opcional).

- **Java 21**: Versión del JDK utilizada.

### Base de Datos

- **MySQL**
- `mysql-connector-java`: Conector JDBC para MySQL, versión 8.0.23.

### Seguridad y Autenticación

- **JSON Web Token (JWT)**
- `jjwt-api`, `jjwt-impl`, `jjwt-jackson`: Librerías para manejar JWT.

### Utilidades y Otros

- **Apache Commons Lang**
- `commons-lang3`: Utilidades adicionales para trabajar con el lenguaje Java.
- **Lombok**

- `lombok`: Herramienta para reducir el código boilerplate (opcional).

  **Java Faker**

  - `javafaker`: Generador de datos falsos para pruebas, versión 1.0.2.

### Validación

- **Hibernate Validator**
- `hibernate-validator`: Implementación de la especificación de Bean Validation, versión 6.2.0.Final.
- `jakarta.el`: Dependencia necesaria para `hibernate-validator`, versión 3.0.3.

### Documentación de la API

- **SpringDoc OpenAPI**

- `springdoc-openapi-starter-webmvc-ui`: Para generar la documentación de la API utilizando OpenAPI, versión 2.5.0.

- **Springfox Swagger**
- `springfox-swagger-ui`: Interfaz de usuario de Swagger para la documentación de la API, versión 3.0.0.

### Dependencias de Pruebas

- **Spring Boot Test**
- `spring-boot-starter-test`: Herramientas y dependencias para pruebas de Spring Boot.
- `spring-security-test`: Herramientas para pruebas de seguridad en Spring.

- **Podam**
- `podam`: Generador de datos de prueba, versión 8.0.1.RELEASE.

### Plugins

- **Spring Boot Maven Plugin**

- `spring-boot-maven-plugin`: Plugin para empaquetar la aplicación Spring Boot.

## **Estrutura de paquetes**

```
 FitConnectBackendApplication.java
📁 config
    📄 DataInitializer.java
    📁 cors
        📄 CorsConfig.java
    📁 security
        📄 JwtAuthenticationFilter.java
        📄 PasswordEncoderConfig.java
        📄 SecurityFilterChainConfig.java
📁 controller
    📁 activity
        📄 ActivityController.java
    📁 auth
        📄 AuthenticationController.java
    📁 notification
        📄 NotificationController.java
    📁 user
        📄 AdminController.java
        📄 UserController.java
📁 dto
    📁 entities
        📄 ActivityDTO.java
        📄 NotificationDTO.java
        📄 UserDTO.java
    📁 requets
        📄 SignUp.java
        📄 Signin.java
    📁 response
        📄 ErrorDetailsDTO.java
        📄 JwtAuthenticationDTO.java
📁 enums
    📄 Role.java
📁 error
    📄 GlobalExceptionHandler.java
    📁 exception
        📁 activity
            📄 ActivityNotFoundException.java
        📁 notifications
            📄 NotificationCreationException.java
            📄 NotificationNotFoundException.java
        📁 user
            📄 UserNotFoundException.java
📁 persitence
    📁 model
        📄 Activity.java
        📄 Notification.java
        📄 User.java
    📁 repository
        📄 ActivityRepository.java
        📄 NotificationRepository.java
        📄 UserRepository.java
📁 service
    📁 implementations
        📁 entity
            📄 ActivityServiceImpl.java
            📄 NotificationServiceImpl.java
            📄 ProcessingResponseImpl.java
            📄 UserServiceImpl.java
        📁 security
            📄 AuthenticationServiceImpl.java
            📄 JwtServiceImpl.java
    📁 interfaces
        📁 entity
            📄 ActivityServiceI.java
            📄 NotificationServiceI.java
            📄 ProcessingResponseI.java
            📄 UserServiceI.java
        📁 security
            📄 AuthenticationServiceI.java
            📄 JwtServiceI.java
📁 utils
    📄 Constants.java
    📄 Mappers.java
```

### **Descripción**

La estructura de paquetes de la aplicación `fitConnect-backend` está organizada de la siguiente manera:

#### 1. `config`

- Contiene configuraciones generales de la aplicación.
  - `DataInitializer.java`: Inicializa datos en la base de datos al iniciar la aplicación.
  - **`cors`**: Configuraciones para manejar solicitudes CORS.
    - `CorsConfig.java`: Configuración para manejar solicitudes CORS.

#### 2. `controller`

- Contiene los controladores que manejan las solicitudes HTTP entrantes.
  - **`activity`**: Controladores para actividades.
    - `ActivityController.java`: Maneja solicitudes relacionadas con actividades.
  - **`auth`**: Controladores para autenticación.
    - `AuthenticationController.java`: Maneja solicitudes de autenticación.
  - **`notification`**: Controladores para notificaciones.
    - `NotificationController.java`: Maneja solicitudes relacionadas con notificaciones.
  - **`user`**: Controladores para usuarios.
    - `AdminController.java`: Maneja solicitudes administrativas.
    - `UserController.java`: Maneja solicitudes relacionadas con usuarios.

#### 3. `dto`

- Contiene objetos de transferencia de datos (DTO).
  - **`entities`**: DTO para entidades del sistema.
    - `ActivityDTO.java`: DTO para actividades.
    - `NotificationDTO.java`: DTO para notificaciones.
    - `UserDTO.java`: DTO para usuarios.
  - **`requests`**: DTO para solicitudes.
    - `SignUp.java`: DTO para solicitudes de registro.
    - `Signin.java`: DTO para solicitudes de inicio de sesión.
  - **`response`**: DTO para respuestas.
    - `ErrorDetailsDTO.java`: DTO para detalles de errores.
    - `JwtAuthenticationDTO.java`: DTO para autenticación JWT.

#### 4. `enums`

- Contiene enumeraciones utilizadas en la aplicación.
  - `Role.java`: Enum para roles de usuario.

#### 5. `error`

- Maneja errores y excepciones globales.
  - `GlobalExceptionHandler.java`: Controlador global de excepciones.
  - **`exception`**: Excepciones específicas.
    - **`activity`**: Excepciones relacionadas con actividades.
      - `ActivityNotFoundException.java`: Excepción para actividades no encontradas.
    - **`notifications`**: Excepciones relacionadas con notificaciones.
      - `NotificationCreationException.java`: Excepción para errores en la creación de notificaciones.
      - `NotificationNotFoundException.java`: Excepción para notificaciones no encontradas.
    - **`user`**: Excepciones relacionadas con usuarios.
      - `UserNotFoundException.java`: Excepción para usuarios no encontrados.

#### 6. `persistence`

- Contiene las clases de modelo y repositorios para la persistencia de datos.
  - **`model`**: Clases de modelo.
    - `Activity.java`: Modelo de datos para actividades.
    - `Notification.java`: Modelo de datos para notificaciones.
    - `User.java`: Modelo de datos para usuarios.
  - **`repository`**: Repositorios para acceso a datos.
    - `ActivityRepository.java`: Repositorio para actividades.
    - `NotificationRepository.java`: Repositorio para notificaciones.
    - `UserRepository.java`: Repositorio para usuarios.

#### 7. `service`

- Contiene implementaciones e interfaces de servicios.
  - **`implementations`**: Implementaciones de servicios.
    - **`entity`**: Implementaciones de servicios para entidades.
      - `ActivityServiceImpl.java`: Implementación del servicio de actividades.
      - `NotificationServiceImpl.java`: Implementación del servicio de notificaciones.
      - `ProcessingResponseImpl.java`: Implementación del servicio de procesamiento de respuestas.
      - `UserServiceImpl.java`: Implementación del servicio de usuarios.
    - **`security`**: Implementaciones de servicios de seguridad.
      - `AuthenticationServiceImpl.java`: Implementación del servicio de autenticación.
      - `JwtServiceImpl.java`: Implementación del servicio JWT.
  - **`interfaces`**: Interfaces de servicios.
    - **`entity`**: Interfaces de servicios para entidades.
      - `ActivityServiceI.java`: Interfaz del servicio de actividades.
      - `NotificationServiceI.java`: Interfaz del servicio de notificaciones.
      - `ProcessingResponseI.java`: Interfaz del servicio de procesamiento de respuestas.
      - `UserServiceI.java`: Interfaz del servicio de usuarios.
    - **`security`**: Interfaces de servicios de seguridad.
      - `AuthenticationServiceI.java`: Interfaz del servicio de autenticación.
      - `JwtServiceI.java`: Interfaz del servicio JWT.

#### 8. `utils`

- Contiene utilidades y clases de apoyo.
  - `Constants.java`: Constantes utilizadas en la aplicación.
  - `Mappers.java`: Clases para mapear entre entidades y DTOs.

## - **Carpeta src-frontend**

Esta carpteta contiene el código de la React App de Fitconnet, aqui se detalla el stack tecnológico usado:

## Stack Tecnológico del Proyecto

El proyecto utiliza las siguientes tecnologías y dependencias:

### Frameworks y Librerías Principales

- **React 18.3.1**: Biblioteca principal para construir interfaces de usuario.
- **ReactDOM 18.3.1**: Paquete para manipulación del DOM en React.

### Librerías de Estilo y Animación

- **@fontsource/roboto 5.0.13**: Fuente tipográfica Roboto.
- **framer-motion 11.2.10**: Librería para animaciones.
- **sass 1.77.1**: Preprocesador CSS.

### Manejo de Rutas

- **react-router-dom 6.23.1**: Librería para manejar la navegación y las rutas en React.

### Manejo de Estado y Propiedades

- **prop-types 15.8.1**: Librería para validación de tipos de propiedades en componentes de React.

### Solicitudes HTTP

- **axios 1.7.2**: Cliente HTTP para realizar solicitudes a servidores.

### Componentes y Utilidades Adicionales

- **react-md 5.1.6**: Componentes Material Design para React.
- **react-modal 3.16.1**: Componente para crear modales accesibles.
- **react-tooltip 5.26.4**: Componente para mostrar tooltips.

### Testing

- **@testing-library/react 13.4.0**: Utilidades para probar componentes de React.
- **@testing-library/jest-dom 5.17.0**: Extensiones de matchers de Jest para trabajar con el DOM.
- **@testing-library/user-event 13.5.0**: Simula eventos de usuario para pruebas.
- **jest**: Framework de pruebas utilizado por Create React App.

### Herramientas de Desarrollo

- **react-scripts 5.0.1**: Scripts y configuración para Create React App.
- **@babel/plugin-transform-private-property-in-object 7.24.6**: Plugin de Babel para transformar propiedades privadas en objetos.

### Monitoreo de Rendimiento

- **web-vitals 2.1.4**: Biblioteca para medir métricas de rendimiento web.

### Scripts de NPM

- `start`: Inicia la aplicación en modo de desarrollo.
- `build`: Construye la aplicación para producción.
- `test`: Ejecuta las pruebas.
- `eject`: Expone la configuración de Create React App para personalización.

### Configuración de ESLint

- **react-app**: Extiende la configuración por defecto de Create React App.
- **react-app/jest**: Extiende la configuración de ESLint para Jest.

### Configuración de Browserslist

- **production**: Define los navegadores soportados en producción.
- **development**: Define los navegadores soportados en desarrollo.

Este stack tecnológico proporciona una base sólida para desarrollar, estilizar, probar y desplegar una aplicación React moderna con una variedad de herramientas para mejorar la experiencia de desarrollo y el rendimiento de la aplicación.

## **Estrutura de carpetas**

```
📄 App.js
📄 App.test.js
📁 _css
    📄 activityFormStyle.css
    📄 activityFormStyle.css.map
    📄 app.css
    📄 app.css.map
    📄 main.css
    📄 main.css.map
    📄 publicationStyle.css
    📄 publicationStyle.css.map
    📄 style.css
    📄 style.css.map
    📄 styles.module.css
    📄 styles.module.css.map
📄 app.scss
📁 assest
    📁 examples
        📄 avatar.png
        📄 pexels-anush-gorak-1431282.jpg
        📄 pexels-heart-rules-711187.jpg
        📄 pexels-martine-savard-34669.jpg
        📄 pexels-pixabay-159515.jpg
        📄 pexels-pixabay-358042.jpg
        📄 pexels-pixabay-54326.jpg
        📄 portada.jpg
    📁 icon
        📄 adminSidebarIcons-clear.jsx
        📄 adminSidebarIcons-dark.jsx
        📄 logo-clear.jsx
        📄 logo-dark.jsx
        📄 profileIcon.jsx
        📄 publicationOptions.jsx
        📄 sidebarIcons-clear.jsx
        📄 sidebarIcons-dark.jsx
        📄 style.scss
        📄 themeIcons.jsx
📁 components
    📁 common
        📁 activity
            📄 activityPost.jsx
            📁 components
                📁 dotsIcon
                    📄 DotsComponent.jsx
                    📄 style.scss
                📁 icon
                    📄 activityIcon-clear.jsx
                    📄 activityIcon-dark.jsx
                📁 patchActivity
                    📁 components
                        📁 icons
                            📄 addImageIcon.jsx
                            📄 closeIcon.jsx
                            📄 style.scss
                        📁 timeInput
                            📄 style.scss
                            📄 timeInput.jsx
                    📄 patchActivityCard.jsx
                    📄 style.scss
                📁 profilePicture
                    📄 profilePicture.jsx
                    📄 style.scss
            📄 style.scss
        📁 addActivity
            📄 addActivityCard.jsx
            📁 components
                📁 icons
                    📄 addImageIcon.jsx
                    📄 closeIcon.jsx
                    📄 style.scss
                📁 timeInput
                    📄 style.scss
                    📄 timeInput.jsx
            📄 style.scss
        📁 buttons
            📄 buttons.jsx
            📄 style.scss
        📁 imageUpload
            📄 imageUpload.jsx
        📁 profile
            📄 activityDetails.jsx
            📄 activityGrid.jsx
            📄 nav.jsx
            📄 profileHeader.jsx
            📄 style.scss
        📁 search
            📄 searchModal.jsx
            📄 style.scss
        📁 table
            📄 activityTable.jsx
            📁 components
                📁 modal
                    📄 deleteModal.jsx
                    📄 editModal.jsx
                    📄 style.scss
            📄 style.scss
            📄 userTable.jsx
    📁 layout
        📁 footer
            📄 footer.jsx
            📄 style.scss
        📁 header
            📄 header.jsx
            📄 style.scss
        📁 navbar
            📁 components
                📁 buttons
                    📄 buttons.jsx
                    📄 style.scss
                📁 profilePicture
                    📄 profilePicture.jsx
                    📄 style.scss
            📄 navbar.jsx
            📄 style.scss
        📁 skeleton
            📄 skeleton.jsx
📁 contexts
    📄 AuthProvider.js
    📄 ModalProvider.js
    📄 ScreenProvider.js
    📄 ThemeProvider.js
📁 hooks
    📄 useAuth.js
    📄 useModal.js
    📄 useScreen.js
    📄 useTheme.js
📄 index.js
📁 model
    📄 ActivityTypes.js
    📄 activityDTO.js
    📄 userDTO.js
📁 pages
    📁 admin
        📄 activitiesPage.jsx
        📁 components
            📁 buttons
                📄 buttons.jsx
                📄 style.scss
            📁 chart
                📄 activityLineChart.jsx
                📄 style.scss
                📄 userAgeChart.jsx
        📄 dashboardPage.jsx
        📄 style.scss
        📄 userPage.jsx
    📁 auth
        📄 authPage.jsx
        📁 components
            📁 buttons
                📄 buttons.jsx
                📄 style.scss
            📁 form
                📄 login.jsx
                📄 signup.jsx
                📄 style.scss
    📁 home
        📄 homePage.jsx
    📁 profile
        📄 profilePage.jsx
        📄 style.scss
    📄 pruebasPage.jsx
📄 reportWebVitals.js
📁 scss
    📄 _clear-theme.scss
    📄 _dark-theme.scss
    📄 _imports.scss
📁 service
    📄 ProtectedRouterService.js
    📄 activityService.js
    📄 adminService.js
    📄 authService.js
    📄 imageService.js
    📄 notificationService.js
    📄 userService.js
📄 setupTests.js

```

# Estructura de la Aplicación

## Archivos Raíz

- `App.js`: El componente principal de la aplicación React.
- `App.test.js`: Pruebas unitarias para el componente `App`.

## Carpetas Principales

### \_css

Contiene archivos CSS para el estilado de la aplicación.

- `activityFormStyle.css`: Estilos para el formulario de actividad.
- `activityFormStyle.css.map`: Mapa de origen para el archivo CSS.
- `app.css`: Hoja de estilos principal.
- `app.css.map`: Mapa de origen para el archivo CSS.
- `main.css`: Estilos principales de la aplicación.
- `main.css.map`: Mapa de origen para el archivo CSS.
- `publicationStyle.css`: Estilos para publicaciones.
- `publicationStyle.css.map`: Mapa de origen para el archivo CSS.
- `style.css`: Hoja de estilos general.
- `style.css.map`: Mapa de origen para el archivo CSS.
- `styles.module.css`: Módulo de estilos CSS.
- `styles.module.css.map`: Mapa de origen para el módulo de estilos CSS.

### assest

Contiene recursos estáticos como imágenes y iconos.

- examples: Ejemplos de imágenes usadas en la aplicación.
- icon: Componentes de React que representan iconos, junto con sus estilos.

### components

Contiene componentes reutilizables de la aplicación.

#### common

Componentes comunes utilizados en diferentes partes de la aplicación.

- activity: Componentes relacionados con actividades, incluyendo iconos y estilos.
- addActivity: Componentes para añadir actividades, incluyendo iconos y estilos.
- buttons: Componentes de botones.
- imageUpload: Componente para la subida de imágenes.
- profile: Componentes relacionados con perfiles de usuario.
- search: Componentes para la búsqueda.
- table: Componentes para tablas de datos.

#### layout

Componentes de diseño de la aplicación.

- footer: Pie de página.
- header: Encabezado de la aplicación.
- navbar: Barra de navegación.
- skeleton: Componente para mostrar esqueletos de carga.

### contexts

Proveedores de contexto para manejar estados globales de la aplicación.

- `AuthProvider.js`: Proveedor de autenticación.
- `ModalProvider.js`: Proveedor de modales.
- `ScreenProvider.js`: Proveedor de estados de pantalla.
- `ThemeProvider.js`: Proveedor de temas.

### hooks

Hooks personalizados para manejar lógica específica.

- `useAuth.js`: Hook para la autenticación.
- `useModal.js`: Hook para manejar modales.
- `useScreen.js`: Hook para manejar estados de pantalla.
- `useTheme.js`: Hook para manejar temas.

### model

Definiciones de modelos de datos.

- `ActivityTypes.js`: Tipos de actividad.
- `activityDTO.js`: DTO para actividad.
- `userDTO.js`: DTO para usuario.

### pages

Componentes de página para diferentes rutas.

#### admin

Páginas relacionadas con la administración.

- components: Componentes específicos para las páginas de administración.

#### auth

Páginas relacionadas con la autenticación.

- components: Componentes específicos para las páginas de autenticación.

#### home

Página de inicio.

#### profile

Páginas relacionadas con los perfiles de usuario.

### scss

Archivos SCSS para el estilado temático.

- `_clear-theme.scss`: Estilos para el tema claro.
- `_dark-theme.scss`: Estilos para el tema oscuro.
- `_imports.scss`: Importaciones SCSS.

### service

Servicios para manejar la lógica de negocio y las interacciones con APIs.

- `ProtectedRouterService.js`: Servicio para la protección de rutas.
- `activityService.js`: Servicio para actividades.
- `adminService.js`: Servicio para administración.
- `authService.js`: Servicio para autenticación.
- `imageService.js`: Servicio para manejo de imágenes.
- `notificationService.js`: Servicio para notificaciones.
- `userService.js`: Servicio para manejo de usuarios.

## Otros Archivos

- `index.js`: Punto de entrada principal de la aplicación.
- `reportWebVitals.js`: Herramienta para medir el rendimiento de la aplicación.
- `setupTests.js`: Configuración para pruebas unitarias.
- `README.md`: Documentación detallada sobre la estructura y componentes de la aplicación.

## Manual de despliegue

# Manual de Despliegue de Servicios con Docker Compose

Este manual de despliegue detalla los pasos necesarios para desplegar los servicios especificados en el archivo `docker-compose.yml` proporcionado. El archivo define tres servicios: backend, frontend y base de datos (db).

## Prerrequisitos

Antes de comenzar, asegúrate de tener instalados los siguientes componentes en tu sistema:

## Prerrequisitos

1. **Node**: Puedes descargarlo e instalarlo desde [nodejs.org](https://nodejs.org/).
2. **Git**: Puedes descargarlo e instalarlo desde [git-scm.com](https://git-scm.com/).
3. **Java 21**: Puedes descargarlo e instalarlo desde [oracle.com](https://www.oracle.com/java/technologies/javase-jdk21-downloads.html).
4. **Docker**: Puedes descargarlo e instalarlo desde [docker.com](https://www.docker.com/).
5. **Docker Compose**: Normalmente se incluye con Docker Desktop, pero puedes verificar la instalación ejecutando `docker-compose --version`.

## Estructura del Proyecto

Asegúrate de que tu estructura de directorios se parezca a la siguiente:

```
/src
├── docker-compose.yml
├── src-api
│ └── Dockerfile
└── src-frontend
└── Dockerfile
```

## Descripción del Archivo docker-compose.yml

El archivo `docker-compose.yml` define tres servicios:

1. **backend**: Una API desarrollada con Spring Boot.
2. **frontend**: Una aplicación web servida por un servidor web.
3. **db**: Una base de datos MySQL.

### Servicios

#### Backend

- **Contexto de construcción**: `./src-api`
- **Dockerfile**: `./src-api/Dockerfile`
- **Puerto**: `8080:8080`
- **Dependencias**: Depende del servicio `db`.
- **Variables de entorno**:
  - `SPRING_DATASOURCE_URL`: URL de conexión a la base de datos.
  - `SPRING_DATASOURCE_USERNAME`: Usuario de la base de datos.
  - `SPRING_DATASOURCE_PASSWORD`: Contraseña de la base de datos.
  - `SPRING_JPA_HIBERNATE_DDL_AUTO`: Configuración de Hibernate.
  - `JWT_SECRET`: Clave secreta para JWT.

#### Frontend

- **Contexto de construcción**: `./src-frontend`
- **Dockerfile**: `./src-frontend/Dockerfile`
- **Puerto**: `3000:80`

#### DB

- **Imagen**: `mysql:8.0`
- **Puerto**: `3306:3306`
- **Variables de entorno**:
  - `MYSQL_ROOT_PASSWORD`: Contraseña del usuario root.
  - `MYSQL_DATABASE`: Nombre de la base de datos.
- **Volúmenes**:
  - `db_data:/var/lib/mysql`: Persistencia de datos.

### Volúmenes

- **db_data**: Volumen para la persistencia de datos de MySQL.

# Guía para Construir y Desplegar los Servicios

## 1. Clonar el Repositorio

Clona el repositorio que contiene el archivo `docker-compose.yml` y los directorios `src-api` y `src-frontend`.

```sh
git clone https://github.com/Dani-Ps/fitconnect_final_project.git
cd fitconnect_final_project
```

## 2. Construir y Desplegar los Servicios

Antes de ejecutar el siguiente comando para construir y desplegar los servicios definidos en el archivo `docker-compose.yml`, asegúrate de seguir estos pasos:

### Paso 1: Construir el Backend

En el directorio `fitconnect_final_project/src/src-api`, ejecuta Maven para limpiar y construir la API:

```sh
cd fitconnect_final_project/src/src-api
mvn clean install
```

### Paso 2: Instalar Dependencias del Frontend

En el directorio `fitconnect_final_project/src/src-fronted`, ejecuta yarn install para instalar las dependencias del proyecto:

```sh
cd fitconnect_final_project/src/src-fronted
yarn install

```

### Paso 3: Compilar el Frontend

Una vez instaladas las dependencias, compila el frontend con Yarn:

```sh
yarn build

```

### Paso 4: Construir y Desplegar los Servicio

Finalmente, ejecuta el siguiente comando en el directorio raíz del proyecto para construir y desplegar los servicios definidos en el archivo docker-compose.yml:

```sh
docker-compose up --build
```

## 3. Verificación

- **Backend**: Accede a [http://localhost:8080](http://localhost:8080) para verificar que el backend está funcionando.
- **Frontend**: Accede a [http://localhost:3000](http://localhost:3000) para verificar que el frontend está funcionando.
- **DB**: El servicio MySQL estará disponible en `localhost:3306`.

## 4. Administración de los Contenedores

Para detener y eliminar los contenedores, redes y volúmenes creados por `docker-compose up`, ejecuta:

```sh
docker-compose down
```

Para detener los contenedores sin eliminarlos, ejecuta:

```sh
docker-compose stop
```

Para reiniciar los contenedores, ejecuta:

```sh
docker-compose start
```

## 5. Logs y Depuración

Para ver los logs de todos los servicios, ejecuta:

```sh
docker-compose logs -f
```

## Enlace a la documentación de la APIREST:

[FitConnect - APIREST docs.](https://documenter.getpostman.com/view/34870994/2sA3JNa15u)
