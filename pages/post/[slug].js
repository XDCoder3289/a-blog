import { getPostBySlug, getAllPosts } from "@/lib/api";
import Navbar from "@/components/Navbar";
import Socials from "@/components/SocialsIcons";

export default function Post({ post }) {
  const { title, content, date, featuredImage } = post;

  return (
    <div className="">
      <h1 className="flex justify-center text-5xl py-8 mt-11 text-center text-cyan-500">
        {title}
      </h1>
      <p className="flex justify-center text-lg mb-9 text-stone-500">
        Published: {new Date(date).toLocaleDateString()}
      </p>
      <Socials />
      <div className="mt-9 px-10 py-2">
        <hr className=""></hr>
      </div>
      {featuredImage && (
        <div className="flex justify-center mt-5">
          <img
            className=" bg-cover w-auto h-1/2"
            src={featuredImage.node.sourceUrl}
            alt={featuredImage.node.altText || title}
          />
        </div>
      )}
      <div className="mt-9 px-10">
        <hr className=""></hr>
      </div>
      <div className="px-3 mt-11 sm:px-11">
        <div
          className="wordpress-content"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
      <div className=" mb-24 mt-11">
        <Navbar />
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);

  return {
    props: {
      post,
    },
    revalidate: 5,
  };
}

export async function getStaticPaths() {
  const posts = await getAllPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}
