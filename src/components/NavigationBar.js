import React from "react";
import { AiOutlineInstagram, AiFillFacebook } from "react-icons/ai"
import { SiDiscord } from "react-icons/si"


export default class NavigationBar extends React.Component {
    render() {
        return(
            <div class="">
            <nav class=" flex items-center justify-between flex-wrap bg-transparent  p-2">
                <div class="flex items-center bg-transparent flex-shrink-0  mr-6">
                    <img  src="./vespa-logo.png" class="h-14 w-18 ml-5 pt-2 bg-transparent  hover:text-green-500" />
                    <a  href="/" class="bg-transparent font-semibold hover:underline underline-offset-2  text-xl tracking-tight text-green-600 pl-10">CSUS VESPA</a>
                </div>
                <div class="block lg:hidden">
                    <button class="flex items-center px-3 py-2 border rounded text-green-700 hover:text-white hover:border-white">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
                <div class="w-full block flex-grow bg-transparent lg:flex lg:items-center lg:w-auto">
                    <div class="text-sm lg:flex-grow bg-transparent text-left font-semibold text-md">
                    
                        
                   
                    <a href="/apprenticeship101" class="block mt-4 bg-transparent lg:inline-block lg:mt-0 text-gray-900 p-2 rounded-md
                        hover:text-green-100 hover:bg-green-500 mr-4">
                        Apprenticeship
                    </a>
                    <a href="/tutorial" class="block mt-4 lg:inline-block bg-transparent text-gray-900 lg:mt-0   p-2 rounded-md
                        hover:text-green-100 hover:bg-green-500">
                        Tutorial
                    </a>
                    </div>
                    <div class="bg-transparent">
                        <a href="#" class="inline-block text-sm p-3  bg-transparent leading-none  rounded text-gray-900
                        hover:border-transparent hover:text-green-500  mt-4 lg:mt-0">
                            <AiFillFacebook  class="bg-transparent text-gray-900 hover:text-green-500"  size={30}/>
                        </a>
                        <a href="#" class="inline-block text-sm  p-3 leading-none bg-transparent rounded 
                        hover:border-transparent hover:text-green-500  mt-4 lg:mt-0">
                            <AiOutlineInstagram  class="bg-transparent text-gray-900 hover:text-green-500" size={30}/>
                        </a>
                        <a href="#" class="inline-block text-sm p-3 leading-none bg-transparent rounded 
                        hover:border-transparent hover:text-green-500  mt-4 lg:mt-0">
                            <SiDiscord  class="bg-transparent text-gray-900hover:text-green-500" size={30}/>
                        </a>
                       
                    </div>
                </div>
                </nav> 
            </div>
        
        )

    }
}