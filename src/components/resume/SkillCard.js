import React from "react";
import { motion } from "motion/react";

function SkillCard({ name, eff }) {
	console.log("eff is" + eff, name);
	return (
		<div className="overflow-x-hidden">
			<p className="text-sm uppercase font-medium">{name}</p>
			<span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
				<motion.span
					initial={{ x: "-100%", opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.5 }}
					className={`h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative`}
					style={{ width: `${eff}%` }}
				>
					<span className="absolute -top-7 right-0">{eff}%</span>
				</motion.span>
			</span>
		</div>
	);
}

export default SkillCard;
