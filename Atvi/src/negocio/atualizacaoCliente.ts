import Entrada from "../io/entrada";
import Cliente, { GeneroDeCliente } from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Atualizacao from "./base/atualizacao";

export default class AtualizacaoCliente extends Atualizacao {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        console.log(`\nInício da atualização do cliente`);
        console.log(`\nSelecione o cliente`);
        this.clientes.forEach((cliente, index) => {
            console.log(`\t${(index)} - ${(cliente.nome)}`);
        })

        let indiceDoCliente = this.entrada.receberNumero(`Por favor, informe o nome do cliente: `)
        let clienteSelecionado = this.clientes[indiceDoCliente]
        console.log(`Cliente selecionado: ${clienteSelecionado.nome}`)

        let nome = this.entrada.receberTexto(`Por favor, informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor, informe o nome social do cliente: `)
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let genero = this.entrada.receberTexto(`Informe o gênero (M, F, ou O): `) as GeneroDeCliente
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);

        clienteSelecionado.setNome(nome)
        clienteSelecionado.setNomeSocial(nomeSocial)
        clienteSelecionado.setCpf(cpf)
        clienteSelecionado.setGenero(genero)
        console.log(`\nAtualização concluída :)\n`);
    }
}

//cadastro cliente