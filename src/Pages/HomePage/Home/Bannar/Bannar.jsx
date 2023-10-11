import image from './Image/banner-image.png'
import { HiChevronRight } from "react-icons/hi";
import '../../../../Shared/Navbar/Navbar.css'

const Bannar = () => {
    return (
        <div className="max-w-7xl lg:flex bannar-section lg:justify-between">
            <div className='pt-[6rem] lg:mt-[15rem] md:pt-[2rem] '>
                <h4 className='mb-3 md:mb-0 bg-white rounded-3xl p-2 text-black font-bold text-center welcome w-[12rem] md:w-[15rem] text-[13px] ' >Welcome to FutureBotics</h4>
                <h1 className=' text-white font-bold text-[30px] md:text-6xl md:my-6'>Pioneering <br /> The <span className='text-white  text-[40px] md:text-8xl'>Future</span> of <br /> Robotics.</h1>

                {/* <h1 className='md:hidden text-white font-bold text-[15px] md:text-6xl md:my-6'>Pioneering <br /> The <span className='text-white  text-[30px] md:text-8xl'>Future</span> of Robotics.</h1> */}
                <div></div>
                <p className='text-white lg:font-bold font-semibold text-[15px] px-[30px] md:px-0 md:text-xl md:mb-6'>Building Intelligent Robots for a Smarter Tomorrow.</p>
                <div className='flex items-center justify-between bg-[#2b9ef0] rounded-3xl px-[20px] py-[5px] md:px-[25px] md:py-2 text-black font-bold text-center w-[18rem] md:w-[23rem] explorre-btn'>
                    <button className='text-[12px] md:text-[15px] ' >Explore Our Cutting-edge AI Robots</button>
                    <HiChevronRight className='bg-white h-7 w-7 md:h-10 md:w-10 text-red-600 p-2 rounded-full'></HiChevronRight>
                </div>
            </div>
            <div className='md:w-1/2 '>
                <img className='bannar-image overflow-hidden' src={image} alt="" />
            </div>
        </div>
    );
};

export default Bannar;