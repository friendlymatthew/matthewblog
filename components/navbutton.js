export default function NavAction({ title, press }) {
	return (
		<div>
			{press ? (
				<div className="text-base cursor-pointer text-white">{title}</div>
			) : (
				<div className="text-base cursor-pointer">{title}</div>
			)}
		</div>
	);
}
