import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './Home/Home.js'
import XiaomiPhone from './XiaomiPhone/XiaomiPhone.js'

class App extends React.Component{
	render(){
		return (
				<Router>
					<div>
					<Route exact path='/' component={Home}/>
					<Route path='/page1' component={XiaomiPhone}/>
					</div>
				</Router>
			) 
	}
}

export default App;