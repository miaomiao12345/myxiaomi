import React from 'react';
import '../Home.css'
import Title from './Title.js'
import TableControl from './TableControl.js'

const TITLE = ['手机 电话卡','电视 盒子','笔记本 平板','家电 插线板','出行 穿戴','智能 路由器','电源 配件','健康 儿童','耳机 音箱','生活 箱包']


class Third extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			control:0
		}
	}
	
	handleControl(name){
		
		this.setState({
			control:TITLE.indexOf(name)+1
		})

	}
	moveOut(){
		this.setState({
			control:0
		})
	}	

	render(){
		return (
			<div className='third'>
				<div className='thi1'>
					{ TITLE.map((t)=>{
						return (
							<Title 
								name={t} 
								handleControl={this.handleControl.bind(this, t)}
								moveOut={this.moveOut.bind(this)}
							/>
						)
					}) }
				</div>
				<TableControl control={this.state.control} />
			</div>
		)
	}
}


export default Third;