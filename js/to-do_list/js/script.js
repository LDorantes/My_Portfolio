document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('todo-form');
  const input = document.getElementById('todo-input');
  const prioritySelect = document.getElementById('priority-select');
  const list = document.getElementById('todo-list');
  const filters = document.querySelectorAll('.filter-btn');
  const clearBtn = document.getElementById('clear-completed');
  const searchInput = document.getElementById('search-input');
  const taskCount = document.getElementById('task-count');
  const themeToggle = document.getElementById('theme-toggle');

  let tasks = [];
  let currentFilter = 'all';

  // Load theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    themeToggle.textContent = '🌙';
  }
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    themeToggle.textContent = isDark ? '🌙' : '🌞';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // Load tasks
  function loadTasks() {
    const stored = localStorage.getItem('tasks');
    tasks = stored ? JSON.parse(stored) : [];
    renderTasks();
  }

  // Save tasks
  function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Enable drag & drop
  function enableDragAndDrop() {
    let dragged;
    document.querySelectorAll('#todo-list > li').forEach(li => {
      li.draggable = true;
      li.addEventListener('dragstart', e => {
        dragged = li;
        e.dataTransfer.setData('text/plain', '');
      });
      li.addEventListener('dragover', e => e.preventDefault());
      li.addEventListener('drop', e => {
        e.preventDefault();
        if (li !== dragged) {
          list.insertBefore(dragged, li.nextSibling);
          const newOrder = Array.from(list.children).map(
            c => parseInt(c.dataset.id)
          );
          tasks.sort((a, b) => newOrder.indexOf(a.id) - newOrder.indexOf(b.id));
          saveTasks();
        }
      });
    });
  }

  // Render tasks
  function renderTasks() {
    list.innerHTML = '';
    const searchText = searchInput.value.toLowerCase();
    let pending = 0;

    tasks.forEach(task => {
      if (currentFilter === 'active' && task.done) return;
      if (currentFilter === 'completed' && !task.done) return;
      if (searchText && !task.text.toLowerCase().includes(searchText)) return;
      renderTask(task);
      if (!task.done) pending++;
    });

    taskCount.textContent = `(${pending} pending)`;
    enableDragAndDrop();
  }

  // Render single task
  function renderTask(task) {
    const li = document.createElement('li');
    li.dataset.id = task.id;
    li.classList.add(task.priority);
    if (task.done) li.classList.add('done');

    const span = document.createElement('span');
    span.textContent = task.text;
    span.className = 'title';
    span.addEventListener('dblclick', () => makeEditable(span, task));

    // Subtasks
    const subList = document.createElement('ul');
    subList.className = 'subtasks';
    task.subtasks.forEach(st => {
      const sli = document.createElement('li');
      sli.textContent = st.text;
      if (st.done) sli.classList.add('done');
      sli.addEventListener('click', () => toggleSubtask(task.id, st.id));
      subList.appendChild(sli);
    });

    // Add subtask input
    const addSub = document.createElement('input');
    addSub.type = 'text';
    addSub.placeholder = 'Add subtask';
    addSub.addEventListener('keypress', e => {
      if (e.key === 'Enter' && addSub.value.trim()) {
        e.preventDefault();
        addSubtask(task.id, addSub.value.trim());
        addSub.value = '';
      }
    });

    const actions = document.createElement('div');
    actions.className = 'actions';
    const btnComplete = document.createElement('button');
    btnComplete.textContent = '✓';
    btnComplete.className = 'complete';
    btnComplete.addEventListener('click', () => toggleTask(task.id));
    const btnDelete = document.createElement('button');
    btnDelete.textContent = '✗';
    btnDelete.className = 'delete';
    btnDelete.addEventListener('click', () => deleteTask(task.id));
    actions.append(btnComplete, btnDelete);

    li.append(span, subList, addSub, actions);
    list.appendChild(li);
  }

  // Edit task
  function makeEditable(span, task) {
    const inputEdit = document.createElement('input');
    inputEdit.type = 'text';
    inputEdit.value = task.text;
    inputEdit.className = 'editing';
    span.replaceWith(inputEdit);
    inputEdit.focus();
    inputEdit.addEventListener('blur', () => finishEdit(inputEdit, task));
    inputEdit.addEventListener('keydown', e => { if (e.key === 'Enter') inputEdit.blur(); });
  }

  function finishEdit(inputEdit, task) {
    task.text = inputEdit.value.trim() || task.text;
    saveTasks(); renderTasks();
  }

  // CRUD
  function addTask(text, priority = 'medium') {
    tasks.push({ id: Date.now(), text, done: false, priority, subtasks: [] });
    saveTasks(); renderTasks();
  }
  function addSubtask(id, text) {
    const task = tasks.find(t => t.id === id);
    task.subtasks.push({ id: Date.now(), text, done: false });
    saveTasks(); renderTasks();
  }
  function toggleTask(id) {
    const task = tasks.find(t => t.id === id);
    task.done = !task.done; saveTasks(); renderTasks();
  }
  function toggleSubtask(taskId, subId) {
    const task = tasks.find(t => t.id === taskId);
    const sub = task.subtasks.find(st => st.id === subId);
    sub.done = !sub.done; saveTasks(); renderTasks();
  }
  function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id); saveTasks(); renderTasks();
  }

  clearBtn.addEventListener('click', () => { tasks = tasks.filter(t => !t.done); saveTasks(); renderTasks(); });
  form.addEventListener('submit', e => { e.preventDefault(); if (input.value.trim()) { addTask(input.value.trim(), prioritySelect.value); input.value = ''; } });
  filters.forEach(btn => btn.addEventListener('click', () => { filters.forEach(b => b.classList.remove('active')); btn.classList.add('active'); currentFilter = btn.dataset.filter; renderTasks(); }));
  searchInput.addEventListener('input', renderTasks);
  loadTasks();
});

