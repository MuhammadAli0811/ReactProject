import React from 'react'

function Header()
{

    return(
            
        <nav className="navbar navbar-light bg-light">
  <a className="navbar-brand">React Js</a>
  <form className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" ></input>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
    )
}

// style={{backgroundColor:'Orange',color:'White', width:'100%', height:'50px', textAlign:'center',fontSize:'30px'}}

export default Header