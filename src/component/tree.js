import React, { Component } from 'react';
import '../assets/css/tree.css';

class Tree extends Component {
	constructor(props){
			super(props)
			this.state={
				data: []
			}
	} 
	componentWillReceiveProps  (nextProps) {
		this.setState({
			data: nextProps.data
		})
	}
	clearHandleClick () {
		var myData = this.state.data
		for (let i = 0; i < myData.length; i++){
			myData[i].checked = false
			if (myData[i].children) {
				for (let j = 0; j < myData[i].children.length; j++) {
					myData[i].children[j].checked = false
				}
			}
			this.setState({
				data: myData
			})
		}
	}
	itemHandleClick (index, event) {
		var myData = this.state.data
		if (!myData[index[0]]) return
		if (index.length === 1) {
			myData[index[0]].checked = !myData[index[0]].checked
			if (myData[index[0]].children) {
				for (let j = 0; j < myData[index[0]].children.length; j++) {
					myData[index[0]].children[j].checked = myData[index[0]].checked
				}
			}
		} else {
			myData[index[0]].children[index[1]].checked = !myData[index[0]].children[index[1]].checked
			var flag = true
			for (let i = 0; i < myData[index[0]].children.length; i++) {
				flag = myData[index[0]].children[i].checked && flag
			}
			myData[index[0]].checked = flag
		}
		this.setState({
			data: myData
		})
	}
	handelChange (index, event) {
		this.itemHandleClick(index, event)
	}
  render() {
    return (
      <div className="tree">
				<div className="tree-header clearfix">
					<div className="title">{this.props.title?this.props.title:'列表'}</div>
					<div className="clear" onClick={this.clearHandleClick.bind(this)}>清空</div>
				</div>
				<ul className="tree-list clearfix">
					{
						(this.state.data && typeof this.props.data === 'object' && this.state.data.length) ?
							this.state.data.map((parent, index) => {
								return <li key={parent.value}>
												<div className="tree-item">
													<input type="checkbox" onChange={this.itemHandleClick.bind(this, [index])} checked={parent.checked} />
													<span onClick={this.itemHandleClick.bind(this, [index])}>{parent.label}</span>
													{
														(parent.children && parent.children.length)?
														<span className="drop"></span> : null
													}
													<div className="value">{parent.count}</div>
												</div>
												{
													(parent.children && parent.children.length)?
													<ul>
														{
															parent.children.map((children, i) => {
																return <li key={children.value}>
																				<div className="tree-item">
																					<input type="checkbox" onClick={this.itemHandleClick.bind(this, [index, i])} checked={children.checked}/>
																					<span onClick={this.itemHandleClick.bind(this, [index, i])}>{children.label}</span>
																					<div className="value">{children.count}</div>
																				</div>
																			</li>
															})
														}
													</ul> : null
												}
											</li>
							}) : <li>请传入参数</li>
					}
				</ul>
      </div>
    );
  }
}

export default Tree;
