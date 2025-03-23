import React from "react";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

const frontendSkills = [
	{
		name: "React.js",
		eff: 80,
	},
	{
		name: "Tailwind CSS",
		eff: 70,
	},
	{
		name: "CSS3",
		eff: 70,
	},
	{
		name: "HTML",
		eff: 90,
	},
	{
		name: "Bootstrap",
		eff: 80,
	},
];

const backendSkills = [
	{
		name: "Express.js",
		eff: 80,
	},
	{
		name: "SQL/NoSQL",
		eff: 80,
	},
	{
		name: "Java Springboot",
		eff: 60,
	},
	{
		name: "C/C++",
		eff: 60,
	},
	{
		name: "Docker",
		eff: 70,
	},
];

const Skills = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.5 } }}
			className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
		>
			<div className="w-full lgl:w-1/2">
				<div className="py-12 font-titleFont flex flex-col gap-4">
					<p className="text-sm text-designColor tracking-[4px] uppercase">
						Features
					</p>
					<h2 className="text-3xl md:text-4xl font-bold">Frontend Skill</h2>
				</div>
				<div className='className="mt-14 w-full flex flex-col gap-6'>
					{frontendSkills.map((skill, id) => (
						<SkillCard key={id} name={skill.name} eff={skill.eff} />
					))}
				</div>
			</div>

			<div className="w-full lgl:w-1/2">
				<div className="py-12 font-titleFont flex flex-col gap-4">
					<p className="text-sm text-designColor tracking-[4px] uppercase">
						Features
					</p>
					<h2 className="text-3xl md:text-4xl font-bold">Backend Skills</h2>
				</div>
				<div className="flex flex-col gap-6">
					{backendSkills.map((skill, id) => (
						<SkillCard key={id} name={skill.name} eff={skill.eff} />
					))}
				</div>
			</div>
		</motion.div>
	);
};

export default Skills;
