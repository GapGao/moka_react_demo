import React, { Component } from 'react';
import '../assets/css/tree.css';

class Tree extends Component {
  render() {
    return (
      <div className="tree">
				<div className="tree-header clearfix">
					<div className="title">招聘职位</div>
					<div className="clear">清空</div>
				</div>
        <ul className="tree-list clearfix">
					<li>
						<div className="tree-item"><input type="checkbox" />工程研发部门<span className="drop"></span><div className="value">120</div></div>
						<ul>
							<li><div className="tree-item"><input type="checkbox" />Mac开发工程师<div className="value">120</div></div></li>
							<li><div className="tree-item"><input type="checkbox" />iOS App测试工程师<div className="value">120</div></div></li>
							<li><div className="tree-item"><input type="checkbox" />Android远程控制工程师<div className="value">120</div></div></li>
							<li><div className="tree-item"><input type="checkbox" />Web 前端工程师<div className="value">120</div></div></li>
							<li><div className="tree-item"><input type="checkbox" />Android 多媒体软件开发工程师<div className="value">120</div></div></li>
						</ul>
					</li>
					<li>
						<div className="tree-item"><input type="checkbox" />产品设计部门<span className="drop"></span><div className="value">9</div></div>
						<ul>
							<li><div className="tree-item"><input type="checkbox" />网页设计师<div className="value">120</div></div></li>
							<li><div className="tree-item"><input type="checkbox" />ID/工业设计师<div className="value">120</div></div></li>
							<li><div className="tree-item"><input type="checkbox" />视觉设计师/GUI界面设计师<div className="value">9</div></div></li>
							<li><div className="tree-item"><input type="checkbox" />平面设计师<div className="value">120</div></div></li>
						</ul>
					</li>
				</ul>
      </div>
    );
  }
}

export default Tree;
