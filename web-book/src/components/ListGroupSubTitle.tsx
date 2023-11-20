import { ReactNode, useRef, useState } from "react"
import ContainerText from "./ContainerText"

interface Section {
    subtitle: string;
    content: string; // Contenuto da visualizzare
}

interface Props {
    classUl?: string,
    classLi?: string,
    sections: Section[],
}

function ListGroupSubTitle({ classUl = 'list-group', classLi = 'list-group-item', sections }: Props) {
    // Creare un array di stati per tenere traccia dello stato di ciascun elemento
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const buttonRefs = sections.map(() => useRef<HTMLButtonElement | null>(null));

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
            {sections.map((item, index) => (
                <li
                    key={item.subtitle + index}
                    className={classLi}
                >
                    <button
                        onClick={() => handleItemClick(index)}
                        aria-expanded={openIndex === index}
                        ref={buttonRefs[index]}
                        className="book-subtitle book-generator"
                    >
                        {item.subtitle}
                    </button>
                    {openIndex === index && <ContainerText content={item.content} />}
                </li>
            ))}
        </ul>
    );
}

export default ListGroupSubTitle;