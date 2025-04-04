
import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "../../public/assets/img";
import { HomeData } from "../config/home_config";
import WebPageSchema from "@/components/webPageSchema";
// import { useEffect, useState } from 'react';


export const metadata ={
  
  title:HomeData.SeoData.title,
  description:HomeData.SeoData.description,
  // metadataBase:new URL('http://localhost:3000'),
  keywords:HomeData.SeoData.keywords,
  alternates:{
    canonical:HomeData.SeoData.canonicalUrl
  },
  // icon:IMAGES.SHARED.favicon,
  openGraph:{
    images:IMAGES.SHARED.metaImage.src,
    title:HomeData.SeoData.title,
    description:HomeData.SeoData.description,
    url:HomeData.SeoData.url,
    type:'website'
  }
}

const Home=()=> {
 
// const interval = 5000;
 
  return (
    // <main className="pt-[66px] sm:pt-[55px]">
    <main>
      <WebPageSchema title={HomeData.SeoData.title}
       description={HomeData.SeoData.description}
       url={HomeData.SeoData.canonicalUrl}/>
      <Image src={IMAGES.SHARED.comingSoon} alt="coming soon" width={1756} height={800} className="w-full h-auto"/>

      
    </main>
  );
}
export default Home
