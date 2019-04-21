import React from 'react'

const ICON = ["//i1.mifile.cn/a4/xmad_15531616186528_UuyIn.jpg 2x","//i1.mifile.cn/a4/xmad_15548066625675_jhzWS.jpg 2x","//i1.mifile.cn/a4/xmad_15532682920183_CvHEi.jpg 2x","//i1.mifile.cn/a4/xmad_15476942090876_owaIH.jpg 2x","//i1.mifile.cn/a4/xmad_15519596940008_dgwsr.jpg 2x"];
const TITLE = ['手机 电话卡','电视 盒子','笔记本 平板','家电 插线板','出行 穿戴','智能 路由器','电源 配件','健康 儿童','耳机 音箱','生活 箱包']

class TableControl extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			index:0,
			control:props.control
		}
	}
	componentDidMount(){
		setInterval(this.qiehuan.bind(this), 3000);
	}
	componentWillReceiveProps(nextProps) {
		this.setState({
			control:nextProps.control
		})
	}
	qiehuan(){
		if(this.state.index == 4){
			this.setState({
				index:0
			});
		}else{
			this.setState({
				index:this.state.index+1
			})
		}
	}
	handleClick(num){
		console.log("num",num);
		this.setState({
			index:num
		})
		console.log("index",this.state.index)
	}
	render(){
		const deepColor={
			color:'green',
			fontWeight:'bold',
			fontSize:'20px'
		}
		const shallowColor={
			color:'pink',
			fontSize: '15px'
		}
		return (
			<div>
			<div className='thi3'>
			{ this.state.control == 0 ? <img id='img' src={ICON[this.state.index]}/>: <span>{TITLE[ this.state.control - 1 ]}</span> }
			</div> 
			<div className='thi4'>
				{this.state.index == 0 ? <span style={deepColor}>♡&nbsp;&nbsp;</span> : <span style={shallowColor} onClick={this.handleClick.bind(this,0)}>♡&nbsp;&nbsp;</span>}
				{this.state.index == 1 ? <span style={deepColor}>♡&nbsp;&nbsp;</span> : <span style={shallowColor} onClick={this.handleClick.bind(this,1)}>♡&nbsp;&nbsp;</span>}
				{this.state.index == 2 ? <span style={deepColor}>♡&nbsp;&nbsp;</span> : <span style={shallowColor} onClick={this.handleClick.bind(this,2)}>♡&nbsp;&nbsp;</span>}
				{this.state.index == 3 ? <span style={deepColor}>♡&nbsp;&nbsp;</span> : <span style={shallowColor} onClick={this.handleClick.bind(this,3)}>♡&nbsp;&nbsp;</span>}
				{this.state.index == 4 ? <span style={deepColor}>♡&nbsp;&nbsp;</span> : <span style={shallowColor} onClick={this.handleClick.bind(this,4)}>♡&nbsp;&nbsp;</span>}
			</div>
			</div>
			)
		}
	}

export default TableControl;
