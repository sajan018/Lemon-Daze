import Footer from "./footer";
import HeroSection from "./Hero-Section";
import NewArrival from "./New-Arrival-Section";
import ProductList from "./ProductList";
import WhyChooseUs from "./WhyChooseUs";


function Homepage (){
    return(
        <div>
            <HeroSection/>
             <NewArrival/>
            <ProductList/>
            <WhyChooseUs/>
            <Footer/>
        </div>
    )
}
export default Homepage;