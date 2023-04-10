import { useState } from "react";
import Navbar from "@/components/Navbar";
import Socials from "@/components/SocialsIcons";
import Head from "next/head";

export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <h1 className="flex justify-center text-4xl text-cyan-500 py-11">
        About Me
      </h1>
      <div className="px-3 mt-11 font-light sm:px-20">
        <p className="mb-5 ">
          Greetings, brave wanderer of the internet! It's your lucky day, for
          you have stumbled upon the digital abode of the one and only Salman!
          Feast your eyes on the marvelous world of a Next JS and Django
          developer who moonlights as an SEO sorcerer. That's right, I'm a
          coding conjurer by day and a search engine enchantress by night!
        </p>
        <p className="mb-5">
          Now, let me share the epic saga of how I became the extraordinary
          creature that stands before you (or, rather, sits behind a computer
          screen).
        </p>
        <p className="mb-5">
          Once upon a time, in a realm of cascading style sheets and JavaScript
          frameworks, I discovered the magical world of Next JS and Django
          development. I wielded these powerful tools to create stunning digital
          experiences, weaving tales of high-performance web applications with
          the delicate threads of responsive design.
        </p>
        <p className="mb-5">
          But lo and behold, even the most breathtaking of websites would be
          naught but a whisper in the wind without the mystical arts of SEO. So,
          I set forth on a perilous journey to master this arcane craft, braving
          the treacherous landscapes of keyword research and content
          optimization.
        </p>
        <p className="mb-5">
          Today, I stand as a proud SEO wizard, guiding humble web pages through
          the perilous labyrinth of search engine rankings and into the glorious
          light of the first page.
        </p>
        <p className="mb-5">
          But fear not, dear visitor, for my life is not all code and sorcery!
          When I'm not battling Google's ever-changing algorithms or conjuring
          the perfect React component, I spend my precious free time with my
          lovely wife, who is my rock, my muse, and my accomplice in all things
          mischievous.
        </p>
        <p className="mb-5">
          Together, we embark on adventures of epic proportions, exploring the
          hidden realms of Netflix, challenging each other to heated board game
          duels, and embarking on culinary quests to discover the world's most
          scrumptious takeout.
        </p>
        <p className="mb-5">
          And so, my friend, I invite you to explore this fantastical realm
          further. Unearth the secrets of my latest projects, marvel at the
          wisdom of my blog, or simply bask in the glory of my pun-tastic humor.
          You never know what spellbinding wonders you might find! With a swish
          of my keyboard and a flick of my mouse, I bid you welcome to the
          magical world of Salman, Next JS and Django extraordinaire, and SEO
          wizard supreme!
        </p>
      </div>
      <div className="mb-11">
        <Navbar />
        <Socials />
      </div>
    </div>
  );
}
