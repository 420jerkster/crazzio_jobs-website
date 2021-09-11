import React, {Component} from "react"
import "../../../public/build/tailwind.css"
import RecentContent from "./RecentTab_content"


class RecentUploads extends Component{
    render() {
        return(
            <div>
                <div className="3xl:w-106 3xl:h-104 bg-gray-100 rounded-md shadow-xl p-2 2xl:w-106 2xl:h-96 xl:w-104 xl:h-96">
                    <p className="text-gray-900 font-bold text-center text-lg sticky -top-2 bg-gray-100 py-2">Recent Uploads</p>
                    <div className="p-2 3xl:h-98 2xl:h-80 xl:h-80 overflow-y-auto no-scrollbar space-y-2">
                        {/* Recent Tab Contents*/}
                        <RecentContent heading = "The Fantasy Island" about_post = "Finding the perfect angle for a selfie is difficult enough, but  selfie is difficult enough, but..." uploadtime = "12 July 2021" />
                        <RecentContent heading = "The Fantasy Island" about_post = "Finding the perfect angle for a selfie is difficult enough, but  selfie is difficult enough, but..." uploadtime = "12 July 2021" />
                        <RecentContent heading = "The Fantasy Island" about_post = "Finding the perfect angle for a selfie is difficult enough, but  selfie is difficult enough, but..." uploadtime = "12 July 2021" />
                    </div>
                </div>
            </div>
        )
    }
}

export default RecentUploads