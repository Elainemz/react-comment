import React from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';

export default class Parent extends React.Component{
    constructor(){
        super();
        this.state ={
            color:'red'
        }
    }

    getChildContext(){
        return {
            color:this.state.color
        }
    }

    static childContextTypes = {
        color: PropTypes.string
    };

    render(){
        return <div><Son></Son></div>
    }

}
class Son extends React.Component{
    render(){
        return <div>
            <GrandSon></GrandSon>
        </div>
    }
}
class GrandSon extends React.Component{
    static contextTypes = {
        color: PropTypes.string
    }
    render(){
        return <div style={ {color:this.context.color} } >GrandSon {this.context.color}</div>
    }
}