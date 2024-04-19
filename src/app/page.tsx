import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {

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
