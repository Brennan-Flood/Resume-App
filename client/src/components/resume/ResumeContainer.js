import React from "react";
import Resume from "./Resume";

import { PanZoom } from 'react-easy-panzoom'

class ResumeContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
  return (
    <PanZoom
      keyMapping={{
        '87': { x: 0, y: -1, z: 0 },
        '83': { x: 0, y: 1, z: 0 },
        '65': { x: -1, y: 0, z: 0 },
        '68': { x: 1, y: 0, z: 0 },
      }}
      boundaryRatioVertical={0.4}
      boundaryRatioHorizontal={0.8}
      enableBoundingBox
      minZoom={0.4}
      maxZoom={3}
    >
      <Resume state={this.props.state}/>
    </PanZoom>
  )
}
}

export default ResumeContainer;