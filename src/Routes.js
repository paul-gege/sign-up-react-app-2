import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AuthPage from './components/AuthPage.js';


const Routes = () => {

	return (
		
		<BrowserRouter>
			<Switch>
				<Route path="/project3" component={AuthPage} exact />
			</Switch>
		</BrowserRouter>

	)
}

export default Routes;