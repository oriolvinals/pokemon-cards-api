interface Info {
	info: any;
}

const SetInfo = ({ info }: Info) => {
	return (
		<div className="py-6 px-10">
			<span className="text-2xl">{info.name}</span> ({info.id})
			<br />
			<span className="text-xl">{info.series}</span>
			<br />
			<span className="text-md">Total cards: {info.printedTotal}</span>
		</div>
	);
};

export default SetInfo;
