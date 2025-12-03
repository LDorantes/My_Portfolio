"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Necesario para PDF.js en Next.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const certificates = [
  {
    title: "GitHub Actions Esencial",
    issuer: "LinkedIn Learning",
    year: "2025",
    file: "/certificates/CertificadoDeFinalizacion_GitHub-Actions-esencial.pdf",
    thumbnail: "/certificates/thumbnails/github-actions.png",
  },
  {
    title: "SQL Server",
    issuer: "Udemy",
    year: "2025",
    file: "/certificates/sqlserver.pdf",
    thumbnail: "/certificates/thumbnails/sqlserver.png",
  },
  {
    title: "Java Completo",
    issuer: "Udemy",
    year: "2025",
    file: "/certificates/thumbnails/java.png",
    thumbnail: "/certificates/thumbnails/java.png",
  },
];

export default function CertificatesPage() {
  const [openPDF, setOpenPDF] = useState<string | null>(null);

  return (
    <section className="relative py-32 px-6 max-w-6xl mx-auto">

      {/* Fondo suave futurista */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 via-brand-blue/5 to-brand-orange/10" />
      </div>

      <h1 className="text-5xl md:text-6xl font-extrabold text-brand-purple text-center mb-16">
        Certificaciones & Diplomas
      </h1>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {certificates.map((c) => (
          <div
            key={c.title}
            className="bg-white/60 backdrop-blur-md border border-brand-purple/10 rounded-xl shadow-lg p-6 hover:shadow-2xl transition cursor-pointer"
          >
            <img
              src={c.thumbnail}
              alt={c.title}
              className="w-full h-48 object-cover rounded-lg mb-4 border border-brand-purple/10 hover:opacity-90 transition"
              onClick={() => setOpenPDF(c.file)}
            />

            <h3 className="text-xl font-bold text-brand-purple">{c.title}</h3>
            <p className="text-gray-700">{c.issuer}</p>
            <p className="text-gray-500 text-sm">{c.year}</p>

            <div className="mt-4 flex gap-4">
              <button
                onClick={() => setOpenPDF(c.file)}
                className="px-4 py-2 rounded-full bg-brand-purple text-white hover:bg-brand-blue transition"
              >
                Ver PDF
              </button>

              <a
                href={c.file}
                download
                className="px-4 py-2 rounded-full border border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white transition"
              >
                Descargar
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal PDF Viewer */}
      {openPDF && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex justify-center items-center">
          <div className="bg-white rounded-xl shadow-2xl p-6 max-w-3xl w-full relative">
            <button
              onClick={() => setOpenPDF(null)}
              className="absolute top-3 right-3 text-brand-purple hover:text-brand-orange text-xl font-bold"
            >
              ✕
            </button>

            <div className="overflow-y-auto max-h-[80vh]">
              <Document file={openPDF}>
                <Page pageNumber={1} />
              </Document>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
