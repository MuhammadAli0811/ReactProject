import React from 'react'

function DataProps(props)
{

    return(

        <div>
          <input type="checkbox" checked={props.sent.Model}
          
          onChange={()=>  props.HandleMouse(props.sent.id)}
          
          />
          
          
          <input type="text" value={props.sent.Name} 
 />
        </div>
    )
}


export default DataProps