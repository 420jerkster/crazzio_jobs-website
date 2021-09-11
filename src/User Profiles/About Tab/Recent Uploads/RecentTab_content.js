import React, {Component} from "react"
import "../../../public/build/tailwind.css"
import P1 from "../../../Files/back_1.jpg"

class RecentContent extends Component{
    render() {
        return(
            <div>
                <div className="bg-gray-300 h-32 flex">
                    <img src={P1} className="h-full w-2/6 " />
                    <div className=" ml-2 ">
                        {/* Content Heading if present */}
                        <p className="text-lg font-bold">{this.props.heading}</p>

                        {/* Caption lines or little intro to the content*/}
                        <p className="2xl:mt-2 text-gray-700">{this.props.about_post}</p>
                        
                        {/*Date/Time of upload */}
                        <p className="text-gray-600 italic 2xl:mt-2">Posted On:{this.props.uploadtime}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default RecentContent