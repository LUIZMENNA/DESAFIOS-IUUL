import promptSync from 'prompt-sync';
const prompt = promptSync();

export class Cliente {
    #nome;
    #cpf;
    #dataDeNascimento;
    #rendaMensal;
    #estadoCivil;
    #dependentes;

    constructor (nome, cpf, dataDeNascimento, rendaMensal, estadoCivil, dependentes) {
        this.#nome = nome;
        this.#cpf = cpf;
        this.#dataDeNascimento = dataDeNascimento;
        this.#rendaMensal = rendaMensal;
        this.#estadoCivil = estadoCivil;
        this.#dependentes = dependentes;
    }

    toString() {
        return `Cliente { 
            Nome: ${this.#nome}, 
            CPF: ${this.#cpf}, 
            Data de Nascimento: ${this.#dataDeNascimento}, 
            Renda Mensal: ${this.#rendaMensal}, 
            Estado Civil: ${this.#estadoCivil}, 
            Dependentes: ${this.#dependentes} 
        }`;
    }
}

export function obterNome() {
    let nome;
    let padrao = /^[a-zA-Z]{5,}$/;

    do {
        nome = prompt('Digite seu nome: ');

        if (nome.match(padrao)) {
            return nome;
        } else {
            console.log('Por favor, insira um nome no formato válido. Deve ter pelo menos 5 letras.');
        }
    } while (true);


}


export function obterCPF() {
    let cpf;
    let padraoRegex = /^\d{11}$/;

    do {
        cpf = prompt('Digite seu CPF no seguinte formato: XXXXXXXXXXX (apenas números): ');

        if (cpf.match(padraoRegex)) {
            return parseInt(cpf);
        } else {
            console.log('Por favor, insira um CPF no formato válido. ');
        }
    } while (true); 
}

export function obterDataDeNascimento() {
    let data;
    let padraoRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19\d{2}|20\d{2})$/;

    do {
        data = prompt('Digite sua data de nascimento (DD/MM/AAAA): ');

        // Adicionando a verificação de correspondência e ajuste do formato da data
        if (data.match(padraoRegex)) {
            let partesData = data.split('/');
            let diaNascimento = parseInt(partesData[0], 10);
            let mesNascimento = parseInt(partesData[1], 10) - 1;
            let anoNascimento = parseInt(partesData[2], 10);

            let dataNascimento = new Date(anoNascimento, mesNascimento, diaNascimento);
            let hoje = new Date();
            let idade = hoje.getFullYear() - dataNascimento.getFullYear();

            if (
                hoje.getMonth() < mesNascimento ||
                (hoje.getMonth() === mesNascimento && hoje.getDate() < diaNascimento)
            ) {
                idade--;
            }

            if (idade >= 18) {
                return dataNascimento;
            } else {
                console.log('Você deve ter pelo menos 18 anos. ');
            }
        } else {
            console.log('Por favor, insira uma data no formato válido. ');
        }
    } while (true);
}

export function obterRendaMensal() {
    let rendaMensal;
    let padraoRegex = /^\d+(,\d{2})?$/;

    do {
        rendaMensal = prompt('Digite a sua Renda Mensal no seguinte formato: XXXXXXX,XX (apenas números e vírgula para separar os valores decimais): ');

        if (padraoRegex.test(rendaMensal)) {
            let rendaMensalFormatada = parseFloat(rendaMensal.replace(',', '.'));
            
            if (!isNaN(rendaMensalFormatada) && rendaMensalFormatada > 0) {
                return rendaMensalFormatada;
            } else {
                console.log('Por favor, insira um valor válido. ');
            }
        } else {
            console.log('Por favor, insira um valor no formato válido. ');
        }
    } while (true);
}

export function obterEstadoCivil () {
    let estadoCivil;
    let padraoRegex = /^[CSVĐcsvđ]$/;

    do {
        estadoCivil = prompt('Digite o seu estado civil no seguinte formato: C, S, V ou D (maiúsculo ou minúsculo): ');

        if (estadoCivil.match(padraoRegex)) {
            return estadoCivil;
        } else {
            console.log('Por favor, insira um valor no formato válido. ');
        }
    } while (true); 
}

export function obterNumeroDeDependentes () {
    let numeroDeDependentes;
    let padraoRegex = /^\d+$/;

    do {
        numeroDeDependentes = prompt('Digite o seu número de dependentes: ');

        if (numeroDeDependentes.match(padraoRegex)) {
            return numeroDeDependentes;
        } else {
            console.log('Por favor, insira um valor no válido. ');
        }
    } while (true); 
}

const cliente = new Cliente(obterNome(), obterCPF(), obterDataDeNascimento(), obterRendaMensal(), obterEstadoCivil(), obterNumeroDeDependentes());

console.log(cliente.toString());