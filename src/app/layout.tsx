import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar/Navbar';
import ClientOnly from './components/ClientOnly';
import RegisterModal from './components/modals/RegisterModal';
import LoginModal from './components/modals/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';
import Image from 'next/image';
import Footer from './components/footer/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Limaz',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal  />
          <RegisterModal />
          <Navbar />
          
        </ClientOnly>
        <div className='pt-12'>
          <div className='pt-12'></div>
        </div>
        
        <div className="rounded overflow-hidden flex flex-row">
          <div className="px-6 py-4">
            <Image className="ml-3 rounded" height="300" width="300" alt="Avator" src="/images/house1.png"/>
            <p className="text-gray-700 pl-3 text-base">House for sale</p>
            <div className="pl-3 pb-2">
              <span className="inline-block bg-rose-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Salers Name</span>
            </div>
          </div>
          <div className="px-6 py-4">
            <Image className="ml-3 rounded" height="300" width="300" alt="Avator" src="/images/house2.png"/>
            <p className="text-gray-700 pl-3 text-base">Rental Residential Properties</p>
            <div className="pl-3 pb-2">
              <span className="inline-block bg-rose-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Salers Name</span>
            </div>
          </div>
          <div className="px-6 py-4">
            <Image className="ml-3 rounded" height="300" width="300" alt="Avator" src="/images/house3.png"/>
            <p className="text-gray-700 pl-3 text-base">House for sale</p>
            <div className="pl-3 pb-2">
              <span className="inline-block bg-rose-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Salers Name</span>
            </div>
          </div>
          <div className="px-6 py-4">
            <Image className="ml-3 rounded" height="300" width="300" alt="Avator" src="/images/house4.png"/>
            <p className="text-gray-700 pl-3 text-base">Rental Residential Properties</p>
            <div className="pl-3 pb-2">
              <span className="inline-block bg-rose-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Salers Name</span>
            </div>
          </div>
          <div className="px-6 py-4">
            <Image className="ml-3 rounded" height="300" width="300" alt="Avator" src="/images/house5.png"/>
            <p className="text-gray-700 pl-3 text-base">Rental Residential Properties</p>
            <div className="pl-3 pb-2">
              <span className="inline-block bg-rose-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Salers Name</span>
            </div>
          </div>
          <div className="px-6 py-4">
            <Image className="ml-3 rounded" height="300" width="300" alt="Avator" src="/images/house6.png"/>
            <p className="text-gray-700 pl-3 text-base">House for sale</p>
            <div className="pl-3 pb-2">
              <span className="inline-block bg-rose-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Salers Name</span>
            </div>
          </div>
        </div>
        <div className="rounded overflow-hidden flex flex-row">
          <div className="px-6 py-4">
            <Image className="ml-3 rounded" height="300" width="300" alt="Avator" src="/images/house7.png"/>
            <p className="text-gray-700 pl-3 text-base">Rental Residential Properties</p>
            <div className="pl-3 pb-2">
              <span className="inline-block bg-rose-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Salers Name</span>
            </div>
          </div>
          <div className="px-6 py-4">
            <Image className="ml-3 rounded" height="300" width="300" alt="Avator" src="/images/house8.png"/>
            <p className="text-gray-700 pl-3 text-base">Rental Residential Properties</p>
            <div className="pl-3 pb-2">
              <span className="inline-block bg-rose-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Salers Name</span>
            </div>
          </div>
          <div className="px-6 py-4">
            <Image className="ml-3 rounded" height="300" width="300" alt="Avator" src="/images/house9.png"/>
            <p className="text-gray-700 pl-3 text-base">Rental Residential Properties</p>
            <div className="pl-3 pb-2">
              <span className="inline-block bg-rose-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Salers Name</span>
            </div>
          </div>
          <div className="px-6 py-4">
            <Image className="ml-3 rounded" height="300" width="300" alt="Avator" src="/images/house1.png"/>
            <p className="text-gray-700 pl-3 text-base">Rental Residential Properties</p>
            <div className="pl-3 pb-2">
              <span className="inline-block bg-rose-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Salers Name</span>
            </div>
          </div>
          <div className="px-6 py-4">
            <Image className="ml-3 rounded" height="300" width="300" alt="Avator" src="/images/house2.png"/>
            <p className="text-gray-700 pl-3 text-base">House for sale</p>
            <div className="pl-3 pb-2">
              <span className="inline-block bg-rose-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Salers Name</span>
            </div>
          </div>
          <div className="px-6 py-4">
            <Image className="ml-3 rounded" height="300" width="300" alt="Avator" src="/images/house3.png"/>
            <p className="text-gray-700 pl-3 text-base">Rental Residential Properties</p>
            <div className="pl-3 pb-2">
              <span className="inline-block bg-rose-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Salers Name</span>
            </div>
          </div>
        </div>
        <div className="rounded overflow-hidden flex flex-row">
          <div className="px-6 py-4">
            <Image className="ml-3 rounded" height="300" width="300" alt="Avator" src="/images/house6.png"/>
            <p className="text-gray-700 pl-3 text-base">House for sale</p>
            <div className="pl-3 pb-2">
              <span className="inline-block bg-rose-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Salers Name</span>
            </div>
          </div>
          <div className="px-6 py-4">
            <Image className="ml-3 rounded" height="300" width="300" alt="Avator" src="/images/house3.png"/>
            <p className="text-gray-700 pl-3 text-base">House to let</p>
            <div className="pl-3 pb-2">
              <span className="inline-block bg-rose-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Salers Name</span>
            </div>
          </div>
          <div className="px-6 py-4">
            <Image className="ml-3 rounded" height="300" width="300" alt="Avator" src="/images/house1.png"/>
            <p className="text-gray-700 pl-3 text-base">Rental Residential Properties</p>
            <div className="pl-3 pb-2">
              <span className="inline-block bg-rose-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Salers Name</span>
            </div>
          </div>
          <div className="px-6 py-4">
            <Image className="ml-3 rounded" height="300" width="300" alt="Avator" src="/images/house7.png"/>
            <p className="text-gray-700 pl-3 text-base">Rental Residential Properties</p>
            <div className="pl-3 pb-2">
              <span className="inline-block bg-rose-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Salers Name</span>
            </div>
          </div>
          <div className="px-6 py-4">
            <Image className="ml-3 rounded" height="300" width="300" alt="Avator" src="/images/house9.png"/>
            <p className="text-gray-700 pl-3 text-base">House to let</p>
            <div className="pl-3 pb-2">
              <span className="inline-block bg-rose-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Salers Name</span>
            </div>
          </div>
          <div className="px-6 py-4">
            <Image className="ml-3 rounded" height="300" width="300" alt="Avator" src="/images/house1.png"/>
            <p className="text-gray-700 pl-3 text-base">Rental Residential Properties</p>
            <div className="pl-3 pb-2">
              <span className="inline-block bg-rose-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Salers Name</span>
            </div>
          </div>
        </div>
        <div className="rounded overflow-hidden flex flex-row">
          <div className="px-6 py-4">
            <Image className="ml-3 rounded" height="300" width="300" alt="Avator" src="/images/house4.png"/>
            <p className="text-gray-700 pl-3 text-base">House for sale</p>
            <div className="pl-3 pb-2">
              <span className="inline-block bg-rose-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Salers Name</span>
            </div>
          </div>
          <div className="px-6 py-4">
            <Image className="ml-3 rounded" height="300" width="300" alt="Avator" src="/images/house5.png"/>
            <p className="text-gray-700 pl-3 text-base">House to let</p>
            <div className="pl-3 pb-2">
              <span className="inline-block bg-rose-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Salers Name</span>
            </div>
          </div>
          <div className="px-6 py-4">
            <Image className="ml-3 rounded" height="300" width="300" alt="Avator" src="/images/house6.png"/>
            <p className="text-gray-700 pl-3 text-base">Rental Residential Properties</p>
            <div className="pl-3 pb-2">
              <span className="inline-block bg-rose-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Salers Name</span>
            </div>
          </div>
          <div className="px-6 py-4">
            <Image className="ml-3 rounded" height="300" width="300" alt="Avator" src="/images/house8.png"/>
            <p className="text-gray-700 pl-3 text-base">Rental Residential Properties</p>
            <div className="pl-3 pb-2">
              <span className="inline-block bg-rose-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Salers Name</span>
            </div>
          </div>
          <div className="px-6 py-4">
            <Image className="ml-3 rounded" height="300" width="300" alt="Avator" src="/images/house2.png"/>
            <p className="text-gray-700 pl-3 text-base">Rental Residential Properties</p>
            <div className="pl-3 pb-2">
              <span className="inline-block bg-rose-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Salers Name</span>
            </div>
          </div>
          <div className="px-6 py-4">
            <Image className="ml-3 rounded" height="300" width="300" alt="Avator" src="/images/house1.png"/>
            <p className="text-gray-700 pl-3 text-base">House to let</p>
            <div className="pl-3 pb-2">
              <span className="inline-block bg-rose-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Salers Name</span>
            </div>
          </div>
        </div>
        <div className='mt-8'>
          <p className='text-center text-lg'>Continue exploring listings</p>
           <button className="bg-blue-500  pt-2 pb-2 pl-8 pr-8 text-white rounded ml-auto mr-auto block justify-center items-center ...">Explore</button>
        </div>
        <Footer />
        </body>
    </html>
  )
}
