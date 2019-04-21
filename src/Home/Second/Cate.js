import React from 'react';
import { Link } from 'react-router-dom'

class Cate extends React.Component{
	render(){
		return (
			<Link to={this.props.to}>
			<a herf=''>{this.props.name}</a>
			</Link>
			)
	}
}
export default Cate;