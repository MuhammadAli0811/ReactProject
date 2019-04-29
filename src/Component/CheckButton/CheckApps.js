import React from 'react'
import DataProps from './DataProps'
import ArrayData from './ArrayData'



class CheckApps extends React.Component
{

    constructor()
    {
        super()
        this.state = {  val : ArrayData}
        this.HandleMouse = this.HandleMouse.bind(this);
        this.state = { val : '-'}
    }

    HandleMouse(id)
    {

      // console.log("Changed", id)

       this.setState({val: id})

 
    }


    render(){
        const SavaVal = ArrayData.map(item => <DataProps key={item.id} sent= {item} HandleMouse={this.HandleMouse} />)

        return(
            <div>
           <h1>{SavaVal}</h1>
            <h1>{this.state.val}</h1>
         
        </div>
        )
    }


}

export default CheckApps