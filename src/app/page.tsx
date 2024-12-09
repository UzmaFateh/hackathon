import Image from "next/image";
import carousel from "../../public/carousel-item.png"
import hero1 from "../../public/col-md-6 (1).png"
import hero2 from "../../public/col-md-3.png"
import hero3 from "../../public/card-item.png"
import hero4 from "../../public/media bg-cover.png"
import Card from "@/components/card";
import banner from "../../public/col-md-6 (2).png"
import hero5 from "../../public/hero-cover-1.png"
import Footer from "@/components/footer";

export default function Home() {
  return (
 <div>
<Image className="mt-8"
src={carousel}
alt="carousel"
width={1250}
height={400}></Image>


<div>
  <center>
  <h1 className="font-semibold text-lg pt-12 mt-4">Editor,s Pick</h1>
  <p className="text-sm text-gray-500 pb-8">Problems trying to resolve the conflict between </p>
  </center>
</div>
<div  className="  sm:flex flex-wrap pl-[12%] pb-[8%] "  >
<Image className="mt-8 w-[90%] sm:w-[40%]"
src={hero1}
alt="carousel"
width={100}
height={100}></Image>
<Image className="mt-8 w-[90%] sm:w-[20%] sm:ml-6"
src={hero2}
alt="carousel"
width={100}
height={100}></Image>
<div>
<Image className="mt-8 w-[100%]  -ml-4  sm:ml-6"
src={hero3}
alt="carousel"
width={150}
height={90}></Image>
<Image className="mt-6  w-[100%]  -ml-4 sm:ml-6"
src={hero4}
alt="carousel"
width={150}
height={90}></Image>
</div>

 </div>
 <Card />

 <div className="bg-green-500 flex flex-wrap justify-around">
  <div className="pt-[10%]  sm:pl-[10%] w-[80%] sm:w-[40%]">
    <p className="text-white text-lg font-semibold py-4">SUMMER 2020</p>
    <h1 className="text-white text-6xl font-semibold py-4">Vita Classic Product</h1>
    <p className="text-white text-sm  py-4">We know how large objects will act, We know how are objects will act, We know</p>
    <div>
      <div className="flex">
        <p className="text-white font-bold text-2xl pt-3">$16.18</p>
      <button className="text-white font-semibold text-4 bg-green-400 w-[184px] h-[52px] ml-8 border-0 rounded-md">ADD TO CART</button></div>
    </div>
  </div>
  <Image className="w-45%] pt-[10%]"
  src={banner}
  alt="banner">

  </Image>
 </div>
{/* hero sec */}
 <div className=" flex flex-wrap justify-around">
 <Image className="  sm;w-[45%] pt-[2%] pl-[10%]"
  src={hero5}
  alt="banner">

  </Image>
  <div className="pt-[10%] -ml-4 w-[80%] sm:w-[30%]">
    <p className="text-gray-400 text-xs font-semibold py-4">SUMMER 2020</p>
    <h1 className=" text-4xl font-bold py-4">Part of the Neural 
    Universe</h1>
    <p className="text-gray-500 text-xl  py-4">We know how large objects will act, We know how are objects will act, We know</p>
    <div>
      <div className="flex">
      <button className="text-white font-semibold text-4 bg-green-400 w-[174px] h-[52px]  border-0 rounded-md">READ MORE</button>
      <button className="text-green-500 font-semibold text-4 border-2 border-green-500  w-[174px] h-[52px] ml-1 rounded-md">BUY NOW</button></div>
    </div>
  </div>

 </div>
 <Footer />
</div>

  );
}
