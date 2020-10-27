import React from "react"
import { Switch, Route, BrowserRouter as Router, } from "react-router-dom"

import "./App.css"

import Index from "@page"
import About from "@page/about"

function App(){
        return(
            <div id="document">
				<Router>
					<Switch>
						<Route exact path={"/"} component={Index}/>
						<Route path={"/about"} component={About}/>
					</Switch>
				</Router>
                {/* <Index/>
				<About/> */}
            </div>
        )
}
export default App;