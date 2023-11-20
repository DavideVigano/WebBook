import React from 'react'
import ContainerText from './ContainerText';

interface Section {
    subtitle: string;
    content: string;
}

interface Props {
    section: Section[];
}

const BookTabText = ({ section }: Props) => {
    return (
        <div>
            {section.map((item, index) => (
                <div>
                    <h2>{item.subtitle}</h2>
                    <ContainerText content={item.content}></ContainerText>
                </div>
            ))}
        </div>

    )
}

export default BookTabText