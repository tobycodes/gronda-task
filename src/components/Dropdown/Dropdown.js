import React, { useEffect, useState } from "react";

//I created a custom dropdown so we can reuse it for sorting, filtering and any other UI functionality that is similar to them
const Dropdown = ({ label, options, onChange }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selected, setSelected] = useState(options && options[0]); //Sets the first option in our options prop as the default sort/filtering option

	useEffect(() => {
		if (onChange) {
			//Any function passed as the onChange prop will be called with the currently selected option and can use it to request new data or modify UI appropriately.
			onChange(selected);
		}
	}, [selected, onChange]);

	const toggleDropdown = () => setIsOpen(!isOpen); //This function controls the opening/closing of the dropdown

	const handleSelected = (option) => {
		setSelected(option);
		setIsOpen(false);
	};

	return (
		<div className="dropdown">
			<span className="dropdown-label">{label}</span>
			<input
				className="dropdown-button"
				type="button"
				value={selected.title}
				onClick={toggleDropdown}
			/>

			<ul id="dropdown-list" className={`dropdown-list${isOpen ? " show" : ""}`}>
				{options.map((option) => (
					<li
						className="dropdown-item"
						key={option.id}
						onClick={() => handleSelected(option)} //This function remembers the particular option passed via closures, and we use that to set selected item on click.
					>
						{option.title}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Dropdown;
