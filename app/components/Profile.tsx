import React from "react";
import "./profile.css"; // Uncomment and adjust if the CSS file exists

const Profile = () => {
  return (
    <section className="profile-container p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md max-w-2xl mx-auto">
      <div className="text-center">
        <img
          src="/lucy.JPG" // Replace with the actual profile image path
          alt="Huyen Tran Thi"
          className="rounded-full mx-auto mb-4 w-32 h-32 object-cover"
        />
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          Huyen Tran Thi
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Frontend Developer
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-500">
          Contact: 0981342325
        </p>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          About Me
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          I am a passionate Frontend Developer with experience in building
          responsive and user-friendly web applications. Skilled in modern
          JavaScript frameworks, CSS, and design tools. Dedicated to delivering
          high-quality code and seamless user experiences.
        </p>
      </div>
      <div className="mt-6">
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
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Contact
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          Feel free to reach out via email or phone for collaboration or
          inquiries.
        </p>
      </div>
    </section>
  );
};

export default Profile;
