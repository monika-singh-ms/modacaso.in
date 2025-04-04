

import Link from "next/link";
import { IMAGES } from "../../../public/assets/img";
import React from "react";
import { ContactData } from "../../config/contact_config";
import Contactform from "../../components/shared/contactForm";
import WebPageSchema from "@/components/webPageSchema";


export const metadata ={
  title:ContactData.SeoData.title,
  description:ContactData.SeoData.description,
  // metadataBase:new URL('http://localhost:3000'),
  keywords:ContactData.SeoData.keywords,
  alternates:{
    canonical:ContactData.SeoData.canonicalUrl
  },
  icon:IMAGES.SHARED.favicon.src,
  openGraph:{
    images:IMAGES.SHARED.metaImage.src,
    title:ContactData.SeoData.title,
    description:ContactData.SeoData.description,
    url:ContactData.SeoData.url,
    type:'website'
  }
}


export default function ContactUs() {
  
  return (
   <main className="pt-[66px] sm:pt-[55px]">
     <WebPageSchema title={ContactData.SeoData.title}
       description={ContactData.SeoData.description}
       url={ContactData.SeoData.canonicalUrl}/>
   
 
   </main>
  );
}
