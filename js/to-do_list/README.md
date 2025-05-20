# Descripción del proyecto
Una “To-Do List” es una pequeña aplicación web donde el usuario puede:

- Añadir nuevas tareas.

- Marcar tareas como completadas.

## Eliminar tareas.

(Opcional) Filtrar por tareas pendientes/completadas.

(Bonus) Guardar las tareas en el LocalStorage del navegador para que persistan al recargar la página.

## Tecnologías a emplear
- HTML5 para la estructura.

- CSS3 para el diseño (puedes usar Flexbox o Grid).

- JavaScript puro para la lógica.

(Opcional) LocalStorage para guardar datos en el navegador.

## Funcionalidades clave
- Añadir tareas con un formulario sencillo.

- Listar tareas dinámicamente en el DOM.

- Marcar/Desmarcar tareas completadas.

- Eliminar tareas individuales.

- Filtrar (todos / activos / completados).

- Persistencia: que las tareas se mantengan tras recarga (usando LocalStorage).

### Pasos para abordarlo
Estructura HTML básica

Un input y un botón “Agregar”.

Un contenedor <ul> donde se insertarán las tareas.

#### Estilos CSS

Diseña una tarjeta o sección central para tu lista.

Añade estilos a las tareas (por ejemplo, que al marcarse cambie de color o tenga text-decoration: line-through).

#### JavaScript básico

Capturar el evento submit del formulario para leer el texto del input.

Crear un nuevo elemento <li> con la tarea y botones de “completar” y “eliminar”.

Insertar ese <li> en el <ul>.

#### Manejo de eventos

Delegación de eventos en el contenedor de la lista:

Al hacer clic en “completar”, cambiar clase .done.

Al hacer clic en “eliminar”, quitar el elemento del DOM.

#### LocalStorage

Al agregar/eliminar/completar, actualizar un array de tareas y guardarlo con localStorage.setItem('tasks', JSON.stringify(tasks)).

Al cargar la página, leer localStorage.getItem('tasks') y renderizar las tareas.

Filtro de tareas

Tres botones (“Todos / Activos / Completados”) que, al hacer clic, recorra el array de tareas y muestre u oculte según su estado.

Refinamientos y extras

Añadir una cuenta regresiva de tareas pendientes.

Tema claro/oscuro con un interruptor.

Validación para no agregar tareas vacías.

