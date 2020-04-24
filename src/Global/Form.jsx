import React, {Component} from "react";

class Form extends Component{
    render(){
        return(
            <div>
                <h2>Donen ratas</h2>
                <p>
                    Esta es la pagina web para realizar donaciones en el voluntarioado de
                    ingenieria de la Universidad Catolica de Cordoba. <br />
                    Su propuesta va a ser analizada y luego uno de nuestros representantes
                    va a responderle si fue aprobada o no.
                </p>
                <form>
                    <a>Nombre</a>
                    <input placeholder="Nombre"/>
                    <a>Apellido</a>
                    <input placeholder="Apellido"/>
                    <input placeholder="Direccion"/>
                    <input placeholder="Telefono"/>
                    <input placeholder="Algo mas que quieras poner perreq"/>
                    <input placeholder="Tipo de donacion a"/>
                    <input placeholder="Cantidad ax2"/>
                    <input placeholder="Como se entero opciones"/>
                </form>
                <a href="soyunbotonperrek">Confirmar</a>
            </div>
        );
    }
}

export default Form;