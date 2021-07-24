import React from 'react';
import { SwitchCase, Route, BrowserRouter } from 'react-router-dom';

import Menu from './pages/Menu'
import Clientes from './pages/Clientes'
import Produtos from './pages/Produtos'

export default function Routes() {
    return (
        <BrowserRouter>
            <switch>
                <Route path="/" exact component={Menu} />
                <Route path="/clientes" component={Clientes} />
                <Route path="/produtos" component={Produtos} />
            </switch>
        </BrowserRouter>
    )
}