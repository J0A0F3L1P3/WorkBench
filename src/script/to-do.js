// Cria o item e realiza a contagem

function adicionaritem(itemText) {
    let cont = document.querySelector('#num');
    let list = document.querySelector('#list');
    let contador = parseInt(cont.innerHTML);

    let item = document.createElement('li');
    item.id = 'listed';
    item.className = 'list-group-item d-flex justify-content-between';
    item.innerHTML = `
        <div class="form-check d-flex align-items-center justify-content-between" style="width: 100%">
            <input type="checkbox" class="form-check-input to-do-check" onchange="habilitaritem()">
            <input type="text" class="form-control item-input-to-do" value="${itemText}" disabled>
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
    let caixaDeitens = document.querySelector('#item');
    let caixaDeitensTeste = caixaDeitens.value.trim();

    if (caixaDeitensTeste === '') {
        caixaDeitens.value = '';
        document.querySelector('#item').placeholder = 'item inválido';
    } else {
        adicionaritem(caixaDeitensTeste);

        caixaDeitens.value = '';
        caixaDeitens.placeholder = '';
    }
}

// marcação

function habilitaritem() {
    document.querySelectorAll('.to-do-check').forEach((checkBox) => {
        if (checkBox.checked) {
            checkBox.parentNode.parentNode.style.background = 'green';
        } else {
            checkBox.parentNode.parentNode.style.background = '';
        }
    })
}

// esvaziar lista

function esvaziarLista() {
    document.querySelector('.list-group').innerHTML = ''
    document.querySelector('#num').innerHTML = `0 itens`;
}

// editar mensagem

function editaritem(btn) {
    let inputItem = btn.parentNode.querySelector('.item-input-to-do');

    if (inputItem.value.trim() == "") {
        alert('item invalido!')
    } else {
        inputItem.disabled = !inputItem.disabled;
    }
}

// remover mensagem

function removeritem(btn) {
    let element = btn.parentNode.parentNode;
    element.remove();

    let cont = document.querySelector('#num');
    let contador = parseInt(cont.innerHTML);
    --contador;
    if (contador !== 1) {
        cont.innerHTML = `${contador} itens`;
    } else {
        cont.innerHTML = `${contador} item`;
    }
}

// compartilhar no whatsapp


function compartilharWhatsApp() {
    let inputItems = document.querySelectorAll('.item-input-to-do');
    let message = '';

    if (inputItems.length > 0) {

        inputItems.forEach((items) => {
            let checkBox = items.parentNode.querySelector('.to-do-check');
            if (checkBox.checked) {
                message += `[x] `;
            } else {
                message += `[  ] `;
            }

            message += items.value + `%0A`;
        })

        let urlWhatsApp = `https://api.whatsapp.com/send?text=${message}`;
        window.open(urlWhatsApp, '_blank');

    } else {
        alert("Ops, parece que você esqueceu de digitar alguma coisa...");
    }
}

// function ordenaritens() {
//     let list = document
// }
