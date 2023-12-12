"use client"
import React, 

{ useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Linka } from "./link";
import { Linkb } from "./link2";


export function Navbar(){
    const [isClick, setIsclick]=useState(false)
    function handleClick(){
        setTimeout(()=>{
            setIsclick(!isClick)
        console.log(isClick)

        },100)
        
    }
    return(
        <>
        <nav className=" z-10 bg-gray-100 shadow fixed-top border-b-1 border-blue-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                        <Link href="/"className="  text-black  px-3 py-2 font-medium">
                            <h1 className="text-2xl text-black font-bold">Tchivala</h1></Link>


                        </div>


                    </div>
                    <div className="hidden md:block">
                        <div className=" ml-4 flex items-center space-x-4">
                            <Linka href="/">Home</Linka>
                         <Linka href="/Header">Sobre nós</Linka>
                        <Linka href="/Login">Login</Linka>
                            <Linka href="/Sign_up">
                                Cadastrar
                            </Linka>


                        </div>

                    </div>
                    <div className="md:hidden  flex items-center">
                        <button className="
                        inline-flex items-center justify-center p2 bg-white
                         hover:text-black focus:outline-none focus:ring-2
                        focus:ring-inset  focus:ring-white " onClick={handleClick}>
                            {isClick?
                              <Image src="/x.svg" width="20" height="10" alt="x"/>
                               
                            :
                            
                            <Image src="/bars.svg" width="20"  height="10" alt="bars"/>
                        }
        
                        </button>

                    </div>
                    


                </div>

            </div>
            {isClick &&(
                <div className="md:hidden ">
                    <div className="px-2 pt-2 pb-3 space-y-3 sm:px-3" >

                    <Linkb href="/">Home</Linkb>
                         <Linkb href="/componensts/Header">Sobre nós</Linkb>
                        <Linkb href="#">Login</Linkb>
                            <Linkb href="/componensts/Sign_up">
                                Cadastrar
                            </Linkb>
                    </div>

                </div>

            )}

        </nav>
        </>
    )
}