import React, { useState } from "react";
import { Document, Page } from "react-pdf";

function ResumeContainer(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Document
        file={{
          URL: "https://docs.google.com/document/d/1Z2njzUfNuKxbuRA3sgLVUwPeiN-QvblKd8YtkimoMzU/edit?format=pdf",
        }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
  );
}

export default ResumeContainer;
