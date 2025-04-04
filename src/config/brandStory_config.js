import { IMAGES } from "../../public/assets/img";
import { URL } from "./endpoints";


export const BrandStoryData={
    SeoData:{
        title:'Brand Story | Your one-stop shop for office chairs & desks',
        description:"Office Array offers a diverse selection of furniture designed to enhance any workspace. From ergonomic chairs that prioritize comfort and support, to stylish desks built for productivity, each piece combines functionality with aesthetic appeal.",
        keywords:"office chairs, Mesh chair, Desk, Leatherette chair",
        canonicalUrl:URL+'/brand-story',
        url:URL+'/brand-story',
        
    },
    subPara:"it's a testament to our unwavering commitment to revolutionize workspaces with affordable excellence.",
    sec2Para1:"We understand the pivotal role that office furniture plays in creating a conducive and productive work environment.",
    sec2Heading:'Office Array exists to provide furniture solutions with',
    sec2HeadingBold:["quality","affordability", "functionality"],
    sec3Heading:"Our mission at Office Array is to transform workspaces by Providing",
    sec3list:['High-quality office furniture', 'Affordable prices'],
    sec3para:"We believe that everyone deserves access to comfortable, functional, and stylish furniture without compromising on quality or breaking the budget. Our commitment to value-driven solutions ensures that our customers can create inspiring work environments that promote productivity and well-being, all while staying within their budget constraints.",
    sec4HeadingBold:"Unparalleled",
    sec4HeadingLight:"Product Portfolio",
    sec4SubHeading:"Discover the Office Array advantage through our versatile range of products:",
    sec4List:[
        {image:IMAGES.brandStory.chair1, name:'Mesh Chairs', para:'Experience ergonomic comfort and breathability with our range of mesh chairs, designed to support you through long hours of work.', href:"https://www.moglix.com/office-array-matrix-black-high-back-mesh-diy-revolving-ergonomic-office-chair-with-headrest/mp/msn153v4yz2yk3"},
        {image:IMAGES.brandStory.chair2, name:'Leatherette Chairs', para:'Make a statement with our luxurious leather chairs, blending style and comfort to elevate any office setting.', href:"https://www.moglix.com/office-array-brown-leatherette-high-back-diy-executive-office-chair/mp/msnekpqz72xw52"},
        {image:IMAGES.brandStory.chair3, name:'Conference Room Chairs', para:'Impress clients and colleagues alike with our sophisticated conference room chairs, designed for comfort and professional appeal.', href:"https://www.moglix.com/office-array-black-medium-back-mesh-adjustable-arm-executive-office-chair/mp/msnq94pdz8xek0"}
    ],
    sec5Heading:'Why',
    sec5HeadingBold:'Choose Us',
    listLeft:[
        "Quality Craftsmanship, Exceptional Design",
        "Tailored Solutions for Your Business",
        "Experience the Office Array Difference"
    ],
    contentRight:[
        {heading:'Quality Craftsmanship, Exceptional Design',para:"At Office Array, we prioritize quality craftsmanship and exceptional design in every piece of furniture we create. Our commitment to using premium materials ensures durability, longevity, and a timeless aesthetic that enhances the overall look and feel of your office environment.",
            imagesList:[
                {name:'Tilt',image:IMAGES.brandStory.featureIcon1},
                {name:'Hydraulic',image:IMAGES.brandStory.featureIcon2},
                {name:'180',image:IMAGES.brandStory.featureIcon3},
                {name:'Wheel',image:IMAGES.brandStory.featureIcon4},
            ]
        },
        {heading:'Tailored Solutions for Your Business',para:"We understand that every business is unique. That's why we offer tailored solutions to meet your specific requirements, whether you need to furnish a small startup office or revamp a large corporate space. Our team of experts is dedicated to providing personalized assistance and guidance throughout the furniture selection process.",
            rightImage:IMAGES.brandStory.rightSideImage
        },
        {heading:'Experience the Office Array Difference',para:"Transform your workspace with Office Array and experience the difference that premium-quality furniture can make. Explore our product catalog, browse through design inspirations, and envision a workplace that inspires creativity, productivity, and success",
        para2:"Welcome to Office Array - where comfort, style, and functionality converge to create exceptional workspaces.",
            fullImage:IMAGES.brandStory.fullImage
        },
    ]

}