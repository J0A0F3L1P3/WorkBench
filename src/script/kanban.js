let tasks = document.querySelectorAll('.task');

tasks.forEach(task => {
    task.addEventListener('dragstart', dragStart);
    task.addEventListener('dragend', dragEnd);
});

function dragStart() {
    this.classList.add('dragging');
}

function dragEnd() {
    this.classList.remove('dragging');
}

const columns = document.querySelectorAll('.card-body');

columns.forEach(column => {
    column.addEventListener('dragover', dragOver);
    column.addEventListener('drop', drop);
});

function dragOver(e) {
    e.preventDefault();
    let task = document.querySelector('.dragging');
    this.appendChild('<div class="card"></div>');
}

function drop() {
    let task = document.querySelector('.dragging');
    this.appendChild(task);
}