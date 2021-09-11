import React, {Component} from "react"
import "../../public/build/tailwind.css"
import ImageCard from "./ImageCard"
import {UserimageData} from "../../User Data/User Image Data/UserImageData"
import P from "../../Files/bck_1.jpg"
import ImageViewCard from "../../Crazzio_Images/CrazzioImage_view"


class ImageTab extends Component{
    render(){

        const opened_image_index = 0

        const ImageDisplayCard = UserimageData[this.props.active_user].user.map((image) => (
            <ImageCard active_user_image_unique_num = {image.image_unique_num} img_path = {P} />
        ))

        return(
            <div>
                <div className="bg-gray-200 my-20 py-4 xl:mx-4 2xl:mx-6 md:mx-4 3xl:mx-24 px-2">
                    {/* Navbar*/}
                    <div className="max-w-max mx-auto overflow-auto whitespace-nowrap no-scrollbar space-x-8">
                        <p className="text-lg text-gray-700 font-extrabold inline-block  hover:text-gray-900 cursor-pointer">About</p>
                        <p className="text-lg text-gray-700 font-extrabold inline-block  hover:text-gray-900 cursor-pointer ">Profession</p>
                        <p className="text-lg text-gray-700 font-extrabold inline-block  hover:text-gray-900 cursor-pointer ">Blogs</p>
                        <p className="text-lg text-gray-900 font-extrabold inline-block hover:text-gray-900 cursor-pointer border-b-2 border-gray-900">Images</p>
                    </div>
                    
                    <div className=" mt-10 flex-row flex flex-wrap ">
                        {ImageDisplayCard}
                    </div>
                </div>

                {/* On click vissible image card */}
                <div className="fixed top-0 hidden">
                    <ImageViewCard
                     username = {UserimageData[this.props.active_user].user[opened_image_index].username}
                     location = {UserimageData[this.props.active_user].user[opened_image_index].image_location}
                     img_path = {P}
                     img_caption = {UserimageData[this.props.active_user].user[opened_image_index].image_caption}
                     liked_by = {UserimageData[this.props.active_user].user[opened_image_index].image_liked_by}
                     likes = {UserimageData[this.props.active_user].user[opened_image_index].image_likes}  />
                </div>
            </div>
        )
    }
}

export default ImageTab