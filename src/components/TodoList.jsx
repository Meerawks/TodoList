import React from 'react'

export default function TodoList(props) {
    const {todos, deleteTodo, editTodo} = props
  return (
    <ul className='lists'>

      

        {todos.map((todo, todoIndex)=>{
            return (
                <li className='list' key={todo}>{todo}
                <div className='icons'>
                    <button onClick={()=>{
                         editTodo(todoIndex)
                         console.log(todoIndex)
                    }}>
                    <i class="fa-regular fa-pen-to-square"></i>
                    </button>
                    <button onClick={()=>{
                         deleteTodo(todoIndex)
                    }}>
                    <i class="fa-regular fa-square-minus"></i>
                    </button>
               
              
               </div>
                </li>
            )
        })}
    </ul>
  )
}
