import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
  inputRef = React.createRef()
  search = () =>{
    // 获取用户的输入
    const {value}  = this.inputRef.current
    //发送请求前通知App更新状态
		this.props.updateAppState({isFirst:false,isLoading:true})
    // 发送网络请求
    axios.get(`/api1/search/users?q=${value}`).then(
			response => {
				//请求成功后通知App更新状态
				// this.props.updateAppState({isLoading:false,users:response.data.items})
			},
			error => {
        //console.log('失败了',error);//这个接口不能用了下面是一个本地数据
        const users = [
          {
            id:1,
            avatar_url:'https://avatars.githubusercontent.com/u/6412038?v=3',
            html:"https://github.com/atguigu",
            login:"atguigu1"
          },
          {
            id:2,
            avatar_url:'https://avatars.githubusercontent.com/u/6412038?v=3',
            html:"https://github.com/atguigu",
            login:"atguigu2"
          },
          {
            id:3,
            avatar_url:'https://avatars.githubusercontent.com/u/6412038?v=3',
            html:"https://github.com/atguigu",
            login:"atguigu3"
          },
          {
            id:4,
            avatar_url:'https://avatars.githubusercontent.com/u/6412038?v=3',
            html:"https://github.com/atguigu",
            login:"atguigu4"
          }
        ]
        this.props.updateAppState({isLoading:false,users:users})
				//请求失败后通知App更新状态
				// this.props.updateAppState({isLoading:false,err:error.message})
			}
		)
  }
  render() {
    return (
			<section className="jumbotron">
			  <h3 className="jumbotron-heading">搜索Github用户</h3>
			  <div>
				  <input ref={this.inputRef} type="text" placeholder="输入关键词点击搜索"/>
          <button onClick={this.search}>搜索</button>
			  </div>
			</section>
    )
  }
  // 小知识:连续解构赋值
  // 回调：
  // <input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索"/>
  // 连续解构赋值 + 重命名
  // const {keyWordElement:{value:keyWord}} = this
  // console.log(keyWord)
}
