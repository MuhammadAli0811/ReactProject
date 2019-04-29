import React from 'react';
import Imgsrc from './Component/images/demo.jpg';


function ContactProps(props){


        return(

            <div>
     <img width="120" src={props.contact.imgUrl} />
   <p> Name :{props.contact.name}</p> 
   <p>Address : {props.contact.Address}</p>
   <p> Cell:{props.contact.phone}</p>
              
  <br/>
  <hr></hr>

            </div>



        )


}

export default ContactProps