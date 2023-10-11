import { HiChevronRight } from 'react-icons/hi';
import image1 from './Images/service-icon1.png'
import image2 from './Images/service-icon2.png'
import image3 from './Images/service-icon3.png'
import image4 from './Images/service-icon4.png'
import image5 from './Images/service-image1.png'
import image6 from './Images/service-image2.png'
import image7 from './Images/choose-image.png'
// import bg1 from './Images/choose-backgroundimage1.png'/

import './service.css'

const Services = () => {
    return (
        <>
            <div className="max-w-7xl mx-auto mt-10 md:mt-20 overflow-hidden">
                <div className="md:flex justify-between gap-10">
                    <div className="md:w-1/2  left-content">
                        <p className='bg-[#2b9ef0] w-[12rem] semititle text-[14px] md:text-[18px] font-semibold mb-3 text-white rounded-lg px-2 py-1 text-center '>What We Can Do </p>
                        <h1 className='text-[25px] service-title md:text-[40px] font-bold  mb-10'>Services We Offer.</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <div className="service-card border-[1px] border-slate-500 p-3  rounded-md ">
                                <img className='service-image p-4 bg-[#fff] shadow-2xl rounded-lg' src={image1} alt="" />
                                <div>
                                    <h1 className='card-title  my-5'>Robotic Automation</h1>
                                    <p className='text-[14px] text-[#9b9b9e] md:text-[16px] font-semibold mb-5'>Quam nihil molestiae conseua illum rui dolorem eum fugiat a uo volutas nulla pariatur...</p>
                                    <div className='flex items-center gap-3'>
                                        <button className='read-btn'>Read More </button>
                                        <HiChevronRight></HiChevronRight>
                                    </div>
                                </div>

                            </div>
                            <div className="service-card border-[1px] border-slate-500 p-3  rounded-md ">
                                <img className='service-image p-4 bg-[#fff] shadow-2xl rounded-lg' src={image2} alt="" />
                                <div>
                                    <h1 className='card-title  my-5'>Robotics Consulting</h1>
                                    <p className='text-[14px] text-[#9b9b9e] md:text-[16px] font-semibold mb-5'>Rrui dolorem eum conseua aadr illum rui dolorem eum fugiat auo volutas nullap..</p>
                                    <div className='flex items-center gap-3'>
                                        <button className='read-btn'>Read More </button>
                                        <HiChevronRight></HiChevronRight>
                                    </div>
                                </div>

                            </div>
                            <div className="service-card border-[1px] border-slate-500 p-3  rounded-md ">
                                <img className='service-image p-4 bg-[#fff] shadow-2xl rounded-lg' src={image3} alt="" />
                                <div>
                                    <h1 className='card-title  my-5'>Logistics Automation</h1>
                                    <p className='text-[14px] text-[#9b9b9e] md:text-[16px] font-semibold mb-5'>Nam eget dui. Etiam rhoncus. Ma ecenas tempus, tellus eget condimentum.</p>
                                    <div className='flex items-center gap-3'>
                                        <button className='read-btn'>Read More </button>
                                        <HiChevronRight className=''></HiChevronRight>
                                    </div>
                                </div>

                            </div>
                            <div className="service-card border-[1px] border-slate-500 p-3  rounded-md ">
                                <img className='service-image p-4 bg-[#fff] shadow-2xl rounded-lg' src={image4} alt="" />
                                <div>
                                    <h1 className='card-title  my-5'>Agricultural Robotics</h1>
                                    <p className='text-[14px] text-[#9b9b9e] md:text-[16px] font-semibold mb-5'>Sed consequat, leo eget bibendu m sodales, augue velit cursus nun c, quis gravida magna mi a liber</p>
                                    <div className='flex items-center gap-3'>
                                        <button className='read-btn'>Read More </button>
                                        <HiChevronRight className=''></HiChevronRight>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2  ">
                        <p className='text-[#9b9b9e] text-[15px] md:text-[20px] font-semibold consectetur'>Consectetur adipiscing elit sed do eiusmod tempor inlabore aet dolor e magna aliqua ruis ipsum suspendisse ultrices.</p>
                        <div className='relative'>
                            <img className='absolute w-[30rem] right-[3rem] md:right-[15rem] ' src={image5} alt="" />
                            <img className='absolute md:w-[30rem] w-[20rem] left-12 top-[8rem] md:left-[8rem] md:top-[12rem] ' src={image6} alt="" />
                        </div>
                    </div>
                </div>

                <div className='md:mt-20 mt-10 md:flex  pt-[5rem] bg-[#162834] choose-about-section rounded-lg'>
                    <div className='md:w-[35%] '>
                        <img className='md:pl-16 md:h-[460px] md:w-[400px] about-section-img' src={image7} alt="" />
                    </div>
                    <div className='text-start '>
                        <p className='bg-[#2b9ef0] about-title w-[12rem] text-[14px] md:text-[18px] font-semibold mb-3 text-white rounded-lg px-2 py-1 text-center '> Why Choose Us</p>
                        <h1 className='text-[24px] about-text md:text-[40px] w-[280px] md:w-[560px] text-white font-bold my-5'>Explain The Advanced Technologies Powering FutureBotics Ai Robots.</h1>
                        <p className='text-[15px] about-pragraph md:text-[18px] w-[280px] md:w-[580px] text-white font-semibold mb-5'>Explain the advanced technologies powering FutureBotics AI robots. Discuss the use of artificial intelligence, machine learning, and advanced sensors,</p>
                        <div className='talk-btn  flex items-center justify-between bg-[#fff]  rounded-full px-[12px] py-[8px] md:px-4 md:py-2 text-slate-500 lg:font-bold text-center w-[8rem] md:w-[12rem]'>
                            <button className='md:text-[20px] text-[14px] read-more-btn' >  Read More</button>
                            <HiChevronRight className='arrow hover:bg-[#fff] bg-slate-500 lg:h-10 h-6 cursor-pointer w-6 lg:w-10 text-red-600 p-1 md:p-2 rounded-full'></HiChevronRight>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Services;