import React from "react";
import Phone from "./phone/Phone";

import { LaptopWidget } from "./widgets/LaptopWidget";
import 'flowbite';
import "./Home.css"

export default class Home extends React.Component {

    render() {
        return(
            <div>
                <div class="m-0 w-full h-full bg-cover bg-transparent" style={{backgroundImage:"url('./Science Building.jpeg')"}}>
                    <div class="container lg:mx-auto bg-transparent" style={{maxWidth:"1100px"}}>
                        <div class="lg:bg-transparent bg-gray-800 text-white  ">
                            <p class="text-4xl bg-transparent  lg:text-left lg: lg:text-gray-800 lg:pt-10 ">
                                Welcome to <span class="lg:text-zinc-800 bg-transparent text-green-400"> CSUS CyberDyne CLUB </span>
                            </p>
                        </div>
                        <div class="lg:grid lg:grid-cols-2 gap-4  lg:mx-auto lg:pt-10 bg-transparent ">
                            
                            <div class=" bg-transparent phonescreen"
                                style={{maxWidth:"500px",minHeight:"500px"}}>
                                    
                                <Phone/>
                                    
                            </div>
                            
                            <div class="lg:mx-auto bg-transparent">
                                
                                <div class="container lg:rounded-md mx-auto drop-shadow-lg lg:mt-5 bg-gradient-to-r from-rose-500 via-white to-blue-500 p-5">
                                
                                    Happy 4th Of July!
                                </div>
                                <div class="bg-gray-800 lg:bg-gradient-to-r lg:from-teal-500  lg:to-green-500 lg:p-3 lg:rounded-md lg:drop-shadow-lg  lg:mt-20 mobilefilter"
                                       
                                        style={{maxWidth:"500px"}}>
                                    <p class="lg:text-zinc-800 bg-transparent lg:mx-auto text-white  ">
                                        A Community for ECS Majors to learn each other's major's skillsets without the need of multi-majoring
                                        A friendly place were students can learn to do more with skillsets they already have.
                                    Neccessary career helps for students to ensure a better chance at success in a growing market.
                                    A relaxing and fun zone for ECS Majors to kickback, relax, enjoy healthy Japanese Media (Anime, Manga, etc.), or go gaming!</p>
                                </div>
                            </div>

                        </div>

                        
                    </div>
                </div>
                <div class="bg-gray-800 bg-gradient-to-r from-teal-500  to-green-500">
                    <div class="container lg:grid grid-cols-2 lg:gap-4  bg-transparent mx-0">
                            <div class=" p-3 rounded-md bg-transparent drop-shadow-lg" 
                                style={{minHeight:"500px"}}>
                                <ul class="lg:text-zinc-900 lg:list-disc text-2xl text-white sm:text-gre list-none text-left lg:text-left lg:p-20 lg:mt-1 mt-5 bg-transparent pt-5">
                                    <p class="bg-gray-800 p-3 text-center rounded-md mb-5 text-white">Our Purpose</p>
                                    <li class="bg-transparent p-2">Study sectors for ALL ECS majors</li>
                                    <li class="bg-transparent p-2">More than 1000 members across all ECS majors</li>
                                    <li class="bg-transparent p-2">Warp zone to other clubs such as ACM, IEEE, Cyber Defense ...</li> 
                                    <li class="bg-transparent p-2">Homework/Projects helps (within the rules of Sac State)</li> 
                                    <li class="bg-transparent p-2"> Career helps such as resume review/advice, internship/job offers</li>
                                    
                                </ul>
                            </div>
                        
                        <div class="container bg-transparent">
                            <LaptopWidget/>
                        </div>
                    </div>
                </div>
                <div class="container mx-auto p-10">
                    <p class="text-sky-900 font-bold text-5xl mx-auto p-5"> News and Events </p>
                    <div class="container lg:grid grid-cols-2 gap-4  bg-transparent mx-0">
                        <div>
                            <img class="" src="./vespa-logo.png"/>
                        </div>
                        <div class="mx-auto justify-center mt-5" >
                        

                            <div class="p-6 max-w-md mx-auto  rounded-lg border border-gray-200 shadow-md dark:bg-gray-800      dark:border-gray-700">
                                <h5 class="mb-2 text-2xl font-bold bg-transparent tracking-tight text-gray-900 dark:text-white">Looking for Officers and Apprentices!</h5>
                                <p class="mb-3  bg-transparent font-normal text-gray-700 dark:text-gray-400">As most of the original admin team have graduated, it’s time for the next Generation to step forward and run VESPA starting from September 2021 till ideally 2024.
                                </p>
                                <a href="/apprenticeship101" 
                                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read More
                                </a>
                                    


                            </div>
                            <div class="p-6 max-w-md   mx-auto rounded-lg border mt-5  bg-transparent shadow-md dark:bg-gray-800      dark:border-gray-700">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight  bg-transparent text-gray-900 dark:text-white">Vespa's 5 Year Anniversary</h5>
                                <p class="text-gray-400 bg-transparent">Mon July 25th 2022</p>

                                <p class="mb-3 font-normal text-gray-500  bg-transparent dark:text-gray-400">To celebrate, we'll be holding an IRL (in-person) gathering. Final Location and time will be decided by 2nd week of July (hopefully).</p>


                            </div>    
                        </div>
                    </div>
                </div>
                               
                <div class=" bg-gray-800 lg:p-20 mx-0">
                    <div class=" bg-transparent">
                        <div class=" lg:grid grid-cols-2 gap-20 bg-transparent mx-0 md:mx-auto">
                            <div class="bg-transparent lg:h-80 phonescreen ">
                            <iframe  
                                class= "lg:rounded-md shadow-md m-0 w-full h-full bg-cover lg:min-w-full lg:h-80  bg-transparent "
                             src="https://www.youtube.com/embed/4UVci93XOSQ?autoplay=1&controls=0&mute=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div class="bg-transparent  border-white mx-auto"> 
                                <div class="bg-transparent inline-block mx-auto">

                                   <div class="bg-transparent lg:flex">
                                        <img  class=" lg:w-20 lg:h-20 lg:flex lg:mr-5 lg:rounded-xl  sm:mx-auto " src="./cpelogo.png"/>
                                        
                                        
                                        <p class="bg-transparent  lg:mx-auto lg:text-left text-white font-semibold text-4xl lg:p-0 p-5"> 
                                                Subscribe to the
                                                Computer Engineering Youtube Channel!
                                        </p>
                                    </div>
                                   
                                    <p class="bg-transparent text-white lg:text-left mt-10">Channel offers: </p>

                                    <ul class="bg-transparent  lg:text-left list-none lg:list-disc ml-5">
                                        <li class="bg-transparent text-white">Homework Help for Math, Science and Engineering material</li>
                                        <li class="bg-transparent text-white">Programming tutorials</li>
                                        <li class="bg-transparent text-white">Cool drone aerial shots</li>
                                        <li class="bg-transparent text-white">Cat videos </li>

                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
