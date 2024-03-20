import BookmarkList from '../components/bookmarklist';
import { BiArchive } from "react-icons/bi";
const Main = () => {
	

	return (
		<div className="main_container">
			<div>
				<button>+ <BiArchive /> Catagory </button>
			</div>
			<div>
              <BookmarkList />
            </div>
		</div>
	);
};

export default Main;