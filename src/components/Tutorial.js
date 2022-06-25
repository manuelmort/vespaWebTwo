import React from "react";

export default class Tutorial extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <p class="text-5xl mt-5"> Discord Navigation Tutorial</p>
                    <p class="mt-5">Our discord can be a bit overwhelming so I hope this tutorial help clears everything up</p>
                </div>
                    <div class="p-6 max-w-5xl   mx-auto rounded-lg border mt-5  bg-transparent shadow-md dark:bg-gray-800      dark:border-gray-700">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight  bg-transparent text-gray-900 dark:text-white">Entering the server</h5>

                        <p class="mb-3 font-normal text-gray-500  bg-transparent dark:text-gray-400">
                        As soon as you enter the server, the first thing to do is to head over to #select-major channel to select your ECS major</p>
                        <div class="grid grid-cols-2 bg-transparent">
                            <div  class=" bg-transparent mx-auto mt-20" style={{maxWidth:"300px"}}>
                                <img  class="bg-transparent rounded-md"  src="./Launch.png"/>
                            </div>
                            <div  class="bg-transparent">
                                <img  class ="bg-transparent rounded-md"  src="./openingKeymaster.png"/>
                            </div>

                        </div>


                    </div>

                    <div class="p-6 max-w-5xl   mx-auto rounded-lg border mt-5  bg-transparent shadow-md dark:bg-gray-800      dark:border-gray-700">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight  bg-transparent text-gray-900 dark:text-white">Unlocking classes</h5>

                        <p class="mb-3 font-normal text-gray-500  bg-transparent dark:text-gray-400">
                            Head over to unlock-"whatever major" and choose whether or not you're taking lower division courses or upperdivision. You can select both.</p>
                        <div class="grid grid-cols-3 gap-10 mx-auto bg-transparent">
                            <div  class=" bg-transparent mx-auto mt-20" >
                                <img  class="bg-transparent rounded-mdmx-auto"  src="./unlock-eee.png"/>
                               
                            </div>
                            <div  class="bg-transparent mt-10 " >
                                <img  class ="bg-transparent  mx-auto rounded-md"  src="./majordivision.png"/>
                                <p class="bg-transparent text-gray-400 mt-10">If you choose EEE upper-division key, you should now see the classes pop up and Voila, you can now chat with those who are and have taken those courses.</p>
                            </div>
                            <div  class="bg-transparent mt-20">
                                <img  class ="bg-transparent  rounded-md" style={{maxHeight:"400px"}}  src="./eee-list.png"/>
                            </div>

                        </div>


                    </div>
            </div>
        )
    }
}