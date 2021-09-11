import React, { Component } from "react";
import "../public/build/tailwind.css"

class Footer extends Component{
    render() {
        return(
            <div class="py-8 bg-gray-900">       
                <div class="bottom-0 mx-auto max-w-max">
                    <p  class="z-50 py-1 font-serif text-4xl font-bold text-gray-100 uppercase max-w-max md:text-5xl "><span class="crazzio_hover">C</span><span class="crazzio_hover">r</span><span class="crazzio_hover">a</span><span class="crazzio_hover">z</span><span class="crazzio_hover">z</span><span class="crazzio_hover">i</span><span class="text-red-600 crazzio_o_hover">o</span><span class="text-3xl lowercase md:text-3xl xl:text-4xl crazzio_com_hover hover:text-gray-700">.com</span></p>
                </div>
            </div>
        )
    }
}

export default Footer;