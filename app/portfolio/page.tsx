"use client"

import Link from "next/link"
import Image from "next/image"
import { ExternalLink, Github, Calendar, ImportIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollAnimation } from "@/components/scroll-animation"
import LogoCarousel from "@/components/ui/LogoCarousel"
import AnimatedCard from "@/components/animated_card"
import Service_slider from "@/components/ui/Service_slider"





const cardData = [
  {
    title: '',
    image: 'https://www.digitalsilk.com/wp-content/uploads/2025/01/remax-left-with-background-new.jpg',
  },
  {
    title: '',
    image: 'https://www.digitalsilk.com/wp-content/uploads/2025/01/remax-left-with-background-new.jpg',
  },
  {
    title: '',
    image: 'https://www.digitalsilk.com/wp-content/uploads/2024/09/BO.png',
  },
  {
    title: '',
    image: 'https://www.digitalsilk.com/wp-content/uploads/2024/09/NW.png',
  },
  {
    title: '',
    image: 'https://www.digitalsilk.com/wp-content/uploads/2024/09/Rollink.png',
  },
  {
    title: '',
    image: 'https://www.digitalsilk.com/wp-content/uploads/2024/09/Rollink.png',
  },
];



const techStack = [
  "🔥 ",
  "🚀 ",
  "🎨 ",
  "⚙️ ",
  "💾 ",
  "☁️ ",
    "🔥 ",
  "🚀 ",
  "🎨 ",
  "⚙️ ",
  "💾 ",
  "☁️ ",
    "🔥 ",
  "🚀 ",
  "🎨 ",
  "⚙️ ",
  "💾 ",
  "☁️ ",
    "🔥 ",
  "🚀 ",
  "🎨 ",
  "⚙️ ",
  "💾 ",
  "☁️ ",
    "🔥 ",
  "🚀 ",
  "🎨 ",
  "⚙️ ",
  "💾 ",
  "☁️ ",
    "🔥",
  "🚀",
  "🎨 ",
  "⚙️ ",
  "💾 ",
  "☁️ "
];
const logos = [
  {
    src: "https://www.digitalsilk.com/wp-content/uploads/2024/05/grenco_logo-1.png",
    alt: "Transistor",
  },
  {
    src: "https://www.digitalsilk.com/wp-content/uploads/2024/05/grenco_logo-1.png",
    alt: "Reform",
  },
  {
    src: "https:https://www.digitalsilk.com/wp-content/uploads/2024/05/Sony-1.png",
    alt: "Tuple",
  }
];
  const items = Array.from({ length: 20 }, (_, index) => (
    <div className="ltr-slider-box" key={index}></div>
  ));
   const images = [
    "https://www.digitalsilk.com/wp-content/uploads/2024/01/Northwestern_Qatar_Logo_2_.svg",
    "https://www.digitalsilk.com/wp-content/uploads/2024/01/paul-stuart.png",
    "https://www.digitalsilk.com/wp-content/uploads/2024/01/paul-stuart.png",
    "https://www.digitalsilk.com/wp-content/uploads/2024/01/grenco.png",
    "https://www.digitalsilk.com/wp-content/uploads/2024/12/logo.png",
    "https://www.digitalsilk.com/wp-content/uploads/2024/01/xerox.png",
    "https://www.digitalsilk.com/wp-content/uploads/2024/01/grenco.png",
    "https://www.digitalsilk.com/wp-content/uploads/2025/04/best_buy_logo-cropped.svg",
    "https://www.digitalsilk.com/wp-content/uploads/2024/01/Mitsui-Plastics.png",
    "https://www.digitalsilk.com/wp-content/uploads/2024/01/Sony-1.png",
   
  ];


const partnerLogos = [
  { src: "https://www.digitalsilk.com/wp-content/uploads/2024/05/g2_logo-1.png", alt: "Facebook" },
  { src: "https://www.digitalsilk.com/wp-content/uploads/2024/05/BRU_Logo-1.png", alt: "Disney" },
  { src: "https://www.digitalsilk.com/wp-content/uploads/2024/05/MicrosoftTeams-image-2.png", alt: "Airbnb" },
  { src: "https://www.digitalsilk.com/wp-content/uploads/2024/05/enchant_logo-1.png", alt: "Apple" },
  { src: "https://www.digitalsilk.com/wp-content/uploads/2024/05/Sony-1.png", alt: "Spark" },
  { src: "https://www.digitalsilk.com/wp-content/uploads/2024/05/MicrosoftTeams-image-2.png", alt: "Samsung" },
  { src: "https://www.digitalsilk.com/wp-content/uploads/2024/05/xerox_logo-1.png", alt: "Quora" },
  { src: "https://www.digitalsilk.com/wp-content/uploads/2024/05/grenco_logo-1.png", alt: "Sass" },
  { src: "https://www.digitalsilk.com/wp-content/uploads/2024/05/BRU_Logo-1.png", alt: "Apple" },
  { src:"https://www.digitalsilk.com/wp-content/uploads/2024/05/PG_logo-1.png", alt: "Spark" },
  { src: "https://www.digitalsilk.com/wp-content/uploads/2024/05/mcds_logo-1.png", alt: "Samsung" },
  { src: "https://www.digitalsilk.com/wp-content/uploads/2024/05/nyc_logo-1.png", alt: "Quora" },
];

