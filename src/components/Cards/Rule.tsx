interface Props {
	rule: any;
}

const Rule = ({ rule }: Props) => {
	return <div className="flex flex-col space-y-2 text-xs">{rule}</div>;
};

export default Rule;
