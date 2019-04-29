import React from 'react'
import ContactProps from './ContactProps'

import Imgsrc from './Component/images/demo.jpg';

function Apps2(){

    return(
        <div>
            <ContactProps 
           contact = {{
            imgUrl:Imgsrc,
            name:"Warner",
            phone: "3423423",
            Address:"sdasda"
        }}
            />

<ContactProps 
           contact = {{
            imgUrl:Imgsrc,
            name:"Smith",
            phone: "344444444",
            Address:"sAAAAA"
        }}
            />

        </div>


    )


}

export default Apps2

