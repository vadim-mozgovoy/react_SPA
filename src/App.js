import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import HomePage from './components/Home/Home';
import PhotosPage from "./components/Photos/photos";
import PostsPage from "./components/Posts/Posts";
import ContactsPage from "./components/AboutContacts/Contacts/contacts";

function App() {
	return (
		<div className="App">
			<HashRouter>
				<Route path="/" exact component={HomePage} />
				<Route path="/posts" component={PostsPage} />
				<Route path="/photos" component={PhotosPage} />
				<Route path="/contacts" component={ContactsPage} />
			</HashRouter>
		</div>
	);
}

export default App;
