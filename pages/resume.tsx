import { languages, tools } from "../data";
import Bar from "../Components/Bar";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "../animations";
import Head from "next/head";

const resume = () => {
  return (
    <motion.div
      className="p-4"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Resume | Aditya Thakur</title>
      </Head>
      {/* education */}
      <div className="grid md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold ">CSE</h5>
            <p className="font-semibold">Chitkara University (2018 - 2022)</p>
            <p className="my-3">
              I am currently persuing BE in Computer Science from Chitkara
              University
            </p>
          </div>
        </motion.div>
        {/* <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold"></h5>
          <div>
            <h5 className="my-2 text-xl font-bold "></h5>
            <p className="font-semibold"></p>
            <p className="my-3"></p>
          </div>
        </motion.div> */}
      </div>
      {/* language and tools */}
      <div className="grid gap6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & framework</h5>
          <div className="my2">
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools and softwares</h5>
          <div className="my2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default resume;
