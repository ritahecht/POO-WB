export default class Produto {
    public nome: string
    public valor: number

    constructor(nome: string, valor: number) {
        this.nome = nome
        this.valor = valor
    }

    public setNome(nome: string) {
        this.nome = nome
    }
}