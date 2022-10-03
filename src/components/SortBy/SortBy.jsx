import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortBy } from "../../store/actions";

const SortBy = () => {
	const actualSort = useSelector(state => state.actualSort);
	const pets = useSelector(state => state.allPets);
	const dispatch = useDispatch();

	const sorts = ["ASC", "DESC"];
	return (
		<div className="flex gap-2 m-2 basis-2/4 self-center justify-center">
			{sorts.map(el => (
				<button
					className={`border border-1 rounded p-2 border-[#facc15] font-semibold text-[#28b0a2]  ${
						actualSort === el
							? "bg-[#facc15] text-[#f9fafb]"
							: "hover:bg-yellow-100 transition-colors"
					}`}
					onClick={() => dispatch(sortBy(pets, el))}
					key={el}
				>
					{el}
				</button>
			))}
		</div>
	);
};

export default SortBy;
