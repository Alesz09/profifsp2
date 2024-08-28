// Area.js
import React from "react";
import './Area.css';
import Produto from '../Produto/Produto';

const Area = ({ nome, corPrimaria, corSecundaria, produtos }) => {

  const css = { backgroundColor: corSecundaria }

  return (
    produtos.length > 0 && <section className="area" style={css}>
      <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
      <div className="produtos">
        {produtos.map((produto, index) => (
          <Produto 
            key={index}
            nome={produto.nome}
            valor={produto.valor}
            marca={produto.marca}
            logo={produto.logo}  // Passando a logo para o componente Produto
            secao={produto.secao}
            estado={produto.estado}
          />
        ))}
      </div>
    </section>
  )
}

export default Area;
