import React, { useState } from 'react';
import '../styles/book.css';

import Modal from 'react-modal';
import { modalStyles } from '../styles/Modal';

import Cookies from 'universal-cookie';
 
const cookies = new Cookies();

class MyBookClass
{
    public title: string;
    public desc: string;
    public photoURL: string;
}

function Book(props: any) {
    const [index, setIndex] = useState(0);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [newTitle, setTitle] = useState("");
    const [newDesc, setDesc] = useState("");
    const [newPhotoURL, setPhotoURL] = useState("");
    const [modalError, setModalError] = useState(false);
    let myBook: MyBookClass[] = cookies.get('myBook') === undefined ? [] : cookies.get('myBook');

    function previousPage() {
        if (index > 1) {
            setIndex(index - 2);
        }
    }
    function nextPage() {
        if (index + 2 <= myBook.length) {
            setIndex(index + 2);
        }
    }
    function openModal() {
        setTitle("");
        setDesc("");
        setPhotoURL("");
        setModalError(false);
        setIsOpen(true);
    }
    function closeModal() {
        setTitle("");
        setDesc("");
        setPhotoURL("");
        setModalError(false);
        setIsOpen(false);
    }
    function addNewPage() {
        setModalError(false);
        if (newTitle === "" && newDesc === "" && newPhotoURL === "") {
            setModalError(true);
        } else {
            myBook.push({
                title: newTitle,
                desc: newDesc,
                photoURL: newPhotoURL
            });
            cookies.set('myBook', myBook);
            closeModal();
        }
    }
    function renderModal() {
        return (
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={modalStyles}
                ariaHideApp={false}
                contentLabel="Add a new page">
                <div>
                    <div className="bookPageTitle">
                        Add a new page
                    </div>
                    <input 
                        type="text" 
                        className="modalInput"
                        placeholder="Page title"
                        value={newTitle} 
                        onChange={(event) => setTitle(event.target.value)}/>
                    <input 
                        type="text" 
                        className="modalInput" 
                        placeholder="Page description"
                        value={newDesc} 
                        onChange={(event) => setDesc(event.target.value)}/>
                    <input 
                        type="text" 
                        className="modalInput"
                        placeholder="Photo URL"
                        value={newPhotoURL} 
                        onChange={(event) => setPhotoURL(event.target.value)}/>
                    {modalError ? 
                    <div className="modalErrorText">
                        Please fill in at least an input
                    </div>
                    :
                    <div/>}
                    <div className="modalRow">
                        <div className="modalButtonConfirm" onClick={addNewPage}>
                            Confirm
                        </div>
                        <div className="modalButtonCancel" onClick={closeModal}>
                            Cancel
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
    function renderPage(index: number) {
        if ((myBook && myBook.length === 0) || (myBook && myBook.length <= index)) {
            return (
                <div className="bookPage">
                    <div className={index % 2 === 0 ? "bookPageLeft" : "bookPageRight"}>
                        <div className="bookPageIndex">
                            {index + 1}
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <div className="bookPage">
                <div className={index % 2 === 0 ? "bookPageLeft" : "bookPageRight"}>
                    <div className="bookPageTitle">
                        {myBook[index].title}
                    </div>
                    <div className="bookPageDesc">
                        {myBook[index].desc}
                    </div>
                    <div className="bookPageImg">
                        <img src={myBook[index].photoURL} alt="choosen im"/>
                    </div>
                    <div className="bookPageIndex">
                        {index + 1}
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="globalContainer">
            {renderModal()}
            <section className="header">
                <img src={"https://static.data.gouv.fr/avatars/84/a1ca8ceabe42eb86dd06b657131c40.png"} alt="Creatiwity"/>
                <div>
                    Creatiwity - Test
                </div>
            </section>
            <section className="book">
                <div className="bookNextORPrevious">
                    <div onClick={() => previousPage()}>
                        &lt;
                    </div>
                </div>
                {renderPage(index)}
                {renderPage(index + 1)}
                <div className="bookNextORPrevious">
                    <div onClick={() => nextPage()}>
                        &gt;
                    </div>
                </div>
            </section>
            <section className="button">
                <div onClick={openModal}>
                    Add a new page
                </div>
            </section>
        </div>
    );
}

export default Book;