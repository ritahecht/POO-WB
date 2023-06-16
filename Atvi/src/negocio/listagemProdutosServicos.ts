import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Listagem from "./base/listagem";

export default class ListagemProdutosServicos extends Listagem {
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    constructor(produtos: Array<Produto>, servicos: Array<Servico>) {
        super()
        this.produtos = produtos
        this.servicos = servicos
    }
    public listar(): void {
        console.log(`\nLista de todos os produtos e serviços: `);

        console.log(`Produtos: `)

        this.produtos.forEach((produto, index) => {
            console.log(`\t ${(index + 1)} - ${produto.nome} (R$ ${produto.valor.toFixed(2)}`);
       
        });

        console.log(`Serviçs: `)

        this.servicos.forEach((servico, index) => {
            console.log(`\t ${(index + 1)} - ${servico.nome} (R$ ${servico.valor.toFixed(2)}`);
       
        });

        console.log(`\n`);
    }
}