import React from "react";
import { ContainerHeader, Title } from "./Header.styled";
import logo from "../img/Group14.png"
import barracell from "../img/StatusBar.png"

export const Header = () => {
  return(
    <ContainerHeader>
      <img className="Barra" src={barracell}/>
      <img className="Logo" src={logo}/>
      <Title>O projeto de rede social Labenu</Title>
      <form>
        <input className="E-mail" placeholder="E-mail"></input>
        <br/>
        <input className="password" placeholder="password"></input>
        <button className="continuar">Continuar</button>
        <div className="linha"></div>
        <button className="conta">Crie uma conta</button>
      </form>
      <footer className="footer"></footer>
    </ContainerHeader>
    
  )
};
