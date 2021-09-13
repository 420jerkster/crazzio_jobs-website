import React, { Component } from "react";
import "../../public/build/tailwind.css"
import { UserJobClientData } from "../../User Data/user_Job Data/user_job_client_data";
import Client_card_Active from "../Client/Client_card Active";
import { UserData } from "../../User Data/Profile_data";
import hired from "../../Files/approved.png"
import price_tag from "../../Files/price-tag.png"
import verified from "../../Files/verify.png"
import CommentCard from "./Comment_card";


class ActivecardUncolapsed extends Component{
    render(){

        const indexChanged = this.props.Selected_card_index

        const attached_links = (UserJobClientData[0].user[0].links).map((links)=>{
            return(
                <p className="h-8 p-1 my-3 overflow-hidden text-gray-700 bg-gray-300 rounded-full md:w-56 w-80"><a target={"_blank"} href={links}>{links}</a></p>
            )
        })

        return(
            <div>
                {/*Card on open*/}
                <div className="fixed top-0 left-0 z-40 w-screen h-screen overflow-y-scroll bg-gradient-to-b from-transparent to-gray-800">

                    <div className="float-right mt-16 bg-white max-w-max">
                        <div className="">
                            {/*Card*/}
                            <div className="flex-row md:flex ">
                                <div className="-mt-3 xl:w-116">
                                    <Client_card_Active Fname = {UserJobClientData[indexChanged].user[0].Fname} Lname = {UserJobClientData[indexChanged].user[0].Lname} location = {UserJobClientData[indexChanged].user[0].location} time = {UserJobClientData[indexChanged].user[0].post_date} title = {UserJobClientData[indexChanged].user[0].title} budget = {UserJobClientData[indexChanged].user[0].budget} lang ={UserJobClientData[indexChanged].user[0].lang} completion ={UserJobClientData[indexChanged].user[0].completion} proposals_rec = {UserJobClientData[indexChanged].user[0].proposals_rec} exp = {UserJobClientData[indexChanged].user[0].exp} skills = {UserJobClientData[indexChanged].user[0].skills} description = {UserJobClientData[indexChanged].user[0].description} post_date  = {UserJobClientData[indexChanged].user[0].post_date} graduation = {UserJobClientData[indexChanged].user[0].graduation} />
                                </div>

                                {/*Buttons*/}
                                <div className="px-4 py-2 space-y-6 bg-gray-100 lg:block">
                                    <div className="hidden space-y-6 md:block">
                                        <div className="bg-black rounded-full cursor-pointer bg-opacity-90 backdrop-filter hover:bg-opacity-80 backdrop-blur-md">
                                            <p className="p-2 text-xl font-semibold text-center text-gray-300 ">Send a proposal</p>
                                        </div>

                                        <div className="border-2 border-black rounded-full cursor-pointer hover:bg-gray-200">
                                            <p className="p-2 text-xl font-semibold text-center text-black ">Save</p>
                                        </div>

                                        <div className="border-2 border-black rounded-full cursor-pointer hover:bg-gray-200">
                                            <p className="p-2 text-xl font-semibold text-center text-black ">Archive</p>
                                        </div>
                                    </div>
                                    
                                    {/*Client Info */}
                                    <div className="py-3 mx-2 space-y-4 border-t-2 border-gray-300">
                                        <p className="text-xl font-bold text-center text-gray-800">Client Info:</p>
                                        <div className="flex space-x-2">
                                            <img src={hired} className="w-6 h-6 mt-1" />
                                            <p className="text-lg font-semibold text-gray-700">Hired: <span className="text-gray-500">{UserData[0].hired}</span></p>
                                        </div>

                                        <div className="flex space-x-2">
                                            <img src={price_tag} className="w-6 h-6 mt-1" />
                                            <p className="text-lg font-semibold text-gray-700">Money Spent: <span className="text-gray-500">{UserData[0].money_spent}</span></p>
                                        </div>

                                        <div className="flex space-x-2">
                                            <img src={verified} className="w-6 h-6 mt-1" />
                                            <p className="text-lg font-semibold text-gray-700">Payment: <span className="text-gray-500">{UserData[0].payment}</span></p>
                                        </div>
                                    </div>

                                    {/*Useful links*/}
                                    <div className="py-3 mx-2 space-y-4 overflow-hidden border-t-2 border-gray-300">
                                        <p className="text-xl font-bold text-center text-gray-800">Attached Links</p>
                                        <div className="mx-auto max-w-max">
                                            {attached_links}
                                        </div>
                                    </div>

                                    <div className="space-y-6 md:hidden ">
                                        <div className="bg-black rounded-full cursor-pointer bg-opacity-90 backdrop-filter hover:bg-opacity-80 backdrop-blur-md">
                                            <p className="p-2 text-xl font-semibold text-center text-gray-300 ">Send a proposal</p>
                                        </div>

                                        <div className="border-2 border-black rounded-full cursor-pointer hover:bg-gray-200">
                                            <p className="p-2 text-xl font-semibold text-center text-black ">Save</p>
                                        </div>

                                        <div className="border-2 border-black rounded-full cursor-pointer hover:bg-gray-200">
                                            <p className="p-2 text-xl font-semibold text-center text-black ">Archive</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/*Comments*/}
                        <div className="hidden p-6 bg-white border-t-2 border-gray-300">
                            {/*<p className="mb-6 text-5xl font-extrabold text-center text-gray-700">Comments and Reviews</p>*/}
                            <div className="mx-auto space-y-4 max-w-max">
                                <CommentCard />
                                <CommentCard />
                                <CommentCard />
                                <CommentCard />
                                <CommentCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ActivecardUncolapsed