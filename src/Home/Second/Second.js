import React from 'react';
import Cate from './Cate.js';
import { Link } from 'react-router-dom';

import icon2 from '../../images/小米.png';
import icon3 from '../../images/search.png';

const CATENAME = ['小米手机','红米','电视','笔记本','家电','新品','路由器','智能硬件','服务','社区'];

class Second extends React.Component {
	render(){
		return (<div className='second'>
				<div className='sec1'><img src={icon2} /></div>
				<div className='sec2'>
				<Cate to='/page1' name={CATENAME[0]} />
				<Cate to='/page1' name={CATENAME[1]} />
				<Cate to='/page1' name={CATENAME[2]} />
				<Cate to='/page1' name={CATENAME[3]} />
				<Cate to='/page1' name={CATENAME[4]} />
				<Cate to='/page1' name={CATENAME[5]} />
				<Cate to='/page1' name={CATENAME[6]} />
				<Cate to='/page1' name={CATENAME[7]} />
				<Cate to='/page1' name={CATENAME[8]} />
				<Cate to='/page1' name={CATENAME[9]} />

				</div>
				<div className='sec3'>
					<input type='search' placeholder='小米9'/>
					<img src={icon3} />
				</div>
			</div>)
	}
}



export default Second;