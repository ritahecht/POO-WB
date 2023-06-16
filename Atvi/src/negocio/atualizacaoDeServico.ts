import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Atualizacao from "./base/atualizacao";

export default class AtualizacaoDeServico extends Atualizacao {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        console.log(`\nInício da atualização do serviço`);
        console.log(`\nSelecione o serviço`);
        this.servicos.forEach((servico, index) => {
            console.log(`\t${(index)} - ${servico.nome} (R$ ${servico.valor.toFixed(2)})`);
        });
       
        let indiceDoServico = this.entrada.receberNumero(`Por favor, informe o índice do serviço: `)
        let servicoSelecionado = this.servicos[indiceDoServico]
       
        console.log(`Serviço selecionado: ${servicoSelecionado.nome} (R$ ${servicoSelecionado.valor.toFixed(2)})`)
        
        let nome = this.entrada.receberTexto(`Por favor, informe o nome do produto: `)
        servicoSelecionado.setNome(nome)
        console.log(`\nAtualização concluída :)\n`);
    }
}

//atualizar cliente