"use client";

import { useState } from "react";
import Image from "next/image";
import { socialLinks } from "./config";

const TabContent = {
  About: "about",
  Skills: "skills",
  Portfolio: "portfolio",
};

export default function Page() {
  const [activeTab, setActiveTab] = useState(TabContent.About);

  return (
    <section className="flex h-screen">
      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="text-center">
          <a href={socialLinks.linkedin} target="_blank">
            <Image
              src="/lucy.JPG"
              alt="Profile photo"
              className="rounded-full block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto hover:grayscale-0"
              unoptimized
              width={160}
              height={160}
              priority
            />
          </a>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            Huyen Tran Thi
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Web Developer
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Email: huyentran.it.work@gmail.com
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Contact: 0981342325
          </p>
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {activeTab === TabContent.About && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                About Me
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                I am a passionate Frontend Developer with experience in building
                responsive and user-friendly web applications. Skilled in modern
                JavaScript frameworks, CSS, and design tools. Dedicated to
                delivering high-quality code and seamless user experiences.
              </p>
              {/* Download Button */}
              <a
                href="/resume/resume_huyen_tran.pdf"
                download="Web_Developer_Huyen_Tran_Thi_0981342325.pdf"
                className="mt-4 inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Download Resume
              </a>
            </div>
          )}
          {activeTab === TabContent.Skills && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Skills
              </h2>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
                <li>HTML, CSS, JavaScript</li>
                <li>React, Next.js</li>
                <li>Tailwind CSS</li>
                <li>Version Control (Git, GitHub)</li>
                <li>Responsive Design</li>
              </ul>
            </div>
          )}
          {activeTab === TabContent.Portfolio && (
            <div className="prose prose-neutral dark:prose-invert">
              <p>
                A clean, fast, and lightweight portfolio template built with
                Next.js, Vercel, and Tailwind CSS.
              </p>
              <p>
                Nextfolio has everything you need for a portfolio: MDX blog,
                SEO, RSS, Atom & JSON feeds, analytics, Tweet & YouTube embeds,
                KaTeX and{" "}
                <a target="_blank" href="#">
                  more
                </a>
                .
              </p>
              <p>
                Nextfolio is
                <a href={socialLinks.github} target="_blank">
                  open-source
                </a>{" "}
                and fully customizable, making it easy to add more features.
              </p>
              <p>
                <a href="#" target="_blank">
                  Deploy
                </a>{" "}
                your Nextfolio site with Vercel in minutes and follow the setup
                instructions in the{" "}
                <a href="/blog/getting-started">Getting Started</a> post.
              </p>
              <p>
                Built and maintained by{" "}
                <a href="https://imsirius.xyz/" target="_blank">
                  Sirius
                </a>
                .
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Table of Contents */}
      <div className="w-1/4 p-6 border-l border-gray-200 dark:border-gray-700 sticky top-0 h-screen">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Table of Contents
        </h2>
        <div className="flex flex-col space-y-2">
          <button
            className={`text-left px-4 py-2 text-sm font-medium rounded-md ${
              activeTab === "about"
                ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
                : "text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab("about")}
          >
            About Me
          </button>
          <button
            className={`text-left px-4 py-2 text-sm font-medium rounded-md ${
              activeTab === "skills"
                ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
                : "text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab("skills")}
          >
            Skills
          </button>
          <button
            className={`text-left px-4 py-2 text-sm font-medium rounded-md ${
              activeTab === "portfolio"
                ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
                : "text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab("portfolio")}
          >
            Portfolio Info
          </button>
        </div>
      </div>
    </section>
  );
}
