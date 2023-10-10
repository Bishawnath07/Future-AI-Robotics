import { HiChevronRight } from 'react-icons/hi';
import image from './Imagee/about-image.jpg'
import Divider from '../../../../components/Divider';
import './FutureBotics.css'

const FutureBotics = () => {
    return (
        <div className="max-w-7xl mx-auto mt-10 md:mt-20">
            <div className="md:flex md:justify-between items-center gap-10">
                <div className='md:w-[60%] relative mt-10'>

                    <div className='absolute hidden md:flex justify-between w-[18rem] px-4 py-2 bg-[#cccccc] rounded-md -right-9 top-10 '>
                        <p className='text-[3rem] text-[#2b9ef0] '>18+</p>
                        <p className='text-[26px]  w-[15rem] '>YEARS OF EXPERIENCE</p>
                    </div>
                    <img className='rounded-lg mb-10 md:mb-0 w-4/5 mx-auto md:w-full  ' src={image} alt="" />
                </div>
                <div className='md:w-[40%]  '>
                    <p className='bg-[#2b9ef0]  w-[200px] md:w-[14rem] text-[14px] md:text-[18px] font-semibold mb-3 text-white rounded-lg px-2 py-1 text-center FutureBotics'>About FutureBotics</p>

                    <h1 className='md:text-4xl text-[20px] font-bold  mb-8 w-[200px] md:w-[400px]   business-title '>Business with AI Solutions.</h1>
                    <h3 className='font-semibold text-[14px]  md:text-[19px] md:text-justify business-details' >The about us section provides a brief company overview. It should highlight FutureBotics position as a leader in AI and robotics, shaping the future of intelligent automation.</h3>
                    <h3 className='italic my-8 font-semibold text-[14px] text-[#9b9b9e] md:text-[19px] text-justify business-details'>Discuss the companys commitment to designing and developing innovative robots that blend cutting-edge technology, AI algorithms, and human-like interaction.</h3>
                    <h3 className='font-semibold text-[14px]  md:text-[19px] md:text-justify text-[#9b9b9e] mb-10 business-details'>Emphasize FutureBotics core values, which include innovation, sustainability, and a passion for pushing the boundaries of possibility. Additionally, mention that FutureBotics offers a range of services, including customization options to tailor robots according to specific needs.</h3>
                    <div className='talk-btn hidden lg:flex items-center justify-between bg-[#2b9ef0] rounded-full  px-4 py-2 text-black lg:font-bold text-center w-[10rem] md:w-[12rem]'>
                        <button className='md:text-[20px] text-[13px]' >  Read More</button>
                        <HiChevronRight className='bg-white lg:h-10 h-6 cursor-pointer w-6 lg:w-10 text-red-600 p-1 md:p-2 rounded-full'></HiChevronRight>
                    </div>
                </div>
            </div>
            {/* Counter section */}
            <div className='md:flex  md:justify-between md:mt-16 mt-10 mb-40'>
                <div className='md:w-[30%] w-[250px] text-center mx-auto'>
                    <h1 className='text-[16px] md:text-[30px] font-bold'>Our Mission Is To Accelerate The Development Of Ai</h1>
                </div>
                <div className='w-[80%] mx-auto'>
                    <div className="stats transition duration-500 transform hover:-translate-y-2s shadow flex flex-col  md:justify-between">

                        <div className="stat transition duration-500 transform hover:-translate-y-2 place-items-center">
                            <div className="stat-value transition duration-500 transform hover:-translate-y-2">39K</div>
                            <div className="stat-title transition duration-500 transform hover:-translate-y-2-title text-[#2b9ef0] text-[14px] md:text-[22px] font-bold my-5 ">Project Completed</div>
                            <div className="stat-desc transition duration-500 transform hover:-translate-y-2-desc text-[14px] md:text-[18px]  font-semibold ">Modi tempora inciun aut labore.</div>
                        </div>

                        <div className="stat transition duration-500 transform hover:-translate-y-2 place-items-center">
                            <div className="stat-value transition duration-500 transform hover:-translate-y-2 ">20k</div>
                            <div className="stat-title transition duration-500 transform hover:-translate-y-2-title text-[#2b9ef0] text-[14px] md:text-[22px] font-bold my-5">Happy Client</div>
                            <div className="stat-desc transition duration-500 transform hover:-translate-y-2-desc text-[14px] md:text-[18px]  font-semibold">Nore tempora inciun aut labore.</div>
                        </div>

                        <div className="stat transition duration-500 transform hover:-translate-y-2 place-items-center">
                            <div className="stat-value transition duration-500 transform hover:-translate-y-2">17K</div>
                            <div className="stat-title transition duration-500 transform hover:-translate-y-2-title text-[#2b9ef0] text-[14px] md:text-[22px] font-bold my-5">Years of Experience</div>
                            <div className="stat-desc transition duration-500 transform hover:-translate-y-2-desc text-[14px] md:text-[18px]  font-semibold">Qome tempora inciun aut labore.</div>
                        </div>

                    </div>
                </div>
            </div>
            <Divider></Divider>
        </div>
    );
};

export default FutureBotics;