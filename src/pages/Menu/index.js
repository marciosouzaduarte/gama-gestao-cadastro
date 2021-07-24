import React from 'react';
import * as Style from './styled'

export default function Menu() {
    return (
        <div>
            <header>
                <Style.Row className="row">
                    <Style.A href="/clientes">
                        <Style.Button className="btn btn-primary">Cadastro de Clientes</Style.Button>
                    </Style.A>
                </Style.Row>
                <Style.Row className="row">
                    <Style.A href="/produtos">
                        <Style.Button className="btn btn-primary">Cadastro de Produtos</Style.Button>
                    </Style.A>
                </Style.Row>
            </header>
        </div>
    )
}