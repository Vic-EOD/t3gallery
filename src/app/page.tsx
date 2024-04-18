import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/fe850419-0e85-42f1-b87c-6ef3cd71584d-wmm6ys.JPG",
  "https://utfs.io/f/a769c5c2-8647-4b90-9f9e-6376f41f0bb9-nl72au.png",
  "https://utfs.io/f/363cb856-4f84-482a-91f8-e40e081afc5a-ir3ov4.JPG",
  "https://utfs.io/f/0b821576-751c-433f-b933-f054984865ec-vei8uk.JPG",
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default async function HomePage() {

  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (<div key={post.id}>{post.name}</div>))}
        {
          [...mockImages, ...mockImages, ...mockImages].map((image, index) => (
            <div className="w-48" key={image.id + "-" + index}>
              <img src={image.url} />
            </div>
          ))
        }
      </div>
    </main>
  );
}
