import React, { useEffect, useRef } from 'react';
import * as pdfjsLib from 'pdfjs-dist';

// Set worker source (you need this for PDF.js to work properly)
pdfjsLib.GlobalWorkerOptions.workerSrc =
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

const Newpdf = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const url = '/test.pdf'; // Public folder path

    const loadPdf = async () => {
      const loadingTask = pdfjsLib.getDocument(url);
      const pdf = await loadingTask.promise;
      const page = await pdf.getPage(1);

      const scale = 1.5;
      const viewport = page.getViewport({ scale, rotation: 0 });

      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      canvas.width = viewport.width;
      canvas.height = viewport.height;

      context.setTransform(1, 0, 0, 1, 0, 0); 

        context.translate(0, canvas.height*0.6);  
        context.scale(1,-1); 

      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };

      await page.render(renderContext).promise;
    };

    loadPdf();
  }, []);

  return (
    <div style={{height:"50vh",width:"50vw"}}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Newpdf;
