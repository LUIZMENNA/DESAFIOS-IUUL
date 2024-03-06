import { Vertice } from "./questao1.js";

export class Poligono {
    #vertices;
    constructor(vertices) {
        if (!this.ePoligonoValido(vertices)) {
            throw new Error('O polígono deve ter pelo menos 3 vértices.');
        }

        this.#vertices = [];
        for (let vertice of vertices) {
            this.addVertice(vertice);
        }
    }

    // Método para verificar se o polígono é válido (pelo menos 3 vértices)
    ePoligonoValido(vertices) {
        return vertices.length >= 3;
    }

    // Método para adicionar um novo vértice ao polígono
    addVertice(vertice) {
        for (let v of this.#vertices) {
            if (v.x === vertice.x && v.y === vertice.y) {
                return false; // O vértice já existe no polígono
            }
        }
        this.#vertices.push(vertice);
        return true;
    }

    // Método para calcular o perímetro do polígono
    perimetro() {
        let perimetro = 0;
        for (let i = 0; i < this.#vertices.length; i++) {
            const v1 = this.#vertices[i];
            const v2 = this.#vertices[(i + 1) % this.#vertices.length]; // O próximo vértice
            perimetro += Math.sqrt(Math.pow(v2.x - v1.x, 2) + Math.pow(v2.y - v1.y, 2));
        }
        return perimetro;
    }

    // Método para retornar a quantidade de vértices do polígono
    qtdVertices() {
        return this.#vertices.length;
    }
}

// Função para ler valores do usuário e criar um vértice
function lerVertice() {
    const x = parseFloat(prompt("Digite a coordenada x do vértice:"));
    const y = parseFloat(prompt("Digite a coordenada y do vértice:"));
    return new Vertice(x, y);
}

// Função para ler valores do usuário e criar um polígono
function lerPoligono() {
    const vertices = [];
    while (true) {
        const vertice = lerVertice();
        vertices.push(vertice);
        const adicionarOutro = prompt("Deseja adicionar outro vértice? (sim/não)").toLowerCase();
        if (adicionarOutro !== 'sim') {
            break;
        }
    }
    return new Poligono(vertices);
}

// Ler valores do usuário para criar um polígono
const poligono = lerPoligono();

// Chamar os métodos implementados na classe
console.log(`Perímetro do polígono: ${poligono.perimetro()}`);
console.log(`Quantidade de vértices do polígono: ${poligono.qtdVertices()}`);
