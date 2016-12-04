import React                         from 'react'
import ReactDOM                      from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import './css/custom.sass'

// -----------------------------------------------------------------------------
// Components

const TopMenu = function({ active }) {
   let a, b, c, d;
   a = b = c = d = "item inactive"

   switch (active) {
      case "home":
         a = "item active"
         break
      case "services":
         b = "item active"
         break
      case "tax-preparation":
         c = "item active"
         break
      case "about-us":
         d = "item active"
         break
   }

   return (
      <header id="TopMenuContainer">
         <nav className="nav">
            <div className="left-logo">
               <a className={a} href="#">
                  <i className="material-icons">home</i>
                  <span>|</span>
                  <span>Howard Y. Lee CPA</span>
               </a>
            </div>
            <div className="right-menu">
               <a className={b} href="#">Services</a>
               |
               <a className={c} href="#">Tax Preparation</a>
               |
               <a className={d} href="#">About Us</a>
            </div>
         </nav>
      </header>
   )
}

const Content = function() {
   return (
      <section id="Content-Container">
         <div id="button-container">
            <button href="#">Request a Appointment</button>
         </div>
      </section>
   )
}

const Footer = function() {
   return (
      <footer>
         <address>
            <ul>
               <li>Howard Y. Lee, CPA</li>
               <li>1208 E Arques Avenue, Suite 111</li>
               <li>
                  Sunnyvale, CA 95051
                  <a className="fa fa-map-marker" href="https://goo.gl/maps/mjnFnPJjQir"></a>
               </li>
               <li>(408) 481-0477</li>
            </ul>
         </address>
      </footer>
   )
}

//------------------------------------------------------------------------------
// View

function RootView() {
   return (
      <main>
         <TopMenu active="home" />
         <Content />
         <Footer />
      </main>
   )
}

// -----------------------------------------------------------------------------
// Render

ReactDOM.render(
   (
      <Router>
         <Route path="/" component={App} />
      </Router>
   ),
   document.getElementById('app')
)
