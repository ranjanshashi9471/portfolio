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
						result="9.15 CGPA"
						des="During my MCA, I explored a wide range of computer science fundamentals and advanced topics. I focused on problem-solving, functional programming, data structures design, database modeling, core system concepts, and working with Linux-based systems. This strong foundation has shaped my approach to building efficient, scalable, and well-structured software solutions."
					/>
					<ResumeCard
						title="Bachelors - Computer Applications"
						subTitle="St. Xavier's College, Ranchi (2020 - 2023)"
						result="8.28 CGPA"
						des="I completed my Bachelor's in Computer Applications from St. Xavier's College, Ranchi, where I built a strong foundation in web development, particularly using the MERN stack (MongoDB, Express.js, React, and Node.js). This experience helped me understand full-stack development and end-to-end application building."
					/>
					<ResumeCard
						title="Senior Secondary School Education"
						subTitle="Chinmaya Vidyalaya, Bokaro (2018 - 2020)"
						result="89.6%"
						des="I completed my 12th from Chinmaya Vidyalaya, Bokaro, where I was introduced to core Java, Java Swing, and MySQL. To strengthen my understanding, I built small projects that helped me apply concepts in real-world scenarios and sparked my interest in software development."
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
