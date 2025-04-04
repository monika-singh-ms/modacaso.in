
import React, { useContext } from 'react';
import { Disclosure } from '@headlessui/react';
import  Link  from "next/link";
import { useRouter } from "next/navigation";
import { HideMobileMenuContext } from '../layout/header';
import { Menu, Transition } from '@headlessui/react'
import { MenuItems } from '../../../src/config/menu_config';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const MobileMenu=()=> {
    const router = useRouter();
    const { locale } = router;
    const {open, setOpen} = useContext(HideMobileMenuContext);
    
  
    return (
        <div className="overflow-y-auto border-l border-r border-[#ccc] bg-white">
        
          {MenuItems.map((mainItem,index)=>(
            <div key={index} className="text-sm font-semibold text-secondary w-full border-b border-[#ccc]" >
                
                {mainItem.subMenu ? 
                
                <Menu as="div" className="relative text-left">
                <div className='flex justify-between px-5 '>
                  <Link href={mainItem.href} target='_blank' className=" bg-white py-3 text-sm font-semibold">
                  {mainItem.name}
                </Link>
                <Menu.Button>
                  <svg className='w-5 h-5 ab' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg>
                </Menu.Button></div>
     
                  <Transition
                  enter="transition height duration-100"
                  enterFrom="transform opacity-0 "
                  enterTo="transform opacity-100 "
                  leave="transition height duration-75"
                  leaveFrom="transform opacity-100 "
                  leaveTo="transform opacity-0 "
                >
                  {mainItem.subMenu.map((item,i)=>(
                    <Menu.Items key={i} className="w-full focus:outline-none last:border-b-0 border-b-[1px] border-[#ddd]">
                      <Link href={item.href} target={item.target} rel="noopener noreferrer" onClick={()=>setOpen(false)} className="text-secondary font-regular flex justify-between px-5 py-3">{item.name}</Link>
                  </Menu.Items>
                  ))}
                  
                </Transition>
                
              </Menu>:
              <Link href={mainItem.href} target={mainItem.target} rel="noopener noreferrer" onClick={()=>setOpen(false)} className="text-secondary flex justify-between px-5 py-3">{mainItem.name}</Link>
              }

            </div>
          ))}
            
                                      
        
    </div>
    )
        
    
    

}

export default MobileMenu;

