'use strict';

import React, {Component, PropTypes} from 'react';
import FormSelect from './FormSelect';
import {Link} from 'react-router';

export default class InvestorModel extends Component {
  renderSearch() {
    return (
      <div id="searchForm">
		<div id="searchInput">
		  <div id="textClear">
		    <a href="javascript:;"><img src="/images/cancel.png"></a>
		  </div>
		  <form name="search">
		    <input type="search" placeholder="请输入"/>
		    <input type="submit" value="搜索" />
		  </form>
		</div>
	  </div>
    )
  }
  
  renderTypeSelect() {
  	let options = [
  	 {
        value: '全部',
        text: '全部'
  	 },
  	 {
  	 	value: '股权投资',
        text: '股权投资'
  	 },
  	 {
  	    value: '债权投资',
  	    text: '债权投资'
  	 }
  	];

  	return (
  	  <div id="selectForm">
  	    <FormSelect options={options} labelText="类型" />
  	  </div>
  	)
  }
  
  renderPush() {
    return (
      <div>
        <Link to={'/push'} >查看推荐</Link>
      </div>
    )
  }
  
  renderPatchPanel() {
  	const {area} = this.props;
  	return (
  	  <div>
  	   <p>地区选择</p>
  	   <div className="selectItemGroup">
  	     {area.map(data => (
  	       return  (
             <span className="selectItem">
               <input type="checkbox" name="investArea" value={data}>{data}
             </span>
  	       )
  	      ))}
  	   </div>
  	)
  }

  renderIndustry() {
  	const {industry} = this.props;
  	return (
  	  <div>
  	    <p>行业选择</p>
  	    <div className="selectItemGroup">
  	      {industry.map(data => (
  	      	return (
  	      	  <span className="selectItem">
  	      	    <input type="checkbox" name="investIndustry" value={data}>{data}
  	      	  </span>
  	      	 )
  	      	))}
  	    </div>
  	  </div>
  	)
  }

  renderMoneyType() {
    return (
      <div className="selectItemGroup">
        <span className="select-item">
          <input type="checkbox" value="全部" name="moneyType">全部</span>
        <span className="select-item">
          <input type="checkbox" value="无担保" name="moneyType">无担保</span>
        <span className="select-item">
          <input type="checkbox" value="公司/机构担保" name="moneyType">公司/机构担保</span>
        <span className="select-item">
          <input type="checkbox" value="个人担保" name="moneyType">个人担保</span>
      </div>
    )
  }
   
   renderInterval() {
     return (
       <div>
         <p>资金区间</P
         <div className="selectItem-group">
           <input type="input" className="sizeSelect">&nbsp;-&nbsp;
           <input type="input" className="sizeSelect"> 万元
         </div>
       </div>
     )
   }
  
  renderReturnRate() {
  	return (
  	  <div className="selectItem-group">
        <input type="input" className="sizeSelect" name="lowLeastReturnDemand">&nbsp;-&nbsp;
        <input type="input" className="sizeSelect" name="highLeastReturnDemand"> %
      </div>
  	)
  }

  renderCreditRank() {
  	return (
  	  <div>
  	    <p>信用等级</p>
  	    <div className="selectItem-group">
          <input type="input" className="sizeSelect" name="lowCreditRank">&nbsp;-&nbsp;
          <input type="input" className="sizeSelect" name="highCreditRank">
        </div>
        <div>
          <input type="submit" value="确定" id="patchConfirmButton">
        </div>
  	  </div>
  	)
  }
  
  renderInvestModel() {
  	const {data} = this.props;
  	return (
  	  <div id="TableList">
	    <table>
		  <tr>
			<th>产品名称</th>
		    <th>类型</th>
			<th>地区</th>
			<th>所属行业</th>
			<th>资金类型</th>
		    <th>收益率</th>
			<th className="rightItem">信用等级</th>
		  </tr>
		</table>
  	)
  }
  render() {
  	return (
      <div id="content">
        <div id="site-nav">
          {this.renderSearch()}
          {this.renderTypeSelect()}
        </div>
        {this.renderPush()}
        <form name="investorModel">
        {this.renderPatchPanel()}
        {this.renderIndustry()}
        {this.renderMoneyType()}
        {this.renderInterval()}
        {this.renderCreditRank()}
        </form>
        {this.renderInvestModel()}
      </div>
  	)
  }
}