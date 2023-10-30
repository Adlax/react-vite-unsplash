import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const ContextWrapper = ({ children }) => {
	const getInitialDarkMode = () => {
		const browserIsDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
		const localStorageIsDarkMode = localStorage.getItem("darkTheme") === "true";
		console.log(browserIsDarkMode, localStorageIsDarkMode);
		// we return true to dark mode if one of the 2 preferences is true
		return browserIsDarkMode || localStorageIsDarkMode;
	};

	// const [isDarkTheme, setIsDarkTheme] = useState(false);
	const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
	const [searchTerm, setSearchTerm] = useState("cat");

	const toggleDarkTheme = () => {
		const newDarkTheme = !isDarkTheme;
		setIsDarkTheme(newDarkTheme);
		const body = document.querySelector("body");
		body.classList.toggle("dark-theme");
		// body.classList.toggle("dark-theme", newDarkTheme); why like this ?
		localStorage.setItem("darkTheme", newDarkTheme);
	};

	useEffect(() => {
		document.body.classList.toggle("dark-theme", isDarkTheme);
	}, [isDarkTheme]);

	return <AppContext.Provider value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}> {children} </AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
