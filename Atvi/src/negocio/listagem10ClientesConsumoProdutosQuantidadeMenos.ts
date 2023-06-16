import Cliente from "../modelo/cliente";
import Listagem from "./base/listagem";

export default class Listagem10ClientesConsumoProdutosQuantidadeMenos extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nListagem dos 10 clientes que menos consumiram produtos ou serviços em quantidade: `);

        const clientesQuantidade = this.clientes.map(cliente => ({
            cliente: cliente,
            quantidade: cliente.getServicosConsumidos.length + cliente.getProdutosConsumidos.length
        }))

        clientesQuantidade.sort((a, b) => a.quantidade - b.quantidade)

        const resultado = clientesQuantidade.slice(0, 10)

        resultado.forEach(resultado => {
            console.log(`\t ${resultado.cliente.nome} consumiu: ${resultado.quantidade} produtos e serviços`)
        })
       
        console.log(`\n`);
    }
}

//listagem clientes por genero