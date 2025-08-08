import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

// Configura Cloudinary con le credenziali sicure dalle variabili d'ambiente
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function POST(request: Request) {
  // 1. Sicurezza: Controlla la chiave segreta inviata nell'header
  const uploadSecret = request.headers.get("X-Upload-Secret");
  if (uploadSecret !== process.env.NEXT_PUBLIC_UPLOAD_SECRET) {
    return NextResponse.json({ message: "Non autorizzato." }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    const tag = formData.get("tag") as string | null;

    // 2. Validazione di base del file
    if (!file) {
      return NextResponse.json(
        { message: "File non trovato." },
        { status: 400 }
      );
    }

    if (file.type !== "image/jpeg") {
      return NextResponse.json(
        { message: "È richiesto un file di tipo JPEG." },
        { status: 400 }
      );
    }

    // Converte il file in un buffer per l'upload
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // 3. Carica l'immagine su Cloudinary
    const uploadResponse = await cloudinary.uploader.upload(
      `data:${file.type};base64,${buffer.toString("base64")}`,
      {
        folder: "sito_sted", // Opzionale: organizza i file in una cartella
        tags: tag ? [tag] : [], // Aggiunge il tag 'galleria-sted' se richiesto
        quality: "auto", // Ottimizza la qualità automaticamente
        fetch_format: "auto", // Sceglie il formato migliore (es. webp, avif)
      }
    );

    return NextResponse.json(
      { message: "Immagine caricata!", url: uploadResponse.secure_url },
      { status: 200 }
    );
  } catch (error) {
    console.error("Errore durante il caricamento su Cloudinary:", error);
    return NextResponse.json(
      { message: "Errore interno del server." },
      { status: 500 }
    );
  }
}
