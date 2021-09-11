import React, {Component} from "react"
import "../../public/build/tailwind.css"
import P from "../../Files/back_2.jpg"

class ImageCard extends Component{
    render() {
        return(
            <div>
                <div className="border-transparent border-4 md:border-8 ">
                        <div className=" 2xl:h-100 2xl:w-100 xl:h-96 xl:w-96 md:h-80 md:w-80 sm:h-72 sm:w-72   cursor-pointer bg-black">
                            {/*Image*/}
                            <img id={this.props.active_user_image_unique_num} src={this.props.img_path} className=" 2xl:h-100 2xl:w-100 xl:h-96 xl:w-96 md:h-80 md:w-80 sm:h-72 sm:w-72   object-fill " />
                        </div>
                    </div>  
            </div>
        )
    }
}

export default ImageCard