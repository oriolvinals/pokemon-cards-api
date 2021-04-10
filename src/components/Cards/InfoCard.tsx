import { useState } from "react";

interface Info {
	name: string;
	supertype: string;
	subtypes: Array<string>;
	hp: number;
	type?: Array<string>;
	image: string;
	flavor: string;
	holo: boolean;
}

const InfoCard = ({
	name,
	supertype,
	subtypes,
	hp,
	type,
	image,
	flavor,
	holo,
}: Info) => {
	const [active, setActive] = useState(false);
	const [style, setStyle] = useState("");
	const handleMouseMove = (e: any) => {
		if (holo) {
			const l = e.nativeEvent.offsetX;
			const t = e.nativeEvent.offsetY;
			const h = e.screenY;
			const w = e.screenX;
			const lp = Math.abs(Math.floor((100 / w) * l) - 100);
			const tp = Math.abs(Math.floor((100 / h) * t) - 100);
			const bg = `background-position: ${lp}% ${tp}%;`;
			setStyle(`.card.active:before { ${bg} }`);
			setActive(false);
			setActive(true);
		} else {
			setActive(false);
		}
	};

	const handleMouseOut = (e: any) => {
		if (holo) {
			setActive(false);
		}
	};
	return (
		<div className="mt-5">
			<div
				className={(holo ? "card " : "") + (active ? "active" : "")}
				onMouseMove={handleMouseMove}
				onMouseOut={handleMouseOut}
			>
				<img src={image} alt={name + " card"} className="rounded-md" />
				<style className="hover">{style}</style>
			</div>
			<div className="flex mt-3 text-md justify-between">
				<p>
					{supertype} -{" "}
					<span className="text-xs">{subtypes.join(", ")}</span>
				</p>
				{type && (
					<div className="flex space-x-2 justify-center items-center">
						<p className="text-sm">{hp} HP</p>

						<img
							src={"/assets/images/types/" + type[0] + ".png"}
							alt=""
							className="w-6 h-6"
						/>
					</div>
				)}
			</div>
			{flavor && (
				<p className="text-center mt-3 text-xs italic font-thin">
					“ {flavor} ”
				</p>
			)}
		</div>
	);
};

export default InfoCard;
