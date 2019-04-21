import React from 'react';
import './Home.css';
import Sitetopbar from './Sitetopbar/Sitetopbar.js'
import Second from './Second/Second.js'
import Third from './Third/Third.js'
import Forth from './Forth/Forth.js'

class Home extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			
		}
	}

	render() {
		return (
			<div>
			<Sitetopbar />
			<Second />
			<Third />
			<Forth />
			</div>
			)
	}
}

export default Home;