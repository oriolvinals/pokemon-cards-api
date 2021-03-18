interface Info {
	info: any;
}

const SetInfo = ({ info }: Info) => {
	return (
		<div>
			{info.id} {info.name} {info.series} {info.printedTotal}
		</div>
	);
};

export default SetInfo;
