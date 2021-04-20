import Set from "./Set";
interface Props {
	sets: Array<any>;
}
const Sets = ({ sets }: Props) => {
	return (
		<div className="flex flex-col space-y-3">
			{sets.map((set: any, i: number) => {
				return (
					<Set key={i} name={"a"} image={"a"} cards={2} total={22} />
				);
			})}
		</div>
	);
};

export default Sets;
