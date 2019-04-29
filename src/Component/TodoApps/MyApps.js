import React from 'react'
import TodoArray from './TodoArray'
import TodoProps from './TodoProps'

function MyApps()
{
  const val =  TodoArray.map(item =>   <TodoProps key={item.id}  todo={item}/>)

    return(


            <div>
                {val}
            </div>


    )
}


export default MyApps