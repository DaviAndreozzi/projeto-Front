import React from "react";
import logo from "../../img/Bar4.png";
import barracell from "../../img/Bar2.png";
import { ContainerComentarios } from "./styled";

export const ComentariosPage = ()=>{
  return(
    <ContainerComentarios>
      <img className="Bar" src={barracell}/>
      <img className="Bar2" src={logo}/>
      <div className="comentario">renderizar a postagem</div>
      <form>
      <input className="resposta" placeholder="Adicionar Comentario"/>
      <button>Responder</button>
      <div className="linha"></div>
      </form>

    <footer></footer>
    </ContainerComentarios>
  )
}