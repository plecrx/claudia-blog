import Head from 'next/head'
import {Footer, Navbar} from "@/components";
import {FC, ReactElement} from "react";

interface PageLayoutProps {
  children: ReactElement | ReactElement[]
}

export const PageLayout: FC<PageLayoutProps> = ({children}) => {
  return (
    <div>
      <Head>
        <title>Blog de Claudia Lecurieux</title>
      </Head>

      <main className="w-full h-full min-h-screen bg-amber-100 text-orange-700">
        <Navbar/>

        {children}

        <Footer/>
      </main>
    </div>
  )
}