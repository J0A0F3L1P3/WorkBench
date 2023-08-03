// Variáveis do jogo
let tabuleiro = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
let jogador = 'X';
let gameOver = false;
let scorePlayer1 = 0;
let scorePlayer2 = 0;

// Elementos do DOM
const cells = document.querySelectorAll('.cell');
const scorePlayer1Element = document.getElementById('scorePlayer1');
const scorePlayer2Element = document.getElementById('scorePlayer2');
const resetGameButton = document.getElementById('resetGameButton');
const resetScoreButton = document.getElementById('resetScoreButton');

// Função para reiniciar o jogo
function reiniciarJogo() {
    tabuleiro = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    jogador = 'X';
    gameOver = false;
    atualizarTabuleiro();
}

// Função para atualizar o tabuleiro no DOM
function atualizarTabuleiro() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            cells[i * 3 + j].innerText = tabuleiro[i][j];
            cells[i * 3 + j].className = `cell ${tabuleiro[i][j]}`;
        }
    }
}

// Função para lidar com o clique em uma célula do tabuleiro
function handleClick(event) {
    const cellIndex = Array.from(cells).indexOf(event.target);
    const row = Math.floor(cellIndex / 3);
    const col = cellIndex % 3;

    if (tabuleiro[row][col] === '' && !gameOver) {
        tabuleiro[row][col] = jogador;
        atualizarTabuleiro();

        const vencedor = verificarVencedor();
        if (vencedor) {
            gameOver = true;
            if (vencedor === 'empate') {
                alert('Empate!');
            } else {
                alert(`Jogador ${vencedor} venceu!`);
                if (vencedor === 'X') {
                    scorePlayer1++;
                } else {
                    scorePlayer2++;
                }
            }
            atualizarPlacar();
        } else {
            jogador = jogador === 'X' ? 'O' : 'X';
        }
    }
}

// Função para verificar se há um vencedor
function verificarVencedor() {
    // Verificar linhas
    for (let i = 0; i < 3; i++) {
        if (
            tabuleiro[i][0] !== '' &&
            tabuleiro[i][0] === tabuleiro[i][1] &&
            tabuleiro[i][0] === tabuleiro[i][2]
        ) {
            return tabuleiro[i][0];
        }
    }

    // Verificar colunas
    for (let i = 0; i < 3; i++) {
        if (
            tabuleiro[0][i] !== '' &&
            tabuleiro[0][i] === tabuleiro[1][i] &&
            tabuleiro[0][i] === tabuleiro[2][i]
        ) {
            return tabuleiro[0][i];
        }
    }

    // Verificar diagonais
    if (
        tabuleiro[0][0] !== '' &&
        tabuleiro[0][0] === tabuleiro[1][1] &&
        tabuleiro[0][0] === tabuleiro[2][2]
    ) {
        return tabuleiro[0][0];
    }
    if (
        tabuleiro[0][2] !== '' &&
        tabuleiro[0][2] === tabuleiro[1][1] &&
        tabuleiro[0][2] === tabuleiro[2][0]
    ) {
        return tabuleiro[0][2];
    }

    // Verificar empate
    let empate = true;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (tabuleiro[i][j] === '') {
                empate = false;
                break;
            }
        }
        if (!empate) {
            break;
        }
    }
    if (empate) {
        return 'empate';
    }

    return null;
}

// Função para atualizar o placar no DOM
function atualizarPlacar() {
    scorePlayer1Element.innerText = scorePlayer1;
    scorePlayer2Element.innerText = scorePlayer2;
}

// Adicionar o evento de clique a cada célula do tabuleiro
cells.forEach((cell) => {
    cell.addEventListener('click', handleClick);
});

// Adicionar evento de clique ao botão de reiniciar o jogo
resetGameButton.addEventListener('click', reiniciarJogo);

// Adicionar evento de clique ao botão de resetar o placar
resetScoreButton.addEventListener('click', () => {
    scorePlayer1 = 0;
    scorePlayer2 = 0;
    atualizarPlacar();
});