import React, { Component } from "react";
import "../../public/build/tailwind.css"
import { UserJobClientData } from "../../User Data/user_Job Data/user_job_client_data";
import Client_card_Active from "../Client/Client_card Active";

class ProposalForm extends Component{
    render(){

        const indexChanged = this.props.index_selected

        return(
            <div className="">    
                {/*Active card display */}
                <div className="bg-gray-100 w-120 ">
                    
                    {/*Proposal data */}
                    <div className="p-0 bg-gray-100">
                        <div className="my-10">
                            <p className="text-3xl font-bold text-center text-gray-900 uppercase ">Fill the proposal</p>
                        </div>

                        <div className="px-3 py-8 bg-indigo-100">
                            <p className="text-2xl font-semibold text-gray-800 ">Set your Bid</p>
                            <div className="flex mx-auto my-8 space-x-8 max-w-max">
                                {/*Min Bid*/}
                                <div className="relative mt-3">
                                    <p className="absolute ml-2 -mt-3 font-semibold text-gray-700">Your Bid</p>
                                    <input className="text-xl font-medium text-center text-gray-700 bg-gray-100 outline-none h-14 w-80" />
                                    <p className="italic font-medium text-center text-gray-700 w-80">This amount will be seen by the client on your proposal.</p>
                                </div>
                                
                                {/*Crazzio Comm*/}
                                <div className="relative mt-3">
                                    <p className="absolute ml-2 -mt-3 font-semibold text-gray-700">Crazzio's Commission</p>
                                    <input className="text-xl font-medium text-center text-gray-700 bg-gray-100 outline-none h-14 w-80" />
                                    <p className="italic font-medium text-center text-gray-700 w-80">This amount will be seen by the client on your proposal.</p>
                                </div>

                                {/*Freelancer will recieve*/}
                                <div className="relative mt-3">
                                    <p className="absolute ml-2 -mt-3 font-semibold text-gray-700">You will receive</p>
                                    <input className="text-xl font-medium text-center text-gray-700 bg-gray-100 outline-none h-14 w-80" />
                                    <p className="italic font-medium text-center text-gray-700 w-80">This amount will be seen by the client on your proposal.</p>
                                </div>
                            </div>
                        </div>

                        <div className="px-3 py-8 space-y-8 bg-gray-100">
                            <p className="text-2xl font-semibold text-gray-800 ">Questions asked by the client</p>
                            
                            {/*Clients question*/}
                            <div className="p-3 my-8 space-y-4">
                                <p className="font-bold">Q. How can you say that you are fit for this job?</p>
                                <input className="w-full p-2 text-xl text-gray-700 border-4 border-gray-300 border-dashed outline-none h-52 bg-gray-50" />
                            </div>

                            <div className="p-3 my-8 space-y-4">
                                <p className="font-bold">Q. How can you say that you are fit for this job?</p>
                                <input className="w-full p-2 text-xl text-gray-700 border-4 border-gray-300 border-dashed outline-none h-52 bg-gray-50" />
                            </div>

                            <div className="p-3 my-8 space-y-4">
                                <p className="font-bold">Q. How can you say that you are fit for this job?</p>
                                <input className="w-full p-2 text-xl text-gray-700 border-4 border-gray-300 border-dashed outline-none h-52 bg-gray-50" />
                            </div>
                        </div>

                        {/*Cover letter*/}
                        <div className="px-3 py-8 space-y-4 bg-indigo-100">
                            <p className="text-2xl font-semibold text-gray-800 ">Cover Letter</p>
                            <input className="w-full p-2 text-xl text-gray-700 border-4 border-gray-300 border-dashed outline-none h-72 bg-gray-50" />
                        </div>

                        {/*Buttons*/}
                        <div className="flex py-8 mx-auto space-x-5 max-w-max ">
                            <p className="px-3 py-2 text-xl font-bold bg-gray-900 cursor-pointer hover:bg-gray-700 text-gray-50 max-w-max">Send your Proposal</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProposalForm