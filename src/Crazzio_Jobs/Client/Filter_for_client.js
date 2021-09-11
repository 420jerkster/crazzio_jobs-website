import React, {Component} from "react";
import "../../public/build/tailwind.css"
import filter from "../../Files/filter(black).png"

class Filter_Hire extends Component{
    render(){
        return(
            <div>
                <div className="relative flex border-b-2 border-gray-400 h-14">
                    <p className="mt-2 ml-2 text-3xl font-bold text-gray-800 uppercase">Filters</p>
                    <img src = {filter} className="absolute right-0 h-10 mt-2 mr-2" />
                </div>

                {/*Filter data*/}
                <div className="p-2 mt-8">
                    {/*By status*/}
                    <div className="flex mx-auto max-w-max ">
                        <p className="p-2 text-lg font-medium bg-gray-300 border-2 border-r-0 border-gray-400 cursor-pointer hover:bg-gray-400 max-w-max">Latest</p>
                        <p className="p-2 text-lg font-medium bg-gray-300 border-2 border-r-0 border-gray-400 cursor-pointer hover:bg-gray-400 max-w-max">Popular</p>
                        <p className="p-2 text-lg font-medium bg-gray-300 border-2 border-r-0 border-gray-400 cursor-pointer hover:bg-gray-400 max-w-max">Featured</p>
                        <p className="p-2 text-lg font-medium bg-gray-300 border-2 border-r-0 border-gray-400 cursor-pointer hover:bg-gray-400 max-w-max">Verified</p>
                        <p className="p-2 text-lg font-medium bg-gray-300 border-2 border-gray-400 cursor-pointer hover:bg-gray-400 max-w-max">Ending</p>
                    </div>

                    {/*By Categories*/}
                    <div className="p-2 mt-8">
                        <select className="w-full p-2 text-xl font-medium text-gray-700 border-b-2 border-gray-400 outline-none bg-gray-50">
                            <option>By Categories</option>
                            <input className="" placeholder="Search for categories" />
                        </select>
                        <div className="w-full h-48 bg-gray-50"></div>
                    </div>

                    {/*By Degrees*/}
                    <div className="p-2 mt-8">
                        <select className="w-full p-2 text-xl font-medium text-gray-700 border-b-2 border-gray-400 outline-none bg-gray-50">
                            <option>By Degrees</option>
                            <input className="" placeholder="Search for categories" />
                        </select>
                        <div className="w-full h-48 bg-gray-50"></div>
                    </div>

                    {/*By Skills*/}
                    <div className="p-2 mt-8">
                        <select className="w-full p-2 text-xl font-medium text-gray-700 border-b-2 border-gray-400 outline-none bg-gray-50">
                            <option>By Skills</option>
                            <input className="" placeholder="Search for categories" />
                        </select>
                        <div className="w-full h-48 bg-gray-50"></div>
                    </div>

                    {/*By Rating*/}
                    <div className="p-2 mt-8">
                        <p className="text-xl font-semibold text-gray-800 ">By Rating</p>
                        <div className="mt-1 space-y-2">
                            <div className="flex space-x-1"><input type="checkbox" name="rating_1star" className="w-5 h-5" /><label for="rating_1star" className="-mt-1 text-lg font-medium text-gray-700">1 Starrated</label></div>
                            <div className="flex space-x-1"><input type="checkbox" name="rating_2star" className="w-5 h-5" /><label for="rating_2star" className="-mt-1 text-lg font-medium text-gray-700">2 Stars rated</label></div>
                            <div className="flex space-x-1"><input type="checkbox" name="rating_3star" className="w-5 h-5" /><label for="rating_3star" className="-mt-1 text-lg font-medium text-gray-700">3 Stars rated</label></div>
                            <div className="flex space-x-1"><input type="checkbox" name="rating_4star" className="w-5 h-5" /><label for="rating_4star" className="-mt-1 text-lg font-medium text-gray-700">4 Stars rated</label></div>
                            <div className="flex space-x-1"><input type="checkbox" name="rating_5star" className="w-5 h-5" /><label for="rating_5star" className="-mt-1 text-lg font-medium text-gray-700">5 Stars rated</label></div>
                        </div>
                    </div>

                    {/*By Money*/}
                    <div className="p-2 mt-8">
                        <p className="text-xl font-semibold text-gray-800 ">By Pricing</p>
                        <div className="flex space-x-2">
                            {/*Min Amt*/}
                            <div className="relative mt-3">
                                <p className="absolute ml-2 -mt-3 font-semibold text-gray-700">Minimum Amount</p>
                                <input className="w-56 h-12 text-xl font-medium text-center text-gray-700 outline-none bg-gray-50" />
                            </div>
                            {/*Max Amt*/}
                            <div className="relative mt-3">
                                <p className="absolute ml-2 -mt-3 font-semibold text-gray-700">Maximum Amount</p>
                                <input className="w-56 h-12 text-xl font-medium text-center text-gray-700 outline-none bg-gray-50" />
                            </div>
                        </div>
                    </div>

                    {/*By Projects done*/}
                    <div className="p-2 mt-8">
                        <p className="text-xl font-semibold text-gray-800 ">By Projects done</p>
                        <div className="flex space-x-2">
                            {/*Min no. of proj*/}
                            <div className="relative mt-3">
                                <p className="absolute ml-2 -mt-3 font-semibold text-gray-700">Minimum</p>
                                <input className="w-56 h-12 text-xl font-medium text-center text-gray-700 outline-none bg-gray-50" />
                            </div>
                            {/*Max no. o proj*/}
                            <div className="relative mt-3">
                                <p className="absolute ml-2 -mt-3 font-semibold text-gray-700">Maximum</p>
                                <input className="w-56 h-12 text-xl font-medium text-center text-gray-700 outline-none bg-gray-50" />
                            </div>
                        </div>
                    </div>

                    {/*By Experience*/}
                    <div className="p-2 mt-8">
                        <p className="text-xl font-semibold text-gray-800 ">By Experience</p>
                        <div className="mt-1 space-y-2">
                            <div className="flex space-x-1"><input type="checkbox" name="exp_basic" className="w-5 h-5" /><label for="exp_basic" className="-mt-1 text-lg font-medium text-gray-700">Basic Level</label></div>
                            <div className="flex space-x-1"><input type="checkbox" name="exp_intermediate" className="w-5 h-5" /><label for="exp_intermediate" className="-mt-1 text-lg font-medium text-gray-700">Intermediate Level</label></div>
                            <div className="flex space-x-1"><input type="checkbox" name="exp_expert" className="w-5 h-5" /><label for="exp_expert" className="-mt-1 text-lg font-medium text-gray-700">Expert Level</label></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Filter_Hire