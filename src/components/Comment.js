
import React from 'react';

export default class Comment extends React.Component{
    render(){
        return <div>
            <h3>评论内容：{this.props.content}</h3>
            <h5>评论人：{this.props.user}</h5>
        </div>
    }
}
