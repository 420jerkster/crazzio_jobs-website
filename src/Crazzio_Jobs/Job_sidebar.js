import React, {Component} from "react";
import "../public/build/tailwind.css"
import dpL from "../Files/profiile_img.jpeg"
import Filter_Hire from "./Client/Filter_for_client";
import { UserJobClientData } from "../User Data/user_Job Data/user_job_client_data";

class JobSidebar extends  Component{
    render(){
        return(
            <div className="">
                {/*Profile Image*/}
                <div className="h-64 p-2 bg-gray-300 rounded-sm bg-opacity-80 backdrop-filter backdrop-blur-lg">
                    <img src={dpL} className="float-left object-cover w-16 h-16 rounded-full" />
                    <div className="float-left mt-2.5">
                        <p className="ml-1 text-xl font-bold">{UserJobClientData[0].user[0].Fname} {UserJobClientData[0].user[0].Lname}</p>
                        <p className="ml-1.5 -mt-1.5 cursor-pointer hover:text-gray-600">{this.props.rating}</p>
                    </div>
                    
                    <div className="float-right mt-3.5 mr-3">
                        <p className="p-2 italic font-medium bg-gray-700 rounded-md text-gray-50">{this.props.status}</p>
                    </div>
                </div>

                {/*Filters*/}
                <div className="bg-gray-300 ">
                    <div className="mt-1">
                        <Filter_Hire />
                    </div> 
                </div>
            </div>
        )
    }
}

export default JobSidebar