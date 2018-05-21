
import  React from 'react';
export default class CommentText extends React.Component{
    render(){
        return <div>
            评论人：<input type="text" name="" id="" ref="user"/>
            <br/>
            评论内容：
            <textarea name="" id="" cols="30" rows="10" ref="content"></textarea>
            <br/>
            <input type="button" value="提交评论" onClick={ ()=>{this.handleMsg()}}/>
        </div>
    }

    handleMsg(){
        //localStorage 设置
        var user = this.refs.user.value;
        var content = this.refs.content.value;
        var obj ={
            user:user,
            content:content
        }
        var list = JSON.parse(localStorage.getItem('comments') || '[]');
        list.unshift(obj);
        localStorage.setItem('comments',JSON.stringify(list));
        //清空文本框
        this.refs.user.value = '';
        this.refs.content.value='';

        this.props.updateState();
    }

}