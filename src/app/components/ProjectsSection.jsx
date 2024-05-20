"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description:
      "Welcome to my portfolio website, showcasing my technical expertise and qualifications. Built with Next.js, React, and TypeScript, it features a sleek design using Material UI and dynamic animations with Framer Motion. Explore my projects, skills, and achievements in an interactive environment. This site reflects my commitment to innovation and excellence in web development.",
    image: "/images/projects/1.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "#contact",
    images: [
      "/images/projects/por1.png",
      "/images/projects/por2.png",
      "/images/projects/por3.png",
    ],
  },
  {
    id: 4,
    title: "Food Ordering - ECOMMERCE ",
    description:
      "I developed an e-commerce website for food ordering, featuring seamless Stripe integration for secure payments. Users can easily log in, update their profiles, and manage their orders. The admin has comprehensive control to oversee all orders and users, with powerful reporting tools for monthly revenue analysis. The project utilizes a robust tech stack, including Node.js, JavaScript, MongoDB, Next.js, and NextAuth for authentication. This solution ensures a smooth user experience and efficient administrative management. It's designed to meet the needs of both customers and the business, enhancing overall operational efficiency.",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile", "Web"],
    gitUrl: "https://alrehmanai-food-ordering.vercel.app/",
    previewUrl: "/",
    images: [
      "/images/projects/f1.png",
      "/images/projects/f2.png",
      "/images/projects/f3.png",
      "/images/projects/f4.png",
      "/images/projects/f5.png",
    ],
  },
  {
    id: 2,
    title: "Figma Design To WebApp",
    description:
      "I meticulously crafted a responsive landing page, seamlessly adapting to various screen sizes from mobile to large screens. Transforming a Figma design into a dynamic React application with TypeScript, I ensured optimal user experience across devices. By implementing best practices in front-end development, including media queries and flexible layouts, the landing page maintains its elegance and functionality on every screen. This project underscores my expertise in creating engaging web interfaces that prioritize usability and accessibility. It's a testament to my commitment to delivering polished, responsive designs tailored to modern browsing habits.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://alrehmanai-figma1.netlify.app/",
    previewUrl: "/",
    images: [
      "/images/projects/1.png",
      "/images/projects/2.png",
      "/images/projects/3.png",
    ],
  },
  {
    id: 3,
    title: "My ChildHood game",
    description:
      "I have designed and developed my childhood Simon game in JavaScript. In this game, players must remember the pattern of colors until a mismatch occurs, continuing until then. It is highly engaging—give it a try!",
    image: "/images/projects/simon-game.png",
    tag: ["All", "Web"],
    gitUrl: "https://malik991.github.io/simon-game/",
    previewUrl: "/",
    images: ["/images/projects/simon-game.png"],
  },

  {
    id: 5,
    title: "Drum-kit Using JS-CSS",
    description:
      "Experience the exhilaration of playing a lifelike drum kit brought to life with JavaScript and CSS. Immerse yourself in the rhythm as you feel the authentic sensation of beating drums with every tap. Engage your senses and unleash your inner musician with this interactive drumming experience. Dive in and let the beats transport you to a world of rhythmic bliss. Try it now and feel the groove",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://malik991.github.io/Drum-kit/",
    previewUrl: "/",
    images: ["/images/projects/drum-kit.png"],
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    images: [
      "/images/projects/1.png",
      "/images/projects/2.png",
      "/images/projects/3.png",
    ],
  },
];

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
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
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
