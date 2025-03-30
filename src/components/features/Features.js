import React from "react";
import {
	FaDatabase,
	FaRocket,
	FaCodeBranch,
	FaReact,
	FaServer,
} from "react-icons/fa";
import { SiLinuxcontainers } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
	return (
		<section
			id="features"
			className="w-full py-20 border-b-[1px] border-b-black"
		>
			<Title title="Features" des="What I Do" />
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
				<Card
					title="Backend Development"
					des="Building robust, scalable backend systems using springboot and Node.js, leveraging both NoSQL and SQL Databases for flexible, secure, and efficient data management."
					icon={<FaServer />}
				/>
				<Card
					title="Frontend Development"
					des="Developing sleek, high-performance user interfaces using React, leveraging Tailwind CSS, CSS3, and Bootstrap to ensure responsiveness and a seamless user experience."
					icon={<FaReact />}
				/>
				<Card
					title="Containerized App Development"
					des="Designing scalable, containerized applications using Docker, ensuring efficiency, portability, and seamless integration across diverse environments."
					icon={<SiLinuxcontainers />}
				/>
				<Card
					title="Code Maintainance"
					des="Whether it's refactoring outdated code, addressing security vulnerabilities, or improving website functionality, I ensure your projects up-to-date and performs at its best."
					icon={<FaCodeBranch />}
				/>
				<Card
					title="DB Design"
					des="From creating optimized schemas to ensuring scalability, I design robust databases that support application's performance and growth while maintaining data integrity and ease of access."
					icon={<FaDatabase />}
				/>
				<Card
					title="Deploying Websites and Web Services."
					des="From setting up hosting environments to configuring servers and ensuring optimal performance, making websites or web services accessible and reliable for users worldwide."
					icon={<FaRocket />}
				/>
			</div>
		</section>
	);
};

export default Features;
