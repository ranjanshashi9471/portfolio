import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
	FaTwitter,
	FaLinkedinIn,
	FaReact,
	FaGithub,
	FaDocker,
} from "react-icons/fa";
import { SiCplusplus, SiMysql, SiJava } from "react-icons/si";

const LeftBanner = () => {
	const [text] = useTypewriter({
		words: ["System Enthusiast.", "Java Developer.", "MERN Developer"],
		loop: true,
		typeSpeed: 20,
		deleteSpeed: 10,
		delaySpeed: 2000,
	});
	return (
		<div className="w-full lgl:w-1/2 flex flex-col gap-20">
			<div className="flex flex-col gap-5">
				<h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
				<h1 className="text-6xl font-bold text-white">
					Hi, I'm{" "}
					<span className="text-designColor capitalize">
						Shashi Ranjan Kumar
					</span>
				</h1>
				<h2 className="text-4xl font-bold text-white">
					a <span>{text}</span>
					<Cursor
						cursorBlinking="false"
						cursorStyle="|"
						cursorColor="#ff014f"
					/>
				</h2>
				<p className="text-base font-bodyFont leading-6 tracking-wide">
					I craft dynamic, scalable applications with the MERN stack and the
					power of Java, blending intuitive user experiences with
					high-performance backend systems. Every interaction is designed for
					efficiency, security, and seamless responsiveness—turning ideas into
					impactful digital solutions.
				</p>
			</div>
			<div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
				<div>
					<h2 className="text-base uppercase font-titleFont mb-4">
						Find me in
					</h2>
					<div className="flex gap-4">
						<a href="https://github.com/ranjanshashi9471/" target="blank">
							<span className="bannerIcon">
								<FaGithub />
							</span>
						</a>
						<a href="https://x.com/ranjanshashi947" target="blank">
							<span className="bannerIcon">
								<FaTwitter />
							</span>
						</a>
						<a
							href="https://www.linkedin.com/in/shashi-ranjan-kumar-7ba2331ba/"
							target="blank"
						>
							<span className="bannerIcon">
								<FaLinkedinIn />
							</span>
						</a>
					</div>
				</div>
				<div>
					<h2 className="text-base uppercase font-titleFont mb-4">
						BEST SKILL ON
					</h2>
					<div className="flex gap-4">
						<span className="bannerIcon">
							<SiCplusplus />
						</span>
						<span className="bannerIcon">
							<SiJava />
						</span>
						<span className="bannerIcon">
							<FaReact />
						</span>
						<span className="bannerIcon">
							<SiMysql />
						</span>
						<span className="bannerIcon">
							<FaDocker />
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LeftBanner;
