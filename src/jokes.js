import React from 'react'

function Jokes(props)
{

return(

        <div>
                <h1>Name : {props.name}</h1>
                <p> Contact : {props.contact}</p>
                {/* <p> Contact : {props.info.contact}</p> */}

        </div>



)

}

export default Jokes