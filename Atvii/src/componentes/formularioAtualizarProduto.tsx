import { Component } from "react";

type props = {
    tema: string
    seletorView: Function
}

type state = {
    nome: string
    valor: string
}

export default class FormularioAtualizarProduto extends Component<props, state> {

    constructor(props: props){
        super(props)
        this.state = {
            nome: "",
            valor: ""
        }
    }
    
    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="first_name" 
                            type="text" 
                            className="validate"
                            value={this.state.nome}
                            onChange={(e) => this.setState({ nome: e.target.value })}
                             />
                            <label htmlFor="first_name">nome</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="last_name" 
                            type="text" 
                            className="validate"
                            value={this.state.valor}
                            onChange={(e) => this.setState({ valor: e.target.value })}
                             />
                            <label htmlFor="last_name">valor</label>
                        </div>
                    </div>

                    {/* <div className="row">
                        <div className="input-field col s6">
                            <input id="telefone" type="text" className="validate" />
                            <label htmlFor="telefone">telefone</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="email" type="email" className="validate" />
                            <label htmlFor="email">e-mail</label>
                        </div>
                    </div> */}


                    <div className="row">
                        <div className="col s12">
                            <button className={estiloBotao} 
                            type="submit" 
                            name="action"
                            onClick={(e) => this.props.seletorView('Produtos', e)}
                            >Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}