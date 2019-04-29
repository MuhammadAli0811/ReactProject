import React from "react"

class Apps extends React.Component
{

    constructor()
    {

       super()
       this.state = {
           Answer : "My Name is ALee"
       }


    }

    render()
    {

        return(


            <div>
            
            <h2>What is your name <br/></h2>
            <p> {this.state.Answer} </p>
            </div>
        )
    }
}


export default Apps