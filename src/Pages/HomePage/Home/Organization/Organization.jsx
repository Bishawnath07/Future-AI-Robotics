import image1 from './Images/logo1.png'
import image2 from './Images/logo2.png'
import image3 from './Images/logo3.png'
import image4 from './Images/logo4.png'
import image5 from './Images/logo5.png'

const Organization = () => {
    return (
        <div className=" text-white max-w-6xl mx-auto">
            <h3 className="text-center text-[14px] md:text-[24px] font-semibold w-[200] md:w-[200px] mx-auto pt-10 md:pt-8 py-10">Trusted By Over 150 Organization In More That 25+ Countries</h3>
            <div className='grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5 pb-10'>
                <img className=' w-[8rem] md:w-[13rem] transition duration-500 transform hover:-translate-y-2' src={image1} alt="" />
                <img className=' w-[8rem] md:w-[13rem] transition duration-500 transform hover:-translate-y-2' src={image2} alt="" />
                <img className=' w-[8rem] md:w-[13rem] transition duration-500 transform hover:-translate-y-2' src={image3} alt="" />
                <img className=' w-[8rem] md:w-[13rem] transition duration-500 transform hover:-translate-y-2' src={image4} alt="" />
                <img className=' w-[8rem] md:w-[13rem] transition duration-500 transform hover:-translate-y-2' src={image5} alt="" />
            </div>
        </div>
    );
};

export default Organization;