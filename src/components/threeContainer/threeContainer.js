import React from 'react';
import threeEntryPoint from 'three';

export default class ThreeContainer extends React.Component {

  componentDidMount() {
    threeEntryPoint(this.threeRootElement);
  }

  render () {
    return (
      <div ref={element => this.threeRootElement = element}></div>
    );
  }

}