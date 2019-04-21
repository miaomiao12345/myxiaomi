import React from 'react';

class Title extends React.Component{
	constructor(props){
		super(props);
	}
	handleControl(){
		this.props.handleControl();
	}
	render(){
		return (
			<div className='thi2' onMouseOver = { this.props.handleControl } onMouseOut={this.props.moveOut}>
				<span>{this.props.name}</span>
				<a herf=''>{ '>' }</a>
			</div>
	)
	}
}

export default Title;