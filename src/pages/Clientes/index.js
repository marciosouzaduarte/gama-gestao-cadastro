import React, { useState } from 'react';
import Header from '../../components/Header';
import * as GS from '../styled.js'; // Global Style
//import * as LS from './styled'; // Local Style
import { Button, Icon } from '@material-ui/core';

export default function Clientes() {
    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    return (
        <>
            <Header />
            <GS.Conteiner>
                <form>
                    <GS.Row className="row">
                        <GS.Col className="col-md-3">
                            <GS.Label>Códio</GS.Label>
                            <GS.InputReadOnly type="text" name="code" value={code} readOnly={true} />
                        </GS.Col>
                    </GS.Row>
                    <GS.Row className="row">
                        <GS.Col className="col-md-6">
                            <GS.Label>Nome</GS.Label>
                            <GS.Input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                        </GS.Col>
                        <GS.Col className="col-md-6">
                            <GS.Label>Email</GS.Label>
                            <GS.Input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </GS.Col>
                    </GS.Row>
                    <GS.Row className="row">
                        <GS.Col className="col-md-6">
                            <GS.Label>Telefone</GS.Label>
                            <GS.Input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </GS.Col>
                        <GS.Col className="col-md-6">
                            <GS.Label>Endereço</GS.Label>
                            <GS.Input type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                        </GS.Col>
                    </GS.Row>
                    <GS.Row className="row">
                        <GS.ColRight className="col-md-12">
                            <Button
                                className="bt-right"
                                variant="contained"
                                color="primary"
                                startIcon={<Icon>circle</Icon>}>
                                Novo
                            </Button>
                            <Button
                                className="bt-right"
                                variant="contained"
                                color="primary"
                                startIcon={<Icon>save</Icon>}>
                                Salvar
                            </Button>
                        </GS.ColRight>
                    </GS.Row>
                </form>
            </GS.Conteiner>
        </>
    )
}