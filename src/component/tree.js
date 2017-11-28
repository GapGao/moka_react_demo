import React, { Component } from 'react';
import '../assets/css/tree.css';

class Tree extends Component {
	constructor(props){
			super(props)
			this.state={
				data: []
			}
	} 
	/**
	 * 父层传的props，改变时触发事件
	 * 
	 * @param {any} nextProps 
	 * @memberof Tree
	 */
	componentWillReceiveProps  (nextProps) {
		this.setState({
			data: nextProps.data
		})
	}
	/**
	 * 组件更新完成事件
	 * 
	 * @memberof Tree
	 */
	componentDidUpdate () {
		for (var i = 0; i < this.refs.tree.children[1].children.length; i++) {
			this.refs.tree.children[1].children[i].children[1].style.height = this.props.open ? this.refs.tree.children[1].children[i].children[1].scrollHeight + 'px' : '0px'
		}
	}
	/**
	 * 清空按钮点击触发事件，取消所有项选中
	 * 
	 * @memberof Tree
	 */
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
	/**
	 * checkbox改变触发事件，判断并更新数据state
	 * 
	 * @param {any} index 点击项所在数据位置
	 * @param {any} e 事件对象
	 * @memberof Tree
	 */
	handleChange (index, e) {
		var myData = this.state.data
		var emitData = undefined
		if (!myData[index[0]]) return
		if (index.length === 1) {
			myData[index[0]].checked = !myData[index[0]].checked
			if (myData[index[0]].children) {
				for (let j = 0; j < myData[index[0]].children.length; j++) {
					myData[index[0]].children[j].checked = myData[index[0]].checked
				}
			}
			emitData = myData[index[0]]
		} else {
			myData[index[0]].children[index[1]].checked = !myData[index[0]].children[index[1]].checked
			var flag = true
			for (let i = 0; i < myData[index[0]].children.length; i++) {
				flag = myData[index[0]].children[i].checked && flag
			}
			myData[index[0]].checked = flag
			emitData = myData[index[0]].children[index[1]]
		}
		this.setState({
			data: myData
		})
		// 选中，取消，将变更的数据传会父组件，以便其调用，参数为 整个树数据、点击项更新后的数据、触发change事件的node节点
		this.props.handleCheck(this.state, emitData, e.target)
	}
	/**
	 * 
	 * 父层点击触发事件，toggle子目录
	 * @param {any} e 事件对象
	 * @memberof Tree
	 */
	itemHandleClick (data, e) {
		console.dir(e.target.parentNode.nextSibling)
		if (e.target.parentNode.parentNode.className === 'open') {
			e.target.parentNode.parentNode.className = ''
			e.target.parentNode.nextSibling.style.height = '0px'
		} else {
			e.target.parentNode.parentNode.className = 'open'
			e.target.parentNode.nextSibling.style.height = e.target.parentNode.nextSibling.scrollHeight + 'px'
		}
		// 点击目录名时触发 参数为  点击项数据， 触发点击click事件的node节点
		this.props.handleClick(data, e.target)
	}
	/**
	 * 
	 * 点击目录名时触发事件
	 * @param {any} data 点击项数据，
	 * @param {any} e 事件对象
	 * @memberof Tree
	 */
	childrenHandleClick (data, e) {
		this.props.handleClick(data, e.target)
	}
  render() {
    return (
			<div className="tree" ref="tree">
				<div className="tree-header clearfix">
					<div className="title">{this.props.title?this.props.title:'列表'}</div>
					{this.props.check ? <div className="clear" onClick={this.clearHandleClick.bind(this)}>清空</div> : null}
				</div>
				<ul className="tree-list clearfix">
					{
						(this.state.data && typeof this.props.data === 'object' && this.state.data.length) ?
							this.state.data.map((parent, index) => {
								return <li key={parent.value} className={this.props.open ? 'open' : null}>
												<div className="tree-item clearfix">
													{this.props.check ? <input type="checkbox" onChange={this.handleChange.bind(this, [index])} checked={parent.checked} /> : null}
													<span className="label" onClick={this.itemHandleClick.bind(this, parent)}>{parent.label}</span>
													{
														(parent.children && parent.children.length)?
														<span className="drop"></span> : null
													}
													<span className="value">{parent.count}</span>
												</div>
												{
													(parent.children && parent.children.length)?
													<ul>
														{
															parent.children.map((children, i) => {
																return <li key={children.value}>
																				<div className="tree-item clearfix">
																					{this.props.check ? <input type="checkbox" onChange={this.handleChange.bind(this, [index, i])} checked={children.checked}/> : null}
																					<span className="label" onClick={this.childrenHandleClick.bind(this, children)}>{children.label}</span>
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
