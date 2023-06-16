import CPF from "./cpf"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export type GeneroDeCliente = `M` | `F` | `O`

export default class Cliente {
    public nome: string
    public nomeSocial: string
    private genero: GeneroDeCliente
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    constructor(nome: string, nomeSocial: string, cpf: CPF, genero: GeneroDeCliente) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rgs = []
        this.genero = genero
        this.dataCadastro = new Date()
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
    }

    public setNome(nome: string) {
        this.nome = nome
    }
    public setNomeSocial(nomeSocial: string) {
        this.nomeSocial = nomeSocial
    }
    public setGenero(genero: GeneroDeCliente) {
        this.genero = genero
    }
    public setCpf(cpf: CPF) {
        this.cpf = cpf
    }
    public get getCpf(): CPF {
        return this.cpf
    }
    public get getRgs(): Array<RG> {
        return this.rgs
    }
    public getGenero(): GeneroDeCliente {
        return this.genero
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }
    public registrarProdutoConsumido(produto: Produto) {
        this.produtosConsumidos.push(produto)
    }
    public registrarServicoConsumido(servico: Servico) {
        this.servicosConsumidos.push(servico)
    }
}