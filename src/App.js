// App.js
import React, { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario/Formulario";
import Area from "./componentes/Area/Area";

function App() {

  const secoes = [
    { 
      nome: 'Computadores', 
      corPrimaria: '#57c278', 
      corSecundaria: '#d9f7e9'
    },
    {
       nome: 'Acessórios', 
      corPrimaria: '#82cffa', 
      corSecundaria: '#e8f8ff' 
    },
    { 
      nome: 'Impressoras', 
      corPrimaria: '#a6d157', 
      corSecundaria: '#f0f8e2' 
    },
    { 
      nome: 'Jogos', 
      corPrimaria: '#e06b69', 
      corSecundaria: '#fde7e8' 
    },
    { 
      nome: 'Gadgets', 
      corPrimaria: '#db8b4a', 
      corSecundaria: '#fdf4e3' 
    }
  ];

  const marcas = [
    { nome: "HP", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/2048px-HP_logo_2012.svg.png" },
    { nome: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/1024px-Dell_logo_2016.svg.png" },
    { nome: "Positivo", logo: "https://seeklogo.com/images/P/positivo-logo-809BA29955-seeklogo.com.png" },
    { nome: "Asus", logo: "https://w7.pngwing.com/pngs/639/845/png-transparent-asus-flat-brand-logo-icon.png" }
];


  const [produtos, setProdutos] = useState([]);

  const adicionaProduto = (produto) => {
    setProdutos([...produtos, produto]);
  }

  return (
    <div>
      <Banner />
      <Formulario secoes={secoes.map(secao => secao.nome)} marcas={marcas} aoProdutoCadastrado={produto => adicionaProduto(produto)} />
      {secoes.map(secao => (
        <Area 
          key={secao.nome}
          nome={secao.nome}
          corPrimaria={secao.corPrimaria}
          corSecundaria={secao.corSecundaria}
          produtos={produtos.filter(produto => produto.secao === secao.nome)}
        />
      ))}
    </div>
  );
}

export default App;
