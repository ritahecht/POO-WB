import Cliente, { GeneroDeCliente } from "../modelo/cliente";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Listagem from "./base/listagem";


export default class ListagemProdutosServicosMaisConsumidosPorGenero extends Listagem {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    
    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        super()
        this.clientes = clientes
        this.produtos = produtos
        this.servicos = servicos
    }
    public listar(): void {

        const clientesMasculinos: Array<Cliente> = this.clientes.filter(cliente => cliente.getGenero() === `M`)
        const clientesFeninino: Array<Cliente> = this.clientes.filter(cliente => cliente.getGenero() === `F`)
        const clientesOutro: Array<Cliente> = this.clientes.filter(cliente => cliente.getGenero() === `O`)

        this.listarPorGenero(`M`, clientesMasculinos)
        this.listarPorGenero(`F`, clientesFeninino)
        this.listarPorGenero(`O`, clientesOutro)
    }

    public listarPorGenero(genero: GeneroDeCliente, clientes: Array<Cliente>): void {
        console.log(`\nListagem dos produtos e serviços mais consumidos por gênero ${genero}`);
        const contadorProdutos = this.produtos.map(produto => ({
            produto: produto,
            quantidade: 0
        }))

        const contadorServicos = this.servicos.map(servico => ({
            servico: servico,
            quantidade: 0
        }))

        clientes.forEach(cliente => {
            cliente.getProdutosConsumidos.forEach(produto => {
                const index = contadorProdutos.findIndex(c => c.produto === produto)
                contadorProdutos[index].quantidade++
            })
            cliente.getServicosConsumidos.forEach(servico => {
                const index = contadorServicos.findIndex(c => c.servico === servico)
                contadorServicos[index].quantidade++
            })
        })


        contadorProdutos.sort((a, b) => b.quantidade - a.quantidade)
        contadorServicos.sort((a, b) => b.quantidade - a.quantidade)

        console.log(`Consumo de produtos: `)
        contadorProdutos.forEach(produto => {
            console.log(`\t ${produto.produto.nome} foi consumido ${produto.quantidade} vezes`)
        })
        
        console.log(`Consumo de serviços: `)
        contadorServicos.forEach(servico => {
            console.log(`\t ${servico.servico.nome} foi consumido ${servico.quantidade} vezes`)
        })
    }
}
