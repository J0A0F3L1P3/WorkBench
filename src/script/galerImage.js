document.addEventListener('DOMContentLoaded', function () {
    const imageForm = document.getElementById('imageForm');
    const imageUrlInput = document.getElementById('imageUrl');
    const imageFileInput = document.getElementById('imageInput');
    const imageRow = document.getElementById('imageRow');

    // Event listener para capturar o envio do formulário
    imageForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Evita o envio do formulário

        const imageUrl = imageUrlInput.value;
        if (imageUrl) {
            addImage(imageUrl); // Adiciona a imagem através da URL
            imageUrlInput.value = ''; // Limpa o campo URL após adicionar a imagem
        }
    });

    // Event listener para capturar a seleção de um arquivo
    imageFileInput.addEventListener('change', function (e) {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            addImage(imageUrl); // Adiciona a imagem usando o objeto URL do arquivo
        }
    });

    // Função para adicionar a imagem à linha atual
    function addImage(url) {
        const divCol = document.createElement('div');
        divCol.className = 'col-6 col-sm-4 col-md-3 col-lg-2 mb-3';

        const img = document.createElement('img');
        img.src = url;
        img.className = 'img-fluid';
        img.addEventListener('click', enlargeImage);

        divCol.appendChild(img);
        imageRow.appendChild(divCol);
    }

    // Função para expandir a imagem ao clicar
    function enlargeImage() {
        if (this.style.position == 'fixed') {
            this.style.position = '';
            this.style.width = '';
            this.style.top = '';
            this.style.left = '';
            this.style.transform = '';
            this.style.zIndex = '';
        } else {
            this.style.position = 'fixed';
            this.style.width = '90%';
            this.style.top = '5vh';
            // this.style.left = '50px';
            this.style.zIndex = '9999';
        }
    }
});
