import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "../public/build/tailwind.css"
import Find_Job from './Freelancer/Find_Job_StateCityWise';
import crazzio_black from "../Files/C(Black).png"
import hired from "../Files/approved.png"
import saved from "../Files/bookmark_black.png"
import edit from "../Files/edit.png"
import proposal from "../Files/working.png"
import notifications from "../Files/notifications.png"
import chat from "../Files/chat.png"
import Dashboard from "./Freelancer/DashBoard_Card"
import { UserJobClientData } from "../User Data/user_Job Data/user_job_client_data";
import user_white from "../Files/user_white.png"

class Topbar extends Component{
    render() {

        const topbar_content_list = [
            {
                logo:chat,
                name:"chats",
                dropdown:[]
            },

            {
                logo:notifications,
                name:"Notifications",
                dropdown:[]
            },

            {
                logo:user_white,
                name:"Profile",
                dropdown:[
                    {
                        logo_dopdown:edit,
                        name_dropdown:"Edit...",
                    },

                    {
                        logo_dopdown:proposal,
                        name_dropdown:"Propposals",
                    },

                    {
                        logo_dopdown:saved,
                        name_dropdown:"Saved",
                    },

                    {
                        logo_dopdown:hired,
                        name_dropdown:"Hired",
                    },
                ]
            }
        ]

        const topbar_content_display = topbar_content_list.map((content) =>{
            const dropdown_display = content.dropdown.map((dropdown_content) => {
                return(
                    <div className="flex py-2 space-x-4 px-7 hover:bg-gray-300">
                        <img src={dropdown_content.logo_dopdown} className="w-6 -ml-3 h-6 mt-.5" />
                        <li className="text-lg text-gray-800 md:text-lg">{dropdown_content.name_dropdown}</li>
                    </div>
                )
            })

            return(
                <div className="p-4 cursor-pointer group " >
                    <div className="flex space-x-2 ">
                        <img src={content.logo} className="w-8 h-8 mt-.5"  />
                        <p className="hidden text-lg font-bold text-center transition-all duration-300 md:block group-hover:text-red-600 text-gray-50 md:text-lg">{content.name}</p>
                    </div>

                    <ul id="proposals_dropdown" className="absolute hidden mt-3 transition-all duration-300 bg-gray-200 border-t-4 border-opacity-0 shadow-lg group-hover:border-red-600 group-hover:border-opacity-100 md:group-hover:block" >
                        {dropdown_display}
                    </ul>
                </div>
            )
        })
        return(
            <div>
                
                {/*Top bar */}
                <div className="fixed top-0 z-50 flex w-full py-1 bg-gradient-to-r from-black via-gray-900 to-black backdrop-filter backdrop-blur-md">
                    
                    {/*Crazzio logo */}
                    <div className="shadow-lg mr-44 -mt-.5  flex ml-1">
                        <img src={crazzio_black} className="h-14" />
                        <div className="hidden lg:block">
                            <p class="ml-1 mt-1 font-serif font-bold text-gray-50 transition-all duration-300 group-hover:text-red-600  uppercase text-4xl "><span class="crazzio_hover">C</span><span class="crazzio_hover">r</span><span class="crazzio_hover">a</span><span class="crazzio_hover">z</span><span class="crazzio_hover">z</span><span class="crazzio_hover">i</span><span class="text-red-600 crazzio_o_hover">o</span><span class="lowercase crazzio_com_hover text-xl">.com</span></p>
                            <p className="ml-1 -mt-3 text-sm font-extrabold tracking-wider transition-all duration-300 text-gray-50 group-hover:text-red-600 ">Jobs</p>
                        </div>
                    </div> 
                    
                    {/*Top bar others*/}
                    <div className="absolute right-0 flex -mt-1 space-x-2 md:mr-10 md:space-x-4">
                        {topbar_content_display}
                    </div>
                </div>

                <div className="absolute top-0 z-40 w-full mt-6 bg-black bg-opacity-50 h-104 xl:h-106 backdrop-filter backdrop-blur-sm">
                    <div className="flex mx-auto mt-16 xl:mt-20 max-w-max">
                        <div className="hidden xl:block"><Find_Job /></div>
                        <Dashboard fname = {UserJobClientData[0].user[0].Fname} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Topbar;