import React from 'react'

class ButtonApps extends React.Component
{

    constructor()
    {
        super()
        this.state = { val : 0}



        //Comment Session is print to string rtpe of data

        // this.state = { val : "Hello wOrld" }


        this.HandleClick = this.HandleClick.bind(this)
    }

    HandleClick()
    {

        // this.setState({val: 'Hi Guyz' })
       this.setState(Myval => {
           return{
               val : Myval.val +1
           }
       })
        }
  render()
  {
      return(
          <div >
          {this.state.val}
          <p>------------------</p>
          <button class="btn btn-outline-warning"  onClick={this.HandleClick}>   Click Me  </button>
          
          </div>
      )
  }
}


export default ButtonApps