import React, {Component} from "react";
import "../public/build/tailwind.css"
import V1 from "../Files/Mountains in the fog.mp4"
import crazzio_gray from "../Files/C(Dark Grray).png"
import search_icon from "../Files/search-icon.png"
import Topbar from "./Topbar";
import JobSidebar from "./Job_sidebar";
import CardBody from "./Freelancer/Card_Body";



class Home extends Component{
    render() {
        return(
            <div className="">
                <div className="block w-full"><Topbar /></div>
                
                <div className="shadow-lg mr-44 w-full -mt-.5 flex z-30 bg-gray-900">
                    <img src={crazzio_gray} className="h-14" /> 
                    <div className="">
                        <p class="ml-1 mt-1 font-serif font-bold text-gray-50 uppercase text-4xl "><span class="crazzio_hover">C</span><span class="crazzio_hover">r</span><span class="crazzio_hover">a</span><span class="crazzio_hover">z</span><span class="crazzio_hover">z</span><span class="crazzio_hover">i</span><span class="text-red-600 crazzio_o_hover">o</span><span class="lowercase crazzio_com_hover text-xl">.com</span></p>
                        <p className="ml-1 -mt-3 text-sm font-extrabold tracking-wider text-gray-50">Jobs</p>
                    </div>
                </div>

                {/*Matter from jobExplore*/}
                <div className="bg-white bg-opacity-90">
                    <div>
                        {/*Background Video*/}
                        <div className="block">
                            <video src={V1} autoPlay loop muted className=" h-100 xl:h-105.5 w-full object-cover"  />
                        </div>
                            
                        {/* Displays what user wants */}
                        <div className="flex-row py-5 bg-gray-100 lg:flex lg:space-x-6 ">
                            
                            {/*Sidebar*/}
                            <div className=" lg:w-104 mt-3 bg-gray-200 bg-opacity-90 hidden 1.5xl:block flex-shrink-0 lg:sticky top-20 ">
                                <JobSidebar />
                            </div>
                            
                            <div className="flex-shrink w-full ">
                                {/*Seach*/}
                                <div className="flex w-full px-3 mt-3 ">
                                    <input placeholder="Search for Jobs or Freelancers" className="flex-shrink w-full h-12 p-2 bg-white border-2 border-gray-400 outline-none bg-opacity-90 md:text-sm xl:text-xl md:p-4 " />                    
                                    <div className="h-12 bg-gray-400 cursor-pointer flex-shink-0"><img src={search_icon} className="h-8 m-2 " /></div>
                                </div>
                                
                                {/*Active cad and JobCards*/}
                                <div className="w-full mt-10 space-y-3  md:px-3 lg:mt-0">
                                    <div classname=""><CardBody /></div>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>

            </div>
        )
    }
}

export default Home;