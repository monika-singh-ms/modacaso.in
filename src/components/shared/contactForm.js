"use client"
import React, { useState, } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
// import ThankyouResponse from "../../layout/thankyouResponse";
import { ENDPOINTS,URL } from "../../config/endpoints";
import { IMAGES } from "../../../public/assets/img";
import Image from "next/image";
import { usePathname } from 'next/navigation'

// import { useRouter } from "next/router";

const schema = yup.object({
  Name: yup.string().required("This field is required."),
  Email: yup
    .string()
    .required("This field is required.")
    .email("Email is not valid."),
  Phone: yup
    .string()
    .required("This field is required.")
    .matches(
      /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
      "Phone no is not valid"
    ),
  companyName: yup.string().required("This field is required."),
  // chooseYourself: yup.string().required("This field is required."),
  message: yup
    .string()
    .required("This field is required.")
    .max(100, "Message length should not be greater than 100"),
});

const Contactform = ({ classes}) => {
  // const [SubmitDisabled, setSubmitDisabled] = useState(false);
  const [errMSG,setErrMSG]= useState(false);
  const [successMSG,setSuccessMSG]= useState(false);
  const pageFullUrl = URL + usePathname();
  // console.log('pageFullUrl',pageFullUrl,ENDPOINTS.CONTACT_US_V1)
//   const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: {  errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  // handle form submit
 
  async function onFormSubmit(values) {
    // async function onFormSubmit(values) {

    const body = {
      "formType": "ContactForm",
      "name": values.Name,
      "email": values.Email,
      "phoneNo": values.Phone,
      "source":"office_array",
      "company": values.companyName,
      "enterpriseSolution": 'Contact Us',
      "message":values.message,
      "pageUrl": pageFullUrl
    }

    let config = {
      method: 'post',
      url: ENDPOINTS.CONTACT_US_V1,
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
    };

    try {
      const response = await axios(config);

      if (response.status == 200) {
        // setSubmitDisabled(true)
        setSuccessMSG(true)
        setTimeout(() => {
          reset()
        //   router.push('/thankyou');
        setSuccessMSG(false);
        // hidePopup()
        window.location.reload();
        }, 1500);


      }
    } catch (err) {
      setErrMSG(true);
      console.log('error',err)
      setTimeout(() => {
        window.location.reload();
      }, 5000);
     }
  }
  return (
    <div>
       <form
        className={classes}
        id="footerContactForm"
        action="#"
        method="POST"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <h3 className="text-base mb-5 font-medium text-atom_onxyblack">Lets get connected</h3>
            <div className="w-full mb-3">
             <p className="mb-2 text-sm text-atom_onxyblack">Tell us about yourself*</p>
                {/* <div className="radioBtnGroup">
                    <label className="radioBtn">
                        <input type="radio" value="Become a Distributor" className="inputRadio" {...register("chooseYourself")} />
                        <span className="radioCustom"></span> Become a Distributor
                    </label>   
                    <label className="radioBtn">
                        <input type="radio" value="Contact us" className="inputRadio" defaultChecked {...register("chooseYourself")} />
                        <span className="radioCustom"></span> Contact Us
                    </label>
                 
                </div> */}
            </div>
            <div className="whenBDactive">
            <div className="pb-5 bdForm50 relative">
              <input
                type="text"
                name="name"
                id="name"
                className="block text-sm w-full placeholder:text-atom_onxyblack  px-[10px] rounded-md border border-[#707070] h-[40px] focus:outline-none sm:text-sm"
                placeholder="Name*"
                {...register("Name")}
              />
              <p className="text-[#b53030] text-xs">{errors.Name?.message}</p>
            </div>
            <div className="pb-5 bdForm50 relative">
              <input
                type="email"
                name="email"
                id="email"
                className="block text-sm w-full placeholder:text-atom_onxyblack  px-[10px] rounded-md border border-[#707070] h-[40px] focus:outline-none sm:text-sm"
                placeholder="Official Email*"
                {...register("Email")}
              />
              <p className="text-[#b53030] text-xs">{errors.Email?.message}</p>
            </div>
            <div className="pb-5 bdForm50 relative">
                <div className="flex phoneNo justify-between ">
                <div className="w-[18%] border border-[#707070] text-center pt-1 sm:px-1 rounded-md">
                    <Image src={IMAGES.SHARED.indiaFlag} title="Indian Flag" width={27} height={20} className="h-auto w-[27px] sm:w-[15px] inline-block" alt="Indian Flag" />
                    <span className="inline-block text-atom_onxyblack ml-1 text-sm">+91</span>
                </div>
                <input
                    type="text"
                    name="phoneNo"
                    id="phoneNo"
                    className="w-[78%] text-sm placeholder:text-atom_onxyblack  px-[10px] rounded-md border border-[#707070] h-[40px] focus:outline-none sm:text-sm"
                    placeholder="Contact Number*"
                    {...register("Phone")}
                />
                
            </div>
            <p className="text-[#b53030] text-xs">{errors.Phone?.message}</p>
            </div>
            
            <div className="pb-5 bdForm50 relative">
              <input
                type="text"
                name="companyName"
                id="companyName"
                className="block text-sm w-full placeholder:text-atom_onxyblack  px-[10px] rounded-md border border-[#707070] h-[40px] focus:outline-none sm:text-sm"
                placeholder="Company Name*"
                {...register("companyName")}
              />
              <p className="text-[#b53030] text-xs">{errors.companyName?.message}</p>
            </div>
            </div>
         
           
            <div className="pb-5 relative">
              <textarea
                id="message"
                name="message"
                placeholder="Requirement Details:"
                rows={3}
                className="block text-sm placeholder:text-atom_onxyblack h-[70px] md:h-[80px] w-full  py-1 px-[10px] rounded-md border border-[#707070] focus:outline-none sm:text-sm"
                defaultValue={""}
                {...register("message")}
              />
              <p className="text-[#b53030] text-xs">{errors.message?.message}</p>
            </div>
            <div className="pb-5 ">
<p className="text-sm">By submitting this form, you agree to the processing of personal data according to our Privacy Policy.</p>

            </div>

            <div className="pb-5 ">
              <button
                type="submit"
                // disabled={SubmitDisabled}
                className="block text-sm text-white w-full bg-gradient-to-r from-atom_red1 to-atom_red2 font-bold rounded-md px-[10px] border border-brand h-[46px] focus:outline-none sm:text-sm"
              >
                SUBMIT
              </button>
            </div>
         
       
        {errMSG ? (
          <>
            <div className="text-[#b53030]">
              <p className="text-sm font-medium mt-3">
                There is some server response error.
               
              </p>
            </div>
          </>
        ) : null}
        {successMSG ? (
          <>
            <div className="text-atom_green">
              <p className="text-sm font-medium mt-3">
                You Request has been sent successfully.
               
              </p>
            </div>
          </>
        ) : null}
      </form>
      
    </div>
  );
};

export default Contactform;
