import ListGroupHeading from '../components/ListGroupHeading';

import ImgBackgroundBook from '../components/ImgBackgroundGroup';
import NavBar from '../components/NavBar';
import WhiteSpace from '../components/WhiteSpace';
import ContainerTitle from '../components/ContainerTitle';
import { useEffect, useRef, useState } from 'react';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import EditOffIcon from '@mui/icons-material/EditOff';
import CloseIcon from '@mui/icons-material/Close';

import "../App.css"
import CustomizationSelected from '../components/CustomizationSelected';
import BookTab from '../components/BookTab';
import BookContinue from '../components/BookContinue';
import axios from 'axios';


function BookPage1() {

    useEffect(() => {
        // Posizionati all'inizio della pagina quando la pagina viene caricata
        window.scrollTo(0, 0);

    }, []);


    // Chiamata per generare voce 
    const bookDataString = localStorage.getItem("bookData");
    const bookData = bookDataString ? JSON.parse(bookDataString) : null;

    // Gestione evidenzia testo 
    const [isHighlighting, setIsHighlighting] = useState<boolean>(false);
    const [isRemove, setIsRemove] = useState<boolean>(false);
    const [isClicked, setIsClicked] = useState<boolean>(true);

    const handleTextSelection = () => {
        if (isHighlighting) {
            const selected = window.getSelection();
            if (selected && selected.rangeCount > 0) {
                const range = selected.getRangeAt(0);
                const span = document.createElement('span');
                span.className = isRemove ? 'remove' : 'highlight';
                range.surroundContents(span);
                selected.removeAllRanges();
            }
        }
    };

    const handleHighlightButton = () => {
        setIsHighlighting(!isHighlighting);
    };

    const handleRemoveButton = () => {
        setIsRemove(!isRemove);
    }

    const handleShowButton = () => {
        setIsClicked(!isClicked)
    }

    // Funzione di callback per aggiornare lo stato nel padre

    const [choice, setChoice] = useState<string>("button")

    const updateSharedState = (newValue: string) => {
        setChoice(newValue);
    };

    return (
        <>
            <WhiteSpace></WhiteSpace>
            <NavBar></NavBar>

            <WhiteSpace></WhiteSpace>
            <ImgBackgroundBook path={bookData.copertina}></ImgBackgroundBook>

            <WhiteSpace></WhiteSpace>

            <div onMouseUp={handleTextSelection}>
                <ContainerTitle
                    title={bookData.title}
                    path={bookData.copertina}
                    description={bookData.preview}
                ></ContainerTitle>
            </div>

            <WhiteSpace></WhiteSpace>

            <WhiteSpace></WhiteSpace>

            <CustomizationSelected updateChoice={updateSharedState}></CustomizationSelected>

            <WhiteSpace></WhiteSpace>

            {choice === 'tab' &&
                <div onMouseUp={handleTextSelection}>
                    <BookTab book={bookData} ></BookTab>
                </div>
            }

            {choice === 'button' &&
                <div onMouseUp={handleTextSelection}>
                    <ListGroupHeading
                        classUl="list-group list-group-flush"
                        classLi="list-group-item list-group-item-action"
                        book={bookData}
                    ></ListGroupHeading>
                </div>
            }
            {choice === 'scroll' &&
                <div onMouseUp={handleTextSelection}>
                    <BookContinue book={bookData} ></BookContinue>
                </div>
            }
            <div className="buttons-container">
                {!isClicked ? <Fab
                    size="small"
                    aria-label="edit"
                    className='buttons-small'
                    color={isRemove ? "error" : "default"}
                >
                    <EditOffIcon onClick={handleRemoveButton}></EditOffIcon>
                </Fab> : ''}
                {!isClicked ? <Fab
                    size="small"
                    aria-label="edit"
                    className='buttons-small'
                    color={isHighlighting ? "success" : "default"}>
                    <BorderColorIcon onClick={handleHighlightButton}></BorderColorIcon>
                </Fab> : ''}
                <Fab color="primary" size="medium" aria-label="add" onClick={handleShowButton}>
                    {isClicked ? <AddIcon /> : <CloseIcon />}
                </Fab>
            </div>

        </>
    )

}

export default BookPage1