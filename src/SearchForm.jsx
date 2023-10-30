import React, { useState } from "react";
import { useAppContext } from "./context";
const apiKey = "G3gkjI6z-Ss-I9F9i3mMFLMlNMkjBgDqYMu-Tg_H_-c";

const SearchForm = () => {
	const { setSearchTerm } = useAppContext();

	const handleSubmit = (evt) => {
		evt.preventDefault();
		const searchValue = evt.target.elements.search.value;
		if (!searchValue) {
			return;
		}
		console.log(searchValue);
		setSearchTerm(searchValue);
	};

	return (
		<section>
			<h1 className="title">unsplash images</h1>
			<form onSubmit={handleSubmit} className="search-form">
				<input type="text" className="form-input search-input" name="search" placeholder="cat" />
				<button className="btn" type="submit">
					search
				</button>
			</form>
		</section>
	);
};

export default SearchForm;
