import 'react';
import Hero from './HeroSec';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../Openaccount';
import Navbar from '../Navbar';
import Footer from '../Fotter';
function Homepage(){
    return(
        <>
        <Navbar/>
         <Hero/>
         <Awards/> 
         <Stats/>
         <Pricing/>
         <Education/>
         <OpenAccount/>
         <Footer/>
        </>
    );
}
export default Homepage;