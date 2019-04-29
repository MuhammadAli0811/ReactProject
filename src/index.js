import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
 import MyInfoo from './Component/MyInfo';

// import Apps from './Apps';
// import Apps from './Apps2';

import ArrayCall from './ArrayCall';

// import MyApps from './Component/TodoApps/MyApps'

import ClassApps from './Component/TodoApps/ClassApps'

import Apps from './Component/State/Apps'

// import Login from './Component/Login/LoginApps'

import MyApps from './Component/ClickMouse/MyApps'


import ButtonApps from './Component/StateButton/ButtonApps'


import CheckApps from './Component/CheckButton/CheckApps'

ReactDOM.render(<CheckApps /> , document.getElementById("root"));

// ReactDOM.render(<ButtonApps/> , document.getElementById("root"));
// ReactDOM.render(<MyApps />,document.getElementById("root"));
// ReactDOM.render(< Login />, document.getElementById("root"));
// ReactDOM.render(<ClassApps/> , document.getElementById("root"));

// ReactDOM.render(<ArrayCall /> ,document.getElementById("root"));

// function Variable(){
        
//     const firstname = 'Muhammad';
//     const lastname = 'Alee';
//     return(
//                 <div>
//           <p>My Name is :  { firstname + " " + lastname}</p>
//           <p>Second type to print   : {`${lastname}`}</p>
       
//           </div>
//               )


// }

// ReactDOM.render(<Variable />, document.getElementById("root"))


// ReactDOM.render(<Apps /> , document.getElementById('root'));


// ReactDOM.render(<MyInfoo />, document.getElementById('root'));


// function MyApp()
// {

//     return(
//         <ul>
//                 <li>Alee</li>
//                 <li>0341</li>

//         </ul>


//     )

// }

// function MyNew()
// {

//     return(
//       <div style={{padding:'50px'}}>

//             <div style={{height:'200px', width:'100px', backgroundColor:'Red'}}>

//             </div>

//                         <br>
                        
//                         </br>
//             <div style={{height:'200px', width:'100px', backgroundColor:'Yellow'}}>

//             </div>
//       </div>


//     )

// }


// ReactDOM.render(<MyApp />,document.getElementById("Root2"));

// ReactDOM.render(<MyNew />,document.getElementById("Root3"));

// ReactDOM.render(<div><br></br><input type="button" name="React" value="React"></input>
// <h1>Hello World</h1></div> , document.getElementById("Root4"));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