const categories = [
  "All",
  "Branding & Web Design",
  "E-commerce Development",
  "Fashion & Lifestyle",
  "FinTech",
  "Education Technology",
  "Non-Profit",
];

  // Create 20 transparent divs
  const boxes = Array.from({ length: 20 }, (_, index) => (
    <div className="slider-box" key={index}></div>
  ));


export default function Portfolio() {
  
  return (
    
    
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <section className="w-full py-20 md:py-28 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
        <div className="container px-4 md:px-6 relative z-10">
          <ScrollAnimation type="fade-up">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-purple-300 mb-2">
                <span className="mr-1">✦</span> Our Work
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Portfolio</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Explore our latest projects and see how we've helped brands transform their digital presence
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="w-full">
        <section className="bg-[#00042A] h-[100px] mb-10 justify-center md:items-center ">
          
          
           <LogoCarousel items={techStack} speed={15} />;
          
          
        </section>

        <div className="container px-4 md:px-6">
          <ScrollAnimation type="fade-up">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  className="bg-slate-800/50 border-slate-700 text-gray-300 hover:bg-purple-500/20 hover:border-purple-500/50 hover:text-white transition-all duration-300"
                >
                  {category}
                </Button>
              ))}
            </div>
          </ScrollAnimation>

          <div className="min-h-screen  flex items-center justify-center p-6 w-full">
            <AnimatedCard
              title="Stylish Image Cards"
              cards={cardData}
              columns="grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-2"
              height="h-[450px]"
            />
          </div>

          <ScrollAnimation type="fade-up" delay={600}>
            <div className="flex justify-center mt-12">
              <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0">
                Load More Projects
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      <div   style={{
        height:"500px",
        marginTop:"50px",
  backgroundImage: `
  radial-gradient(ellipse at left center, rgba(149, 54, 229, 0.3) 0%, rgba(149, 54, 229, 0) 80%, rgba(149, 54, 229, 0) 100%),
  radial-gradient(ellipse at right center, rgba(0, 185, 255, 0.3) 0%, rgba(0, 185, 255, 0) 80%, rgba(0, 185, 255, 0) 100%)
`,
backgroundRepeat: 'no-repeat',
backgroundSize: '100% 100%',
backgroundPosition: 'left center, right center',

  }}>
     <div className="slider-wrapper">
        <div className="slider-track">
          {boxes}
          {boxes /* duplicate for infinite scroll */}
        </div>
      </div>

      {/* Embedded CSS */}
      <style>{`
        .slider-wrapper {
          width: 100%;
          overflow: hidden;
          
          padding: 20px 0;
        }

        .slider-track {
          display: flex;
          width: fit-content;
          animation: scroll 50s linear infinite;
        }

        .slider-box {
          width: 330px;
          height: 180px;
          margin: 10px;
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .slider-box {
            width: 90px;
            height: 90px;
            margin: 8px;
          }
          .slider-wrapper {
            padding: 15px 0;
          }
        }

        @media (max-width: 480px) {
          .slider-box {
            width: 70px;
            height: 70px;
            margin: 6px;
          }
          .slider-wrapper {
            padding: 10px 0;
          }
        }
      `}</style>




      <div className="ltr-slider-wrapper">
        <div className="ltr-slider-track ltr-slide-right">
          {images.concat(images).map((src, index) => (
            <div className="ltr-slider-box" key={index}>
              <img src={src} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .ltr-slider-wrapper {
          width: 100%;
          overflow: hidden;
      
          padding: 20px 0;
        }

        .ltr-slider-track {
          display: flex;
          width: fit-content;
        }

        .ltr-slide-right {
          animation: ltr-scroll-right 50s linear infinite;
        }

        .ltr-slider-box {
            width: 330px;
          height: 180px;
          margin: 10px;
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }

        @keyframes ltr-scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @media (max-width: 768px) {
          .ltr-slider-box {
            width: 90px;
            height: 90px;
            margin: 8px;
          }
          .ltr-slider-wrapper {
            padding: 15px 0;
          }
        }

        @media (max-width: 480px) {
          .ltr-slider-box {
            width: 70px;
            height: 70px;
            margin: 6px;
          }
          .ltr-slider-wrapper {
            padding: 10px 0;
          }
        }
      `}</style>
      
         </div>
         
         

      <section className="w-full py-20 md:py-28 bg-gradient-to-r from-slate-900 via-purple-900/20 to-slate-900">
      
      
        <div className="container px-4 md:px-6">
          <ScrollAnimation type="fade-up">
            <div className="flex flex-col items-center space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Ready to Start <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Your Project?</span>
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-400 md:text-lg">
                Contact us today to discuss your requirements and get a free quote.
              </p>
              <Button asChild className="bg-purple-600 hover:bg-purple-700 border-0 text-white px-8 py-4">
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}