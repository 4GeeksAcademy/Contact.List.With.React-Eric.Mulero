import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import contact from "./view/contact.jsx";
import addContact from "./view/addContact.jsx";
import injectContext from "./store/appContext.js";
import editContact from "./view/editContact.jsx";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Routes>
					<Route path="/" element={<contact />} />
					<Route path="/addContact" element={<addContact />} />
					<Route path="/editContact/:id" element={<editContact />} />
					<Route path="*" element={<h1>No encontrado!</h1>} />

				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);