import Link from "next/link";
import { getAllPosts } from "@/lib/api";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Socials from "@/components/SocialsIcons";

export default function Blog({ posts }) {
  return (
    <div>
      <div className="flex text-left justify-center py-9">
        <h1 className="text-5xl flex text-cyan-500">Blog Posts</h1>
      </div>
      <div className="flex justify-center">
        <ul className="">
          {posts.map((post) => {
            const [formattedDate] = post.date.split("T"); // Extract the date portion
            return (
              <li key={post.id} className="text-2xl">
                <Link href={`/post/${post.slug}`}>{post.title}</Link>
                {post.categories.nodes.map((category, index) => (
                  <div key={category.name} className="text-xs text-slate-300">
                    {category.name}
                    {index < post.categories.nodes.length - 1 && ", "}
                  </div>
                ))}
                <div className="text-xs text-slate-500 mb-5">
                  {formattedDate}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mb-11">
        <Navbar />
        <Socials />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
    revalidate: 5,
  };
}
