import React from "react";
import "./LaptopWidget.css"

export class LaptopWidget extends React.Component {

    render() {
        return(
            <div class="" >
                
                <div className="laptopscreen bg-transparent">
                    <img className = "laptop-border bg-transparent" style={{maxHeight:"600px"}} src="macbook-border.png" alt="phone border"/>
                    <img className="discord-screenshot bg-transparent" style={{maxHeight:"700px"}} src="discord-screenshot.png"/>
                        
                </div>

                
            </div>
        )
    }
}
