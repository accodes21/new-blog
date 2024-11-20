import TransitionLink from "@/components/TransitionLink";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="text-center p-12">
      <h1 className="text-5xl font-bold">Welcome to Blogger</h1>
      <TransitionLink href="/posts" className="">
        <button className="font-semibold text-xl py-2 px-4 mt-20 rounded-lg bg-black hover:scale-95 transition-all text-white">
          All Posts
        </button>
      </TransitionLink>
    </main>
  );
}
