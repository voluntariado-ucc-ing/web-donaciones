import React, { Component } from "react";
import "./css/Form.css";
class Form extends Component {
  render() {
    return (
      <div>
        <h2>Donen</h2>
        <p>
          Esta es la pagina web para realizar donaciones en el voluntarioado de
          ingenieria de la Universidad Catolica de Cordoba. <br />
          Su propuesta va a ser analizada y luego uno de nuestros representantes
          va a responderle si fue aprobada o no.
        </p>
        <form id="formulario">
          <h5>Donacion</h5>
          <ul>
            <li id="nombreCompleto">
              <a className="acincuenta" for="name">
                Nombre
              </a>
              <a className="acincuenta">Apellido</a>
              <br />
              <input type="text"></input>
              <input type="text"></input>
            </li>
            <li>
              <a className="titles">Teléfono</a>
              <input
                id="telefono"
                type="tel"
                placeholder="Teléfono 351 XXX XXXX"
              ></input>
            </li>
            <li>
              <a className="titles">Mail</a>
              <input type="email" placeholder="e-Mail"></input>
            </li>
            <li>
              <a className="titles">Su consulta</a>
              <textarea for="msg" id="consulta"></textarea>
            </li>
            <li>
              <input placeholder="Direccion" />
            </li>
            <li>
              <input placeholder="Tipo de donacion a" />
            </li>
            <li>
              {" "}
              <input placeholder="Cantidad ax2" />
            </li>
            <li>
              {" "}
              <input placeholder="Como se entero opciones" />
            </li>
          </ul>
          <a id="enviar" href="">
            Enviar
          </a>
        </form>
      </div>
    );
  }
}

export default Form;
