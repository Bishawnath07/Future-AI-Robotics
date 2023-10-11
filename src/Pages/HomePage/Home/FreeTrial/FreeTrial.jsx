import { FaPaperPlane } from "react-icons/fa";
import image from './Image/contact-image.png'
import './Freetrial.css'

const FreeTrial = () => {
    return (
        <div className="max-w-7xl mx-auto  md:mt-20 overflow-hidden bg-[#162834] p-8 ">
            <div className="md:flex justify-between gap-8">
                <div>
                    <p className='bg-[#fff] freetrial w-[12rem] mt-10  text-[14px] md:text-[18px] font-semibold mb-3 text-[#9b9b9e]  rounded-lg px-2 py-1 text-center '> Request Free Trial</p>
                    <h1 className="text-[26px] freetrial-title text-white md:text-[38px] font-bold w-[250px] md:w-[550px] ">Ai Solution For Your Business!</h1>
                    <div className="form my-5">
                        <div className="md:flex gap-5">
                            <input type="text" placeholder="Name" className="input mb-5 md:mb-0 text-white bg-[#162834] borde-[1px] border-[#fff] w-full max-w-xs" />
                            <input type="email" placeholder="Email" className="input text-white bg-[#162834] borde-[1px] border-[#fff] w-full max-w-xs" />
                        </div>
                        <div>
                            <textarea className="textarea text-white bg-[#162834] borde-[1px] border-[#fff] w-full  h-[10rem] mt-5 " placeholder="Message"></textarea>
                        </div>
                        <div className='mt-5 talk-btn flex items-center justify-between bg-[#2b9ef0] rounded-full  px-4 py-2 text-black lg:font-bold text-center w-[8rem] md:w-[11rem]'>
                            <button className='md:text-[20px] text-[13px]' > Send Now</button>
                            <FaPaperPlane className='arrow bg-white lg:h-10 h-6 cursor-pointer w-6 lg:w-10 text-[#2b9ef0] p-1 md:p-2 rounded-full'></FaPaperPlane>
                        </div>

                    </div>
                </div>
                <div>
                    <img className="w-[25rem]  md:mr-[5rem] trial-img" src={image} alt="" />
                </div>

            </div>
        </div>
    );
};

export default FreeTrial;