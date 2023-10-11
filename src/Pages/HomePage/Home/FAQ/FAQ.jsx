import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import image from './pngtree-3d-render-of-blue-robot-character-png-image_1508576.jpg'
import './faq.css'


const FAQ = () => {
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);
    const [isAccordionOpen1, setIsAccordionOpen1] = useState(false);
    const [isAccordionOpen2, setIsAccordionOpen2] = useState(false);
    const [isAccordionOpen3, setIsAccordionOpen3] = useState(false);


    const toggleAccordion = () => {
        setIsAccordionOpen(!isAccordionOpen);
    };
    const toggleAccordion1 = () => {
        setIsAccordionOpen1(!isAccordionOpen1);
    };
    const toggleAccordion2 = () => {
        setIsAccordionOpen2(!isAccordionOpen2);
    };
    const toggleAccordion3 = () => {
        setIsAccordionOpen3(!isAccordionOpen3);
    };



    return (
        <div className=" max-w-7xl mx-auto mt-10 md:mt-20 overflow-hidden">
            <div className="flex flex-col justify-center items-center">
                <p className="bg-[#2b9ef0] about-title w-[6rem]  mx-auto text-[14px] md:text-[16px] font-semibold mb-3 text-white rounded-lg px-2 py-1 text-center">FAQ</p>
                <h1 className="text-[24px] faq-title md:text-[38px] mb-5 md:mb-10 font-bold w-[270px] md:w-[500px] mx-auto ">Frequently Asked Questions</h1>
            </div>

            <div className="md:flex  md:gap-36">
                <div className="md:w-1/2">
                    <div onClick={toggleAccordion} className="collapse mb-4 bg-base-200">
                        <input type="checkbox" />
                        <div className={`collapse-title flex items-center  justify-between text-xl font-medium ${isAccordionOpen && 'bg-black text-white'}`}>
                            Antis unde omnis istye natus error?
                            {
                                isAccordionOpen ?
                                    <HiChevronDown className="bg-[#2b9ef0] text-white h-10 w-10 rounded-full"></HiChevronDown> :
                                    <HiChevronUp className="text-white p-1 bg-black h-10 w-10 rounded-full "></HiChevronUp>
                            }
                        </div>
                        <div className="collapse-content ">
                            <p className="font-semibold text-[14px]  md:text-[18px]  ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ipsum suspendisse ultrices gravida. Risus.</p>
                        </div>
                    </div>
                    <div onClick={toggleAccordion1} className="collapse mb-4   bg-base-200">
                        <input type="checkbox" />
                        <div className={`collapse-title flex items-center  justify-between text-xl font-medium ${isAccordionOpen1 && 'bg-black text-white'}`}>
                            Integer lobortis sem conseruat seua?                        {
                                isAccordionOpen1 ?
                                    <HiChevronDown className="bg-[#2b9ef0] text-white h-10 w-10 rounded-full"></HiChevronDown> :
                                    <HiChevronUp className="text-white p-1 bg-black h-10 w-10 rounded-full "></HiChevronUp>
                            }
                        </div>
                        <div className="collapse-content ">
                            <p className="font-semibold text-[14px]  md:text-[18px]  ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ipsum suspendisse ultrices gravida. Risus.</p>
                        </div>
                    </div>
                    <div onClick={toggleAccordion2} className="collapse mb-4  bg-base-200">
                        <input type="checkbox" />
                        <div className={`collapse-title flex items-center  justify-between text-xl font-medium ${isAccordionOpen2 && 'bg-black text-white'}`}>
                            Totam rem aperiam, earue iesa uate?
                            {
                                isAccordionOpen2 ?
                                    <HiChevronDown className="bg-[#2b9ef0] text-white h-10 w-10 rounded-full"></HiChevronDown> :
                                    <HiChevronUp className="text-white p-1 bg-black h-10 w-10 rounded-full "></HiChevronUp>
                            }
                        </div>
                        <div className="collapse-content ">
                            <p className="font-semibold text-[14px]  md:text-[18px]  ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ipsum suspendisse ultrices gravida. Risus.</p>
                        </div>
                    </div>
                    <div onClick={toggleAccordion3} className="collapse mb-4  bg-base-200">
                        <input type="checkbox" />
                        <div className={`collapse-title flex items-center  justify-between text-xl font-medium ${isAccordionOpen3 && 'bg-black text-white'}`}>
                            Quasi sed architecto beatae vitae?
                            {
                                isAccordionOpen3 ?
                                    <HiChevronDown className="bg-[#2b9ef0] text-white h-10 w-10 rounded-full"></HiChevronDown> :
                                    <HiChevronUp className="text-white p-1 bg-black h-10 w-10 rounded-full "></HiChevronUp>
                            }
                        </div>
                        <div className="collapse-content ">
                            <p className="font-semibold text-[14px]  md:text-[18px]  ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ipsum suspendisse ultrices gravida. Risus.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img className=" " src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default FAQ;
