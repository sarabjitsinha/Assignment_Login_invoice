
// import React, { useEffect, useRef } from 'react';
// import * as pdfjsLib from 'pdfjs-dist';

// pdfjsLib.GlobalWorkerOptions.workerSrc =
//   'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js';

// const Newpdf = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const loadPdf = async () => {
//       const pdf = await pdfjsLib.getDocument('/test.pdf').promise;
//       const page = await pdf.getPage(1);

//       const scale = 1.5;
//       const viewport = page.getViewport({ scale });

//       const canvas = canvasRef.current;
//       const ctx = canvas.getContext('2d');
//       canvas.width = viewport.width ;
//       canvas.height = viewport.height ;

      
//       await page.render({
//         canvasContext: ctx,
//         viewport,
//       }).promise;
//     };

//     loadPdf();
//   }, []);

//   return (
//     <div>
//       <canvas ref={canvasRef} />
//     </div>
//   );
// };

// export default Newpdf;

import React, { useEffect, useRef } from 'react';
import * as pdfjsLib from 'pdfjs-dist';

pdfjsLib.GlobalWorkerOptions.workerSrc =
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js';

const Newpdf = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const loadPdf = async () => {
      const pdf = await pdfjsLib.getDocument('/test.pdf').promise;
      const page = await pdf.getPage(1);

      const scale = 1.5;
      const viewport = page.getViewport({ scale });

      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      canvas.width = viewport.width;
      canvas.height = viewport.height;

      
      await page.render({
        canvasContext: ctx,
        viewport,
      }).promise;
    };

    loadPdf();
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Newpdf;
