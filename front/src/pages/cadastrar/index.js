import React from "react";
import { ContainerCadastro } from "./styled";
import logo from "../../img/Group11.png";
import barracell from "../../img/Bar2.png";

export const CadastrarPage = () => {
  return(
    <ContainerCadastro >
      <img className="Bar" src={barracell}/>
      <img className="Bar2" src={logo}/>
      <div className="titulo">Olá, boas Vindas ao LabEddit ;)</div>
      <form>
        <input className="Apelido" placeholder="Apelido"></input>
        <br/>
        <input className="E-mail" placeholder="E-mail"></input>
        <br/>
        <input className="password" placeholder="Password"></input>
        <br/>
        <div className="sub">Ao continuar, você concorda com nosso contrato de usuario e nossa politica de privacidade</div>
        <br/>        
        <div className="sub2">Eu concordo em receber emails sobre coisas legais no labeddit</div>
        <button className="cadastrar">Cadastrar</button>
      </form>
      <footer className="footer"></footer>
    </ContainerCadastro>
    
  )
};
