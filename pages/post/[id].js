import { getPostBySlug, getAllPosts } from "@/lib/api";
import Navbar from "@/components/Navbar";
import Socials from "@/components/SocialsIcons";
import Head from "next/head";
import { getAllPostIds, getPostData } from "@/lib/posts";

export default function Post({ postData }) {
  return (
    <div className="">
      <Head>
        <title>{postData.Title}</title>
        <style jsx global>{`
          a {
            color: #06b6d4;
          }
        `}</style>
      </Head>
      <h1 className="flex justify-center text-5xl py-8 mt-11 text-center text-cyan-500">
        {postData.Title}
      </h1>
      <p className="flex justify-center text-lg mb-9 text-stone-500">
        Published: {postData.Date}
      </p>
      <Socials />
      <div className="mt-9 px-10 py-2">
        <hr className=""></hr>
      </div>
      {postData.Featured_image && (
        <div className="flex justify-center mt-5">
          <img
            className=" bg-cover w-auto h-1/2"
            src={postData.Featured_image}
          />
        </div>
      )}
      <div className="mt-9 px-10">
        <hr className=""></hr>
      </div>
      <div className="px-3 mt-11 sm:px-11">
        <div
          className="markdown-content whitespace-pre-line font-light list-wp"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        ></div>
      </div>
      <div className=" mb-14 mt-11">
        <Navbar />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}
