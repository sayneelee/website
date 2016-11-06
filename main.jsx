import React           from 'react'
import ReactDOM        from 'react-dom'
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

const HeroImage = function() {
   return (
      <section id="HeroContainer">
         <div id="-container">
            <button href="#">Request a Appointment</button>
            <img src=""/>
            <div id="hilink-container">
                <a href="#">Request a Appointment</a>
            </div>
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
               <li>Sunnyvale, CA 95051 <a className="fa fa-map-marker"
               aria-hidden="true" href="https://goo.gl/maps/mjnFnPJjQir">
               </a></li>
               <li>(408) 481-0477</li>
            </ul>
         </address>
         <div id="hourslist-container">
            <div>
               <ul>
                  <li>M 9-5 PM</li>
                  <li>T 9-5 PM</li>
                  <li>W 9-5 PM</li>
                  <li>Th 9-5 PM</li>
                  <li>F 9-5 PM</li>
               </ul>
            </div>
         </div>
      </footer>
   )
}

//------------------------------------------------------------------------------
// View

function RootView() {
   return (
      <main>
         <TopMenu active="home" />
         <HeroImage/>
         <Footer/>
      </main>
   )
}

// -----------------------------------------------------------------------------
// Render

ReactDOM.render(
   <RootView />,
   document.getElementById('app')
)
