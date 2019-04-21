import React from 'react';

class Img extends React.Component{
	render(){
		return (
			<div className='for2'>
				<img src={this.props.src} />
				<span>{this.props.description}</span>
			</div>
		)
	}
}

export default Img;