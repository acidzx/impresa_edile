"use client";

import { useState } from "react";

export default function Page() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<
    "idle" | "uploading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");
  const [addTag, setAddTag] = useState(true);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.type === "image/jpeg") {
        setFile(selectedFile);
        setStatus("idle");
        setMessage("");
      } else {
        setStatus("error");
        setMessage("Per favore, seleziona un file in formato JPEG.");
        setFile(null);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) {
      setStatus("error");
      setMessage("Nessun file selezionato.");
      return;
    }

    setStatus("uploading");
    setMessage("Caricamento in corso...");

    const formData = new FormData();
    formData.append("file", file);
    if (addTag) {
      formData.append("tag", "galleria-sted");
    }

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        headers: {
          // NON impostare 'Content-Type', il browser lo farà automaticamente per FormData
          "X-Upload-Secret": process.env.NEXT_PUBLIC_UPLOAD_SECRET || "",
        },
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(`Immagine caricata! URL: ${data.url}`);
        setFile(null);
        // Resetta l'input file per permettere un nuovo caricamento
        const fileInput = document.getElementById(
          "file-upload"
        ) as HTMLInputElement;
        if (fileInput) fileInput.value = "";
      } else {
        setStatus("error");
        setMessage(`Errore: ${data.message || "Qualcosa è andato storto."}`);
      }
    } catch (error) {
      setStatus("error");
      setMessage("Errore di connessione con il server.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          Carica Immagine per la Galleria
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="file-upload"
              className="block text-sm font-medium text-gray-700"
            >
              File JPEG
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-lime-600 hover:text-lime-500 focus-within:outline-none"
                  >
                    <span>Seleziona un file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      accept="image/jpeg"
                      onChange={handleFileChange}
                      disabled={status === "uploading"}
                    />
                  </label>
                  <p className="pl-1">o trascinalo qui</p>
                </div>
                <p className="text-xs text-gray-500">Solo file JPEG</p>
              </div>
            </div>
            {file && (
              <p className="text-sm text-gray-600 mt-2">
                File selezionato: {file.name}
              </p>
            )}
          </div>

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="add-tag"
                name="add-tag"
                type="checkbox"
                checked={addTag}
                onChange={(e) => setAddTag(e.target.checked)}
                className="focus:ring-lime-500 h-4 w-4 text-lime-600 border-gray-300 rounded"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="add-tag" className="font-medium text-gray-700">
                Aggiungi alla galleria della homepage
              </label>
              <p className="text-gray-500">
                Aggiunge il tag 'galleria-sted' all'immagine.
              </p>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={!file || status === "uploading"}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-lime-600 hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {status === "uploading" ? "Caricamento..." : "Carica Immagine"}
            </button>
          </div>
        </form>
        {message && (
          <div className="mt-4 text-center break-words">
            <p
              className={`text-sm ${
                status === "error"
                  ? "text-red-600"
                  : status === "success"
                  ? "text-green-600"
                  : "text-gray-600"
              }`}
            >
              {message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
