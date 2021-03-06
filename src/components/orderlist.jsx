import React, {Component} from 'react';
import { FadeLoader } from 'react-spinners';
import { functions } from '../firebase';
import * as routes from '../constants/routes.jsx';
import {Motion, spring} from 'react-motion';
import range from 'lodash.range';

var pedingChange = false;

function reinsert(arr, from, to) {
  const _arr = arr.slice(0);
  const val = _arr[from];
  _arr.splice(from, 1);
  _arr.splice(to, 0, val);
  return _arr;
}

function clamp(n, min, max) {
  return Math.max(Math.min(n, max), min);
}

const springConfig = [300, 40];
var listItemsCount = 3;
var createReactClass = require('create-react-class');

const OrderList = createReactClass({
  getInitialState() {
    return {
      delta: 0,
      mouse: 0,
      isPressed: false,
      lastPressed: 0,
      order: range(listItemsCount),
    };
  },

  componentDidMount() {
    window.addEventListener('touchmove', this.handleTouchMove);
    window.addEventListener('touchend', this.handleMouseUp);
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);
  },

  componentWillUnmount() {
    //unbind the listeners that was binded.
    window.removeEventListener('touchmove', this.handleTouchMove, false);
    window.removeEventListener('touchend', this.handleMouseUp, false);
    window.removeEventListener('mousemove', this.handleMouseMove, false);
    window.removeEventListener('mouseup', this.handleMouseUp, false);
  },

  componentWillReceiveProps(props){
    console.log("got props update!",props)
    console.log("update and heres state",this.state)
    this.setState(() => ({ order: [0,1,2] }))
  },

  handleTouchStart(key, pressLocation, e) {
    this.handleMouseDown(key, pressLocation, e.touches[0]);
  },

  handleTouchMove(e) {
    e.preventDefault();
    this.handleMouseMove(e.touches[0]);
  },

  handleMouseDown(pos, pressY, {pageY}) {
    this.setState({
      delta: pageY - pressY,
      mouse: pressY,
      isPressed: true,
      lastPressed: pos,
    });
  },

  handleMouseMove({pageY}) {
    const {isPressed, delta, order, lastPressed} = this.state;
    if (isPressed) {
      const mouse = pageY - delta;
      const row = clamp(Math.round(mouse / 100), 0, this.listItemsCount - 1);
      const newOrder = reinsert(order, order.indexOf(lastPressed), row);
      this.setState({mouse: mouse, order: newOrder});
      this.props.onChange(this.state.order)
    }
  },

  handleMouseUp() {
    this.setState({isPressed: false, delta: 0});
  },

  render() {
    const {mouse, isPressed, lastPressed, order} = this.state;
    //items passed into the compoenent from parent
    const listItems = this.props.sList
    this.listItemsCount = listItems.length

    return (
      <div className="drag-list-wrapper">
        {range(this.listItemsCount).map(i => {
          const style = lastPressed === i && isPressed
            ? {
                scale: spring(1.1, springConfig),
                shadow: spring(16, springConfig),
                y: mouse,
              }
            : {
                scale: spring(1, springConfig),
                shadow: spring(1, springConfig),
                y: spring(order.indexOf(i) * 100, springConfig),
              };
          return (
            <Motion style={style} key={i}>
              {({scale, shadow, y}) =>
                <div
                  onMouseDown={this.handleMouseDown.bind(null, i, y)}
                  onTouchStart={this.handleTouchStart.bind(null, i, y)}
                  className="drag-list-item touchCursor"
                  style={{
                    boxShadow: `rgba(0, 0, 0, 0.2) 0px ${shadow}px ${2 * shadow}px 0px`,
                    transform: `translate3d(0, ${y}px, 0) scale(${scale})`,
                    WebkitTransform: `translate3d(0, ${y}px, 0) scale(${scale})`,
                    zIndex: i === lastPressed ? 99 : i,
                  }}>
                  {listItems[i]}
                </div>
              }
            </Motion>
          );
        })}
      </div>
    );
  },
});

export default OrderList
