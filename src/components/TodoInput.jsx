import React from 'react'
import { useState } from 'react'

export default function TodoInput(props) {
    const{addTodos, todoValue, setTodoValue} = props
   
  return (
    <header>
        <input placeholder=' Enter things to do..' className='inputField' value={todoValue} onChange={(e)=>{
            setTodoValue(e.target.value)
        }}></input>
        <button className='addButton' onClick={() =>{
            addTodos(todoValue)
            setTodoValue('')
        }}>Add</button>
    </header>
  )
}
