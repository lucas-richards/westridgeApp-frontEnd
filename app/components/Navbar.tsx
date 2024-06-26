"use client"

import { Disclosure } from "@headlessui/react"
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import Themebutton from "./Themebutton"

export default function Navbar() {

    let pathname = usePathname() || '/'
    return(
        <Disclosure as="nav">
            {({open})=>(
                <>
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex justify-between w-full">
                                <div className="flex items-center">
                                    <Link href="/">
                                        <h1 className="text-2xl font-medium ">
                                            Westridge <span className="text-mainColor ">App</span>
                                        </h1>
                                    </Link>
                                </div>
                                <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center">
                                    {/* prefetch will get the data from the backend and will be almost instant */}
                                    <Link 
                                        href="/" 
                                        prefetch 
                                        className={`${
                                            pathname === '/'
                                        ?'border-mainColor dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                                        :
                                        'border-transparent text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'}`}>
                                        Home
                                    </Link>
                                    <Link 
                                        href="/auth/signin" 
                                        prefetch 
                                        className={`${
                                            pathname === '/auth/signin'
                                        ?'border-mainColor dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                                        :
                                        'border-transparent text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'}`}>
                                        Sign In
                                    </Link>
                                    {/* <Link 
                                        href="/guestbook" 
                                        prefetch 
                                        className={`${
                                            pathname === '/guestbook'
                                        ?'border-mainColor dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                                        :
                                        'border-transparent text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'}`}>
                                        Guestbook
                                    </Link> */}
                                    {/* <Link 
                                        href="/projects" 
                                        prefetch 
                                        className={`${
                                            pathname === '/projects'
                                        ?'border-mainColor dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                                        :
                                        'border-transparent text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'}`}>
                                        Projects
                                    </Link> */}
                                    <Themebutton />
                                </div>
                            </div>
                            <div className="-mr-2 flex items-center sm:hidden">
                                <Themebutton />
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-insert focus:ring-mainColor dark:hover:bg-gray-800">
                                    {open ?(
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                      </svg>
                                      
                                    ):(
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                                        </svg>


                                    )}
                                </Disclosure.Button>
                            </div>

                        </div>

                    </div>
                    <Disclosure.Panel className="sm:hidden">
                        
                        <div className="pt-2 pb-3 space-y-1">
                            <Link 
                                href="/" 
                                prefetch 
                                className={`${pathname == "/"
                                ?"bg-teal-50 border-mainColor text-mainColor block pl-3 pr-4 py-2 border-l-4 text-base font-base font-medium dark:bg-gray-800"
                                :"border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-mainColor dark:hover:text-mainColor block pl-3 pr-4 py-2 dark:hover:bg-gray-700 border-l-4 text-base font-medium dark:text-white"}`}
                                >
                                Home
                            </Link>
                            {/* <Link 
                                href="/guestbook" 
                                prefetch 
                                className={`${pathname == "/guestbook"
                                ?"bg-teal-50 border-mainColor text-mainColor block pl-3 pr-4 py-2 border-l-4 text-base font-base font-medium dark:bg-gray-800"
                                :"border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-mainColor dark:hover:text-mainColor block pl-3 pr-4 py-2 dark:hover:bg-gray-700 border-l-4 text-base font-medium dark:text-white"}`}
                                >
                                Guestbook
                            </Link> */}
                            <Link 
                                href="/projects" 
                                prefetch 
                                className={`${pathname == "/projects"
                                ?"bg-teal-50 border-mainColor text-mainColor block pl-3 pr-4 py-2 border-l-4 text-base font-base font-medium dark:bg-gray-800"
                                :"border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-mainColor dark:hover:text-mainColor block pl-3 pr-4 py-2 dark:hover:bg-gray-700 border-l-4 text-base font-medium dark:text-white"}`}
                                >
                                Projects
                            </Link>
                           
                        </div>
                        
                    </Disclosure.Panel>
                </>
            )}

        </Disclosure>
    )

}