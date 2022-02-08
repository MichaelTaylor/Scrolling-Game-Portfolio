import React,  { useState } from "react";
import Styles from "./PDFFile.module.css"
import { Document, Page, pdfjs } from 'react-pdf';

const PDFFile = () => {
  
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function removeTextLayerOffset() {
    const textLayers = document.querySelectorAll(
      '.react-pdf__Page__textContent'
    );
    textLayers.forEach((layer) => {
      const { style } = layer;
      style.top = '0';
      style.left = '0';
      style.transform = '';
    });
  }

  return (
      <div className={Styles.pdfStyle}>
      <Document file="../../Michael K. Taylor Resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} onLoadSuccess={removeTextLayerOffset} />
      </Document>
    </div>
  );
};

export default PDFFile;
