import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

type Props = {
  file: string;
  alt: string;
  className?: string;
  sizes: string;
  preload?: boolean;
};

// Renders /public/images/<file> when present, otherwise a labelled placeholder
// so missing photos are obvious instead of silently broken.
export function Photo({ file, alt, className, sizes, preload }: Props) {
  const exists = fs.existsSync(path.join(process.cwd(), "public", "images", file));
  if (!exists) {
    console.warn(`[Photo] saknas: public/images/${file}`);
    return (
      <div className={`photo photo--missing ${className ?? ""}`} role="img" aria-label={alt}>
        <span>Foto saknas · {file}</span>
      </div>
    );
  }
  return (
    <div className={`photo ${className ?? ""}`}>
      <Image src={`/images/${file}`} alt={alt} fill sizes={sizes} preload={preload} />
    </div>
  );
}
