import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Cadastro from "./base/cadastro";

export default class CadastroDeVenda extends Cadastro {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        super()
        this.clientes = clientes
        this.produtos = produtos
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro de venda`);
        console.log(`Selecione o cliente: `);
        this.clientes.forEach((cliente, index) => {
            console.log(`\t${(index)} - ${(cliente.nome)}`);
        })

        let indiceDoCliente = this.entrada.receberNumero(`Informe o índice do cliente: `)
        let clienteSelecionado = this.clientes[indiceDoCliente]

        console.log(`Cliente selecionado: ${clienteSelecionado.nome}`)

        let opcaoDoTipoDeVenda = this.entrada.receberTexto(`Você deseja cadastrar produto (P) ou serviço (S)? `)
        if(opcaoDoTipoDeVenda === `P`) {
            console.log(`Selecione o produto: `)
            this.produtos.forEach((produto, index) => {
                console.log(`\t${(index)} - ${produto.nome} (R$ ${produto.valor.toFixed(2)})`);
            });

            let indiceDoProduto = this.entrada.receberNumero(`Informe o índice do produto: `)
            let produtoSelecionado = this.produtos[indiceDoProduto]
            console.log(`Produto selecionado: ${produtoSelecionado.nome} (R$ ${produtoSelecionado.valor.toFixed(2)})`);

            clienteSelecionado.registrarProdutoConsumido(produtoSelecionado)
        }
        else {
            console.log(`Selecione o serviço: `)
            this.servicos.forEach((servico, index) => {
                console.log(`\t${(index)} - ${servico.nome} (R$ ${servico.valor.toFixed(2)})`);
            });

            let indiceDoServico = this.entrada.receberNumero(`Informe o índice do serviço: `)
            let servicoSelecionado = this.servicos[indiceDoServico]
            console.log(`Serviço selecionado: ${servicoSelecionado.nome} (R$ ${servicoSelecionado.valor.toFixed(2)})`);

            clienteSelecionado.registrarServicoConsumido(servicoSelecionado)
        }

        
        console.log(`\nCadastro de venda concluído com sucesso :)\n`);
    }
}