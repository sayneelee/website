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
<<<<<<< HEAD
      <section id="HeroContainer">
         <div id="-container">
            <button href="#">Request a Appointment</button>
=======
      <section id="HeroImage">
         <div>
            <img src="heroimage.jpg"/>
            <div id="hilink-container">
                <a href="#">Request a Appointment</a>
            </div>
>>>>>>> c2c5c3fa93b3a14e742eaeb8be84d8d317f072db
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

<<<<<<< HEAD
const TaxRateMenu = function ({ active }) {
    let a, b, c, d, e;
    a = b = c = d = e = "item inactive"
    switch (active) {
        case "Single":
            a = "item active"
            break
        case "Maried Filing Jointly & Surviving Spouses":
            b = "item active"
            break
        case "Married Filing Separately":
            c = "item active"
            break
        case "Head of Household":
            d = "item active"
            break
        case "Estate & Trusts":
            e = "item active"
            break
    }

    return (
      <section id="TaxRateMenu">
        <h4>Tax Rates</h4>
        <table>
            <thead>
                <nav className="taxratenav">
                    <div className="">
                        <a className={a} href="#">Single</a>
                        <a className={b} href="#">Married Filing Jointly
                        & Surviving Spouses</a>
                        <a className={c} href="#">Married Filing Separately</a>
                        <a className={d} href="#">Head of Household</a>
                        <a className={e} href="#">Estate & Trusts</a>
                    </div>
                </nav>
            </thead>
            <tbody>
                <tr>
                   <td>10%</td>
                   <td>0 to $9,275</td>
                </tr>
                <tr>
                   <td>15%</td>
                   <td>$9,275 to $37,650</td>
                </tr>
                <tr>
                   <td>25%</td>
                   <td>$37,650 to $91,150</td>
                </tr>
                <tr>
                   <td>28%</td>
                   <td>$91,150 to $190,150</td>
                </tr>
                <tr>
                   <td>33%</td>
                   <td>$190,150 to $413,350</td>
                </tr>
                <tr>
                   <td>35%</td>
                   <td>$413,350 to $415,050</td>
                </tr>
                <tr>
                   <td>39.6%</td>
                   <td>Over $415,050</td>
                </tr>
                <tr>
                    <td>10%</td>
                    <td>0 to $18,550</td>
                </tr>
                <tr>
                   <td>15%</td>
                   <td>$18,550 to $75,300</td>
                </tr>
                <tr>
                   <td>25%</td>
                   <td>$75,300 to $151,900</td>
                </tr>
                <tr>
                   <td>28%</td>
                   <td>$151,900 to $231,450</td>
                </tr>
                <tr>
                   <td>33%</td>
                   <td>$231,450 to $413,350</td>
                </tr>
                <tr>
                   <td>35%</td>
                   <td>$413,350 to $466,950</td>
                </tr>
                <tr>
                   <td>39.6%</td>
                   <td>Over $466,950</td>
                </tr>
                <tr>
                   <td>10%</td>
                   <td>0 to $9,275</td>
                </tr>
                <tr>
                   <td>15%</td>
                   <td>$9,275 to $37,650</td>
                </tr>
                <tr>
                   <td>25%</td>
                   <td>$75,950 to $115,725</td>
                </tr>
                <tr>
                   <td>28%</td>
                   <td>$115,725 to $206,675</td>
                </tr>
                <tr>
                   <td>33%</td>
                   <td>$206,675 to $233,475</td>
                </tr>
                <tr>
                   <td>35%</td>
                   <td>$206,675 to $233,475</td>
                </tr>
                <tr>
                   <td>39.6%</td>
                   <td>Over $233,475</td>
                </tr>
                <tr>
                   <td>10%</td>
                   <td>0 to $13,250</td>
                </tr>
                <tr>
                   <td>15%</td>
                   <td>$13,250 to $50,400</td>
                </tr>
                <tr>
                   <td>25%</td>
                   <td>$50,400 to $130,150</td>
                </tr>
                <tr>
                   <td>28%</td>
                   <td>$130,150 to $210,800</td>
                </tr>
                <tr>
                   <td>33%</td>
                   <td>$210,800 to $413,350</td>
                </tr>
                <tr>
                   <td>35%</td>
                   <td>$413,350 to $441,000</td>
                </tr>
                <tr>
                   <td>39.6%</td>
                   <td>Over $441,000</td>
                </tr>
                <tr>
                   <td>10%</td>
                   <td>0 to $2,550</td>
                </tr>
                <tr>
                   <td>25%</td>
                   <td>$2,550 to $5,950</td>
                </tr>
                <tr>
                   <td>28%</td>
                   <td>$5,950 to $9,050</td>
                </tr>
                <tr>
                   <td>33%</td>
                   <td>$9,050 to $12,400</td>
                </tr>
                <tr>
                   <td>39.6%</td>
                   <td>Over $12,400</td>
                </tr>
            </tbody>
        </table>
      </section>
    )
}

=======
>>>>>>> c2c5c3fa93b3a14e742eaeb8be84d8d317f072db
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
