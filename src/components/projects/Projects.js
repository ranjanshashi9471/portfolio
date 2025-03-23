import React from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import { projectThree } from "../../assets/index";

import { projects } from "./Constants";

const Projects = () => {
	return (
		<section
			id="projects"
			className="w-full py-20 border-b-[1px] border-b-black"
		>
			<div className="flex justify-center items-center text-center">
				<Title
					title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
					des="My Projects"
				/>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
				{projects.map((project, id) => {
					return (
						<ProjectsCard
							title={project.title}
							des={project.desc}
							src={project.img === "" ? projectThree : project.img}
							git={project.git}
							web={project.web}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default Projects;
