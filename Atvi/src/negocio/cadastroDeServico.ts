import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Cadastro from "./base/cadastro";

export default class CadastroDeServico extends Cadastro {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do Serviço`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do Serviço: `)
        let valor = this.entrada.receberNumero(`Valor: `);
        let servico = new Servico(nome, valor);
        this.servicos.push(servico)
        console.log(`\nCadastro de Serviço concluído com sucesso :)\n`);
    }
}

//cadastro de produto