// Cria o item e realiza a contagem

function adicionaritem(itemText) {
    let cont = document.querySelector('#num');
    let list = document.querySelector('#list');
    let contador = parseInt(cont.innerHTML);

    let item = document.createElement('li');
    item.id = 'listed';
    item.className = 'list-group-item d-flex justify-content-between';
    item.innerHTML = `
        <div class="form-check d-flex align-items-center" style="width: 87%">
            <input type="checkbox" class="form-check-input" onchange="habilitaritem(this)">
            <input type="text" class="form-control item-input" value="${itemText}" disabled>
        </div>
        <div class="d-flex">
            <button onclick="editaritem(this)" class="btn btn-secondary btn-sm">Editar</button>
            <button onclick="removeritem(this)" class="btn btn-danger btn-sm">Remover</button>
        </div>
    `;

    list.appendChild(item);

    ++contador;
    if (contador !== 1) {
        cont.innerHTML = `${contador} itens`;
    } else {
        cont.innerHTML = `${contador} item`;
    }
}

// Faz a adição da mensagem na lista

function additem() {
    let caixaDeitens = document.querySelector('#item').value;

    if (caixaDeitens === '') {
        document.querySelector('#item').placeholder = 'item inválida';
    } else {
        adicionaritem(caixaDeitens);

        document.querySelector('#item').value = '';
        document.querySelector('#item').placeholder = '';
    }
}