import { HiOutlineLocationMarker, HiOutlineMail, HiPhone } from 'react-icons/hi';
import logo from './Logo/home1-logo.png'
import { FaPaperPlane } from 'react-icons/fa';
import './foote.css'

const Footer = () => {
    return (
        <div className='bg-[#061a28] px-5'>
            <footer className="footer mt-10 md:mt-16 py-10 max-w-7xl mx-auto text-white">
                <nav className="md:w-80">
                    <img src={logo} alt="" />
                    <h4 className='font-semibold  text-[16px] md:text-[18px]  my-5 md:w-[400px] leading-7 '>Qorem ipsum dolor sit amet, consectetur adipiscing elit aut elit tellus luctus nec ulla corper mattis aulvinar daibus leo.</h4>
                    <div className='flex gap-8'>
                        <a className='p-4 hover:bg-[#2b9ff1] border-[1px] transform hover:-translate-y-2 duration-300 border-slate-400 rounded-full '><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current "><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                        </a>
                        <a className='p-4 hover:bg-[#2b9ff1] border-[1px] transform hover:-translate-y-2 duration-300 border-slate-400 rounded-full '><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current "><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a className='p-4 hover:bg-[#2b9ff1] border-[1px] transform hover:-translate-y-2 duration-300 border-slate-400 rounded-full '><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current "><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                </nav>
                <nav className='md:mt-20'>
                    <a className="font-semibold text-[16px] hover:text-[#2b9ff1] no-underline  ">Home</a>
                    <a className="font-semibold text-[16px] hover:text-[#2b9ff1] no-underline  ">About us</a>
                    <a className="font-semibold text-[16px] hover:text-[#2b9ff1] no-underline ">Service</a>
                    <a className="font-semibold text-[16px] hover:text-[#2b9ff1] no-underline  ">Contact</a>
                </nav>
                <nav className='md:mt-20'>
                    <a className="font-semibold text-[16px] hover:text-[#2b9ff1] no-underline flex items-center gap-4 "> <HiPhone className='text-[#2b9ff1] '></HiPhone> +61 3 8376 6284</a>
                    <a className="font-semibold text-[16px] hover:text-[#2b9ff1] no-underline flex items-center gap-4 "><HiOutlineMail className='text-[#2b9ff1] '>  </HiOutlineMail>Info@futureai.com</a>
                    <a className="font-semibold text-[16px] hover:text-[#2b9ff1] no-underline flex items-center gap-4 "><HiOutlineLocationMarker className='text-[#2b9ff1] '></HiOutlineLocationMarker> 21 King Street Melbourne, 3000, Australia</a>
                </nav>
                <form className='md:mt-20 w-64 '>
                    <header className="footer-title">Newsletter</header>
                    <fieldset className="form-control ">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="Enter Email" className="input text-black input-bordered w-full pr-16" />
                            <button className=" bg-[#2b9ff1] absolute top-1 right-0 rounded-full">
                                <FaPaperPlane className='arrow  h-10  cursor-pointer w-10 text-[#fff] p-1 md:p-2 rounded-full'></FaPaperPlane>
                            </button>
                            <p className='mt-5'>Quis autem vel eum iure reprehenderit rui in ea voluptate esse.</p>
                        </div>
                    </fieldset>
                </form>
            </footer>
            <div className="hr-line container mx-auto w-full lg:w-[1245px] "></div>
            <footer className="footer footer-center p-4  text-white">
                <aside>
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;