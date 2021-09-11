import React, {Component} from "react";
import "../../public/build/tailwind.css"
import {StateCity} from "../../States_Cities.js"

var array = ["hi", "by", "My", "Flow"];
var state_names = [];
for (var i=0; i<StateCity[0].states.length; i+=1){
   state_names.push(StateCity[0].states[i].state);
}

var city_names = [];
for (i=0; i<StateCity[0].states[0].districts.length; i+=1){
   city_names.push(StateCity[0].states[0].districts[i]);
}

const Option_creator_state = state_names.map((state_name) =>
   <option id="state_selection">{state_name}</option>
);

const Option_creator_city = city_names.map((city_name) =>
   <option id="city_selection">{city_name}</option>
)

/*document.getElementById("state_selection").onchange = function state_onchange(){
   var state_selection_cont = document.getElementById("state_selection").selectedIndex;
   var state_selection = document.getElementById("state_selection").option;
   var state_selected_index = state_selection[state_selection_cont].index
   return state_selected_index;
}*/

class Find_Job extends Component{
    render() {
        return(
            <div className="z-50 p-2 px-4 py-12 mx-3 bg-white rounded-md shadow-md xl:shadow-xl 2xl:px-8">
                <p className="z-30 text-3xl font-bold text-center text-gray-800">What are you looking for ?</p>
                <p className="mt-2 text-lg text-center text-gray-700">Search for Jobs or Freelancers in a particular state or city.</p>
                
                <div className="flex flex-row mx-auto mt-8 space-x-4 max-w-max">
                    <p className="px-4 py-3 text-xl font-semibold text-center text-gray-800 bg-gray-300 cursor-pointer hover:bg-gray-400 ">Freelancing</p>
                    <p className="px-4 py-3 text-xl font-semibold text-center text-gray-800 bg-gray-300 cursor-pointer hover:bg-gray-400 ">Freelancers</p>
                    <p className="px-4 py-3 text-xl font-semibold text-center text-gray-800 bg-gray-300 cursor-pointer hover:bg-gray-400 ">Jobs</p>
                </div>
                
                <div className="flex flex-col mx-10 mt-8 space-y-3 md:max-w-max md:mx-auto">
                    
                    <select className="w-full p-2 text-xl text-gray-900 placeholder-gray-600 transition-all duration-200 bg-gray-200 rounded-lg outline-none focus:rounded-none">
                       <option>Select Country</option>  
                        {Option_creator_state}
                    </select>
                    
                    <div className="flex space-x-6">
                        <select className="w-full p-2 text-xl text-gray-900 placeholder-gray-600 transition-all duration-200 bg-gray-200 rounded-lg outline-none md:w-80 focus:rounded-none">
                            <option>Select State</option>  
                            {Option_creator_state}
                        </select>

                        <select className="w-full p-2 text-xl text-gray-900 placeholder-gray-600 transition-all duration-200 bg-gray-200 rounded-lg outline-none md:w-80 focus:rounded-none">
                            <option>Select city</option>
                            {Option_creator_city}
                        </select>
                    </div>
                </div>
                
                <div className="p-3 mx-auto mt-8 transition-all duration-300 ease-in-out bg-red-500 shadow-xl max-w-max rounded-xl hover:bg-green-500"><p className="text-xl font-extrabold text-center cursor-pointer ">Start your Search</p></div>
            </div>
        )
    }
}

export default Find_Job