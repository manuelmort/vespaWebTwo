import React from "react";
import { AiOutlineInstagram, AiFillFacebook } from "react-icons/ai"
import { SiDiscord } from "react-icons/si"

export default class Footer extends React.Component {
    render() {
        return(
            <div class="mt-20  bg-transparent mx-auto">
                <div class= "bg-transparent   mx-0">
                    
                    <div class=" bg-transparent ">
                        <div class=" mx-auto ">
                            <a href="#" class=" inline-block bg-transparent text-sm p-3 leading-none mx-auto rounded text-zinc-800
                            hover:border-transparent   mt-4 lg:mt-0">
                                <AiFillFacebook  class="bg-transparent mx-auto  hover:text-green-500" size={30}/>
                            </a>
                            <a href="#" class=" inline-block text-sm  p-3 leading-none rounded text-zinc-800
                            hover:border-transparent hover:text-green-500 bg-transparent mt-4 lg:mt-0">
                                <AiOutlineInstagram  class="bg-transparent hover:text-green-500"size={30}/>
                            </a>
                            <a href="#" class=" inline-block text-sm p-3 leading-none rounded text-zinc-800
                            hover:border-transparent   bg-transparent mt-4 lg:mt-0">
                                <SiDiscord  class=" bg-transparent mx-auto  hover:text-green-500" size={30}/>
                            </a>
                        
                        </div>
                    </div>
                    <div class="bg-transparent">
                        <p class="bg-transparent text-gray-900">© Vespa 2022
                        </p>
                    </div>

                </div>
            </div>
        )
    }
}