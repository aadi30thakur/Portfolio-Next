import { useState } from "react";
import ProjectCard from "../Components/ProjectCard";
import ProjectsNavbar from "../Components/ProjectsNavbar";
import { projects as projectsData } from "../data";
import { Category } from "../type";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "../animations";
import Head from "next/head";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");
  const [showDetail, setShowDetail] = useState<Number | null>(null);

  const handleFilter = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }
    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    console.log(newArray);
    setProjects(newArray);
    setActive(category);
  };

  return (
    <motion.div
      className="px-5 overflow-y-auto "
      style={{ height: "78vh" }}
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Portfolio | Aditya Thakur</title>
      </Head>
      <ProjectsNavbar handleFilter={handleFilter} active={active} />
      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="grid grid-cols-12 gap-4 my-3 "
      >
        {projects.map((project, key) => (
          <motion.div
            variants={fadeInUp}
            key={key}
            className="col-span-12 p-2 bg-gray-200 rounded-md sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
          >
            <ProjectCard
              project={project}
              key={key}
              showDetail={showDetail}
              setShowDetail={setShowDetail}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
