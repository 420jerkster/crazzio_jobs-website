import React, {Component} from "react";
import "../../public/build/tailwind.css"
import {StateCity} from "../../States_Cities.js"
import ghost_icon from "../../Files/ghost.png"

class Dashboard extends Component{
    render() {
        const notification_list = []

        const notification_content = notification_list.length == 0 ? 
        (<div className="mt-20">
            <img src={ghost_icon} className="w-20 h-20 mx-auto max-w-max" />
            <p className="text-lg font-medium text-center text-gray-500 sm:text-xl ">Sorry! no updates found...</p>
            <p className="text-sm font-normal text-center text-blue-500 cursor-pointer sm:text-base hover:text-blue-600 hover:underline ">Go to previous updates</p>
        </div>) : "Yes there is some matter"
        
        var date = new Date()
        var time = date.getHours()
        
        var greet = ""

        if (time>=0 && time<12){
            greet = "Good Morning"
        } else if (time>=12 && time<18){
            greet = "Good Afternoon"
        } else if (time>=18 && time<24){
            greet = "Good Evening"
        }


        return(
            <div className="z-50 p-2 px-4 py-12 mx-3 bg-white rounded-md shadow-md w-108 xl:shadow-xl 2xl:px-8">
                <p className="text-xl font-bold text-center text-gray-900 sm:text-2xl md:text-3xl">{greet}, {this.props.fname}</p>
                <p className="mt-2 text-sm text-center text-gray-700 sm:text-lg">Check out the latest updates of today</p>

                {/*Display content*/}
                <div>
                    {notification_content}
                </div>
            </div>
        )
    }
}

export default Dashboard