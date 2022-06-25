import React from "react";
import "./Phone.css";

class Phone extends React.Component {

    render() {
        return(
            <div >
                
                <div className="phonescreen bg-transparent">
                    <img className = "phone-border bg-transparent" style={{maxHeight:"475px"}} src="s20.png" alt="phone border"/>
                    <video className="phone-video bg-transparent" style={{maxHeight:"460px"}} autoPlay muted loop>
                        <source src="./discordRecording.mp4" type="video/mp4"/>
                    </video>
                </div>

                
            </div>
        )
    }
}
export default Phone;