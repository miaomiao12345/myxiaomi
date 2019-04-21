import React from 'react'

class Nav extends React.Component{
	render(){
		return (
			<div className='nav'>
			<a herf=''>{this.props.name}</a>
			<span className='sep'>|</span>
			</div>
			)
	}
}

export default Nav;