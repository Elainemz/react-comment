//评论列表
import React from 'react';
import Comment from './Comment';
import CommentText from './CommentText';

// function Comment(props){
//     return  <div>
//         <h3>评论内容：{props.content}</h3>
//         <h5>评论人：{props.user}</h5>
//     </div>
// }

class CommentList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          comments:[
            { user: '图图', content: '我最帅' },
            { user: '乐乐', content: '我快乐'}
          ]
        }
    }
    render(){
        return <div>
            <CommentText updateState={() =>{this.getDataFromLocalStorage()}}></CommentText>
            {this.state.comments.map((item,i) =>{return this.createElement(item,i)})}
        </div>
    }

    createElement (item, i) {
        return <Comment key={i} {...item}></Comment>
    }

    componentDidMount() {
        this.getDataFromLocalStorage();
    }
    getDataFromLocalStorage(){
        var list = JSON.parse(localStorage.getItem("comments"||'[]'));
        this.setState({
            comments:list
        })
    }
}

export default CommentList;