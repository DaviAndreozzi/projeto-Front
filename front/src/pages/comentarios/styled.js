import styled from "styled-components";

export const ContainerComentarios = styled.div`
  * {
    margin: 0px;
    padding: 0px;
  }

  .comentario {
    width: 364px;
    height: 131px;
    margin-top: 26px;
    margin-left: 30px;
    border-radius: 12px;
    border: solid 1px black;
    border: 1px solid #E0E0E0
  }
  .resposta{
    width: 364px;
    height: 131px;
    margin-top: 20px;
    margin-left: 30px;
    border-radius: 12px;
    background: #ededed;
    border: solid 1px black;
  }
  button{
    width: 365px;
    height: Hug (51px);
    margin-top: 20px;
    margin-left: 32px;
    padding: 13px 133px 13px 133px;
    border-radius: 27px;
    gap: 10px;
    color: white;
    background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  }
  .linha{
    background: linear-gradient(0deg, orange, orange), linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
    width: 363px;
    height: 2px;
    margin-top: 33px;
    margin-left: 33px;
    border: 1px;
  }
  footer {
    width: 134px;
    height: 5px;
    margin-top: 400px;
    margin-left: 135px;
    background-color: black;
  }
`;
