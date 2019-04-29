import React from 'react'

function TodoProps(props)
{

    return(

        <div>

            <input type="checkbox" checked={props.todo.completed} />
            <p>{props.todo.name}</p>


        </div>



    )
}


export default TodoProps