import React, {Component} from "react"
import "../../public/build/tailwind.css"
import BlogCard from "../../Crazzio_blogs/BlogCard"
import P from "../../Files/back_2.jpg"
import { UserBlogData } from "../../User Data/User Blogs Data/UserBlogsData"

class BlogTab extends Component{
    render(){

        const active_user = this.props.active_user_name
        const BlogDisplayCard = UserBlogData[this.props.active_user].user.map((blog) =>(
            <BlogCard  img_path = {P} blog_topic = {blog.blog_topic} about_blog = {blog.blog_about} upload_date = {blog.blog_date} upload_time = {blog.blog_time} />
        ))


        return(
            <div>
                 <div className="bg-gray-200 my-20 py-4 xl:mx-4 2xl:mx-6 md:mx-4 3xl:mx-24 px-2">
                    {/* Navbar*/}
                    <div className="max-w-max mx-auto overflow-auto whitespace-nowrap no-scrollbar space-x-8">
                        <p className="text-lg text-gray-700 font-extrabold inline-block  hover:text-gray-900 cursor-pointer">About</p>
                        <p className="text-lg text-gray-700 font-extrabold inline-block  hover:text-gray-900 cursor-pointer ">Profession</p>
                        <p className="text-lg text-gray-900 font-extrabold inline-block  hover:text-gray-900 cursor-pointer border-b-2 border-gray-900">Blogs</p>
                        <p className="text-lg text-gray-700 font-extrabold inline-block hover:text-gray-900 cursor-pointer">Images</p>
                    </div>
                    
                    <div className=" mt-10 flex flex-auto flex-wrap flex-row flex-shrink">
                        {BlogDisplayCard}
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogTab