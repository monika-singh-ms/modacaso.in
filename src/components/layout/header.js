"use client"
import { Fragment,createContext, useState } from "react";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Menuitem from "../shared/menu";
import { usePathname } from "next/navigation";
import MobileMenu from "../shared/mobileMenu";
import { IMAGES } from "../../../public/assets/img";


export default function Header() {
  const [open, setOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const router = usePathname();

const openMainMenu=()=>{
  setOpen(true)
}
// const showBDPopup=()=>{
//   setShowPopup(true)
// }
const hidePopup =()=>{
  setShowPopup(false)
}
const routers = (router == '/contact-us' || router == '/brand-story' || router == '/become-distributor');

const handleOnHomeScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
       
        if (section) {
            console.log('window.location', window.location.href.replace('/'))
            window.location.href.replace('/')
            const yOffset = -70; // Adjust this value to the desired offset
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };
 
  return (
    <>
     <header className="w-full h-auto top-0 shadow-header_shadow fixed bg-white z-[99]">
      {/* <SubHeader /> */}
        <div className="container mx-auto md:px-5 sm:px-4 sm:py-0">
          <div className="flex justify-between items-center">
            
            <div className="flex items-center">
            <button aria-label="menu icon" onClick={openMainMenu} className="items-center sm:visible lg:hidden md:hidden">
              
              <svg className="w-[25px] h-[25px] mr-2"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 4H21V6H3V4ZM3 11H15V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
            </button>
              <Link title="Office Array link" className="block" href="/">
                {/* <Image
                loading='eager'
                  src={IMAGES.SHARED.logo}
                  alt="Office Array Logo"
                  title="Office Array "
                  width="162"
                  height="40"
                  className="w-[172px] sm:w-[110px] h-auto text-center pt-5 pb-5"
                /> */}
                LOGO
              </Link>
              <div className="flex ml-10 sm:hidden">
                {/* <div className="group">
                {routers ?
                    <Link href={`/#categories`} passHref className={`${router.pathname == "/" ? "text-sm" : "relative"} px-3 sm:hidden flex before:absolute before:left-0 before:bottom-0 group-hover:before:h-[2px] before:w-full before:bg-gradient-to-r before:from-atom_red1 before:to-atom_red2`} >
                      <span className="text-sm md:text-xs  items-center group-hover:text-atom_red1 font-semibold relative h-[74px] flex ">
                        Our Catalog 
                      </span>
                    </Link>:
                    <button onClick={()=>handleOnHomeScroll('categories')} className={`${router.pathname == "/" ? "text-sm" : "relative"} px-3 sm:hidden flex before:absolute before:left-0 before:bottom-0 group-hover:before:h-[2px] before:w-full before:bg-gradient-to-r before:from-atom_red1 before:to-atom_red2`} >
                          <span className="text-sm md:text-xs items-center group-hover:text-atom_red1 font-semibold relative h-[74px] flex ">
                          Our Catalog</span>
                    </button>
                }
                </div> */}
                <Menuitem />
              </div>
            </div>

            
            <div className="flex items-center justify-end">
             
            </div>
            
          </div>
        </div>
      </header>

      <HideMobileMenuContext.Provider value={{ open, setOpen }}>
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-[100]" onClose={setOpen}>
            <div className="fixed inset-0" />

            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden bg-[rgba(0,0,0,0.7)] z-[12]">
                <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-14">
                  <Transition.Child
                   as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-500"
                  enterFrom="-translate-x-full" // Change here
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-500"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full" // Change here
                  >
                    <Dialog.Panel className="pointer-events-auto w-screen max-w-md z-[12]">
                      <div className="flex h-full flex-col overflow-y-scroll bg-white pt-2 pb-6 shadow-xl">
                        <button
                          type="button"
                          className="rounded-md right-[20px] w-[40px] h-[40px] top-1 text-gray-400 hover:text-gray-500 focus:outline-none absolute"
                          onClick={() => setOpen(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
                        </button>
                        <div className="relative px-0">
                          <MobileMenu open={open} />
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </HideMobileMenuContext.Provider>
      
    </>
  );
}

export const HideMobileMenuContext = createContext();
