import React from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import "react-pdf/dist/umd/Page/AnnotationLayer.css";

function ResumeContainer() {
  return (
    <Document
      file={
        "https://docs.google.com/document/d/1Z2njzUfNuKxbuRA3sgLVUwPeiN-QvblKd8YtkimoMzU/export?format=pdf"
      }
    >
      <Page
        onLoadSuccess={() => {
          const textLayers = document.querySelectorAll(
            ".react-pdf__Page__textContent"
          );
          textLayers.forEach((layer) => {
            const { style } = layer;
            style.top = "0";
            style.left = "0";
            style.transform = "";
          });
        }}
        pageNumber={1}
      />
    </Document>
  );
}

export default ResumeContainer;
