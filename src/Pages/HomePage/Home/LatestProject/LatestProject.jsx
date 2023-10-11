import { HiPhotograph } from 'react-icons/hi';
import img1 from './Image/portfolio-image1.jpg'
import img2 from './Image/portfolio-image2.jpg'
import img3 from './Image/portfolio-image3.jpg'
import img4 from './Image/portfolio-image4.jpg'
import img5 from './Image/portfolio-image5.jpg'
import img6 from './Image/portfolio-image6.jpg'
import Divider from '../../../../components/Divider';

const LatestProject = () => {
    return (
        <div className="max-w-7xl mx-auto mt-10 md:mt-20 overflow-hidden">
            <p className='bg-[#2b9ef0] about-title w-[8rem] mx-auto text-[14px] md:text-[18px] font-semibold mb-3 text-white rounded-lg px-2 py-1 text-center '> Portfolio</p>
            <h1 className="text-[16x] md:text-[34px] font-bold w-[220px] md:w-[550px] mx-auto " >Our Latest Projects and Showcase.</h1>
            <div className="grid-cols-1 gap-5 grid  md:grid-cols-3  mt-10 md:mt-16 ">
                <div className='overflow-hidden relative transition duration-500 transform  rounded-lg shadow-lg hover:shadow-2xl'>
                    <img className='rounded-lg object-cover w-full' src={img1} alt="" />
                    <div className='bg-black bg-opacity-40 px-6 py-4 text-gray-300 absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 flex justify-center items-center'>
                        <div>
                            <HiPhotograph className='h-10 w-10 mx-auto'></HiPhotograph>
                            <p className='font-semibold'>Custom Robot Development</p>
                        </div>
                    </div>
                </div>
                <div className='overflow-hidden relative transition duration-500 transform  rounded-lg shadow-lg hover:shadow-2xl'>
                    <img className='rounded-lg object-cover w-full' src={img2} alt="" />
                    <div className='bg-black bg-opacity-40 px-6 py-4 text-gray-300 absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 flex justify-center items-center'>
                        <div>
                            <HiPhotograph className='h-10 w-10 mx-auto'></HiPhotograph>
                            <p className='font-semibold'>Custom Robot Development</p>
                        </div>
                    </div>
                </div>
                <div className='overflow-hidden relative transition duration-500 transform  rounded-lg shadow-lg hover:shadow-2xl'>
                    <img className='rounded-lg object-cover w-full' src={img3} alt="" />
                    <div className='bg-black bg-opacity-40 px-6 py-4 text-gray-300 absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 flex justify-center items-center'>
                        <div>
                            <HiPhotograph className='h-10 w-10 mx-auto'></HiPhotograph>
                            <p className='font-semibold'>Custom Robot Development</p>
                        </div>
                    </div>
                </div>
                <div className='overflow-hidden relative transition duration-500 transform  rounded-lg shadow-lg hover:shadow-2xl'>
                    <img className='rounded-lg object-cover w-full' src={img4} alt="" />
                    <div className='bg-black bg-opacity-40 px-6 py-4 text-gray-300 absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 flex justify-center items-center'>
                        <div>
                            <HiPhotograph className='h-10 w-10 mx-auto'></HiPhotograph>
                            <p className='font-semibold'>Custom Robot Development</p>
                        </div>
                    </div>
                </div>
                <div className='overflow-hidden relative transition duration-500 transform  rounded-lg shadow-lg hover:shadow-2xl'>
                    <img className='rounded-lg object-cover w-full' src={img5} alt="" />
                    <div className='bg-black bg-opacity-40 px-6 py-4 text-gray-300 absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 flex justify-center items-center'>
                        <div>
                            <HiPhotograph className='h-10 w-10 mx-auto'></HiPhotograph>
                            <p className='font-semibold'>Custom Robot Development</p>
                        </div>
                    </div>
                </div>
                <div className='overflow-hidden relative transition duration-500 transform  rounded-lg shadow-lg hover:shadow-2xl'>
                    <img className='rounded-lg object-cover w-full' src={img6} alt="" />
                    <div className='bg-black bg-opacity-40 px-6 py-4 text-gray-300 absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 flex justify-center items-center'>
                        <div>
                            <HiPhotograph className='h-10 w-10 mx-auto'></HiPhotograph>
                            <p className='font-semibold'>Custom Robot Development</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='my-24' >
                <Divider ></Divider>
            </div>
        </div>
    );
};

export default LatestProject;