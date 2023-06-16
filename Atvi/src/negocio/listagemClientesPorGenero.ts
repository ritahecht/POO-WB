import Cliente from "../modelo/cliente";
import Listagem from "./base/listagem";

export default class ListagemClientesPorGenero extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes por gênero: `);
        const clientesMasculinos: Array<Cliente> = this.clientes.filter(cliente => cliente.getGenero() === `M`)
        const clientesFeninino: Array<Cliente> = this.clientes.filter(cliente => cliente.getGenero() === `F`)
        const clientesOutro: Array<Cliente> = this.clientes.filter(cliente => cliente.getGenero() === `O`)

        console.log(`\nListagem dos clientes masculinos: `)
        clientesMasculinos.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`Gênero: ` + cliente.getGenero);
            console.log(`--------------------------------------`);
        });

        console.log(`\nListagem dos clientes femininos: `)
        clientesFeninino.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`Gênero: ` + cliente.getGenero);
            console.log(`--------------------------------------`);
        });

        console.log(`\nListagem dos clientes outros: `)
        clientesOutro.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`Gênero: ` + cliente.getGenero);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}

//listagem clientes