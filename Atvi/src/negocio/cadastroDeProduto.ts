import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Cadastro from "./base/cadastro";

export default class CadastroDeProduto extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do produto`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `)
        let valor = this.entrada.receberNumero(`Valor: `);
        let produto = new Produto(nome, valor);
        this.produtos.push(produto)
        console.log(`\nCadastro de produto concluído com sucesso :)\n`);
    }
}

//cadastro de cliente