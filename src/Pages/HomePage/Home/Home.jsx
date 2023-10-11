import FAQ from "./FAQ/FAQ";
import FreeTrial from "./FreeTrial/FreeTrial";
import FutureBotics from "./FutureBotics/FutureBotics";
import LatestProject from "./LatestProject/LatestProject";
import Organization from "./Organization/Organization";
import Services from "./Services/Services";

const Home = () => {
    return (
        <div className=" ">
            <div className="bg-[#162834] overflow-hidden px-5 md:px-0" >
                <Organization ></Organization>
            </div>
            <FutureBotics></FutureBotics>
            <Services></Services>
            <LatestProject></LatestProject>
            <FreeTrial></FreeTrial>
            <div className=" overflow-hidden px-5 md:px-0">

                <FAQ></FAQ>
            </div>
        </div>
    );
};

export default Home;