import { GetServerSideProps, GetStaticProps } from "next";
import React from "react";
import ServiceCard from "../Components/ServiceCard";
import { services } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "../animations";
import Head from "next/head";

const index = () => {
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1 "
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Portfolio | Aditya Thakur</title>
      </Head>
      <h5 className="my-3 mb-5 font-medium">
        {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est alias
        aspernatur tempora saepe recusandae odio laborum voluptate possimus! Hic
        dolorum sint nihil dolores praesentium eligendi rem maxime sed illum
        corporis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
        alias aspernatur tempora saepe recusandae odio laborum voluptate
        possimus! Hic dolorum sint nihil dolores praesentium eligendi rem maxime
        sed illum corporis. */}
        Hi! I'm Aditya <br />
        I'm a Web developer who will turn your <strong>
          Innovative Ideas
        </strong>{" "}
        into
        <b> Code</b> using React and other frameworks By which you can display
        Your Idea to the world!
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 mb-5 text-xl font-bold tracking-wider">
          What I offer
        </h6>
        <motion.div
          className="grid gap-6 lg:grid-cols-2 "
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service, key) => {
            return (
              <motion.div
                variants={fadeInUp}
                className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1"
                key={key}
              >
                <ServiceCard service={service} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default index;

// export const getServerSideProps = async (context: GetServerSideProps) => {

//   const res = await fetch("http://localhost:3000/api/services")
//   const data = await res.json();
//   console.log("server", data);

//   return {
//     props: {
//       services: data.services
//     }
//   }
// }
// export const getStaticProps = async (context: GetStaticProps) => {

//   const res = await fetch("http://localhost:3000/api/services")
//   const data = await res.json();
//   console.log("server", data);

//   return {
//     props: {
//       services: data.services
//     }
//   }
// }
