import { useState, useRef } from "react";
import ListGroupSubTitle from "./ListGroupSubTitle";
import '../App.css';

interface Section {
    subtitle: string;
    content: string; // Contenuto da visualizzare
}

interface Capitoli {
    title: string;
    sections: Section[];
}

interface Book {
    title: string;
    preview: string;
    capitoli: Capitoli[];
}

interface Props {
    classUl?: string;
    classLi?: string;
    book: Book;
}

function ListGroupHeading({ classUl = 'list-group', classLi = 'list-group-item', book }: Props) {
    // gestione stato 
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    // gestione scroll 
    const buttonRefs = book.capitoli.map(() => useRef<HTMLButtonElement | null>(null));

    const handleItemClick = (index: number) => {
        if (openIndex === index) {
            // Se l'elemento è già aperto, chiudilo cliccandoci nuovamente
            setOpenIndex(null);
        } else {
            // Altrimenti, apri l'elemento cliccato
            setOpenIndex(index);
            // Scrolla verso il bottone cliccato
            setTimeout(() => {
                buttonRefs[index]?.current?.scrollIntoView({ behavior: "smooth" });
            }, 0);
        }
    };

    return (
        <ul className={classUl}>
            {book.capitoli.map((item, index) => (
                <li
                    className={classLi}
                    key={item.title + index}
                >
                    <button
                        onClick={() => handleItemClick(index)}
                        aria-expanded={openIndex === index}
                        ref={buttonRefs[index]}
                        className="book-title book-generator"
                    >
                        {item.title}
                    </button>
                    {openIndex === index && (
                        <ListGroupSubTitle
                            classUl="list-group list-group-flush"
                            classLi="list-group-item list-group-item-action"
                            sections={item.sections}
                        />
                    )}
                </li>
            ))}
        </ul>
    );
}

export default ListGroupHeading;
