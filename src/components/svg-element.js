import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactSVG from 'react-svg';
import $ from 'jquery';

class SVGElement extends Component {
  constructor(props) {
    super(props);

    this.state = {key: 'value'};
  }

  addTransformation(svg, transform, unit, callback) {
    $.each($(svg).find('path, rect, circle, polygon'), function () {
      const xTransform = transform.x ? callback('x', transform.x) : 0;
      const yTransform = transform.y ? callback('y', transform.y) : 0;
      const scaleTransform = transform.scale ? callback('scale', transform.scale) : 1;
      const rotateTransform = transform.rotate ? callback('rotate', transform.rotate) : 0;
      $(this).css('transform',
        'translate(' + xTransform + unit + ',' + yTransform + unit + ')' +
        'scale(' + scaleTransform + ') ' +
        'rotate(' + rotateTransform + 'deg)');
    });
    this.addClasses();
  }

  // setActive(e){
  //   const $target = $('.container');
  //   inView('svg').on('enter', function(el){
  //     var color = $(el).attr('data-background-color');
  //     $target.css('background-color', color );
  //   });
  // }

  addClasses() {
    console.log(this);
  //   $('path, rect, circle').addClass(function(i){
  //     return 'path-'+i;
  //   }.bind(this));
  }

  generateRandomValue(type, base) {
    const chosenValue = Math.random() < 0.5;
    switch (type) {
      case 'x':
        break;
      case 'y':
        break;
      case 'scale':
        return Math.random() * base;
      case 'rotate':
        break;
    }
    if (chosenValue) {
      return (
        Math.floor((Math.random() * base))
      );
    } else if (!chosenValue) {
      return (
        Math.floor((Math.random() * -base))
      );
    }
  }

  render() {
    return (
      <div>
        <ReactSVG
          path={this.props.svgSrc}
          callback={svg => this.addTransformation(svg, this.props.transform, this.props.unit, this.generateRandomValue)}
        />
      </div>
    );
  }
}

export default SVGElement;




