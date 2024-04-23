"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export function TopNav() {
  const router = useRouter();
  return (
    <nav className="flex p-4 tex-xl font-semibold border-b w-full items-center justify-between">
      <div>Gallery</div>

      <div className="flex flex-row">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton endpoint="imageUploader" onClientUploadComplete={() => { router.refresh(); }} />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  )
}
