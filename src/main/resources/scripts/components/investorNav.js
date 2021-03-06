'use strict';

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import Logo from './logo';

export default class InvestorNav extends Component {

  renderGoList() {
  	const {index} = this.props;
  	return (
  	  <div id="nav-list">
		  <ul>
			<li>
			  <Link to={'/investor/index/0'}>
			    <span className={parseInt(index) === 0 ? 'nav-item active': 'nav-item'}>首页</span>
			  </Link>
			</li>
			<li id="finance">
			  <Link to={'/investor/investModel/1'}> 
			    <span className={parseInt(index) === 1 ? 'nav-item active': 'nav-item'}>投资板块</span>
			  </Link>
			  <div id="finance-subnav">
			    <ul>
				  <li>
					<Link to={'/investor/investModel/1'}>
					  <span>撮合配对</span>
				    </Link>
				  </li>
				  <li>
					<Link to={'/investor/pub/render/1'}>
					  <span>意向发布</span>
					</Link>
				  </li>
				  <li>
				    <Link to={'/investor/chat/1'}>
					  <span>业务洽谈</span>
					</Link>
				  </li>
				  <li>
				    <Link to={'/investor/appliedInvest/1'}>
				      <span>电子签约</span>
				    </Link>
				  </li>
				</ul>
			  </div>
			</li>
			<li>
			  <Link to={'/investor/news/2/infoCenter'}>
			    <span className={parseInt(index) === 2 ? 'nav-item active': 'nav-item'}>信息披露</span>
			  </Link>
			</li>
			<li id="service">
			  <Link to={'/investor/manage/3/invest'}>
				<span className={parseInt(index) === 3 ? 'nav-item active': 'nav-item'}>资产管理</span>
			  </Link>
		    </li>
		  </ul>
		</div>
  	)
  }

  renderUser() {
    return (
      <div id="iciti">
		  <ul id="i-column">
			<li id="user-photo">
			  <span>
			    <Link to={"_target"}>
			      <img src="/images/user.png"/>
			    </Link>
			  </span>
		    </li>
			<li id="go">
			  <span id="text">&nbsp;我的账号<img src="/images/back-bottom.png"/></span>
			  <ul>
				<li>
			      <Link to={'/investor/ifollow'}>
			        <span>我关注的</span>
			      </Link>
			    </li>
				<li>
				  <Link to={'/investor/inews'}>
				    <span>我的消息</span>
				  </Link>
				</li>
				<li>
				  <Link to={'/investor/resourceAsset'}>
				    <span>资料管理</span>
				  </Link>
				</li>
				<li>
				  <Link to={'/investor/logout'}>
				    <span>退出</span>
				  </Link>
				</li>
			  </ul>
			</li>
		  </ul>
		</div>
    )
  }

  render() {
  	return (
  	  <div id="header-investor">
	    <div id="header-nav">
		<Logo />
		{this.renderGoList()}
		{this.renderUser()}
	   </div>
    </div>
  	)
  }
}

InvestorNav.propTypes = {
  index: PropTypes.number.isRequired
}