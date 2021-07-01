import React, { useState, useEffect } from 'react';
import './App.css';
import { TextField, Button, Paper } from '@material-ui/core';
import { db } from './firebase_config';
import firebase from 'firebase'
import TodoListItem from './Todo'

function App() {

  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  useEffect(() => {

    getTodos();

  }, []);

  //fetching the data
  const getTodos = () => {
    db.collection("Apptodo").onSnapshot(function (querySnapshot) {

      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          in_progress: doc.data().in_progress
        }
        )
        ))
    })
  }


  //inserting the data
  function addTodo(e) {
    e.preventDefault();

    db.collection("Apptodo").add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    });

    setTodoInput(false);
  }


  return (
    <div className="form__bg">
      <div className="App">

        <h1>Todo App with Firebase</h1>
        <form>
          <TextField id="standard-basic" label="Write Todo"
            onChange={(e) => setTodoInput(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" style={{ marginTop: "12px", marginLeft: "15px" }} onClick={addTodo} >
            Add to do
          </Button>
        </form>
        {
          todos.map((todo) => (
            <TodoListItem todo={todo.todo} in_progress={todo.in_progress} id={todo.id} />
          ))
        }
      </div>



    </div >
  );
}

export default App;
