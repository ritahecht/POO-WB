import { Component } from "react";

type props = {
    tema: string
    seletorView: Function
}

export default class FormularioCadastroServico extends Component<props> {
    
    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="first_name" type="text" className="validate" />
                            <label htmlFor="first_name">nome</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="last_name" type="text" className="validate" />
                            <label htmlFor="last_name">valor</label>
                        </div>
                    </div>
{/*                     
                    <div className="row">
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
                             onClick={(e) => this.props.seletorView('Serviço', e)}
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