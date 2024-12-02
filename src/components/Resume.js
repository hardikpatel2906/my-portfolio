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
    return (
        <>
            <div className="flex justify-center">
                <Document file={"./Hardikkumar_patel.pdf"} options={options}>
                    <Page pageNumber={1} />
                </Document>
                <p>
                    {/* Page {pageNumber} of {numPages} */}
                </p>
            </div>
        </>
    )
};
export default Resume;