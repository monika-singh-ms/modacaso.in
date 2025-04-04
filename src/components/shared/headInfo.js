"use client"
import React from "react";
import Head from "next/head";



const HeadInfo = (props) => {
  // const router = useRouter()
 
  return (
    <Head>
          {props.title && (
            <><title>{props.title}</title>
            <meta property="og:title" content={props.title} key={props.title} />
            </>
          )}
          {props.description && (
            <>
            <meta name="description" key="desc" content={props.description} />
            <meta property="og:description" content={props.description} />
            </>
          )}
          {props.image && (
            <meta property="og:image" content={props.image} />
          )}
          {props.url && (
          <meta property="og:url" content={props.url} />
        )}
        {props.keywords && (
          <meta name="keywords" content={props.keywords} />
        )} 
        <link rel="canonical" href={props.url} /> 
        {/* <link rel="shortcut icon" href="../../../public/assets/img/favicon.png" /> */}
        <meta name="robots" content="index,follow" />
        <meta name="viewport" content="width=device-width, minimum-scale=1.0, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
        
        
    </Head>
  );
};

export default HeadInfo;
