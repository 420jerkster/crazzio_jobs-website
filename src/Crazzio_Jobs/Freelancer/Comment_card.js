import React, { Component } from "react";
import "../../public/build/tailwind.css"
import dpL from "../../Files/profiile_img.jpeg"


class CommentCard extends Component{
    render(){
        return(
            <div className="flex bg-gray-300 bg-opacity-50 shadow-sm h-52 w-120">
                <div className="p-3">
                    <div className="flex space-x-2">
                        <img src={dpL} className="object-cover rounded-full w-14 h-14" />
                        <div className="mt-1">
                            <p className="text-xl font-bold text-gray-800">Tatpar Mishra</p>
                            <p className="text-xl text-center text-gray-600">3 Stars</p>
                        </div>
                    </div>

                    {/*Comment para*/}
                    <div>
                        <p className="text-lg text-gray-700 ">Python is a dynamic and strongly typed object-oriented programming language. It employs both duck typing and gradual typing (via type hints). It supports multiple programming paradigms including imperative (object-oriented, procedural) and declarative (functional, concurrent) flavors. But do not be fooled: while programming across paradigms is fully supported, everything in Python is an object.</p>                        
                    </div>
                </div>
            </div>
        )
    }
}

export default CommentCard
