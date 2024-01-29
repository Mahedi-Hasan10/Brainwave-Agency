import Image from "next/image";
import ServiceCard from "./components/services/ServiceCard";
import { Rate } from 'antd';


export default function Home() {
  return (
    <main className="z-10">
      {/* hero section  */}
      <section className="bg-[#f3f6f9] dark:bg-dark scroll-smooth w-full flex justify-between lg:py-[160px] md:py-[100px] py-[80px] lg:px-[166px] md:px-[80px] px-[20px] lg:flex-nowrap flex-wrap-reverse dark:border-b border-b-white">
        <div className="flex flex-col gap-[25px] lg:max-w-[541px] lg:mt-0 mt-10 lg:mx-0 mx-auto">
          <p className="text-[13px] font-bold uppercase text-[#F64B4B]">
            Let&apos;s shift your bus
          </p>
          <h2 className="lg:text-[60px] md:text-[50px] text-[40px] lg:font-bold md:font-semibold font-medium dark:text-white text-[#161C2D] lg:leading-[65px] md:leading-[50px] leading-[45px]">
            Shift your business fast with Shade Pro.
          </h2>
          <p className="text-[19px] font-normal text-[#161C2D] dark:text-white">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next consultancy website within few minutes.
          </p>
          <button className="lg:flex hidden py-[13px] px-[15px] rounded-xl text-center w-fit bg-[#473BF0] text-white text-[17px] font-bold">
            Get Started a Project
          </button>
        </div>
        <div className="mx-auto">
          <Image
            src="/heroBanner.png"
            alt="hero banner"
            width={463}
            height={504}
          />
        </div>
      </section>

      {/* hero services section */}
      <section className="lg:py-[160px] md:py-[100px] py-[80px] lg:px-[166px] md:px-[80px] px-[20px]">
        <h5 className="text-[#F64B4B] text-[13px] font-bold text-center uppercase mb-4">
          Our services
        </h5>
        <h3 className="lg:text-[36px] md:text-[30px] text-[25px] font-bold dark:text-white text-[#161C2D] lg:max-w-[521px] mx-auto mb-[4]">
          We provide great services for our customers based on needs
        </h3>
        <div className="lg:mt-[81px] md:mt-[50px] mt-[25px] flex justify-around flex-wrap gap-3">
          <ServiceCard cardBgColor="bg-[#68d585]" cardImage="/service1.svg" />
          <ServiceCard cardBgColor="bg-[#473BF0]" cardImage="/service2.svg" />
          <ServiceCard cardBgColor="bg-[#F64B4B]" cardImage="/service3.svg" />
        </div>
        <div className="flex lg:gap-[81px] gap-[30px] items-center justify-center lg:mt-[81px] md:mt-[50px] mt-[35px] flex-wrap">
          <Image src="/clint.svg" height={164} width={164} alt="clint" />
          <div className="max-w-[735px]">
          <Rate disabled defaultValue={5} className="lg:mb-[37px] mb-6" />
            <h4 className="text-[24px] font-bold dark:text-white text-[#161C2D] leading-[34px]">
              “OMG! I cannot believe that I have got a brand new landing page
              after getting Albino. It was super easy to edit and publish.”
            </h4>
            <h5 className="text-[#161C2D] text-[17px] font-bold mt-3">
              Franklin Hicks <span className="font-normal"> Web Developer</span>
            </h5>
          </div>
        </div>
      </section>

      {/* hero our story */}
      <section className="z-10 lg:py-[160px] md:py-[100px] py-[80px] lg:px-[166px] md:px-[80px] px-[20px]">
          <p className="text-[#F64B4B] text-sm font-bold mb-10">Our Story</p>
          <h3 className="dark:text-white text-[#161C2D] font-bold text-4xl max-w-[515px]">We know how everything works and why your business is failing over and over again.</h3>
          <div className="flex lg:flex-nowrap flex-wrap gap-[95px] mt-[53px]">
              <Image src="/story/story1.png" width={445} height={565} alt="story" className="mt-[53px]" />
             <div >
                  <div className="flex gap-[92px]">
                      <div className="relative">
                        <Image src="/story/story2.png" width={318} height={332} alt="story" />
                        <Image src="/story/storyObject.svg" width={107} height={109} alt="story object" className="absolute top-[-45px] right-[-45px]" />
                      </div>
                      <div className="flex items-center justify-center">
                          <Image src="/story/story3.png" width={160} height={167} alt="story" />
                      </div>
                  </div>
                  <div className="flex items-center mt-[100px]">
                      <p className="dark:text-white text-[#161C2D] text-[17px] font-normal max-w-[490px] leading-7">
                          We share common trends and strategies for improving your rental income and making sure you stay in high demand. With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
                      </p>
                  </div>
             </div>
          </div>
          <div>
              
          </div>
      </section>
      
    </main>
  );
}
