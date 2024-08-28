// Produto.js
import React from "react";
import './Produto.css';

const Produto = ({ nome, valor, marca, secao, estado, logo }) => {
    return (
        <div className="produto">
            <div className="rodape">
                <img 
                    src={logo} 
                    alt={`${marca} logo`} 
                    className="logo"  // Classe CSS para estilização
                />
                <h4>{nome}</h4>
                <h5>Marca: {marca}</h5>
                <h5>Seção: {secao}</h5>
                <h5>Estado: {estado}</h5>
                <h5>Valor: R$ {valor}</h5>
            </div>
        </div>
    );
}

export default Produto;
