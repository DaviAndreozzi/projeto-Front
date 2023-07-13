import styled from "styled-components";

export const ContainerPostagem = styled.div`
  * {
    margin: 0px;
    padding: 0px;
  }

  .Bar {
    width: 375px;
    height: 44px;
    left: 26px;
  }

  .Bar2 {
    width: 428px;
    height: 50px;
    top: 44px;
  }
  .post {
    width: 364px;
    height: 131px;
    margin-top: 40px;
    margin-left: 30px;
    border-radius: 12px;
    border: solid 1px black;
  }
  button {
    width: 360px;
    height: Hug (47px);
    margin-top: 26px;
    margin-left: 30px;
    padding: 12px 145px 12px 145px;
    border-radius: 12px;
    background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
    color: white;
  }

  .linha {
    background: linear-gradient(0deg, orange, orange), linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
    width: 364px;
    height: 2px;
    margin-top: 30px;
    margin-left: 30px;
    border: 1px;
  }

  footer {
    width: 134px;
    height: 5px;
    margin-top: 535px;
    margin-left: 146px;
    background-color: black;

  }
`;

export const TodoListContainer = styled.ul`
  list-style: none;
  margin: 0;
  margin-top: 16px;
  padding: 0;
  width: 100%;
  max-width: 400px;
`;

export const TodoItem = styled.li`
  font-size: 18px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin-bottom: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TodoItemText = styled.span`
  margin-right: 10px;
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
`;

export const TodoItemButton = styled.button`
  font-size: 16px;
  padding: 5px 10px;
  margin-left: 8px;
  border-radius: 5px;
  border: none;
  background-color: ${({ bgColor }) => bgColor};
  color: white;
  cursor: pointer;

  &:active {
    filter: brightness(70%);
  }
`;
