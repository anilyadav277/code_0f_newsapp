import React, { Component } from 'react'
import {

  Link
} from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
    <>
  
  <nav class="navbar sticky-top  bg-dark navbar-expand-lg bg-dark bg-body-tertiary border-bottom border-body" data-bs-theme="dark">
    <div className="container-fluid">
    <a className="navbar-brand" to="#">9-10</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        <Link className="nav-link active" aria-current="page" to="/business">Businessent</Link>
        <Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link>
        {/* <Link className="nav-link active" aria-current="page" to="/general">General</Link> */}
        <Link className="nav-link active" aria-current="page" to="/health">Health</Link>
        <Link className="nav-link active" aria-current="page" to="/technology">Technology</Link>
        <Link className="nav-link active" aria-current="page" to="/science">Science</Link>
        <Link className="nav-link active" aria-current="page" to="/sports">Sports</Link>
   
       
      </div>
    </div>
  </div>
</nav>
</>
    )
  }
}
