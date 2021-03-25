import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import SinglePagePDFViewer from "./pdf/single-page";
import AllPagesPDFViewer from "./pdf/all-pages";
// function Thesis() {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }
//   return (
//     <div className="projects">
//       <Document
//         file="/assets/thesis.pdf"
//         onLoadSuccess={onDocumentLoadSuccess}
//         onLoadError={(error) => console.log(error)}
//       >
//         <Page pageNumber={pageNumber} />
//         <p>
//           Page {pageNumber} of {numPages}
//         </p>
//       </Document>
//     </div>
//   );
// }
const samplePDF = "/assets/thesis.pdf";
function Thesis() {
  return (
    <div className="thesis">
      {/* <h4>Single Page</h4>
      <SinglePagePDFViewer pdf={samplePDF} />

      <hr /> */}

      <div className="all-page-container">
        <AllPagesPDFViewer pdf={samplePDF} />
      </div>

      <hr />
    </div>
  );
}
export default Thesis;
