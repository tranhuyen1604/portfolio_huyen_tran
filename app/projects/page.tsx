import React from "react";

export default function Projects() {
  return (
    <section className="p-6 space-y-12">
      {/* Project 1 */}
      <div>
        <h1 className="mb-8 text-2xl font-medium text-gray-800 dark:text-gray-200">
          Real-Time Video & Chat Platform
        </h1>

        {/* Role */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Role
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Frontend Developer
          </p>
        </div>

        {/* Project Description */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Project Description
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            This project is an innovative web application designed to enable
            seamless communication, allowing users to engage in high-quality
            video calls and real-time chat. It enhances collaboration and
            connection between users.
          </p>
        </div>

        {/* Duties & Responsibilities */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Duties & Responsibilities
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-2">
            <li>
              Collaborating closely with customers to gather and clarify
              requirements.
            </li>
            <li>
              Configuring providers for micro-frontend architecture: Ensures
              seamless integration across different modules, enabling better
              modularity and flexibility in the project.
            </li>
            <li>
              Customizing state management solutions: Focused on scalability and
              long-term maintainability, ensuring consistent data flow and
              optimized performance across the application.
            </li>
            <li>
              Developing and handling custom hooks: Streamlines code, improves
              reusability, and enhances performance, leading to a more efficient
              and maintainable development process.
            </li>
            <li>
              Researching and identifying appropriate libraries to integrate
              into the project.
            </li>
            <li>
              Optimizing applications for speed, scalability, and cross-browser
              compatibility.
            </li>
            <li>
              Implemented WCAG principles to improve usability for users with
              disabilities.
            </li>
            <li>
              Used Storybook to preview and test components independently from
              business logic.
            </li>
            <li>Developing the UI based on designs provided in Figma.</li>
            <li>
              Performing code peer reviews to ensure code quality and
              maintainability.
            </li>
          </ul>
        </div>

        {/* Technologies & Tools */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Technologies & Tools
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            ReactJS, TypeScript, TanStack Query, Jotai, MUI, WebRTC, Storybook,
            Jest, Testing Library, etc.
          </p>
        </div>
      </div>

      {/* Project 2 */}
      <div>
        <h1 className="mb-8 text-2xl font-medium text-gray-800 dark:text-gray-200">
          Engineering Data & Risk Management Tool
        </h1>

        {/* Role */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Role
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Frontend Developer
          </p>
        </div>

        {/* Project Description */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Project Description
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            This project is a data management project that helps engineers plan
            component manufacturing, define requirements, and assess design
            risks for more efficient development.
          </p>
        </div>

        {/* Duties & Responsibilities */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Duties & Responsibilities
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-2">
            <li>
              Collaborating closely with customers to gather and clarify
              requirements.
            </li>
            <li>
              Planned, discussed, and implemented project architecture to build
              project from scratch.
            </li>
            <li>
              Worked with backend teams to design and refine API models for
              frontend use.
            </li>
            <li>
              Well-versed in writing unit tests and integration tests to
              maintain high code quality, performance, and reliability.
            </li>
            <li>
              Applied best practices such as action creators, reducers
              composition, and middleware for clean and maintainable codebase.
            </li>
            <li>
              Troubleshoot and resolve UI/UX issues, ensuring smooth
              functionality.
            </li>
            <li>
              Supported the design and implementation of CI/CD pipelines and
              automated deployments.
            </li>
            <li>
              Participated in code reviews, testing, and debugging to maintain
              high-quality standards.
            </li>
          </ul>
        </div>

        {/* Technologies & Tools */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Technologies & Tools
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            ReactJS, Redux, TypeScript, TanStack Query, MUI, Vitest, Testing
            Library, etc.
          </p>
        </div>
      </div>
    </section>
  );
}
