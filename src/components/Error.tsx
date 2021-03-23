interface Message {
	msg: string;
}

const Error = ({ msg }: Message) => {
	return (
		<div className="text-gray-500 text-2xl text-center fixed z-50 inset-1/4 flex items-center justify-center">
			{msg}
		</div>
	);
};

export default Error;
