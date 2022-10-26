<h1 style="display:block; text-align:center;">Woman´s Medical Assistance</h1>


![](https://i.imgur.com/TRdVepe.png)

Repositorio del sitio web de Woman´s Medical Assistance
#### Permite realizar las siguientes actividades:
- Creación, lectura, modificación y eliminación de pacientes.
- Creación, lectura, modificación y eliminación de turnos.
- Visualización de turnos ordenados por mas próximos primero.
- Filtrado de turnos por médico o por DNI de paciente (no se superponen)
- Envio de mensaje a través de un formulario de contacto.

### Sección principal
En la sección principal del sitio los usuarios tendrán acceso a las ultimas noticias relacionadas con la Woman´s Clinical Assistance o con la medicina en general.
En la parte superior de la página se encuentran los links de acceso al panel de administrador (que solo accederá el administrador de turnos), la página "Acerca de", que describe los valores de la institución y están las fotografías de sus creadores.
También hay un enlace de regreso a la pagina de Inicio, el cual se encuentra también en el logo de la clínica, tanto en el navbar como en el footer.
Además, puede enviar un mensaje a la clínica a través del formulario de contacto, donde se le solicitará: nombre, teléfono, correo electrónico y un mensaje de no más de 200 caracteres.
En la sección final se encontrarán con testimonios de pacientes que hayan sido atendidos en la clínica.


### Panel administrador
Para ingresar al panel de administrador se requiere de las siguientes credenciales de acceso:
usuario: admin
contraseña : rolling

		Nota: En caso de ingresar alguna de éstas incorrectamente, se desplegará una alerta advirtiendo el error.
Ya en la página de administrador puede desplazarse libremente entre el panel, sección de carga de paciente y sección de carga de turno. 
Dentro del panel podrá visualizar en formato de tarjetas los turnos ordenados de forma que los mas próximos aparecen primero.
Puede filtrar la visualización de turnos por médico o por paciente (no se superponen).

		Nota: Si quiere dirigirse a otra página del sitio que no sea de la sección de administrador se desplegará una advertencia y, en caso de proceder, será redirigido al inicio y se deberá volver a autenticar para regresar a la sección de administrador.

### CRUD  de pacientes
Creación, lectura, modificación y eliminación de pacientes.
Permite ingresar los siguientes datos:
- Nombre.
- Fecha de nacimiento
- Número de documento
- Teléfono: de 10 números para celulares (sin prefijo 0 ni 15) y 11 números para fijos.
- Obra social
	- Particular
	- OSDE
	- Swiss Medical
	- Subsidio de Salud
	- OSECAC
	- Boreal
	- Red de Seguro Médico
- Sexo
	- Masculino
	- Femenino
	- Otro


### CRUD  de turnos
Creación, lectura, modificación y eliminación de turnos.
Permite seleccionar las siguientes opciones:
- Cargar un paciente almacenado (se incluye su DNI para mejor identificación).
- Especialidad médica.
- Médicos de dicha especialidad.
- Fecha del turno.
- Horario del turno.
- Redactar descripción breve relacionada al paciente.

### Error 404
Todos los enlaces a páginas que no esten disponibles lo redigirán a una página de error404. Una vez allí hay un botón para regresar al inicio.


		Nota:  Cuando se carga un turno para un determinado médico en una determinada fecha y horario, dicho horario se excluya para futuras selecciones.

### Sitio de prueba
https://womansmedicalassistance.netlify.app/
### Contribuidores
- Paula Guillén [paulag1](https://github.com/paulag1/) 
- Candela Mercado [CandelaMercado00](https://github.com/CandelaMercado00) 
- Félix Diaz [felixgerardodiaz](https://github.com/felixgerardodiaz)
- Marcos Almirón [chato9595](https://github.com/chato9595) 


