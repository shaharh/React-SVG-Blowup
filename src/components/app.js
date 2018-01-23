import React, { Component } from 'react';
import SVGElement from './svg-element';

export default class App extends Component {
  render() {
    return (
      <div>
        <SVGElement
          delay={300}
          transform="xTransform, yTransform, scale, rotate"
          base={15}
          svgSrc="../../style/SVG/computers.svg"
        />
      </div>
    );
  }
}
