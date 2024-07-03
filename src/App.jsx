
import './App.css'
import TodoInput from './components/TodoInput'
import TodoCard from './components/TodoCard'
import TodoList from './components/TodoList'
import { useState } from 'react'

function App() {

   const [todos, setTodos]=useState([])
   const[todoValue,setTodoValue]=useState('')

      function addTodos (newTodo){
        const updatedTodoList= [...todos,newTodo]
        console.log(updatedTodoList)
        setTodos(updatedTodoList)
      }
      function deleteTodo(index){
        const newTodoList=todos.filter((todo, todoIndex)=>{
          return todoIndex!=index
        })
        setTodos(newTodoList)
      }
      function editTodo(index){
        const editedValue=todos[index]
        setTodoValue(editedValue)
        deleteTodo(index)
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
