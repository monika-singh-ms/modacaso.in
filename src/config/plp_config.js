import { IMAGES } from "../../public/assets/img";
import { URL } from "./endpoints";


export const PlpData={
  SeoData:{
    title:'Our Catalog | One stop shop for all office chairs and desks',
    description:"Office Array offers a diverse selection of furniture designed to enhance any workspace. From ergonomic chairs that prioritize comfort and support, to stylish desks built for productivity, each piece combines functionality with aesthetic appeal.",
    keywords:"office chairs, Mesh chair, Desk, Leatherette chair",
    canonicalUrl:URL+'/our-catalog',
    url:URL+'/our-catalog',
    
},
    featureArray:[
        {
            featImg:IMAGES.ListPage.chairImg1,
            heading:'Introducing the Office Mash Chair, where comfort meets innovation',
            para:"Designed with ergonomic precision, this chair offers unparalleled support for long working hours. Its breathable mesh back promotes airflow, ensuring you stay cool and comfortable throughout the day. The adjustable height and lumbar support cater to your unique needs, making it the perfect addition to any modern workspace. Elevate your office experience with the Office Mash Chair, combining style and functionality in one sleek design.",
            quality:[
                {img:IMAGES.ListPage.ft1, text:'Adjustable Headrest'},
                {img:IMAGES.ListPage.ft2, text:'Adjustable Height'},
                {img:IMAGES.ListPage.ft3, text:'Comfortable Cushioning'},
            ]
        },
        {
            featImg:IMAGES.ListPage.chairImg2,
            heading:'Executive Ergonomic Fabric Mesh Office Arm Chair',
            para:"The OfficeArray Fabric Mesh Office Adjustable Arm Chair in black combines comfort, functionality, and style, making it the perfect seating solution for any modern workspace. Whether for work or leisure, this chair offers the support and flexibility needed to stay productive and comfortable throughout the day.",
            quality:[
                {img:IMAGES.ListPage.ft4, text:'360 Degree Revolving Chair'},
                {img:IMAGES.ListPage.ft5, text:'Breathable Mesh Back'},
                {img:IMAGES.ListPage.ft6, text:'Ergonomic Back Rest'},
            ]
        }
    ],
    
    listLeft:[
        "Unmatched Comfort",
        "Effortless Setup",
        "Precision Engineered"
    ],
    contentRight:[
        {heading:'Unmatched Comfort',para:"'Built-In Support Features of Our Mesh Chairs' emphasizes the superior level of comfort provided by the ergonomic design and supportive elements integrated into our mesh chairs. ",
        rightImage:IMAGES.ListPage.scrollImg1
        },
        {heading:'Effortless Setup',para:"'Easy Self-Assembly of Our Mesh Chairs' highlights the simplicity and convenience of assembling our mesh chairs. Our mesh chairs are designed with your convenience in mind, offering a hassle-free assembly process that anyone can manage with ease ",
            rightImage:IMAGES.ListPage.scrollImg2
        },
        {heading:'Precision Engineered',para:"It emphasizes the meticulous design and detailed specifications that define our mesh chairs.Our mesh chairs are meticulously crafted with precision engineering to deliver optimal performance and comfort. ",
            rightImage:IMAGES.ListPage.scrollImg3
        },
        // {heading:'Experience the Office Array Difference',para:"Transform your workspace with Office Array and experience the difference that premium-quality furniture can make. Explore our product catalog, browse through design inspirations, and envision a workplace that inspires creativity, productivity, and success",
        // para2:"Welcome to Office Array - where comfort, style, and functionality converge to create exceptional workspaces.",
        //     fullImage:IMAGES.brandStory.fullImage
        // },
    ],
    keyFeatures:[
        {img:IMAGES.ListPage.kf1,heading:'Adaptive Lumbar Support',para:"The chair features adjustable lumbar support that adapts to your spine's natural curvature, providing optimal lower back comfort and reducing fatigue. "},
        {img:IMAGES.ListPage.kf2,heading:'Customizable Settings',para:"Easily adjust the chair's height, tilt, and armrests to suit your personal comfort preferences, ensuring a tailored sitting experience."},
        {img:IMAGES.ListPage.kf3,heading:'Enhanced Airflow',para:"The mesh material promotes excellent airflow, keeping you cool and comfortable even during long hours of work."},
        {img:IMAGES.ListPage.kf4,heading:'Durable and Supportive',para:"Made from high-quality, durable mesh, the chair provides firm support without compromising on comfort. "},
        {img:IMAGES.ListPage.kf5,heading:'Sleek Design',para:"The Officearray Mesh Office Chair boasts a sleek, contemporary design that seamlessly fits into any office décor. "},

    ],
    faqData: [
        {
          question: 'What products does Office Array offer?',
          answer: 'Office Array offers a wide range of office furniture including ergonomic mesh chairs, leatherette executive chairs, and stylish desks designed for productivity and comfort. ',
        },
        {
          question: 'What makes Office Array furniture unique?',
          answer: 'Office Array furniture combines functionality with aesthetic appeal, focusing on ergonomic designs, durability, and affordability. ',
        },
        {
          question: 'How can I purchase Office Array products? ',
          answer: 'You can buy Office Array products from their official website or through their store on Moglix. ',
        },
        {
          question: 'Are Office Array chairs ergonomic?  ',
          answer: 'Yes, Office Array focuses on ergonomic designs to enhance comfort and productivity.',
        },
        {
          question: 'Is the leatherette material durable?  ',
          answer: 'Yes, the leatherette material is designed to be durable and easy to maintain, providing a high-quality look and feel. ',
        },
        {
           question: 'Does the chair come with a warranty?',
           answer: 'Yes, it comes with a warranty. Specific details can be found on the product page. ',
        },
        {
           question: 'How do I contact Office Array for support or inquiries?',
           answer: "You can contact them via phone at 022-3515-5490 or email at info@drglabs.com",
        },
      ]
}