/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'


type props = {
    tema: string
    seletorView: Function
}

export default class ListaServico extends Component<props> {
    render() {
        let estilo = `collection-item active ${this.props.tema}`
        return (
            <div className="collection">
                <a className="collection-item" onClick={(e) => this.props.seletorView
                    ('Atualizar-Serviço', e)}>Serviço 1 - R$ 30,00</a>
                <a className="collection-item" onClick={(e) => this.props.seletorView
                    ('Atualizar-Serviço', e)}>Serviço 2 - R$ 35,00</a>
                <a className="collection-item" onClick={(e) => this.props.seletorView
                    ('Atualizar-Serviço', e)}>Serviço 3 - R$ 40,00</a>
                <a className="collection-item" onClick={(e) => this.props.seletorView
                    ('Atualizar-Serviço', e)}>Serviço 4 - R$ 45,00</a>
            </div>
        )
    }
}