import React from 'react';
import { IMAGES } from '../../../public/assets/img';
import Image from 'next/image';
import Link from 'next/link';


const SuccessPopup = ({closePopup}) => {
  return (
    <div className='fixed bg-[rgba(0,0,0,0.7)] z-[99] inset-0'>
        <div className='bg-white max-w-[900px] translate-y-[-50%] top-[50%] fixed w-full pt-[100px] sm:pt-[70px] sm:pb-[100px] pb-[150px] px-8 left-0 right-0 m-auto rounded-lg bg-no-repeat bg-bottom bg-contain' style={{backgroundImage:`url(${IMAGES.BAD.thankYouBanner.src})`}}>
            <button className='absolute right-0 top-0 text-[#888] hover:text-[#000]' aria-label='close icon' onClick={closePopup}>
            <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z"></path></svg>
            </button>
            <h3 className='text-xxxl sm:text-xxl text-center'><span className='block text-heading2 font-semibold text-atom_red1 '>Thank You</span> for contacting with Us.<br/>We will get back to you soon.</h3>
            <Link className="block" href="/">
                <Image
                loading='eager'
                  src={IMAGES.SHARED.logo}
                  alt="Office Array Logo"
                  width="162"
                  height="40"
                  className="w-[172px] mt-4 mx-auto h-auto text-center pt-5 pb-5"
                />
              </Link>
        </div>
    </div>
  )
}

export default SuccessPopup