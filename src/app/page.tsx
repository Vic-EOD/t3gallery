import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <main className="">
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {
          images.map((image) => (
            <div className="w-48" key={image.id}>
              <Image src={image.url} style={{ objectFit: "contain" }} width={192} height={192} alt={image.name} />
              <div>{image.name}</div>
            </div>
          ))
        }
      </div>
    </main>
  );
}

export default async function HomePage() {


  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2xl">Please sign in above.</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
