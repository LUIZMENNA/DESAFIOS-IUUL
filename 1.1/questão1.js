class Vertice {
    #x;
    #y;

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    // Método getter para acessar o valor de x
    getX() {
        return this.#x;
    }

    // Método getter para acessar o valor de y
    getY() {
        return this.#y;
    }

    // Método para calcular a distância euclidiana entre dois vértices
    distancia(outroVertice) {
        const dx = outroVertice.getX() - this.#x;
        const dy = outroVertice.getY() - this.#y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    // Método para mover o vértice para outra posição (x, y)
    move(x, y) {
        this.#x = x;
        this.#y = y;
    }

    // Método para verificar se dois vértices são iguais
    equals(outroVertice) {
        return this.#x === outroVertice.getX() && this.#y === outroVertice.getY();
    }
}

// Função para ler um número do usuário
function lerNumero(mensagem) {
    let input;
    do {
        input = prompt(mensagem);
        input = parseFloat(input);
    } while (isNaN(input));
    return input;
}

// Ler valores do usuário para os vértices
const x1 = lerNumero("Digite o valor de x para o primeiro vértice:");
const y1 = lerNumero("Digite o valor de y para o primeiro vértice:");
const vertice1 = new Vertice(x1, y1);

const x2 = lerNumero("Digite o valor de x para o segundo vértice:");
const y2 = lerNumero("Digite o valor de y para o segundo vértice:");
const vertice2 = new Vertice(x2, y2);

const x3 = lerNumero("Digite o valor de x para o terceiro vértice:");
const y3 = lerNumero("Digite o valor de y para o terceiro vértice:");
const vertice3 = new Vertice(x3, y3);

// Chamar os métodos implementados na classe
console.log(`A distância entre o primeiro e o segundo vértice é: ${vertice1.distancia(vertice2)}`);
console.log(`A distância entre o segundo e o terceiro vértice é: ${vertice2.distancia(vertice3)}`);

vertice1.move(1, 1);
console.log(`A posição do primeiro vértice foi movida para (${vertice1.getX()}, ${vertice1.getY()})`);

console.log(`Os vértices 1 e 2 são iguais? ${vertice1.equals(vertice2)}`);
