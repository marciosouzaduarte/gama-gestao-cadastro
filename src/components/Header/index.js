import React from 'react';
import * as Style from './styled'

export default function Header() {
    return (
        <Style.Row>
            <Style.A href="/">
                <Style.Button className="btn btn-primary">Voltar</Style.Button>
            </Style.A>
        </Style.Row>
    )
}