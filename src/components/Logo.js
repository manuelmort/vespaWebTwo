import React from "react";
export default class Logo extends React.Component {
    render() {
        return(
            <div class="bg-transparent mx-auto">
                <div class="container bg-gray-900 bg-transparent">
                    <div class="bg-transparent p-5">
                        <img  class="bg-transparent inline-block" src="./vespa-logo.png"></img>
                        <span class="inline-block text-white font-semibold text-9xl bg-transparent">CSUS VESPA</span>
                    </div>

                </div>
            </div>
        )
    }
}