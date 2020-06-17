import React from "react";
import Resume from "./Resume";
import Nav from "../nav/Nav";
import html2canvas from "html2canvas";
import * as jsPDF from "jspdf" ;
import { Mutation } from "react-apollo";
import Mutations from "../../graphql/mutations";
import { PanZoom } from 'react-easy-panzoom';

const { ADD_RECENT_DRAFT } = Mutations;


const ResumeContainer = (props) => {
  const panZoomRef = React.createRef();
  const resumeRef = React.createRef();

  const recenter = () => {

    panZoomRef.current.reset(1);
    panZoomRef.current.autoCenter(1);

  };

  const print = (addRecentDraft) => new Promise(resolve => {
    panZoomRef.current.reset(1);
    panZoomRef.current.autoCenter(1);

    addRecentDraft({
      variables: {
        id: props.currentUserId,
        state: JSON.stringify(props.state)
      }
    })

    const firstName = document.querySelector(".first-name").innerHTML;
    const lastName = document.querySelector(".last-name").innerHTML;
    const fileName = lastName + "_" + firstName + "_resume.pdf"

    setTimeout(() => {
      html2canvas(resumeRef.current, {
        scale: 5,
        allowTaint: true,
        useCORS: true,
      })
        .then((canvas) => {
          const image = canvas.toDataURL('image/jpeg', 80 / 100);
          const doc = new jsPDF({
            orientation: 'portrait',
            unit: 'px',
            format: 'a4'
          });

          const pageWidth = doc.internal.pageSize.getWidth();
          const pageHeight = doc.internal.pageSize.getHeight();

          const widthRatio = pageWidth / canvas.width;
          const heightRatio = pageHeight / canvas.height;
          const ratio = widthRatio > heightRatio ? heightRatio : widthRatio;

          const canvasWidth = canvas.width * ratio;
          const canvasHeight = canvas.height * ratio;

          let marginX = 0;
          let marginY = 0;

          doc.addImage(image, 'JPEG', marginX, marginY, canvasWidth, canvasHeight, null, 'SLOW');
          doc.save(fileName);
          resolve();
        });

    }, 250)
  });

  return (
    <Mutation mutation={ADD_RECENT_DRAFT} update={(cache, data) => props.updateRecentDrafts(cache, data)}
    >
      
      {(addRecentDraft, {data, loading, error}) => {
        if (error) {
          console.log(error);
        }
        return (
          <div className="pan-zoom-container">
          <PanZoom
          style={{ width: "100%" }}
          ref={panZoomRef}
          keyMapping={{
            '87': { x: 0, y: -1, z: 0 },
            '83': { x: 0, y: 1, z: 0 },
            '65': { x: -1, y: 0, z: 0 },
            '68': { x: 1, y: 0, z: 0 },
          }}
          boundaryRatioVertical={0.8}
          boundaryRatioHorizontal={0.8}
          enableBoundingBox
          minZoom={0.4}
          maxZoom={3}
          autoCenter
        >
          <Resume resumeRef={resumeRef} state={props.state} />

        </PanZoom>

        <Nav 
        addRecentDraft={addRecentDraft} 
        resetDraft={props.resetDraft} 
        recenter={recenter} 
        print={print} 
        panZoomRef={panZoomRef} 
        user={props.user}
        />

      </div>
        )
      }}
      
    </Mutation>
  )
}


export default ResumeContainer;