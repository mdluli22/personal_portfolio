"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Syntax On Air",
      description:
        `Syntax On Air is a 3rd year Computer Science project where we created a web application that allows users to book and track their flight tickets. This system was build by two students to showcase our understanding of programming languages, web development, and database management.
        The project includes features such as user authentication, flight search, booking management, fake payment gatewaty and a responsive design.`,
      link: "https://github.com/mdluli22/Computer-Science-Final-Project/tree/main",
    },
    {
      title: "ResQue",
      description:
        `The project involves developing a Residence Maintenance System for Rhodes University to help students and staff manage maintenance issues in university residences. 
        The system allows students, house wardens, hall secretaries, and maintenance staff to report, track, and resolve faults in the residences. This system was build by five students in the course of 4 months of our final year of Information Systems.`,
      link: "https://github.com/mdluli22/Information-Systems-3-Final-Project",
    },
    // {
    //   title: "Cybersecurity Automation Scripts",
    //   description:
    //     "A collection of Bash scripts for vulnerability scanning, intrusion detection, and automated incident response in Linux environments.",
    //   link: "#",
    // },
  ];

  return (
    <div id="projects" className="min-h-screen bg-gradient-to-br from-orange-100 to-yellow-100 flex flex-col">
        <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Projects
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
            <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
            >
                <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    {project.title}
                </h2>
                <p className="text-gray-600 flex-grow">{project.description}</p>
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 bg-orange-300 text-white px-8 py-2 rounded-full font-medium hover:bg-orange-400 transition max-w-max"
                    >
                    GitHub →
                    </a>
                </div>
            </motion.div>
            ))}
        </div>
        </div>
    </div>
  );
}
