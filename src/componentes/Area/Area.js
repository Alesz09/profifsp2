import React from "react";
import './Area.css';

const Area = (props) => {

    const corDeFundo = { backgroundColor : props.corSecundaria }
    const corSublinhado = { borderColor : props.corPrimaria }

	return (
            
        <section className="area" style={ corDeFundo } >
            <h3 style={ corSublinhado }>{props.nome}</h3>
        </section>

	)
}

export default Area;

