import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

function ResumeContainer(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Document
        file={
          "https://docs.google.com/document/d/1Z2njzUfNuKxbuRA3sgLVUwPeiN-QvblKd8YtkimoMzU/export?format=pdf"
        }
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page width={(window.innerWidth / 5) * 4} pageNumber={pageNumber} />
      </Document>
    </div>
  );
}

export default ResumeContainer;
