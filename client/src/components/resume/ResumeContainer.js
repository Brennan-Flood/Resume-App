import React, {useRef, cloneElement} from "react";
import Resume from "./Resume";
import Nav from "../nav/Nav";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import { PanZoom } from 'react-easy-panzoom'


const ResumeContainer = (props) => {
  const panZoomRef = React.createRef();

  const recenterPanZoom = function() {
    
    panZoomRef.current.autoCenter(1);
    panZoomRef.current.reset(1);
    panZoomRef.current.disabled = true;
    
  }

  const print = () => {
    recenterPanZoom();
    const input = document.querySelector("#capture");
    const firstName = document.querySelector(".first-name").innerHTML;
    const lastName = document.querySelector(".last-name").innerHTML;
    const fileName = lastName + "_" + firstName + "_resume.pdf"
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF("p", "mm", "a4");
        pdf.addImage(imgData, 'PNG', 0, 0, 211, 298);
        pdf.save(fileName);
      });
    ;
  }

  return (
    <div>
    <PanZoom
      ref={panZoomRef}
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
      autoCenter
    >
      <Resume state={props.state}/>

    </PanZoom>
    <Nav print={print}/>
    <div className="capture-clone-div"></div>

    </div>

  )
}



// class ResumeContainer extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       printing: false
//     };
//     this.print = this.print.bind(this);
//   }

//   print() {
//     this.panZoomRef.reset()
//     this.setState({printing: true});
//   }
  
//   render() {
//   return (
//     <div>
//     <PanZoom
//       ref={this.panZoomRef}
//       keyMapping={{
//         '87': { x: 0, y: -1, z: 0 },
//         '83': { x: 0, y: 1, z: 0 },
//         '65': { x: -1, y: 0, z: 0 },
//         '68': { x: 1, y: 0, z: 0 },
//       }}
//       boundaryRatioVertical={0.4}
//       boundaryRatioHorizontal={0.8}
//       enableBoundingBox
//       minZoom={0.4}
//       maxZoom={3}
//       onStateChange={reset}
//     >
//       <Resume state={this.props.state}/>

//     </PanZoom>
//     <Nav print={this.print}/>

//     </div>

//   )
// }
// }

export default ResumeContainer;