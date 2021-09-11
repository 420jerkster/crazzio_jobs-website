import React, {Component} from "react";
import "../public/build/tailwind.css"
import Home from "./Job_Home.js";
import Footer from "./Footer.js";

class App extends Component{
  render() {

    const active_user = this.props.active_user_index

    return(
      <div className="">
        <Home />

        <div className="">
          <Footer />
        </div>
      </div>
    )
  }
}
export default App;
