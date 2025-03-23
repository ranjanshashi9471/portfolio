import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.5 } }}
			className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
		>
			<div className="w-4/6 mx-auto">
				<div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
					<p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
					<h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
				</div>
				<div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
					<ResumeCard
						title="Trainee Engineer"
						subTitle="Futops Technologies. - (2025 - Present)"
						result="Pune, India"
						des="As a trainee engineer at Futops Technologies, I am Working with Java Springboot Learning Containerization Technologies and Gaining insights on Designing Robust and Scalable Backend Systems."
					/>
					<ResumeCard
						title="AI & Cloud Virtual Internship"
						subTitle="AICTE-Edunet - (July 2024 - Aug 2024)"
						result="Online"
						des="Insights on the fundamentals of AI & ML, performed experiment on IBM's Watson Studio, insights of Cloud and its Working and Worked on Creating Chatbots on cloud which can be deployed."
					/>
					<ResumeCard
						title="MERN Development Intern"
						subTitle="Refresh Infratech Pvt. Ltd. - (Oct 2019 - April 2020)"
						result="Ranchi, India"
						des="In-depth understanding of Web Technologies(Frontend and Backend), Gained proficiency in designing, deploying, and managing dynamic and responsive Web apps. Strong knowledge of RESTful API’s, and frameworks such as Reactjs. Hands-on experience in Web Development"
					/>
				</div>
			</div>
		</motion.div>
	);
};

export default Experience;
