import React from 'react';
import * as MenuStyle from './styled';

export default function Menu() {
    return (
        <div>
            <header>
                <MenuStyle.Row className="row">
                    <MenuStyle.A href="/clientes">
                        <MenuStyle.Button className="btn btn-primary">Cadastro de Clientes</MenuStyle.Button>
                    </MenuStyle.A>
                </MenuStyle.Row>
                <MenuStyle.Row className="row">
                    <MenuStyle.A href="/produtos">
                        <MenuStyle.Button className="btn btn-primary">Cadastro de Produtos</MenuStyle.Button>
                    </MenuStyle.A>
                </MenuStyle.Row>
            </header>
        </div>
    )
}