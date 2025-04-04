import Script from 'next/script'
import React from 'react'


const GoogleAnalytics = ({ga_id}) => {
  return (
    <><Script async src={`https://www.googletagmanager.com/gtag/js?id=${ga_id}`} />
<Script id="google-analytics-init">
    {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${ga_id}');`}
  
</Script></>
  )
}

export default GoogleAnalytics