import HeroSection from "./Hero-Section.jsx";
import NewArrival from "./New-Arrival-Section.jsx";
import ProductList from "./ProductList.jsx";
import WhyChooseUs from "./WhyChooseUs.jsx";


function Homepage (){
    return(
        <div>
            <HeroSection/>
             <NewArrival/>
            <ProductList/>
            <WhyChooseUs/>
        </div>
    )
}
export default Homepage;