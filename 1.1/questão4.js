export class Turma {
    #listaDeAlunos = [];

    get listaDeAlunos (){
        return this.#listaDeAlunos;
    }

    inserirAluno(...alunos) {
        this.#listaDeAlunos.push(...alunos);
    }

    removerAluno(matricula) {
        const alunoParaRemover = this.#listaDeAlunos.findIndex(objeto => objeto.matricula === matricula);

        if (alunoParaRemover !== -1) {
            const alunoRemovido = this.#listaDeAlunos[alunoParaRemover];
            console.log(`O aluno ${alunoRemovido.nome} foi removido com sucesso.`);
            this.#listaDeAlunos.splice(alunoParaRemover, 1);
        } else {
            console.log(`Aluno com matrícula ${matricula} não encontrado.`);
        }
    }

    //o usuário define a matricula de quem ele quer mudar a nota, podendo alterar as duas notas ou só uma
    lancarNota(matricula, notaP1, notaP2) {
        const alunoParaAlterar = this.#listaDeAlunos.find(aluno => aluno.matricula === matricula);
    
        if (alunoParaAlterar) {
            alunoParaAlterar.notaP1 = notaP1;
            alunoParaAlterar.notaP2 = notaP2;
        } else {
            console.log(`Aluno com matrícula ${matricula} não encontrado.`);
        }
    }
    

    imprimirListaDeAlunos() {
        const listaOrdenada = this.#listaDeAlunos.sort((x, y) => {
            let a = x.nome.toUpperCase(),
                b = y.nome.toUpperCase();
            return a === b ? 0 : a > b ? 1 : -1;
        });
    
        console.log(`
            —---------------------------------------
            Matrícula  Nome         P1     P2     NF
            —---------------------------------------
        `);
    
        for (const aluno of listaOrdenada) {
            console.log(`        ${aluno.matricula}         ${aluno.nome}        ${aluno.notaP1}      ${aluno.notaP2}      ${aluno.calcularNotaFinal()}`);
        }
    
        console.log(`
            —----------------------------------
        `);
    }
    
}

export class Aluno {
    static autoincrement = 0;//o primeiro aluno registrado começará com 1
    #matricula; 
    #nome;
    #P1 = 0;
    #P2 = 0;

    constructor(nome) {
        Aluno.autoincrement++;
        this.#matricula = Aluno.autoincrement; 
        this.#nome = nome;
    }

    get matricula (){
        return this.#matricula;
    }

    get nome () {
        return this.#nome;
    }

    get nota() {
        return `As notas foram 1°: ${this.#P1}; 2°: ${this.#P2};`;
    }    

    calcularNotaFinal() {
        let NF = 0;
    
        if (this.notaP1 !== undefined && this.notaP2 !== undefined) {
            NF = (this.notaP1 + this.notaP2) / 2;
        } else if (this.notaP1 !== undefined) {
            NF = this.notaP1 / 2;
        } else if (this.notaP2 !== undefined) {
            NF = this.notaP2 / 2;
        } else {
            NF = 0;
        }
    
        return NF.toFixed(1);
    }   
}