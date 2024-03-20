import BookmarkList from '../components/bookmarklist';
import { BiArchive } from "react-icons/bi";
import Modal from '../components/modal';
import { useState } from 'react';

const Main = () => {

	const [openModal, setOpenModal] = useState(false)

	return (
		<div className="main_container">
			<div>
				<button className='openModalBtn' onClick={() => {setOpenModal(true)}}>+ <BiArchive /> Catagory </button>
				{openModal && <Modal closeModel={setOpenModal} />}
			</div>
			<div>
              <BookmarkList />
            </div>
		</div>
	);
};

export default Main;