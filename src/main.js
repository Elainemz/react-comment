
import React from 'react';
import ReactDom from 'react-dom';
import Parent from './components/Parent'
import CommentList from './components/commentList';

ReactDom.render(<div>
    <CommentList></CommentList>
    <Parent></Parent>
</div>,document.getElementById('main'));
