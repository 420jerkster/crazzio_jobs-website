import React, { Component } from "react";
import "../../public/build/tailwind.css"
import liked from "../../Files/liked.png" 
import dpL from "../../Files/profiile_img.jpeg"
import bookmark from "../../Files/bookmark.png"
import location from "../../Files/pin.png";
import like from "....//Files/like.png"
import save_black from "../../Files/bookmark_black.png"
import share_black from "../../Files/share_black.png"
import more_black from "../../Files/more-options_black.png"

class Freelancer_card extends Component{
    render() {

        const skills = this.props.skills.map((skill) => {
            <p className="px-2 py-1 text-gray-700 bg-gray-300 max-w-max">{skill}</p>
        })

        const description = this.props.description.map((desc) => {
            <li className="py-2 text-sm text-gray-800 md:text-base">{desc}</li>
        })


        return(
            <div className="">

                {/*Under md*/}
                <div className="bg-gray-100 h-96 md:hidden">
                    
                    {/*Profile*/}
                    <div className="flex">
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


                    <div className="flex float-right mr-5 -mt-20 space-x-8">
                        <img src={share_black} className="h-6 w-6 mt-1.5 cursor-pointer" />
                        <img src={more_black} className="h-6 w-6 mt-1.5 cursor-pointer" />
                    </div>

                    {/*Profession*/}
                    <div className="mx-auto mt-2 max-w-max">
                        <p className="text-xl font-extrabold text-black xl:text-2xl ">{this.props.title}</p>
                        <p className="text-xl text-center text-gray-700">Min. Bid: {this.props.bid}</p>
                    </div>

                    {/*Qualifications*/}
                    <div className="flex flex-wrap p-2 mx-auto mt-4 space-x-6 max-w-max">
                        <div className="max-w-max">
                            <p className="font-semibold text-center text-gray-900">Languages</p>
                            <div>
                                <p className="font-medium text-center text-gray-700">{this.props.lang}</p>
                            </div>
                        </div>

                        <div className="max-w-max">
                            <p className="font-semibold text-center text-gray-900">Work hours</p>
                            <div>
                                <p className="font-medium text-center text-gray-700">{this.props.avg_completion_time}</p>
                            </div>
                        </div>

                        <div className="max-w-max">
                            <p className="font-semibold text-center text-gray-900">Degree</p>
                            <div>
                                <p className="font-medium text-center text-gray-700">{this.props.degree}</p>
                            </div>
                        </div>

                        <div className="max-w-max">
                            <p className="font-semibold text-center text-gray-900">Experience</p>
                            <div>
                                <p className="font-medium text-center text-gray-700">{this.props.exp}</p>
                            </div>
                        </div>

                        <div className="max-w-max">
                            <p className="font-semibold text-center text-gray-900">Works done</p>
                            <div>
                                <p className="font-medium text-center text-gray-700">{this.props.wroks_done}</p>
                            </div>
                        </div>
                    </div>

                    {/*Skills*/}
                    <div className="flex flex-row mx-auto my-5 space-x-4 max-w-max">
                        <p className="p-1 text-lg font-semibold text-gray-900 lg:text-xl">Other Specializations: </p>
                        <div className="flex flex-row space-x-2">
                            {skills}
                        </div>
                    </div>

                    {/*Buttons*/}
                    <div>
                        <div className="py-2 border-t-2 border-gray-400 ">
                            <div className="flex flex-row float-left ml-5 space-x-10">
                                <img src={like} className="w-8 h-8 mt-1 cursor-pointer" />
                                <img src={save_black} className="w-8 h-8 mt-1 cursor-pointer" />
                            </div>
                            
                            <div className="flex flex-row float-right space-x-6 max-w-max">
                                <p className="p-2 px-8 font-bold bg-indigo-900 cursor-pointer max-w-max hover:bg-gray-800 lg:text-xl text-gray-50">Portfolio</p>
                                <p className="p-2 px-8 font-bold bg-green-600 cursor-pointer max-w-max hover:bg-gray-800 lg:text-xl text-gray-50">Send a Offer</p>
                            </div>
                        </div>
                    </div>
                </div>
            
                {/*Between md and lg*/}
                <div className="hidden mt-4 bg-gray-50 md:block lg:hidden">
                    <div className="flex flex-row">
                       
                        {/*  */}
                        <div className="">
                            <div className="hidden mt-4 mr-6 max-w-max">
                                <p className="inline-block mr-5 -mt-3.5 text-4xl text-gray-900 cursor-pointer hover:text-white">...</p>
                                <img src={bookmark} className="inline-block h-8 cursor-pointer" />
                            </div>
                            
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
                                <p className="text-xl font-extrabold text-black lg:text-2xl ">{this.props.title}</p>
                                <p className="text-lg text-center text-gray-700 lg:text-xl">Min. Bid: {this.props.bid}</p>
                            </div>
                            
                            <div className="relative mt-4 h-80">
                                {/* Qualifications */}
                                <div className="mx-auto max-w-max">
                                    <div className="flex flex-row mx-auto space-x-2 max-w-max">
                                        <p className="p-1 mb-2 text-sm font-extrabold text-center text-gray-800 rounded-md lg:text-lg">Degree: <span className="mx-2 text-gray-600">{this.props.degree}</span></p>
                                        <p className="p-1 mb-2 text-sm font-extrabold text-center text-gray-800 rounded-md lg:text-lg">Present Status:<span className="mx-2 text-gray-600">{this.props.status}</span></p>
                                        <p className="p-1 mb-2 text-sm font-extrabold text-center text-gray-800 rounded-md lg:text-lg">Experience:<span className="mx-2 text-gray-600">{this.props.exp}</span></p>
                                    </div>
                                    
                                    <div className="flex flex-row mx-auto space-x-2 max-w-max">
                                        <p className="p-1 mb-2 text-sm font-extrabold text-center text-gray-800 rounded-md lg:text-lg">Languages: <span className="mx-2 text-gray-600">{this.props.lang}</span></p>
                                        <p className="p-1 mb-2 text-sm font-extrabold text-center text-gray-800 rounded-md lg:text-lg">Work Hours:<span className="mx-2 text-gray-600">{this.props.work_hrs}</span></p>
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
                                        <p className="p-1 text-lg font-semibold text-gray-900 lg:text-xl">Other Specializations: </p>
                                        <div className="flex flex-row space-x-2">
                                            {skills}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="py-2 border-t-2 border-gray-400 ">
                            <div className="flex flex-row float-left ml-5 space-x-6">
                                <img src={like} className="h-6 w-6 mt-1.5 cursor-pointer" />
                                <img src={save_black} className="h-6 w-6 mt-1.5 cursor-pointer" />
                                <img src={share_black} className="h-6 w-6 mt-1.5 cursor-pointer" />
                                <img src={more_black} className="h-6 w-6 mt-1.5 cursor-pointer" />
                            </div>
                            
                            <div className="flex flex-row float-right mb-1 space-x-6 max-w-max">
                                <p className="p-2 px-8 font-bold bg-indigo-900 cursor-pointer max-w-max hover:bg-gray-800 lg:text-xl text-gray-50">Portfolio</p>
                                <p className="p-2 px-8 font-bold bg-green-600 cursor-pointer max-w-max hover:bg-gray-800 lg:text-xl text-gray-50">Send a Offer</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            
                {/*Between lg and xl */}
                <div className="flex-row hidden mt-3 bg-gray-100 lg:flex max-w-max">
                    
                    {/*About Profile */}
                    <div className="flex-shrink-0 w-56">
                        {/*Qualifications*/}
                        <div className="p-2 space-y-8 bg-gray-300 border-r-4 border-gray-400 h-105">
                                <div>
                                    <p className= "text-xl font-semibold text-gray-900 xl:text-2xl">Work Hours</p>
                                    <p className="text-gray-700">{this.props.work_hrs}</p>
                                </div>

                                <div>
                                    <p className= "text-xl font-semibold text-gray-900 xl:text-2xl">Languages</p>
                                    <p className="text-gray-700">{this.props.lang}</p>

                                </div>

                                <div>
                                    <p className= "text-xl font-semibold text-gray-900 xl:text-2xl">Education</p>
                                    <p className="text-gray-700">Degree: {this.props.degree}</p>
                                </div>

                                <div>
                                    <p className= "text-xl font-semibold text-gray-900 xl:text-2xl">Experience</p>
                                    <p className="text-gray-700">{this.props.exp}</p>
                                </div>

                                

                                <div>
                                    <p className= "text-xl font-semibold text-gray-900 xl:text-2xl">Present Status</p>
                                    <p className="text-gray-700">{this.props.status}</p>
                                </div>

                                <div>
                                    <p className= "text-xl font-semibold text-gray-900 xl:text-2xl">Work History</p>
                                    <p className="text-gray-700">{this.props.work_hist}</p>
                                </div>
                            </div>
                    </div>


                    {/*  */}
                    <div className="w-full">
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
                            <p className="text-xl font-extrabold text-black xl:text-2xl ">{this.props.title}</p>
                            <p className="text-xl text-center text-gray-700">Min. Bid: {this.props.bid}</p>
                        </div>
                        
                        <div className="flex flex-row">
                            {/*Description*/}
                            <div className="relative p-4 mb-5 h-80">
                                <ul className="p-8 py-0 overflow-auto list-disc max-h-64 no-scrollbar ">
                                    {description}
                                </ul>

                                {<div className="absolute flex flex-row space-x-4 -bottom-4">
                                    <p className="-ml-1 text-lg font-semibold text-gray-900 xl:text-xl p-">Other Specializations: </p>
                                    <div className="flex flex-row space-x-2">
                                        {skills}
                                    </div>
                                </div>}
                            </div>
                        </div>

                        <div className="py-2 mt-2 border-t-2 border-gray-400 ">
                            <div className="flex flex-row float-left ml-5 space-x-6">
                                <img src={like} className="h-6 w-6 mt-1.5 cursor-pointer" />
                                <img src={save_black} className="h-6 w-6 mt-1.5 cursor-pointer" />
                                <img src={share_black} className="h-6 w-6 mt-1.5 cursor-pointer" />
                                <img src={more_black} className="h-6 w-6 mt-1.5 cursor-pointer" />
                            </div>
                            
                            <div className="flex flex-row float-right mb-1 space-x-6 max-w-max">
                                <p className="p-2 px-8 font-bold bg-indigo-900 cursor-pointer max-w-max hover:bg-gray-800 lg:text-xl text-gray-50">Portfolio</p>
                                <p className="p-2 px-8 font-bold bg-green-600 cursor-pointer max-w-max hover:bg-gray-800 lg:text-xl text-gray-50">Send a Offer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Freelancer_card;