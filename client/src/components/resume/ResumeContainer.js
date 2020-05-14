import React, {useRef} from "react";
import Resume from "./Resume";
import Nav from "../nav/Nav";

import { PanZoom, reset } from 'react-easy-panzoom'

class ResumeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      printing: false
    };
    this.print = this.print.bind(this);
  }

  print() {
    this.panZoomRef.reset()
    this.setState({printing: true});
  }
  
  render() {
  return (
    <div>
    <PanZoom
      ref={this.panZoomRef}
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
      onStateChange={reset}
    >
      <Resume state={this.props.state}/>

    </PanZoom>
    <Nav print={this.print}/>

    </div>

  )
}
}

export default ResumeContainer;