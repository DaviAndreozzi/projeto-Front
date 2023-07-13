import React, { useState } from "react";
import { ContainerPostagem, TodoItem, TodoItemButton, TodoItemText, TodoListContainer } from "./styled"
import logo from "../../img/Bar3.png";
import barracell from "../../img/Bar2.png";
export const PostagemPage = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");

  const addTodo = (event) => {
    event.preventDefault();
    if (todoText.trim() === "") return;
    setTodos([...todos, { text: todoText, completed: false }]);
    setTodoText("");
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const toggleCompleted = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };
  return ( 
    <ContainerPostagem>
      <img className="Bar" src={barracell}/>
      <img className="Bar2" src={logo}/>
      <form onSubmit={addTodo}>
      <input type="text" className="post" placeholder="Escreva seu post aqui" value={todoText} onChange={(e) => setTodoText(e.target.value)}></input>
      <button>Postar</button>
      <div className="linha"></div>
      </form>
      <TodoListContainer>
        {todos.map((todo, index) => (
          <TodoItem key={index}>
            <TodoItemText completed={todo.completed}>{todo.text}</TodoItemText>
            <div>
              <TodoItemButton bgColor="blue" onClick={() => toggleCompleted(index)}>
                Toggle
              </TodoItemButton>

              <TodoItemButton bgColor="red" onClick={() => deleteTodo(index)}>
                Delete
              </TodoItemButton>
            </div>
          </TodoItem>
        ))}
      </TodoListContainer>
      <footer></footer>
    </ContainerPostagem>
    )
}