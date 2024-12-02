import { useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const options = {
    cMapUrl: '/cmaps/',
    standardFontDataUrl: '/standard_fonts/',
};



const Resume = () => {

    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages)
    }

    return (
        <>
            <div className="mx-auto max-w-6xl mt-6">
            <h1 className="font-Jost text-5xl">My Resume</h1>
                <div className="flex justify-center py-10 bg-slate-100 mt-2">
                    <Document file={"./Hardikkumar_patel.pdf"} onLoadSuccess={onDocumentLoadSuccess} options={options}>
                        <Page width={800} pageNumber={pageNumber} renderAnnotationLayer={false} renderTextLayer={false} />
                    </Document>
                    <p>
                        Page {pageNumber} of {numPages}
                    </p>

                </div>
            </div>
        </>
    )
};
export default Resume;