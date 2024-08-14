Claro, te proporcionaré un `README.md` básico que puedes usar para documentar tu proyecto Angular con Flask. Este `README` cubrirá la configuración del proyecto, los requisitos, cómo ejecutar el proyecto y cómo usarlo.

### `README.md`

```markdown
# Flask-Angular CRUD App

Este proyecto es una aplicación CRUD simple que utiliza Flask como backend y Angular como frontend. Permite la gestión de registros con operaciones básicas de Crear, Leer, Actualizar y Eliminar (CRUD).

## Tecnologías

- **Backend**: Flask
- **Frontend**: Angular
- **Base de Datos**: MySQL

## Requisitos

### Backend (Flask)

- Python 3.x
- Flask
- Flask-MySQLdb
- Flask-CORS

### Frontend (Angular)

- Node.js
- Angular CLI

## Configuración del Backend

1. **Instalar dependencias**:

   Asegúrate de tener Python 3.x y pip instalados. Luego, instala las dependencias del backend usando:

   ```bash
   pip install flask flask-mysqldb flask-cors
   ```

2. **Configurar la base de datos**:

   - Asegúrate de tener una base de datos MySQL configurada.
   - Crea una base de datos y una tabla llamada `registros` con las siguientes columnas:

     ```sql
     CREATE TABLE registros (
       id_registro INT AUTO_INCREMENT PRIMARY KEY,
       estado VARCHAR(50),
       id VARCHAR(50),
       matricula VARCHAR(50),
       razon_social VARCHAR(100),
       cod_estado_actualizacion VARCHAR(50),
       cod_departamento VARCHAR(50),
       id_establecimiento VARCHAR(50),
       direccion TEXT,
       respuesta_json TEXT,
       fecha_insercion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
     );
     ```

   - Configura los detalles de la base de datos en el archivo `config.py`.

3. **Ejecutar el servidor**:

   Navega al directorio del backend y ejecuta:

   ```bash
   python app.py
   ```

   El servidor Flask se ejecutará en `http://localhost:5000`.

## Configuración del Frontend (Angular)

1. **Instalar Node.js**:

   Asegúrate de tener Node.js y npm instalados. Puedes descargar e instalar Node.js desde [nodejs.org](https://nodejs.org/).

2. **Instalar Angular CLI**:

   Instala Angular CLI globalmente usando npm:

   ```bash
   npm install -g @angular/cli
   ```

3. **Crear el proyecto Angular**:

   Si no has creado el proyecto Angular aún, usa Angular CLI para crear uno:

   ```bash
   ng new flask-angular-app
   ```

   Navega al directorio del proyecto:

   ```bash
   cd flask-angular-app
   ```

4. **Instalar dependencias**:

   Asegúrate de tener las dependencias necesarias instaladas:

   ```bash
   npm install
   ```

5. **Configurar el servicio Angular**:

   Asegúrate de que el servicio Angular (`registro.service.ts`) esté configurado para interactuar con el backend de Flask.

6. **Ejecutar la aplicación Angular**:

   Navega al directorio del frontend y ejecuta:

   ```bash
   ng serve
   ```

   La aplicación Angular se ejecutará en `http://localhost:4200`.

## Uso

1. **Añadir un Registro**:

   - Navega a la página de "Añadir Registro" y completa el formulario.
   - Envía el formulario para crear un nuevo registro.

2. **Listar Registros**:

   - Navega a la página principal para ver la lista de registros.
   - Puedes editar o eliminar registros desde esta página.

3. **Editar un Registro**:

   - Navega a la página de "Editar Registro" usando el botón de editar en la lista de registros.
   - Realiza los cambios necesarios y envía el formulario para actualizar el registro.

4. **Eliminar un Registro**:

   - Usa el botón de eliminar en la lista de registros para eliminar un registro específico.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu característica (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y realiza commit (`git commit -am 'Añadir nueva característica'`).
4. Envía tu rama (`git push origin feature/nueva-caracteristica`).
5. Crea un nuevo Pull Request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

```

Este archivo `README.md` cubre los aspectos esenciales de la configuración y el uso del proyecto, proporcionando instrucciones claras para los desarrolladores y usuarios. Puedes personalizar y ajustar el contenido según las necesidades específicas de tu proyecto.
