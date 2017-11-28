11.25 22:00 - 11.26 01:00
安装环境，完成页面及样式
11.26 22:00 - 11.27 01:00
处理动态数据，渲染页面，实现点击事件基本功能，并封装成组件
11.27 22:00 - 11.28 00:00
优化组件，并将数据返回父组件，完成组件tree基本功能


组件tree调用方法：
import tree.js tree.css

  <Tree title={title} check={true} open={true} data={data} handleClick={handleClick} handleCheck={handleCheck}/>
  参数：
  title 为 string 类型 为组件title
  check 为 boolean 类型 true为有checkbox false为无
  open 为 boolean 类型 true为默认打开子目录 false为默认关闭
  data 为 object（array） 类型 例：
  data = [
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

    value 为自定义参数，
    label 为目录名字
    count 为数量
    checked true为选中 false为未选中 （check参数为true时，该参数有效）
    children 为子目录

  handleClick 点击目录名时触发事件，参数为
    data 更新后的数据
    node 触发click事件的node节点

  handleCheck 为checkbox改变触发事件，参数为
    data 更新后的数据
    clickItem 点击项的数据
    node 触发change事件的node节点

欠缺：
    并不能处理多层级tree数据，后续会再找时间优化

