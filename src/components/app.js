import React, { Component } from 'react';
import SVGElement from './svg-element';

export default class App extends Component {
  render() {
    return (
      <div>
        <SVGElement
          trigger={''}
          active-class="active"
          transform={{
            x: 5,
            y: 5,
            scale: 1.2,
            rotate: 180
          }}
          unit="rem"
          svgSrc="../../style/SVG/computers.svg"
        />
        <SVGElement
          trigger={''}
          active-class="active"
          transform={{
            x: 5,
            y: 5,
            scale: 1.2,
            rotate: 180
          }}
          unit="rem"
          svgSrc="../../style/SVG/computers.svg"
        />
      </div>
    );
  }
}
