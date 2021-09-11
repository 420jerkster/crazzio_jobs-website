import React, {Component} from "react"
import "../../../public/build/tailwind.css"
import JobCard_listup_LightMode from "../../../Crazzio_Search/Job_listupcard_LightMode"


class ProfessionTab extends Component{
    render() {
        return(
            <div>
                <div className="bg-gray-200 my-20 py-4 xl:mx-4 2xl:mx-6 md:mx-4 3xl:mx-24 px-2">
                    {/* Navbar*/}
                    <div className="max-w-max mx-auto overflow-auto whitespace-nowrap no-scrollbar space-x-8">
                        <p className="text-lg text-gray-700 font-extrabold inline-block  hover:text-gray-900 cursor-pointer">About</p>
                        <p className="text-lg text-gray-900 font-extrabold inline-block  hover:text-gray-900 cursor-pointer border-b-2 border-gray-900">Profession</p>
                        <p className="text-lg text-gray-700 font-extrabold inline-block  hover:text-gray-900 cursor-pointer">Blogs</p>
                        <p className="text-lg text-gray-700 font-extrabold inline-block hover:text-gray-900 cursor-pointer">Images</p>
                    </div>
                    
                    <div className=" mt-10">
                        {/* Job Card */}
                        <div className="max-w-max mx-auto">
                            <JobCard_listup_LightMode />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfessionTab