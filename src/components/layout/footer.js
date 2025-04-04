"use client"
import { FooterMenus } from '../../config/footer_config';
import { IMAGES } from '../../../public/assets/img';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';


const Footer = () => {
  const router = usePathname()
  
//   const handleOnHomeScroll = (sectionId) => {
//     const section = document.getElementById(sectionId);
   
//     if (section) {
//         console.log('window.location', window.location.href.replace('/'))
//         window.location.href.replace('/')
//         const yOffset = -70; // Adjust this value to the desired offset
//         const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
//         window.scrollTo({ top: y, behavior: 'smooth' });
//     }
// };
//  const routers = (router == '/contact-us' || router == '/brand-story' || router == '/become-distributor')
  
  return (
    <footer className="py-[45px] sm:pt-12 bg-atom_primarydarkblack">
      <div className="container sm:px-5 md:px-5">
          
          <ul className='flex flex-wrap pb-[35px]'>
            {/*<li className='w-[20%] md:w-[33.33%] mb-5 sm:w-1/2'>
             {routers ?
                    <Link href={`/#categories`} passHref className="text-white">
                      <span className="text-sm ">
                        Our Catalog 
                      </span>
                    </Link>:
                    <button onClick={()=>handleOnHomeScroll('categories')} className=" text-white">
                          <span className="text-sm ">
                          Our Catalog</span>
                    </button>
                } 
            </li>*/}
            {FooterMenus.footerMenu.map((item,index)=>(
              <li key={index} className='w-[20%] mb-5 md:w-[33.33%] sm:w-1/2'>
                <Link title={item.name} className='text-sm text-white' href={item.href}>{item.name}</Link>
              </li>
            ))}
            <li className='w-[20%] md:w-[33.33%] mb-5 sm:w-1/2'>
            <Link title="Phone no" className='flex' href="tel:02235155490">
                    <svg className='w-4 mr-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff"><path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path></svg>
                    <span className='text-sm text-white'>02235155490</span>
                    </Link>
            </li>
            <li className='w-[20%] md:w-[33.33%] mb-5 sm:w-1/2'>
                    <Link title="Email Id" className='flex ' href="mailto:info@drglabs.com">
                    <svg className='w-4 mr-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path></svg>
                    <span className='text-sm text-white'>info@drglabs.com</span>
                </Link>
            </li>
            
          </ul>
      </div>

      <hr className='border-[1px] border-[#707070] mb-[45px] ' />
        
        <div className="container sm:px-5 md:px-5">
            <div className='flex flex-wrap justify-between items-start '>
              
              <div className='w-[75%]  sm:w-full'>
               <p className="text-sm text-white">Office Array offers a diverse selection of furniture designed to enhance any workspace. From ergonomic chairs that prioritize comfort and support, to stylish desks built for productivity, each piece combines functionality with aesthetic appeal. We cater to the modern professional, ensuring that every item is crafted for maximum durability and performance.</p>
               <p className="text-sm text-white mt-5 mb-0 ">©2024 Office Array. All Rights Reserved</p>
              
              </div>
  
            </div>
               
        </div>
        
 
      </footer>
  )
}

export default Footer