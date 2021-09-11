import React, {Component} from "react"
import "../../../public/build/tailwind.css"

class IntroTab extends Component{
    render() {
        return(
            <div>
                <div className="3xl:w-110 3xl:h-104 bg-gray-50 shadow-xl 2xl:w-108 2xl:h-96 xl:h-96 xl:w-108 md:w-108 md:h-96">
                    <video src={this.props.vid_path} autoPlay loop className="object-fill 3xl:h-104 3xl:w-110 2xl:w-108 xl:h-96 2xl:h-96 xl:w-108 md:h-96 md:w-108" />
                </div>
            </div>
        )
    }
}

export default IntroTab