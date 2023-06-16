import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Atualizacao from "./base/atualizacao";

export default class AtualizacaoDeProduto extends Atualizacao {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        console.log(`\nInício da atualização do produto`);
        console.log(`\nSelecione o produto`);
        this.produtos.forEach((produto, index) => {
            console.log(`\t${(index)} - ${produto.nome} (R$ ${produto.valor.toFixed(2)})`);
        });
        let indiceDoProduto = this.entrada.receberNumero(`Por favor, informe o índice do produto: `)
        let produtoSelecionado = this.produtos[indiceDoProduto]
        console.log(`Produto selecionado: ${produtoSelecionado.nome} (R$ ${produtoSelecionado.valor.toFixed(2)})`)
        let nome = this.entrada.receberTexto(`Por favor, informe o nome do produto: `)
        produtoSelecionado.setNome(nome)
        console.log(`\nAtualização concluída :)\n`);
    }
}

//atualizar cliente