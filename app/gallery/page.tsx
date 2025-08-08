import ImageGrid from "@/components/imageGrid";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

async function getCloudinaryImages() {
  try {
    // Cerca tutte le risorse che hanno il tag 'galleria-sted'
    const results = await cloudinary.search
      .expression("tags=galleria-sted") // Assicurati di aver taggato le immagini su Cloudinary
      .sort_by("public_id", "desc")
      .max_results(30) // Imposta il numero massimo di immagini da recuperare
      .execute();

    // Estrai gli URL sicuri delle immagini
    return results.resources.map(
      (resource: { secure_url: string }) => resource.secure_url
    );
  } catch (error) {
    console.error("Errore nel recuperare le immagini da Cloudinary:", error);
    // Restituisce un array vuoto in caso di errore per non bloccare la pagina
    return [];
  }
}

export default async function Page() {
  const images = await getCloudinaryImages();
  return <ImageGrid images={images} />;
}
