import {
	archive,
	network,
	diary,
	intercity,
	oyohostel,
} from "../../assets/index";

export const projects = [
	{
		title: "Disk Management and Integrity Tools",
		desc: "Developed utilities for managing virtual disks, including adding, retrieving, counting, and deleting files. Implemented custom encoding/decoding, bit manipulation, and metadata handling to optimize disk space utilization and file operations.",
		img: archive,
		git: "https://github.com/ranjanshashi9471/virtualDisk",
		web: "",
	},
	{
		title: "Multi-System Communication Framework",
		desc: "Designed and implemented a scalable distributed system using C, showcasing inter-process communication, UDP socket programming, and file-based synchronization. Automated build and deployment using Makefile for efficient development.",
		img: network,
		git: "https://github.com/ranjanshashi9471/networkingProject",
		web: "",
	},
	{
		title: "Spreadsheet WebApp",
		desc: "Developed a JavaScript-based SPA leveraging SQL.js for an in-memory SQLite database. Features include dynamic spreadsheet generation, schema-driven UI rendering, and CRUD operations through a user-friendly interface. Optimized for large datasets to ensure performance scalability.",
		img: "",
		git: "https://github.com/ranjanshashi9471/Spreadsheet_SPA",
		web: "",
	},
	{
		title: "Multi-User Train Booking WebApp",
		desc: "A full-stack web application for managing ticket booking, staff schedule, train schedules and user authentication & authorization. Implemented RESTful APIs for seamless communication between the client and server, ensuring efficient and secure data handling. Used MVC architecture for better code readability.",
		img: intercity,
		git: "https://github.com/ranjanshashi9471/intercity-express",
		web: "",
	},
	{
		title: "Personal Diary WebApp",
		desc: "A secure and feature-rich Personal Diary with features such as user authentication and authorization via local, Google, and Facebook OAuth strategies, user profile management, and secure session handling, RESTful APIs with server-side validation, robust error handling, and schema-based DB integration.",
		img: diary,
		git: "https://github.com/ranjanshashi9471/MyVirtualDiary",
		web: "",
	},
	{
		title: "OyoHostels",
		desc: "Map Integrated nearby Hostel Locator for students and Landlords to solve the complexity of migrating students. Hostel owners can add detailed listings, including addresses and locations, making it easy for students to search for and find suitable hostels in their desired areas.",
		img: oyohostel,
		git: "https://github.com/ranjanshashi9471/OyoHostels",
		web: "",
	},
];
