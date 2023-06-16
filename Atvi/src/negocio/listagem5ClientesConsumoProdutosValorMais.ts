import Cliente from "../modelo/cliente";
import Listagem from "./base/listagem";

export default class Listagem5ClientesConsumoProdutosValorMais extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nListagem dos 5 clientes que mais consumiram produtos ou serviços em valor: `);

        const clientesValor = this.clientes.map(cliente => ({
            cliente: cliente,
            valor: cliente.getServicosConsumidos.map(s => s.valor).reduce((a, b) => a + b, 0)
                + cliente.getProdutosConsumidos.map(p => p.valor).reduce((a, b) => a + b, 0)
        }))

        clientesValor.sort((a, b) => b.valor - a.valor)

        const resultado = clientesValor.slice(0, 5)

        resultado.forEach(cliente => {
            console.log(`\t ${cliente.cliente.nome} consumiu: ${cliente.valor.toFixed(2)}`)
        })

            console.log(`\n`);
    }
}