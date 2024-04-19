import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="">
      <div className="flex flex-wrap gap-4 p-4">
        {
          [...images, ...images, ...images].map((image, index) => (
            <div className="w-48" key={image.id + "-" + index}>
              <img src={image.url} />
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
