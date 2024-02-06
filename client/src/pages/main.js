import BookmarkList from '../components/bookmarklist';

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className="main_container">
			<nav className="navbar">
				<h1>fakebook</h1>
				<button className="white_btn" onClick={handleLogout}>
					Logout
				</button>
			</nav>
			<div>
              <BookmarkList />
            </div>
		</div>
	);
};

export default Main;