import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
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
    const [clientRepository, setClientRepository] = useState([]);

    useEffect(() => {
        let lsClients = localStorage.getItem('clientsRepo');
        let clients = lsClients != null && lsClients.length > 0 ? JSON.parse(lsClients) : [];
        setClientRepository(clients);
    }, []);

    // Método para limpar os campos do formulário
    function clear() {
        setCode('');
        setName('');
        setEmail('');
        setPhone('');
        setAddress('');
    }

    // Método para salvar os dados do formulário
    function save() {
        if (name === "" || email === "" || phone === "" || address === "") {
            alert('Todos os campos são obrigatórios');
        } else {
            let re = /\S+@\S+\.\S+/;
            if (!re.test(email)) {
                alert('Email inválido');
            } else {
                // Se tiver valor no código edita os dados
                let lsClients = localStorage.getItem('clientsRepo');
                let clients = lsClients != null && lsClients.length > 0 ? JSON.parse(lsClients) : [];
                if (clients.length > 0 && code !== "") {
                    let index = code - 1;
                    let client = clients[index];
                    client[1] = name;
                    client[2] = email;
                    client[3] = phone;
                    client[4] = address;
                    clients[index] = client;
                } else {
                    let client = [(clients.length + 1), name, email, phone, address];
                    clients.push(client);
                }
                localStorage.setItem('clientsRepo', JSON.stringify(clients));
                clear();
                setClientRepository(clients);
                alert("Cliente salvo com sucesso!");
            }
        }
    }

    // Seleciona o cliente
    function select(index) {
        let lsClients = localStorage.getItem('clientsRepo');
        let clients = lsClients != null && lsClients.length > 0 ? JSON.parse(lsClients) : [];
        let client = clients.filter((element, i) => {
            return index == i;
        });

        setCode(client[0][0]);
        setName(client[0][1]);
        setEmail(client[0][2]);
        setPhone(client[0][3]);
        setAddress(client[0][4]);

        handleClose();
    }

    // Remove o cliente do array
    function remove(index) {
        let lsClients = localStorage.getItem('clientsRepo');
        let clients = lsClients != null && lsClients.length > 0 ? JSON.parse(lsClients) : [];
        clients = clients.filter((element, i) => {
            return i != index;
        });
        setClientRepository(clients);
        localStorage.setItem('clientsRepo', JSON.stringify(clients));
    }

    // Modal
    const [show, setShow] = useState(false);
    const handleOpen = () => {
        setShow(true);
        let lsClients = localStorage.getItem('clientsRepo');
        let clients = lsClients != null && lsClients.length > 0 ? JSON.parse(lsClients) : [];
        setClientRepository(clients);
    };
    const handleClose = () => {
        setShow(false)
    };
    //const handleShow = () => setShow(true);

    return (
        <>
            <Header />
            <GS.Conteiner>
                <form>
                    <GS.Row className="row">
                        <GS.Col className="col-md-12">
                            <h2>Cadastro de Clientes</h2>
                        </GS.Col>
                    </GS.Row>
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
                        <GS.Col className="col-md-12">
                            <Button
                                variant="contained"
                                color="secondary"
                                startIcon={<Icon>list</Icon>}
                                onClick={handleOpen}>
                                Listar Clientes
                            </Button>
                            <Button
                                className="bt-right"
                                variant="contained"
                                color="primary"
                                startIcon={<Icon>circle</Icon>}
                                onClick={(e) => clear()}>
                                Limpar
                            </Button>
                            <Button
                                className="bt-right"
                                variant="contained"
                                color="primary"
                                startIcon={<Icon>save</Icon>}
                                onClick={(e) => save()}>
                                Salvar
                            </Button>
                        </GS.Col>
                    </GS.Row>
                </form>
            </GS.Conteiner>
            <GS.Conteiner>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Lista de clientes</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ul>
                            {(clientRepository || []).map((repository, index) => (
                                <li key={index}>
                                    <GS.Row className="row">
                                        <GS.Col className="col-10">
                                            <a href="#" onClick={() => select(index)}>
                                                {repository[0] + " - " + repository[1]}
                                            </a>
                                        </GS.Col>
                                        <GS.Col className="col-2">
                                            <a href="#" onClick={() => remove(index)}>
                                                Excluir
                                            </a>
                                        </GS.Col>
                                    </GS.Row>
                                </li>
                            ))}
                        </ul>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<Icon>close</Icon>}
                            onClick={(e) => handleClose()}>
                            Fechar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </GS.Conteiner>
        </>
    )
}