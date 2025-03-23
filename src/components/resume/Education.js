import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.5 } }}
			className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
		>
			{/* part one */}
			<div className="w-4/6 mx-auto">
				<div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
					<p className="text-sm text-designColor tracking-[4px]">2018 - 2025</p>
					<h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
				</div>
				<div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 mx-10">
					<ResumeCard
						title="Masters in Computer Applications."
						subTitle="Department of Computer Science, Pune University (2023 - 2025)"
						result="3.90/4"
						des="The training provided by universities in order to prepare people to work in Software Engg. sectors of the economy."
					/>
					<ResumeCard
						title="Bachelors - Computer Applications"
						subTitle="St. Xavier's College, Ranchi (2020 - 2023)"
						result="4.75/5"
						des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
					/>
					<ResumeCard
						title="Senior Secondary School Education"
						subTitle="Chinmaya Vidyalaya, Bokaro (2018 - 2020)"
						result="5.00/5"
						des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
					/>
					{/* <ResumeCard
						title="Secondary School Education"
						subTitle="D.A.V Public School, Kanti (2013 - 2018)"
						result="5.00/5"
						des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
					/> */}
				</div>
			</div>
		</motion.div>
	);
};

export default Education;
