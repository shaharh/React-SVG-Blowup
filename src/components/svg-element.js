import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactSVG from 'react-svg';
import $ from 'jquery';

class SVGElement extends Component {
  constructor(props) {
    super(props);

    this.state = {key: 'value'};

    this.generateRandomValue = this.generateRandomValue.bind(this);
  }

  addTransformation(svg, base, callback) {
    $.each($(svg).find('path, rect, circle'), function () {
      const xTransform = callback('x', base);
      const yTransform = callback('y', base);
      const scaleTransform = callback('scale', .1);
      const rotateTransform = callback('rot', 360);
      $(this).css('transform',
        'translate(' + xTransform + 'rem,' + yTransform + 'rem)' +
        'scale(' + scaleTransform + ') ' +
        'rotate(' + rotateTransform + 'deg)');
    });
  }

  // setActive(e){
  //   const $target = $('.container');
  //   inView('svg').on('enter', function(el){
  //     var color = $(el).attr('data-background-color');
  //     $target.css('background-color', color );
  //   });
  // }
  elementFromTop(elemTrigger, elemTarget, classToAdd, distanceFromTop, unit) {
    var winY = window.innerHeight || document.documentElement.clientHeight,
      elTriggerLength = elemTrigger.length,
      elTargetLength, distTop, distPercent, distPixels, distUnit, elTarget, i, j;
    for (i = 0; i < elTriggerLength; ++i) {
      elTarget = document.querySelectorAll('.' + elemTarget);
      elTargetLength = elTarget.length;
      distTop = elemTrigger[i].getBoundingClientRect().top;
      distPercent = Math.round((distTop / winY) * 100);
      distPixels = Math.round(distTop);
      distUnit = unit == 'percent' ? distPercent : distPixels;
      if (distUnit <= distanceFromTop) {
        if (!hasClass(elemTrigger[i], elemTarget)) {
          for (j = 0; j < elTargetLength; ++j) {
            if (!hasClass(elTarget[j], classToAdd)) {
              addClass(elTarget[j], classToAdd);
            }
          }
        } else {
          if (!hasClass(elemTrigger[i], classToAdd)) {
            addClass(elemTrigger[i], classToAdd);
          }
        }
      } else {
        delClass(elemTrigger[i], classToAdd);
        if (!hasClass(elemTrigger[i], elemTarget)) {
          for (j = 0; j < elTargetLength; ++j) {
            delClass(elTarget[j], classToAdd);
          }
        }
      }
    }
  }

  // addClasses() {
  //   $('path, rect, circle').addClass(function(i){
  //     return 'path-'+i;
  //   }.bind(this));
  // }

  generateRandomValue(type, base) {
    const chosenValue = Math.random() < 0.5;
    switch (type) {
      case 'x':
        break;
      case 'y':
        break;
      case 'scale':
        return Math.random();
      case 'rot':
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
          callback={svg => this.addTransformation(svg, this.props.base, this.generateRandomValue)}
        />
      </div>
    );
  }
}

export default SVGElement;




