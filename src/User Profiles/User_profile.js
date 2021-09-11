import React, {Component} from "react";
import "../public/build/tailwind.css";
import bck_1 from "../Files/back_4.jpg";
import location from "../Files/pin.png";
import settings_icon from "../Files/settings.png"
import share_icon from "../Files/share_black.png"
import send_icon from "../Files/send_white.png"
import { UserData } from "../User Data/user_profile_data";
import AboutTab from "./About Tab/UserProfile_AboutTab";
import ProfessionTab from "./Profession Tab/Indivisual/UserProfile_Indiv_JobTab"
import BlogTab from "./Blogs Tab/UserProfile_BlogsTab";
import ImageTab from "./Images Tab/UserProfile_ImagesTab";

class App extends Component{
    render() {

        const active_user = this.props.active_user_index

        return(
            <div className="dark:bg-black dark:bg-opacity-90">

                <div className="bg-gray-700 px-4 max-w-max md:py-2 py-1 rounded-3xl float-right md:m-4 m-2 hover:bg-gray-600 cursor-pointer">
                    <img src={settings_icon} className="h-6 md:h-7 inline-block mr-2" />
                    <p className="md:text-lg font-bold text-gray-400 inline-block">Settings</p>
                </div>

                <div className="h-96 max-w-full bg-cover bg-center backdrop-filter" style={{backgroundImage:"url("+bck_1+")"}}>
                <p className="py-1 z-50 inline-block ml-0.5 font-serif text-4xl font-bold text-gray-100 uppercase max-w-max md:text-5xl "><span className="crazzio_hover">C</span><span className="crazzio_hover">r</span><span className="crazzio_hover">a</span><span className="crazzio_hover">z</span><span className="crazzio_hover">z</span><span className="crazzio_hover">i</span><span className="text-red-600 crazzio_o_hover">o</span><span className="text-3xl lowercase md:text-3xl xl:text-4xl crazzio_com_hover hover:text-gray-700">.com</span></p>
                </div>

                <div className="hidden lg:block">
                    <div className="h-96 bg-transparent mx-28 -mt-32">
                        <div className="h-96 bg-gray-100 w-5/12 float-left shadow-xl rounded-xl mr-16 bg-opacity-80 backdrop-filter backdrop-blur-md">
                            <img className="h-44 rounded-full w-44 object-cover object-center max-w-max mx-auto my-4" src={bck_1} />
                            <p className="xl:text-3xl 2xl:text-4xl font-extrabold tracking-wider text-center text-2xl"> {UserData[active_user].user[0].name} </p>
                            <p className="text-2xl font-extrabold tracking-wider text-center"></p>
                            
                            <div className="max-w-max mx-auto mt-3">
                                <img src={location} className="xl:h-8 h-5 inline-block"  />
                                <p className="inline-block ">{UserData[active_user].user[0].location}</p>
                            </div>
                            
                            <div className="max-w-max mx-auto 2xl:mt-6 mt-4">
                                <p className="bg-gray-800 max-w-max px-10 py-1 2xl:text-2xl font-bold text-gray-50 2xl:inline-block 2xl:mr-5 hover:bg-gray-700 cursor-pointer mb-3 2xl:mb-0 mx-auto">Hire</p>
                                <p className="bg-gray-800 max-w-max px-3 py-1 2xl:text-2xl font-bold text-gray-50 2xl:inline-block hover:bg-gray-700 cursor-pointer">Mail at: <span className="text-gray-300"><a href={"mailto:" + UserData[active_user].user[0].mailId}  target="blank" >{UserData[active_user].user[0].mailId}</a></span></p>
                            </div>
                        </div>

                        <div className="h-96 bg-gray-100 float-right w-6/12 shadow-xl rounded-xl bg-opacity-80 backdrop-filter backdrop-blur-md">
                            <div className="max-w-max mx-auto mt-8 flex flex-auto space-x-10">
                                <div className="">
                                    <p className="xl:text-3xl text-center text-green-600 font-extrabold text-xl">{UserData[active_user].user[0].followers}</p>
                                    <p className="xl:text-2xl text-gray-500 text-center text-xl">Followers</p>
                                </div>
                        
                                <div className="">
                                    <p className="xl:text-3xl text-center text-red-600 font-extrabold text-xl">{UserData[active_user].user[0].blogs}</p>
                                    <p className="xl:text-2xl text-gray-500 text-center text-xl">Blogs</p>
                                </div>

                                <div className="">
                                    <p className="xl:text-3xl text-center text-red-600 font-extrabold text-xl">{UserData[active_user].user[0].images}</p>
                                    <p className="xl:text-2xl text-gray-500 text-center text-xl">Images</p>
                                </div>

                                <div className="">
                                    <p className="xl:text-3xl text-center text-blue-600 font-extrabold text-xl">{UserData[active_user].user[0].followings}</p>
                                    <p className="xl:text-2xl text-gray-500 text-center text-xl">Following</p>
                                </div>
                            </div>
                            
                            <div className="max-w-max mx-auto mt-10">
                                
                                <div className="bg-indigo-800 max-w-max inline-block xl:mr-16 mr-10 py-2 px-4 rounded-lg cursor-pointer hover:bg-indigo-900 hover:shadow-lg ">
                                    <img src={send_icon} className="xl:h-8 h-5 inline-block mr-3" />
                                    <p className="xl:text-xl text-lg text-gray-50 font-bold inline-block">Send a "Hi !"</p>
                                </div>

                                <div className="inline-block cursor-pointer">
                                    <img src={share_icon} className="xl:h-8 h-5 inline-block mr-3" />
                                    <p className="inline-block xl:text-xl text-lg font-bold">Share the profile</p>
                                </div>
                            </div>

                            <div className="bg-gray-300 max-w-max mx-auto p-3 mt-10 ">
                                <p className="xl:text-lg font-normal text-center">“Any fool can write code that a computer can understand.<br /> Good programmers write code that humans can understand.” <br /> – Martin Fowler</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="lg:hidden mx-8">
                    <div className=" bg-transparent -mt-32">
                        <div className="py-1 bg-gray-100  shadow-xl rounded-xl bg-opacity-80 backdrop-filter backdrop-blur-md">
                            <img className="h-44 rounded-full w-44 object-cover object-center max-w-max mx-auto my-4" src={bck_1} />
                            <p className="2xl:text-4xl font-extrabold tracking-wider text-center text-3xl">{UserData[active_user].user[0].name}</p>
                            <p className="text-2xl font-extrabold tracking-wider text-center"></p>
                            
                            <div className="max-w-max mx-auto mt-2">
                                <img src={location} className="xl:h-8 h-5 inline-block"  />
                                <p className="inline-block ">{UserData[active_user].user[0].location}</p>
                            </div>
                            
                            <div className="max-w-max mx-auto mt-6 ">
                                <p className="bg-gray-800 max-w-max px-10 py-1 text-xl font-bold text-gray-50 sm:inline-block sm:mr-5 hover:bg-gray-700 cursor-pointer mb-3 2xl:mb-0 mx-auto">Hire</p>
                                <p className="bg-gray-800 max-w-max px-3 py-1 text-xl font-bold text-gray-50 sm:inline-block hover:bg-gray-700 cursor-pointer">Mail at: <span className="text-gray-300"><a href="mailto:2210tatpar@gmail.com" target="blank" >{"mailto:" + UserData[active_user].user[0].mailId}</a></span></p>
                            </div>
                        </div>

                        <div className=" mt-10 py-2 bg-gray-100 shadow-xl rounded-xl bg-opacity-80 backdrop-filter backdrop-blur-md">
                            <div className="max-w-max mx-auto mt-8 flex-auto flex  space-x-10">
                                <div className="">
                                    <p className="xl:text-3xl text-center text-green-600 font-extrabold text-2xl">{UserData[active_user].user[0].followers}</p>
                                    <p className="xl:text-2xl text-gray-500 text-center text-xl">Followers</p>
                                </div>
                        
                                <div className="">
                                    <p className="xl:text-3xl text-center text-red-600 font-extrabold text-xl">{UserData[active_user].user[0].blogs}</p>
                                    <p className="xl:text-2xl text-gray-500 text-center text-xl">Blogs</p>
                                </div>

                                <div className="">
                                    <p className="xl:text-3xl text-center text-red-600 font-extrabold text-xl">{UserData[active_user].user[0].images}</p>
                                    <p className="xl:text-2xl text-gray-500 text-center text-xl">Images</p>
                                </div>

                        
                                <div className="">
                                    <p className="xl:text-3xl text-center text-blue-600 font-extrabold text-2xl">{UserData[active_user].user[0].followings}</p>
                                    <p className="xl:text-2xl text-gray-500 text-center text-xl">Following</p>
                                </div>
                            </div>
                            
                            <div className="max-w-max mx-auto mt-8">
                                <div className="bg-indigo-800 max-w-max inline-block xl:mr-16 mr-10 py-2 px-4 rounded-lg cursor-pointer hover:bg-indigo-900 hover:shadow-lg ">
                                    <img src={send_icon} className="xl:h-8 h-5 inline-block mr-3" />
                                    <p className="xl:text-xl text-lg text-gray-50 font-bold inline-block">Send a "Hi ! "</p>
                                </div>

                                <div className="inline-block cursor-pointer">
                                    <img src={share_icon} className="xl:h-8 h-5 inline-block mr-3" />
                                    <p className="inline-block xl:text-xl text-lg font-bold">Share the profile</p>
                                </div>
                            </div>

                            <div className="bg-gray-300 max-w-max mx-auto p-3 mt-8 mb-4">
                                <p className="xl:text-lg font-normal text-center">“Any fool can write code that a computer can understand.<br /> Good programmers write code that humans can understand.” <br /> – Martin Fowler</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    {/*<AboutTab twitter_link = {UserData[active_user].user[0].twitter} facebook_link = {UserData[active_user].user[0].facebook} insta_link = {UserData[active_user].user[0].insta} whatsapp_link = {UserData[active_user].user[0].whatsapp} />*/}
                    {/*<ProfessionTab />*/}
                    {/*<BlogTab active_user = {this.props.active_user_index} />*/}
                    <ImageTab active_user = {this.props.active_user_index} />
                </div>
                
            </div>
        )
    }
}

export default App;