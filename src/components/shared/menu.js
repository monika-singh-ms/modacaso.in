import  Link  from "next/link";
import { usePathname } from "next/navigation";
import { MenuItems } from '../../../src/config/menu_config';

export default function Menuitem() {
    const router = usePathname();
   
   
    return <div className='sm:hidden'>
            <ul className="flex items-center nav-link-desktop">
            {MenuItems.map((mainItem, index)=>(
                <li key={index} className="px-2 group text-sm font-medium text-brand relative">
                        <Link title={mainItem.name}  href={mainItem.href} className={`${router == mainItem.href ? "text-sm before:h-[2px] text-atom_red1 " : "relative"} flex before:absolute before:left-0 before:bottom-0 group-hover:before:h-[2px] before:w-full before:bg-gradient-to-r before:from-atom_red1 before:to-atom_red2`} >
                            <span className="text-sm md:text-xs pl-2 items-center group-hover:text-atom_red1 font-semibold relative h-[74px] flex ">
                            {mainItem.name} 
                            </span>
                        </Link>
                       
             
                </li>
                ))}
           
    
            </ul>
        </div>
}

