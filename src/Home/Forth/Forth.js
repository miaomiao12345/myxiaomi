import React from 'react';
import Img from './Img.js'
import icon4 from '../../images/手机.png';
import icon5 from '../../images/礼物.png';
import icon6 from '../../images/F码.png';
import icon7 from '../../images/米粉卡.png';
import icon8 from '../../images/以旧换新.png';
import icon9 from '../../images/话费充值.png';

const IMGDES = ['选购手机','企业团购','F码通道','米粉卡','以旧换新','话费充值'];

class Forth extends React.Component{
	render(){
		return (
			<div className='forth'>
				<div className='for1'>
					<Img src={icon4} description={IMGDES[0]} />
					<Img src={icon5} description={IMGDES[1]} />
					<Img src={icon6} description={IMGDES[2]} />
					<Img src={icon7} description={IMGDES[3]} />
					<Img src={icon8} description={IMGDES[4]} />
					<Img src={icon9} description={IMGDES[5]} />
				</div>
				<img alt="红米note 7 999元起"  srcSet="//i1.mifile.cn/a4/xmad_15553254986023_TZkmw.jpg 2x" />
				<img alt="红米7 699起"  srcSet="//i1.mifile.cn/a4/xmad_15553962556499_GTdME.jpg 2x" />
				<img alt="ai到手价269" srcSet="//i1.mifile.cn/a4/xmad_15534987530318_QoCnr.jpg 2x" />
		
			</div>
			)
	}
}

export default Forth;