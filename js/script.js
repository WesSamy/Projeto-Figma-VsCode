// getElementByid => fazer com que a ID seja chamada.
// querySelector => fazer com que a classe seja chamada.

// Seleciona os elementos dos sliders e o círculo
const barraVermelha = document.querySelector('.red');
const barraVerde = document.querySelector('.green');
const blueSlider = document.querySelector('.blue');

const valorR = document.getElementById('valorR');
const valorG = document.getElementById('valorG');
const valorB = document.getElementById('valorB');

const circulo = document.querySelector('.circulo');
const triangulo = document.querySelector('.triangulo');
const quadrado = document.querySelector('.quadrado');
const loganzo = document.querySelector('.loganzo');

// Função para atualizar a cor do círculo
function atualizarCor() {
    const r = barraVermelha.value; //value => pega o valor do meu input 
    const g = barraVerde.value;
    const b = blueSlider.value;

// Atualiza os valores exibidos
//textContent => permite definir ou obter o conteúdo de texto de um elemento HTML
// Essa propriedade me permite mostrar o valor da barra na dela de 0 a 255.
    valorR.textContent = r;
    valorG.textContent = g;
    valorB.textContent = b;

    // Define a cor do círculo
    // .Style "chama" o CSS para modificar/estilizar o elemento em questão.
    triangulo.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    circulo.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    quadrado.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    loganzo.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    // caso eu queira que o fundo do meu site mude de cor 
    //document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

// Adiciona o evento de input para cada barra (slider)
barraVermelha.addEventListener('input', atualizarCor);
barraVerde.addEventListener('input', atualizarCor);
blueSlider.addEventListener('input', atualizarCor);