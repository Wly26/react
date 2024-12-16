import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import { connect } from 'react-redux'
import {addPerson} from '../../redux/actions/person'

class Person extends Component {
    nameNode = React.createRef()
    ageNode = React.createRef()
    addPerson = ()=>{
        const name = this.nameNode.current.value;
        const age = this.ageNode.current.value;
        const personObj = {id:nanoid(),name,age}
        this.props.addPerson(personObj)
        this.nameNode.current.value = '';
        this.ageNode.current.value = ''
    }
    render() {
        return (
        <div>
            <p>上方组件，总数：{this.props.count}</p>
            <input ref={this.nameNode} type='text' placeholder='输入名字'/>
            <input ref={this.ageNode} type='text' placeholder='输入年龄'/>
            <button onClick={this.addPerson}>添加</button>
            <ul>
                {/* <li>名字1————年龄1</li>
                <li>名字2————年龄2</li>
                <li>名字3————年龄3</li> */}
                {
                    this.props.persons.map((data)=>{
                        return <li key={data.id}>{data.name}————{data.age}</li>
                    })
                }
            </ul>
        </div>
        )
    }
}
export default connect(
    state => ({
        persons:state.persons,
        count:state.count}),
    {
        addPerson
    }

)(Person)
