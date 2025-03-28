import React from "react";
import {
	FaFacebookF,
	FaTwitter,
	FaLinkedinIn,
	FaInstagram,
} from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
	return (
		<div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
			<img
				className="w-full h-64 object-cover rounded-lg mb-2"
				src={contactImg}
				alt="contactImg"
			/>
			<div className="flex flex-col gap-4">
				<h3 className="text-3xl font-bold text-white">Shashi Ranjan Kumar</h3>
				<p className="text-lg font-normal text-gray-400">
					MERN Stack Developer
				</p>
				<p className="text-base text-gray-400 tracking-wide">
					A dedicated professional with a passion for technology and innovation.
					I am committed to leveraging my skills in Problem Solving and Full
					Stack Development to drive impactful results.
				</p>
				<p className="text-base text-gray-400 flex items-center gap-2">
					Phone: <span className="text-lightText">+91 8709406474</span>
				</p>
				<p className="text-base text-gray-400 flex items-center gap-2">
					Email:{" "}
					<span className="text-lightText">ranjanshashi9471@gmail.com</span>
				</p>
			</div>
			<div className="flex flex-col gap-4">
				<h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
				<div className="flex gap-4">
					<a href="https://www.instagram.com/ranjan_shashi_/">
						<span className="bannerIcon">
							<FaInstagram />
						</span>
					</a>
					<a href="https://x.com/ranjanshashi947">
						<span className="bannerIcon">
							<FaTwitter />
						</span>
					</a>
					<a href="https://www.linkedin.com/in/shashi-ranjan-kumar-7ba2331ba/">
						<span className="bannerIcon">
							<FaLinkedinIn />
						</span>
					</a>
				</div>
			</div>
		</div>
	);
};

export default ContactLeft;
