import { Vertice } from "./questao1.js";

export class Triangulo {
    #vertice1;
    #vertice2;
    #vertice3;

    constructor(v1, v2, v3) {
        if (!this.eTriangulo(v1, v2, v3)) {
            throw new Error('Os vértices fornecidos não formam um triângulo.');
        }

        this.#vertice1 = v1;
        this.#vertice2 = v2;
        this.#vertice3 = v3;
    }

    // Método para verificar se os vértices formam um triângulo
    eTriangulo(v1, v2, v3) {
        const lado1 = Math.sqrt(Math.pow(v2.x - v1.x, 2) + Math.pow(v2.y - v1.y, 2));
        const lado2 = Math.sqrt(Math.pow(v3.x - v2.x, 2) + Math.pow(v3.y - v2.y, 2));
        const lado3 = Math.sqrt(Math.pow(v1.x - v3.x, 2) + Math.pow(v1.y - v3.y, 2));

        return lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1;
    }

    // Método para verificar se dois triângulos são iguais
    equals(outroTriangulo) {
        const v1Equal = this.#vertice1.x === outroTriangulo.#vertice1.x && this.#vertice1.y === outroTriangulo.#vertice1.y;
        const v2Equal = this.#vertice2.x === outroTriangulo.#vertice2.x && this.#vertice2.y === outroTriangulo.#vertice2.y;
        const v3Equal = this.#vertice3.x === outroTriangulo.#vertice3.x && this.#vertice3.y === outroTriangulo.#vertice3.y;
        return v1Equal && v2Equal && v3Equal;
    }

    // Método para calcular o perímetro do triângulo
    perimetro() {
        const lado1 = Math.sqrt(Math.pow(this.#vertice2.x - this.#vertice1.x, 2) + Math.pow(this.#vertice2.y - this.#vertice1.y, 2));
        const lado2 = Math.sqrt(Math.pow(this.#vertice3.x - this.#vertice2.x, 2) + Math.pow(this.#vertice3.y - this.#vertice2.y, 2));
        const lado3 = Math.sqrt(Math.pow(this.#vertice1.x - this.#vertice3.x, 2) + Math.pow(this.#vertice1.y - this.#vertice3.y, 2));
        return lado1 + lado2 + lado3;
    }

    // Método para determinar o tipo do triângulo
    tipo() {
        const lado1 = Math.sqrt(Math.pow(this.#vertice2.x - this.#vertice1.x, 2) + Math.pow(this.#vertice2.y - this.#vertice1.y, 2));
        const lado2 = Math.sqrt(Math.pow(this.#vertice3.x - this.#vertice2.x, 2) + Math.pow(this.#vertice3.y - this.#vertice2.y, 2));
        const lado3 = Math.sqrt(Math.pow(this.#vertice1.x - this.#vertice3.x, 2) + Math.pow(this.#vertice1.y - this.#vertice3.y, 2));

        if (lado1 === lado2 && lado2 === lado3) {
            return "equilátero";
        } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
            return "isósceles";
        } else {
            return "escaleno";
        }
    }

    // Método para clonar um triângulo
    clone() {
        return new Triangulo(this.#vertice1, this.#vertice2, this.#vertice3);
    }

    // Método para calcular a área do triângulo
    area() {
        const lado1 = Math.sqrt(Math.pow(this.#vertice2.x - this.#vertice1.x, 2) + Math.pow(this.#vertice2.y - this.#vertice1.y, 2));
        const lado2 = Math.sqrt(Math.pow(this.#vertice3.x - this.#vertice2.x, 2) + Math.pow(this.#vertice3.y - this.#vertice2.y, 2));
        const lado3 = Math.sqrt(Math.pow(this.#vertice1.x - this.#vertice3.x, 2) + Math.pow(this.#vertice1.y - this.#vertice3.y, 2));
        const semiperimetro = this.perimetro() / 2;
        return Math.sqrt(semiperimetro * (semiperimetro - lado1) * (semiperimetro - lado2) * (semiperimetro - lado3));
    }

    // Métodos de leitura pública para os vértices privados
    getVertice1() {
        return this.#vertice1;
    }

    getVertice2() {
        return this.#vertice2;
    }

    getVertice3() {
        return this.#vertice3;
    }
}

// Função para ler valores do usuário e criar um vértice
function lerVertice() {
    const x = parseFloat(prompt("Digite a coordenada x do vértice:"));
    const y = parseFloat(prompt("Digite a coordenada y do vértice:"));
    return new Vertice(x, y);
}

// Ler valores do usuário para criar 3 triângulos
const vertice1Triangulo1 = lerVertice();
const vertice2Triangulo1 = lerVertice();
const vertice3Triangulo1 = lerVertice();

const vertice1Triangulo2 = lerVertice();
const vertice2Triangulo2 = lerVertice();
const vertice3Triangulo2 = lerVertice();

const vertice1Triangulo3 = lerVertice();
const vertice2Triangulo3 = lerVertice();
const vertice3Triangulo3 = lerVertice();

// Criar os triângulos
const triangulo1 = new Triangulo(vertice1Triangulo1, vertice2Triangulo1, vertice3Triangulo1);
const triangulo2 = new Triangulo(vertice1Triangulo2, vertice2Triangulo2, vertice3Triangulo2);
const triangulo3 = new Triangulo(vertice1Triangulo3, vertice2Triangulo3, vertice3Triangulo3);

// Chamar os métodos implementados na classe
console.log("Triângulo 1:");
console.log(`Perímetro: ${triangulo1.perimetro()}`);
console.log(`Tipo: ${triangulo1.tipo()}`);
console.log(`Área: ${triangulo1.area()}`);

console.log("Triângulo 2:");
console.log(`Perímetro: ${triangulo2.perimetro()}`);
console.log(`Tipo: ${triangulo2.tipo()}`);
console.log(`Área: ${triangulo2.area()}`);

console.log("Triângulo 3:");
console.log(`Perímetro: ${triangulo3.perimetro()}`);
console.log(`Tipo: ${triangulo3.tipo()}`);
console.log(`Área: ${triangulo3.area()}`);