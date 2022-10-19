import React from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

function ResumeContainer() {
  return (
    <div>
      <Document
        file={
          "https://docs.google.com/document/d/1Z2njzUfNuKxbuRA3sgLVUwPeiN-QvblKd8YtkimoMzU/export?format=pdf"
        }
      >
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}

export default ResumeContainer;
