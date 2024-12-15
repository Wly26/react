/* 
	该文件专门为Count组件生成action对象
*/
import {INCREMENT,DECREMENT} from './constant'

export const createIncrementAction = function createIncrementAction(data){
    return {type:INCREMENT,data}
}
export const createDecrementAction = function createDectementAction(data){
    return {type:DECREMENT,data}
}