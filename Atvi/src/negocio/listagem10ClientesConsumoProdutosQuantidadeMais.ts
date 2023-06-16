import Cliente from "../modelo/cliente";
import Listagem from "./base/listagem";

export default class Listagem10ClientesConsumoProdutosQuantidadeMais extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nListagem dos 10 clientes que mais consumiram produtos ou serviços em quantidade: `);

        const clientesQuantidade = this.clientes.map(cliente => ({
            cliente: cliente,
            quantidade: cliente.getServicosConsumidos.length + cliente.getProdutosConsumidos.length
        }))

        clientesQuantidade.sort((a, b) => b.quantidade - a.quantidade)

        const resultado = clientesQuantidade.slice(0, 10)

        resultado.forEach(resultado => {
            console.log(`\t ${resultado.cliente.nome} consumiu: ${resultado.quantidade} produtos e serviços`)
        })
       
        console.log(`\n`);
    }
}

//listagem 10 clientes consumo produtos quantidade menos