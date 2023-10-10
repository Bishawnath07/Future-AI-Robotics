import FutureBotics from "./FutureBotics/FutureBotics";
import Organization from "./Organization/Organization";
import Services from "./Services/Services";

const Home = () => {
    return (
        <div className=" ">
            <div className="bg-[#162834] px-5 md:px-0">
                <Organization ></Organization>
            </div>
            <FutureBotics></FutureBotics>
            <Services></Services>
        </div>
    );
};

export default Home;