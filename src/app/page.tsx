import Image from 'next/image'
import Skeleton from '../components/Skeleton'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between pt-24 pb-5">
      <div className="flex flex-col items-center justify-center">
        <Image src="/Mylogo.svg" alt="Logo" width="200" height="200" />
        <h1 className="text-4xl font-bold mt-8">Achraf Sabbar</h1>
        <h1 className="text-3xl font-bold mt-8">Boilerplate : Next.js + Tailwind CSS with TypeScript</h1>
      </div>
      <div>
        <Footer />
      </div>
      <div className='flex gap-2 items-center justify-center'>
        <a
          href="" // your github link
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl font-bold mt-8"
        >
          Github
        </a>
        <a href="" // your linkedin link
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl font-bold mt-8"
        >
          Linkedin
        </a>
        <a 
          href="" // your twitter link
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl font-bold mt-8"
        >
          Twitter
        </a>
        <a 
          href="" // your Portfolio link
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl font-bold mt-8"
        >
          Portfolio
        </a>
      </div>
    </div>
  )
}
