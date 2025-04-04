
import { GA_ID, URL } from "@/config/endpoints";
import { IMAGES } from "../../public/assets/img/index";
import Footer from "../components/layout/footer";
import Header from "../components/layout/header";
import '../styles/globals.scss';
import Script from 'next/script';
import GoogleAnalytics from "@/lib/ga";


export const metadata ={
  title:'Office Array | One stop shop for all office chairs and desks',
  description:"Office Array offers a diverse selection of furniture designed to enhance any workspace. From ergonomic chairs that prioritize comfort and support, to stylish desks built for productivity, each piece combines functionality with aesthetic appeal.",
  // metadataBase:new URL('http://localhost:3000'),
  keywords:"office chairs, Mesh chair, Desk, Leatherette chair",
  alternates:{
    canonical:URL
  },
  icon:IMAGES.SHARED.favicon.src,
  openGraph:{
    images:IMAGES.SHARED.metaImage.src,
    title:'Office Array | One stop shop for all office chairs and desks',
    description:"Office Array offers a diverse selection of furniture designed to enhance any workspace. From ergonomic chairs that prioritize comfort and support, to stylish desks built for productivity, each piece combines functionality with aesthetic appeal.",
    url:URL,
    type:'website'
  }
}
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Office Array",
  "alternateName": "Office Array",
  "url": "https://www.officearray.com",
  "logo":IMAGES.SHARED.logo.src,
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "",
    "contactType": ""
  }
};
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Office Array",
  "image": "",
  "@id": "",
  "url": "https://www.officearray.com",
  "telephone": "+91- 02235155490",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Unit No. 305-310, Plot No. 9, 10 & 11 Vardhman Trade Centre, Nehru Place",
    "addressLocality": "Delhi",
    "postalCode": "Delhi",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 28.5471743,
    "longitude": 77.250708
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  } 
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="robots" content="index, follow" />
      <Script
        id="json-ld-schema-organization"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="json-ld-schema-localbusiness"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <GoogleAnalytics ga_id={GA_ID}/>
      <body className="font-rubik">
      <Script id="clarity-script" strategy="afterInteractive">
          {`
           (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
          `}
        </Script>
        {/* <Header/> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
