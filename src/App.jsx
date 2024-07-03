
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import React, { useState, useEffect } from 'react'

function App() {

    
   const [todos, setTodos]=useState([])
   const[todoValue,setTodoValue]=useState('')

      function addTodos (newTodo){
        const updatedTodoList= [...todos,newTodo]
        persistTodo(updatedTodoList)
        console.log(updatedTodoList)
        setTodos(updatedTodoList)
      }
      function deleteTodo(index){
        const newTodoList=todos.filter((todo, todoIndex)=>{
          return todoIndex!=index
        })
        persistTodo(newTodoList)
        setTodos(newTodoList)
      }
      function editTodo(index){
        const editedValue=todos[index]
        setTodoValue(editedValue)
        deleteTodo(index)
      }
      useEffect(()=>{
        if(!localStorage){
          return
          }
          let localTodo=JSON.parse(localStorage.getItem('localTodo'))
          if(!localTodo){
            return
          }
          setTodos(localTodo)
      },[])

     function persistTodo(newList){
        localStorage.setItem('localTodo', JSON.stringify(newList));
        console.log("Todos: ", newList)
      }


  

  return (
    <>
    <h1>Todo List</h1>
      <TodoInput addTodos={addTodos}  todoValue={todoValue} setTodoValue={setTodoValue}/>
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo}/>
    </>
  )
}

export default App
