"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import projectsData from "./constants/ProjectArrays";

// const projectsData = [
//   {
//     id: 1,
//     title: "Real Estate - Tax Calculator ",
//     description:
//       "Developed a web app to calculate taxes on land mutations and determine inheritance shares.Aimed at 120 million people in Punjab, Pakistan, to prevent overcharging by providing accurate tax information and inheritance shares.",
//     image: "/images/projects/r2.png",
//     tag: ["All", "Mobile", "Web"],
//     gitUrl: "https://alrehmanai-land-transfer-fee.vercel.app/",
//     previewUrl: "/",
//     images: [
//       "/images/projects/r3.png",
//       "/images/projects/r2.png",
//       "/images/projects/r1.png",
//       "/images/projects/r4.png",
//       "/images/projects/r5.png",
//     ],
//   },
//   {
//     id: 2,
//     title: "Real-Time Chat Application",
//     description:
//       "Users can log in and chat in real-time, with all messages stored in a database. The app dynamically tracks online status, sends notifications with unread message counts, and provides read receipts, ensuring a seamless messaging experience similar to WhatsApp.",
//     image: "/images/projects/chat-app/chat2.png",
//     tag: ["All", "Web", "Mobile"],
//     gitUrl: "https://mern-chat-app-b14c.onrender.com",
//     previewUrl: "#contact",
//     images: [
//       "/images/projects/chat-app/chat2.png",
//       "/images/projects/chat-app/login-chat.png",
//       "/images/projects/chat-app/unread.png",
//     ],
//   },
//   {
//     id: 3,
//     title: "Food Ordering - ECOMMERCE ",
//     description:
//       "I developed an e-commerce website for food ordering, featuring seamless Stripe integration for secure payments. Users can easily log in, update their profiles, and manage their orders. The admin has comprehensive control to oversee all orders and users, with powerful reporting tools for monthly revenue analysis. The project utilizes a robust tech stack, including Node.js, JavaScript, MongoDB, Next.js, and NextAuth for authentication. This solution ensures a smooth user experience and efficient administrative management. It's designed to meet the needs of both customers and the business, enhancing overall operational efficiency.",
//     image: "/images/projects/4.png",
//     tag: ["All", "Mobile", "Web"],
//     gitUrl: "https://alrehmanai-food-ordering.vercel.app/",
//     previewUrl: "/",
//     images: [
//       "/images/projects/f1.png",
//       "/images/projects/piza-dashboard.png",
//       "/images/projects/f2.png",
//       "/images/projects/f3.png",
//       "/images/projects/f4.png",
//       "/images/projects/f5.png",
//     ],
//   },
//   {
//     id: 8,
//     title: "Dynamic Business Landing Page",
//     description:
//       "A sleek and responsive business landing page built with Next.js, featuring eye-catching animations for a modern look. The project includes four essential pages: login, signup, and password recovery, ensuring a smooth user experience. Designed for business owners to introduce their services with a professional online presence. The landing page combines functionality with aesthetics to engage visitors effectively. Ideal for showcasing a brand with style and ease of use.",
//     image: "/images/projects/business/1.png",
//     tag: ["All", "Web"],
//     gitUrl: "https://alrehmanai-landing-page.vercel.app/",
//     previewUrl: "/",
//     images: [
//       "/images/projects/business/3.png",
//       "/images/projects/business/login.png",
//       "/images/projects/business/signup.png",
//     ],
//   },
//   {
//     id: 9,
//     title: "Car Marketplace",
//     description:
//       "A fully responsive and mobile-friendly platform where users can search for new or used cars by brand, category, or price range, and buy or sell cars. Features include viewing the most searched cars and managing profiles and listings. Built with React, Node.js, Tailwind CSS, PostgreSQL, and Firebase for a seamless experience.",
//     image: "/images/projects/cars/car1.png",
//     tag: ["All", "Web"],
//     gitUrl: "https://car-gala.netlify.app/",
//     previewUrl: "/",
//     images: [
//       "/images/projects/cars/car2.png",
//       "/images/projects/cars/car3.png",
//       "/images/projects/cars/car1.png",
//     ],
//   },
//   {
//     id: 5,
//     title: "Streak Tracking - Application ",
//     description:
//       "I have developed a streak-tracking application using Next.js and NextAuth for authentication. The app offers a seamless registration process with email verification and instant username availability checks. For password recovery, it sends a 6-digit code via email for secure resets. Middleware ensures proper access control, allowing only authenticated users to access protected pages, thereby providing a secure and personalized experience.",
//     image: "/images/projects/streakapp/main.png",
//     tag: ["All", "Web"],
//     gitUrl: "https://alrehmanai-streakapp.vercel.app/",
//     previewUrl: "/",
//     images: [
//       "/images/projects/streakapp/main.png",
//       "/images/projects/streakapp/login.png",
//       "/images/projects/streakapp/forgot-password.png",
//       "/images/projects/streakapp/reset-password-screen.png",
//       "/images/projects/streakapp/usermanage.png",
//     ],
//   },
//   {
//     id: 4,
//     title: "Convert Figma To WebSite",
//     description:
//       "I meticulously crafted a responsive landing page, seamlessly adapting to various screen sizes from mobile to large screens. Transforming a Figma design into a dynamic React application with TypeScript, I ensured optimal user experience across devices. By implementing best practices in front-end development, including media queries and flexible layouts, the landing page maintains its elegance and functionality on every screen. This project underscores my expertise in creating engaging web interfaces that prioritize usability and accessibility. It's a testament to my commitment to delivering polished, responsive designs tailored to modern browsing habits.",
//     image: "/images/projects/2.png",
//     tag: ["All", "Web"],
//     gitUrl: "https://alrehmanai-figma1.netlify.app/",
//     previewUrl: "/",
//     images: [
//       "/images/projects/1.png",
//       "/images/projects/2.png",
//       "/images/projects/3.png",
//     ],
//   },
//   {
//     id: 6,
//     title: "My ChildHood game",
//     description:
//       "I have designed and developed my childhood Simon game in JavaScript. In this game, players must remember the pattern of colors until a mismatch occurs, continuing until then. It is highly engaging—give it a try!",
//     image: "/images/projects/simon-game.png",
//     tag: ["All", "Web"],
//     gitUrl: "https://malik991.github.io/simon-game/",
//     previewUrl: "/",
//     images: ["/images/projects/simon-game.png"],
//   },
//   {
//     id: 7,
//     title: "Drum-kit Using JS-CSS",
//     description:
//       "Experience the exhilaration of playing a lifelike drum kit brought to life with JavaScript and CSS. Immerse yourself in the rhythm as you feel the authentic sensation of beating drums with every tap. Engage your senses and unleash your inner musician with this interactive drumming experience. Dive in and let the beats transport you to a world of rhythmic bliss. Try it now and feel the groove",
//     image: "/images/projects/5.png",
//     tag: ["All", "Web"],
//     gitUrl: "https://malik991.github.io/Drum-kit/",
//     previewUrl: "/",
//     images: ["/images/projects/drum-kit.png"],
//   },
// ];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-[#DC6B19] mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web2.0"
          isSelected={tag === "Web2.0"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web3.0"
          isSelected={tag === "Web3.0"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              images={project.images} // Pass images array
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
