import React, {Component} from "react"
import { useState } from "react";
import Client_card_Active from "../Client/Client_card Active";
import "../../public/build/tailwind.css"
import Client_card from "../Client/Client_card"
import { UserJobClientData } from "../../User Data/user_Job Data/user_job_client_data";
import back_white from "../../Files/right-arrow (white)Back.png"
import ActivecardUncolapsed from "./Active_card_uncollapsed";

class CardBody extends Component{
    render(){
        const clientpost_unique_no_list = []

        const ActiveCardCollapsed = UserJobClientData.map((client) =>{
            const OnClickCardOpener = () =>{
                document.getElementById(client.user[0].clientpost_unique_no).style.display = "block"
                document.getElementById("back_button").style.display = "block"
                console.log(client.user[0].clientpost_unique_no + " is being shown")
            }

            clientpost_unique_no_list.push(client.user[0].clientpost_unique_no)

            const OnClickCardCloser = () =>{
                for (var i=0; i<clientpost_unique_no_list.length; i++){
                    if (document.getElementById(clientpost_unique_no_list[i]).style.display == "block"){
                        document.getElementById(clientpost_unique_no_list[i]).style.display = "none"
                        console.log(clientpost_unique_no_list[i] + " has been hidden")
                    }
                }

                document.getElementById("back_button").style.display = "none"
            }

            return(
                <div className="">
                    <div>
                        {/*Collapsed Card*/}
                        <div onClick={OnClickCardOpener} className="">
                            <Client_card Uncollapsedcard_id={client.user[0].clientpost_unique_no} key={client.user[0].clientpost_unique_no} Fname = {client.user[0].Fname} Lname = {client.user[0].Lname} location = {client.user[0].location} time = {client.user[0].post_date} title = {client.user[0].title} budget = {client.user[0].budget} lang ={client.user[0].lang} completion ={client.user[0].completion} proposals_rec = {client.user[0].proposals_rec} exp = {client.user[0].exp} skills = {client.user[0].skills} description = {client.user[0].description} post_date  = {client.user[0].post_date} />
                        </div>

                        {/*Close button*/}
                        <div onClick={OnClickCardCloser} id="back_button" className="hidden cursor-pointer fixed top-1.5 mt-.5 z-50 left-2 bg-gray-900 w-12 h-12 rounded-full hover:bg-gray-600 transition-all duration-300">
                            <img src={back_white} className="w-8 h-8 mt-2 ml-1" />
                        </div> 
                        
                        <div className="hidden" id={client.user[0].clientpost_unique_no} >
                            <ActivecardUncolapsed Selected_card_index={UserJobClientData.indexOf(client)} />
                        </div>
                    </div>
                </div>
            )
        })

        return(
            <div className="flex flex-row space-x-8">
                <div>
                    {ActiveCardCollapsed}
                </div>
            </div>
        )
    }
}

export default CardBody