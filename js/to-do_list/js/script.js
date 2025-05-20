document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('todo-form');
  const input = document.getElementById('todo-input');
  const list = document.getElementById('todo-list');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    addTask(text);
    input.value = '';
  });

  function addTask(text) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = text;
    const actions = document.createElement('div');
    actions.className = 'actions';

    const btnComplete = document.createElement('button');
    btnComplete.textContent = '✓';
    btnComplete.className = 'complete';
    btnComplete.addEventListener('click', () => {
      li.classList.toggle('done');
    });

    const btnDelete = document.createElement('button');
    btnDelete.textContent = '✗';
    btnDelete.className = 'delete';
    btnDelete.addEventListener('click', () => {
      list.removeChild(li);
    });

    actions.append(btnComplete, btnDelete);
    li.append(span, actions);
    list.appendChild(li);
  }

  // TODO: Agregar persistencia con LocalStorage
});
