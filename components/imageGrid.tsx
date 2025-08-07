export default function ImageGrid({ images }: { images: string[] }) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 p-4">
      {images.map((src, index) => (
        <div key={index} className="mb-4 break-inside-avoid">
          <img src={src} alt={`image-${index}`} className="w-full h-auto" />
        </div>
      ))}
    </div>
  );
}
