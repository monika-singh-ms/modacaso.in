import React from 'react';
import { IMAGES } from '../../public/assets/img';



const WebPageSchema = (props) => {

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": props.title,
        "url": props.url,
        "description":props.description,
        "publisher": {
          "@type": "Organization",
          "name": "Office Array",
          "logo": {
            "@type": "ImageObject",
            "url": IMAGES.SHARED.logo,
            "width": 600,
            "height": 60
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": props.url
        },
        "inLanguage": "en"
      }
  return (
    
   <script type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
  />
  )
}

export default WebPageSchema