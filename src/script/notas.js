const noteList = document.getElementById("note-list");
const noteTitle = document.getElementById("note-title");
const noteContent = document.getElementById("note-content");
const saveButton = document.getElementById("save-note");

let notes = [];

function displayNotes() {
    noteList.innerHTML = "";
    notes.forEach((note, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
                <span class="note-title">${note.title}</span>
                <span class="delete-note" data-index="${index}">Excluir</span>
            `;
        noteList.appendChild(li);
    });
}

function saveNote() {
    let title = noteTitle.value;
    let content = noteContent.value;
    if (title && content) {
        let note = { title, content };
        notes.push(note);
        displayNotes();
        noteTitle.value = "";
        noteContent.value = "";
    }
}

noteList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-note")) {
        let index = e.target.getAttribute("data-index");
        notes.splice(index, 1);
        displayNotes();
    }
});

saveButton.addEventListener("click", saveNote);

displayNotes();
