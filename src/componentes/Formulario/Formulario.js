// Formulario.js
import React, { useState } from "react";
import './Formulario.css';
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao/Botao";

const Formulario = ({ secoes, marcas, aoProdutoCadastrado }) => {

    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [secao, setSecao] = useState(secoes[0]);
    const [marca, setMarca] = useState(marcas[0].nome); // Agora só o nome da marca
    const [estado, setEstado] = useState('Novo');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        const marcaSelecionada = marcas.find(m => m.nome === marca);
        aoProdutoCadastrado({
            nome,
            valor,
            secao,
            marca: marcaSelecionada.nome,
            logo: marcaSelecionada.logo,  // Associa a logo correspondente à marca selecionada
            estado,
        });
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Dados do produto:</h2>
                <CampoTexto label="Nome do Produto"
                    placeholder="Digite o nome do produto" 
                    aoAlterado={valor => setNome(valor)} />

                <CampoTexto label="Valor"
                     placeholder="Digite o valor do produto" 
                    aoAlterado={valor => setValor(valor)} />
                    
                <ListaSuspensa label="Seção" itens={secoes} aoAlterado={valor => setSecao(valor)} />
                <ListaSuspensa label="Marca" itens={marcas.map(marca => marca.nome)} aoAlterado={valor => setMarca(valor)} /> {/* Trabalhando apenas com nomes */}
                <div className="checkbox">
                    <label>
                        <input type="checkbox" checked={estado === 'Novo'} onChange={() => setEstado(estado === 'Novo' ? 'Usado' : 'Novo')} />
                        Novo
                    </label>
                    <label>
                        <input type="checkbox" checked={estado === 'Usado'} onChange={() => setEstado(estado === 'Usado' ? 'Novo' : 'Usado')} />
                        Usado
                    </label>
                </div>
                <Botao>Inserir Produto</Botao>
            </form>
        </section>
    );
}

export default Formulario;
