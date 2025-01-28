import Navbar from "../Navbar";
import Card from "../components/Card";
import ShoeCollection from "../components/Shoe";
import SCards from "../components/SCards";
import SingleCard from "../components/SingleCard";
import Players  from "../components/PlayersBG";
import PlayerDb from "../components/PlayerDb";

const Home = ()=>{
    return( 
        <div>
            <Navbar/>
            <Card/>
            <ShoeCollection/>
            <SCards/>
            <SingleCard/> 
            <Players/>
            <PlayerDb/>
        </div>
    )
}
export default Home; 
