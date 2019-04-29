import React from 'react'


class LoginApps extends React.Component
{

    constructor()
    {
        super()
        this.state = { login:false}
    }

    render()
    {
        let hold

        if(this.state.login==true)
        {

            hold = "Log In"
        }
        else
        {

            hold = "Log Out"
        }
        return(


            <div>
              <h1>Your Are </h1>
              <br/>
              <p>{hold}</p>
            </div>
        )
    }


}

export default LoginApps