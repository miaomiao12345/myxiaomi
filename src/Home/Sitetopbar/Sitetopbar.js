import React from 'react';
import '../Home.css';
import icon1 from '../../images/购物车.png';
import Nav from './Nav.js'

const NAVNAME = ['小米商城','MIUI','IoT','云服务','金融','有品','小爱开放平台','政企服务','资质证照','协议规则','下载app','登录','注册','通知消息'];

class Sitetopbar extends React.Component {
	render(){
		return(
			<div className='site-topbar'>
			<div className='topbar-nav'>
				<Nav name={NAVNAME[0]} />
				<Nav name={NAVNAME[1]} />
				<Nav name={NAVNAME[2]} />
				<Nav name={NAVNAME[3]} />
				<Nav name={NAVNAME[4]} />
				<Nav name={NAVNAME[5]} />
				<Nav name={NAVNAME[6]} />
				<Nav name={NAVNAME[7]} />
				<Nav name={NAVNAME[8]} />
				<Nav name={NAVNAME[9]} />
				<Nav name={NAVNAME[10]} />
				<a>Select Region</a>
			</div>
			<div className='nav-right'>
				<Nav name={NAVNAME[11]} />
				<Nav name={NAVNAME[12]} />
				<Nav name={NAVNAME[13]} />
				<img src={icon1} />
				<a>购物车</a>
			</div>
			</div>
		)
	}
}



export default Sitetopbar;