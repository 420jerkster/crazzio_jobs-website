import React, {Component} from "react"
import "../../public/build/tailwind.css"
import IntroTab from "./Intro Tab/IntroTab"
import RecentUploads from "./Recent Uploads/RecentUploads"
import V8 from "../../Files/V8.mp4"
import whatsapp from "../../Files/whatsapp.png"
import facebook from "../../Files/facebook.png"
import twitter from "../../Files/twitter.png"
import instagram from "../../Files/instagram.png"

const vid_path = ""

class AboutTab extends Component{
    render() {
        return(
            <div>
                <div>
                    <div className="bg-gray-200 my-20 py-4 xl:mx-4 2xl:mx-6 md:mx-4 3xl:mx-24 px-2">
                        {/* Navbar*/}
                        <div className="max-w-max mx-auto overflow-auto whitespace-nowrap no-scrollbar space-x-8">
                            <p className="text-lg text-gray-900 font-extrabold inline-block  hover:text-gray-900 cursor-pointer border-b-2 border-gray-900 ">About</p>
                            <p className="text-lg text-gray-700 font-extrabold inline-block  hover:text-gray-900 cursor-pointer ">Profession</p>
                            <p className="text-lg text-gray-700 font-extrabold inline-block  hover:text-gray-900 cursor-pointer ">Blogs</p>
                            <p className="text-lg text-gray-700 font-extrabold inline-block hover:text-gray-900 cursor-pointer">Images</p>
                        </div>

                        <div className="mt-12 space-x-20 flex flex-row flex-auto  max-w-max mx-auto flex-shrink">
                            <a target="_blank" href={this.props.twitter_link} > <img src={twitter} className="h-12 w-12 cursor-pointer "  /></a>
                            <a target="_blank" href={this.props.facebook_link} > <img src={facebook} className="h-12 w-12 cursor-pointer "  /></a>
                            <a target="_blank" href={this.props.insta_link} > <img src={instagram} className="h-12 w-12 cursor-pointer "  /></a>
                            <a target="_blank" href={this.props.whatsapp_link} > <img src={whatsapp} className="h-12 w-12 cursor-pointer "  /></a>
                        </div>

                        <div className="mt-12 flex xl:space-x-4 max-w-max mx-auto">
                            <div className="hidden xl:block" ><RecentUploads  /></div>
                            <IntroTab vid_path = {V8} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutTab