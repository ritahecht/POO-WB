import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaCliente from "./listaCliente";
import ListaProduto from "./listaProduto";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import FormularioAtualizarProduto from "./formularioAtualizarProduto";
import ListaServico from "./listaServico";
import FormularioCadastroServico from "./formularioCadastroServico";
import FormularioAtualizarServico from "./formularioAtualizarServico";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao 
        seletorView={this.selecionarView}
        tema="purple lighten-4" 
        botoes={[
            'Clientes', 
            'Cadastros-Cliente', 
            'Produtos', 
            'Cadastros-Produto',
            'Serviço',
            'Cadastros-Serviço']} />
        if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="purple lighten-4" />
                </>
            )
        } else if (this.state.tela === 'Cadastros-Cliente') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="purple lighten-4" />
                </>
            )
        } else if (this.state.tela === 'Produtos') {
            return (
                <>
                    {barraNavegacao}
                    <ListaProduto tema="purple lighten-4" seletorView={this.selecionarView} />
                </>
            )
        } else if (this.state.tela === 'Cadastros-Produto') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroProduto tema="purple lighten-4" seletorView={this.selecionarView}/>
                </>
            )
        } else if (this.state.tela === 'Atualizar-Produto') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioAtualizarProduto tema="purple lighten-4" seletorView={this.selecionarView}/>
                </>
            )
        } else if (this.state.tela === 'Serviço') {
            return (
                <>
                    {barraNavegacao}
                    <ListaServico tema="purple lighten-4" seletorView={this.selecionarView} />
                </>
            )
        } else if (this.state.tela === 'Cadastros-Serviço') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroServico tema="purple lighten-4" seletorView={this.selecionarView}/>
                </>
            )

    } else if (this.state.tela === 'Atualizar-Serviço') {
        return (
            <>
                {barraNavegacao}
                <FormularioAtualizarServico tema="purple lighten-4" seletorView={this.selecionarView}/>
            </>
        )
}
}
}