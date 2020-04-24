import React from "react";
import "./css/Web.css";

function Web() {
  return (
    <div id="web">
      <h2>Donen ratas</h2>
      <p>
        Esta es la pagina web para realizar donaciones en el voluntarioado de
        ingenieria de la Universidad Catolica de Cordoba. <br />
        Su propuesta va a ser analizada y luego uno de nuestros representantes
        va a responderle si fue aprobada o no.
      </p>
      <form>
        <a>Nombre</a>
        <input placeholder="Nombre"></input>
        <a>Apellido</a>
        <input placeholder="Apellido"></input>
        <input placeholder="Direccion"></input>
        <input placeholder="Telefono"></input>
        <input placeholder="Algo mas que quieras poner perreq"></input>
        <input placeholder="Tipo de donacion a"></input>
        <input placeholder="Cantidad ax2"></input>
        <input placeholder="Como se entero opciones"></input>
      </form>
      <a href="soyunbotonperrek">Confirmar</a>
    </div>
  );
}

export default Web;
