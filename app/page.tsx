import Image from 'next/image'
import Background from 'public/assets/img/background3.jpg'
import Office1 from 'public/assets/img/office-long-1.png'
import Office2 from 'public/assets/img/office-long-2.png'
import Tractor from 'public/assets/img/tractor.jpg'
import CostCalculator from '@/components/CostCalculator/CostCalculator'
import Features from '@/components/Features'
import Banner from '@/components/Banner'
import { SignedOut } from '@clerk/nextjs';

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
        <div className='relative w-full h-2/4'>
            <div className='z-10'>
              <Image 
                priority
                src={Background}
                alt=" Ariel View"
                layout='fill'
                objectFit='cover'
                objectPosition='center'     
              />
            </div>

            <div className='relative flex flex-col items-center'>
              <div className='pt-44 pb-36 text-center text-black'>
                <h1 className='text-5xl pb-5 '>Welcome to</h1>
                <h1 className='text-3xl pb-4'>24/7 BRACE TRADING ENTERPRISE</h1>
                <div className='space-x-6'>
                <form action="" className='w-full max-w-md'>
                <div className='relative flex items-center text-gray-400 focus-within:text-gray-600'>
                <input  
                  type='search ' 
                  name='Tracking number' 
                  placeholder='Search Tracking No.'
                  className='w-full p-4 rounded-full bg-slate-200 '
                  />
                <button className='absolute right-1 top-1/2 -translate-y-1/2 p-4
                rounded-full bg-slate-800'>  
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                </button>
                  </div>
                </form>
              </div>
              </div>
              
            </div>
          </div>
          <CostCalculator />
          <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">Customer Support</h2>
                <p className="mb-4">Experience unparalleled customer support on our shipping website, where our dedicated team goes above and beyond to ensure your satisfaction. Our amazing customer support agents are available 24/7, ready to assist you with any inquiries or concerns, making your shipping journey seamless and stress-free. Join thousands of satisfied customers who rave about our outstanding support, making us the go-to choice for all your shipping needs.</p>
                
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
                <Image className="w-full rounded-lg" 
                src={Office1}
                alt="office content 1"
                />
                <Image className="mt-4 w-full rounded-lg lg:mt-10" 
                src={Office2}
                alt="office content 2"
                />
            </div>
        </div>
    </section>
    <section className="bg-white dark:bg-gray-900">
        <div className="grid py-10 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="place-self-center mr-auto pb-4 lg:col-span-7">
                <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">We handle every parcel size</h1>
                <p className="mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">No package is too big or too small for us! Our shipping website is fully equipped to handle parcels of any size, ensuring a smooth and reliable delivery experience for all your shipping needs.</p>
                <a href="#" className="inline-flex justify-center items-center py-3 px-5 mr-3 text-base font-medium text-center text-black rounded-lg bg-amber-500 hover:bg-yellow-400 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    Get started
                    <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
                <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    Speak to Sales
                </a> 
            </div>
            <div className=" lg:mt-0 lg:col-span-5 lg:flex">
                <Image 
                src={Tractor}
                alt="mockup"/>
            </div>                
        </div>
    </section>
    <Features />
    <SignedOut>
    <Banner/>
    </SignedOut>
          </div>
   // </main>
   
  )
}
