import FutureBotics from "./FutureBotics/FutureBotics";
import Organization from "./Organization/Organization";

const Home = () => {
    return (
        <div className=" ">
            <div className="bg-[#162834] ">
                <Organization ></Organization>
            </div>
            <FutureBotics></FutureBotics>
        </div>
    );
};

export default Home;