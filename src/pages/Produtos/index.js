import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import Header from '../../components/Header';
import * as GS from '../styled.js'; // Global Style
//import * as LS from './styled'; // Local Style
import { Button, Icon } from '@material-ui/core';

export default function Produtos() {

    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [productRepository, setProductRepository] = useState([]);

    // Método para limpar os campos do formulário
    function clear() {
        setCode('');
        setName('');
        setCategory('');
    }

    // Método para salvar os dados do formulário
    function save() {
        if (name === "" || category === "") {
            alert('Todos os campos são obrigatórios');
        } else {
            // Se tiver valor no código edita os dados
            let lsProducts = localStorage.getItem('productsRepo');
            let products = lsProducts != null ? JSON.parse(lsProducts) : [];
            if (products.length > 0 && code !== "") {
                let index = code - 1;
                let product = products[index];
                product[1] = name;
                product[2] = category;
                products[index] = product;
            } else {
                let product = [(products.length + 1), name, category];
                products.push(product);
            }
            localStorage.setItem('productsRepo', JSON.stringify(products));
            clear();
            setProductRepository(products);
            alert("Producte salvo com sucesso!");
        }
    }

    // Seleciona o producte
    function select(index) {
        let lsProducts = localStorage.getItem('productsRepo');
        let products = lsProducts != null ? JSON.parse(lsProducts) : [];
        let product = products.filter((element, i) => {
            return index == i;
        });

        setCode(product[0]);
        setName(product[1]);
        setCategory(product[2]);

        handleClose();
    }

    // Remove o producte do array
    function remove(index) {
        let lsProducts = localStorage.getItem('productsRepo');
        let products = lsProducts != null ? JSON.parse(lsProducts) : [];
        products = products.filter((element, i) => {
            return i != index;
        });
        setProductRepository(products);
        localStorage.setItem('productsRepo', JSON.stringify(products));
    }

    // Modal
    const [show, setShow] = useState(false);
    const handleOpen = () => {
        let lsProducts = localStorage.getItem('productsRepo');
        let products = lsProducts != null ? JSON.parse(lsProducts) : [];
        setProductRepository(products);
        setShow(true);
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
                            <h2>Cadastro de Produtos</h2>
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
                            <GS.Label>Categoria</GS.Label>
                            <GS.Input type="text" name="category" value={category} onChange={(e) => setCategory(e.target.value)} />
                        </GS.Col>
                    </GS.Row>
                    <GS.Row className="row">
                        <GS.Col className="col-md-12">
                            <Button
                                variant="contained"
                                color="secondary"
                                startIcon={<Icon>list</Icon>}
                                onClick={handleOpen}>
                                Listar Produtos
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
                        <Modal.Title>Lista de produtos</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ul>
                            {productRepository.map((repository, index) => {
                                return (
                                    <li key={index}>
                                        <GS.Row className="row">
                                            <GS.Col className="col-md-10">
                                                <a href="#" onClick={select(index)}>
                                                    {repository[0] + " - " + repository[1]}
                                                </a>
                                            </GS.Col>
                                            <GS.Col className="col-md-2">
                                                <a href="#" onClick={remove(index)}>
                                                    Excluir
                                                </a>
                                            </GS.Col>
                                        </GS.Row>
                                    </li>
                                )
                            })}
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