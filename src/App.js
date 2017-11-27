import React, { Component } from 'react';
import './assets/css/App.css';

import Tree from './component/tree';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      title: "招聘职位",
      check: true,
      data: []
    };
  } ;
  componentDidMount () {
    let data = [
      {
        value: 0,
        label: '工程研发部门',
        count: 120,
        checked: false,
        children: [
          {
            value: 0,
            label: 'Mac开发工程师',
            count: 9,
            checked: false
          },
          {
            value: 1,
            label: 'iOS App测试工程师',
            count: 17,
            checked: false
          },
          {
            value: 2,
            label: 'Android远程控制工程师',
            count: 61,
            checked: false
          },
          {
            value: 3,
            label: 'Web 前端工程师',
            count: 31,
            checked: false
          },
          {
            value: 4,
            label: 'Android 多媒体软件开发工程师',
            count: 2,
            checked: false
          }
        ]
      },
      {
        value: 1,
        label: '产品设计部门',
        count: 136,
        checked: false,
        children: [
          {
            value: 0,
            label: '网页设计师',
            count: 47,
            checked: false
          },
          {
            value: 1,
            label: 'ID/工业设计师',
            count: 39,
            checked: false
          },
          {
            value: 2,
            label: '视觉设计师/GUI界面设计师',
            count: 42,
            checked: false
          },
          {
            value: 3,
            label: '平面设计师',
            count: 8,
            checked: false
          }
        ]
      }
    ]
    // setTimeout(() => {
      this.setState({data: data})
    // }, 2000)
  }
  handleCheck (data, clickItem, node) {
    console.log(data, clickItem, node)
  }
  handleClick (data, node) {
    console.log(data, node)
  }
  render() {
    return (
      <div className="App">
        <aside className="list">
          <Tree title={this.state.title} check={this.state.check} data={this.state.data} handleClick={this.handleClick.bind(this)} handleCheck={this.handleCheck.bind(this)}/>
        </aside>
      </div>
    );
  }
}

export default App;
