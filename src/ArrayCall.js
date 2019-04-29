import React from "react"

import JokesArray from "./JokesArray";
import Jokes from './jokes'
function ArrayCall()
{

    // const JokesComponenet = JokesArray.map(JOKE => <Jokes key={JOKE.id} info={JOKE} />    )

    const JokesComponenet = JokesArray.map(JOKE => <Jokes key={JOKE.id} name={JOKE.name} contact={JOKE.contact} />    )

    return(

                <div>
                    {JokesComponenet}
                </div>
    )

}

export default ArrayCall