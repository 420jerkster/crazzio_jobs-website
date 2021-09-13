import React, { Component } from "react";
import "../../public/build/tailwind.css"
/*import dpO from "../../Files/hunters-race-MYbhN8KaaEc-unsplash.jpg"
import bookmark from "../../Files/bookmark.png" 
import ActivecardUncolapsed from "../Freelancer/Active_card_uncollapsed";
import liked from "../../Files/liked.png"
import { UserJobClientData } from "../../User Data/user_Job Data/user_job_client_data";
import back_white from "../../Files/right-arrow (white)Back.png"*/
import dpL from "../../Files/profiile_img.jpeg"
import location from "../../Files/pin.png";
import like from "../../Files/like.png"
import save_black from "../../Files/bookmark_black.png"
import share_black from "../../Files/share_black.png"
import more_black from "../../Files/more-options_black.png"
import completion_time from "../../Files/tasks.png"
import proposal from "../../Files/contract.png"
import experience from "../../Files/experience (1).png"
import language from "../../Files/language.png"
import uploaded from "../../Files/cloud-computing.png"

class Client_card extends Component{
    render() {

        const skills = (this.props.skills).map((skill) => 
            <p className="h-8 py-1 overflow-hidden text-sm text-center text-gray-700 sm:text-base sm:px-2 sm:bg-gray-300 max-w-max">{skill}</p>
        )

        const description = (this.props.description).map((desc) => 
            <li className="py-2 text-sm text-gray-800 md:text-base">{desc}</li>
        )
        
        return(
            <div  className="w-full transition-all duration-300 bg-white cursor-pointer md:py-1 md:my-1 lg:py-0 md:hover:shadow-lg">
                

                {/*Under md*/}
                <div className="w-screen h-full md:hidden ">
                    
                    {/*Profile*/}
                    <div className="flex">
                        {/*Profile Image*/}
                        <img src={dpL} className="object-cover m-3 ml-2 rounded-full shadow-xl w-14 h-14 sm:w-20 sm:h-20 " />
                        
                        {/*Name*/}
                        <div className="inline-block mt-2 sm:mt-5 max-w-max">
                            <p className="sm:text-xl text-lg font-bold text-gray-900 mt-1.5">{this.props.Fname + " " + this.props.Lname}</p>
                            
                            {/*Location*/}
                            <div className="flex flex-row mx-auto -ml-1 max-w-max">
                                <img src={location} className="w-4 h-4 sm:w-5 sm:h-5"  />
                                <p className="-mt-1 text-sm text-gray-700 sm:text-base sm:mt-0 ">{this.props.location}- {this.props.time}</p>
                            </div>
                        </div>
                    </div>


                    <div className="float-right mr-5 -mt-16 space-x-6 sm:flex sm:-mt-20 ">
                        <img src={save_black} className="sm:w-7  w-6 h-6 sm:h-7 mt-1.5 cursor-pointer hidden" />
                        <img src={share_black} className="sm:h-7 sm:w-7 w-6 h-6 mt-1.5 cursor-pointer hidden" />
                        <img src={more_black} className="sm:h-7 sm:w-7 w-6 h-6 mt-1.5 cursor-pointer " />
                    </div>

                    {/*Profession*/}
                    <div className="mx-auto mt-2 max-w-max">
                        <p className="text-lg font-extrabold text-center text-black sm:text-xl xl:text-2xl">{this.props.title}</p>
                        <p className="text-lg text-center text-gray-700 sm:text-xl">Est. Budget: Rs.{this.props.budget}</p>
                    </div>

                    {/*Qualifications*/}
                    <div className="flex flex-wrap p-2 mx-auto mt-4 space-x-6 max-w-max">
                        <div className="max-w-max">
                            <img src={language} className="w-6 h-6 mx-auto max-w-max" />
                            <p className="font-semibold text-center text-gray-900">Languages</p>
                            <div>
                                <p className="font-medium text-center text-gray-700 w-28">{this.props.lang}</p>
                            </div>
                        </div>

                        <div className="hidden max-w-max sm:block">
                            <img src={completion_time} className="w-6 h-6 mx-auto max-w-max" />
                            <p className="font-semibold text-center text-gray-900">Completion</p>
                            <div>
                                <p className="font-medium text-center text-gray-700">{this.props.completion}</p>
                            </div>
                        </div>

                        <div className="max-w-max">
                            <img src={proposal} className="w-6 h-6 mx-auto max-w-max" />
                            <p className="font-semibold text-center text-gray-900">Proposals</p>
                            <div>
                                <p className="font-medium text-center text-gray-700">{this.props.proposals_rec}</p>
                            </div>
                        </div>

                        <div className="max-w-max">
                            <img src={experience} className="w-6 h-6 mx-auto max-w-max" />
                            <p className="font-semibold text-center text-gray-900">Experience</p>
                            <div>
                                <p className="font-medium text-center text-gray-700">{this.props.exp}</p>
                            </div>
                        </div>
                    </div>

                    {/*Skills*/}
                    <div className="flex-row px-1 mx-auto my-5 overflow-hidden sm:flex max-w-max">
                        <p className="flex-shrink-0 p-1 text-lg font-semibold text-center text-gray-900 lg:text-xl">Other Specializations: </p>
                        <div className="flex flex-row flex-shrink-0 space-x-2 sm:space-x-2">
                            {skills} {/* Skills list up  */}
                        </div>
                    </div>

                    {/*Buttons*/}
                    {/*<div>
                        <div className="px-1 py-2 border-t-2 border-gray-400 ">
                            <div className="flex flex-row mr-5 space-x-10 left">
                            </div>
                        </div>
                    </div>*/}
                </div>
            
                {/*Between md and lg*/}
                <div className="hidden md:block lg:hidden h-104">
   
                    {/*  */}
                    <div className="flex flex-row border-b-2 border-gray-400">
                        {/*Profile Image*/}
                        <img src={dpL} className="object-cover m-3 ml-2 rounded-full shadow-xl lg:w-20 lg:h-20 w-14 h-14" />
                        
                        {/*Name*/}
                        <div className="inline-block mt-5 max-w-max">
                            <p className="lg:text-xl text-lg font-bold text-gray-900 -mt-1.5 lg:mt-1.5">{this.props.Fname + " " + this.props.Lname}</p>
                            
                            {/*Location*/}
                            <div className="flex flex-row mx-auto -ml-1 max-w-max">
                                <img src={location} className="w-5 h-5"  />
                                <p className="text-gray-700">{this.props.location}- {this.props.time}</p>
                            </div>
                        </div>
                    </div>

                    <div className="float-right mr-5 -mt-16 max-w-max lg:-mt-20">
                        <p className="text-xl font-extrabold text-center text-black lg:text-2xl ">{this.props.title}</p>
                        <p className="text-lg text-center text-gray-700 lg:text-xl">Est. Budget: Rs.{this.props.budget}</p>
                    </div>
                    
                    <div className="relative mt-4 h-80">
                        {/* Qualifications */}
                        <div className="mx-auto max-w-max">
                            <div className="flex flex-row mx-auto space-x-2 max-w-max">
                                <div>
                                    <img src={completion_time} className="w-6 h-6 mx-auto max-w-max" />
                                    <p className="p-1 mb-2 text-sm font-extrabold text-center text-gray-800 rounded-md lg:text-lg">Completion: <span className="mx-2 text-gray-600">{this.props.completion}</span></p>
                                </div>
                                <div>
                                    <img src={proposal} className="w-6 h-6 mx-auto max-w-max" />
                                    <p className="p-1 mb-2 text-sm font-extrabold text-center text-gray-800 rounded-md lg:text-lg">Proposals:<span className="mx-2 text-gray-600">{this.props.proposals_rec}</span></p>
                                </div>
                                <div>
                                    <img src={experience} className="w-6 h-6 mx-auto max-w-max" />
                                    <p className="p-1 mb-2 text-sm font-extrabold text-center text-gray-800 rounded-md lg:text-lg">Experience:<span className="mx-2 text-gray-600">{this.props.exp}</span></p>
                                </div>
                                <div>
                                    <img src={language} className="w-6 h-6 mx-auto max-w-max" />
                                    <p className="p-1 mb-2 text-sm font-extrabold text-center text-gray-800 rounded-md lg:text-lg">Languages: <span className="mx-2 text-gray-600">{this.props.lang}</span></p>
                                </div>
                            </div>

                        </div>

                        {/*Description */}
                        <div className="p-5">
                            <ul className="p-8 py-0 -mt-3 overflow-auto list-disc h-44 no-scrollbar ">
                                {description}
                            </ul>
                        </div>
                        
                        <div className="-mt-0">
                            <div className="absolute flex flex-row ml-3 space-x-4 bottom-1">
                                <p className="flex-shrink-0 p-1 text-lg font-semibold text-gray-900 lg:text-xl">Other Specializations: </p>
                                <div className="flex flex-row space-x-2">
                                    {skills}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="py-2 border-t-2 border-gray-400 ">
                        <div className="flex flex-row float-right mr-5 space-x-10">
                            <img src={like} className="h-7 w-7 mt-1.5 cursor-pointer" />
                            <img src={save_black} className="h-7 w-7 mt-1.5 cursor-pointer" />
                            <img src={share_black} className="h-7 w-7 mt-1.5 cursor-pointer" />
                            <img src={more_black} className="h-7 w-7 mt-1.5 cursor-pointer" />
                        </div>
                    </div> 
                </div>
                    
            
                {/*Above lg*/}
                <div className="flex-row hidden lg:flex ">
                    
                    {/*About Profile */}
                    <div className="flex-shrink-0 w-56">
                        {/*Qualifications*/}
                        <div className="p-2 space-y-8 bg-gray-300 border-r-4 border-gray-400 h-100">
                            <div className="flex space-x-2">
                                <img  src={uploaded} className="w-8 h-8 mt-4" />
                                <div>
                                    <p className= "text-xl font-semibold text-gray-900 xl:text-2xl">Posted On</p>
                                    <p className="text-gray-700">{this.props.post_date}</p>
                                </div>
                            </div>

                            <div className="flex space-x-2">
                                <img src = {completion_time} className="w-8 h-8 mt-7" />
                                <div>
                                    <p className= "text-xl font-semibold text-gray-900 xl:text-2xl">Completion Time</p>
                                    <p className="text-gray-700">{this.props.completion}</p>
                                </div>
                            </div>

                            <div className="flex space-x-2">
                                <img src={language} className="w-8 h-8 mt-2" />
                                <div>
                                    <p className= "text-xl font-semibold text-gray-900 xl:text-2xl">Languages</p>
                                    <p className="text-gray-700">{this.props.lang}</p>
                                </div>
                            </div>

                            <div className="flex space-x-2">
                                <img src={experience} className="w-8 h-8 mt-2" />
                                <div>
                                    <p className= "text-xl font-semibold text-gray-900 xl:text-2xl">Experience</p>
                                    <p className="text-gray-700">{this.props.exp}</p>
                                </div>
                            </div>                                

                            <div className="flex space-x-2">
                                <img src={proposal} className="w-8 h-8 mt-2" />
                                <div>
                                    <p className= "text-xl font-semibold text-gray-900 xl:text-2xl">Poposals</p>
                                    <p className="text-gray-700">{this.props.proposals_rec}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  */}
                    <div className="flex-shrink w-full">
                        <div className="flex flex-row border-b-2 border-gray-400">
                            {/*Profile Image*/}
                            <img src={dpL} className="object-cover w-20 h-20 m-3 ml-2 rounded-full shadow-xl " />
                            
                            {/*Name*/}
                            <div className="inline-block mt-5 max-w-max">
                                <p className="text-xl font-bold text-gray-900 mt-1.5">{this.props.Fname + " " + this.props.Lname}</p>
                                
                                {/*Location*/}
                                <div className="flex flex-row mx-auto -ml-1 max-w-max">
                                    <img src={location} className="w-5 h-5"  />
                                    <p className="text-gray-700">{this.props.location}- {this.props.time}</p>
                                </div>
                            </div>
                        </div>

                        <div className="float-right mr-5 -mt-20 max-w-max">
                            <p className="text-xl font-extrabold text-center text-black xl:text-2xl">{this.props.title}</p>
                            <p className="text-xl text-center text-gray-700">Est. Budget: Rs.{this.props.budget}</p>
                        </div>
                        
                        <div className="flex flex-row">
                            {/*Description*/}
                            <div className="relative h-64 p-4 mb-5">
                                <ul className="p-8 py-0 overflow-auto list-disc max-h-52 no-scrollbar ">
                                    {description}
                                </ul>

                                <div className="absolute flex flex-row space-x-4 -bottom-4">
                                    <p className="flex-shrink-0 -ml-1 text-lg font-semibold text-gray-900 xl:text-xl">Other Specializations: </p>
                                    <div className="flex flex-row space-x-2">
                                        {skills}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="py-2 mt-2 border-t-2 border-gray-400 ">
                            <div className="flex flex-row float-right mr-5 space-x-10">
                                <img src={like} className="h-7 w-7 mt-1.5 cursor-pointer" />
                                <img src={save_black} className="h-7 w-7 mt-1.5 cursor-pointer" />
                                <img src={share_black} className="h-7 w-7 mt-1.5 cursor-pointer" />
                                <img src={more_black} className="h-7 w-7 mt-1.5 cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Client_card;