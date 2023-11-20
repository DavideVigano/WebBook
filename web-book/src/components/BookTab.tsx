import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import BookTabText from './BookTabText';

interface Section {
    subtitle: string;
    content: string;
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
    book: Book;
}

export default function BookTab({ book }: Props) {

    const length = book.capitoli.length



    return (
        <Tabs
            aria-label="Vertical tabs"
            orientation="vertical"
            sx={{ minWidth: 300, height: 160 }}
        >
            <TabList>
                {book.capitoli.map((item, index) => (

                    <Tab key={index}>{item.title}</Tab>

                ))}
            </TabList>
            {book.capitoli.map((item, index) => (
                <TabPanel key={index} value={index}>
                    <BookTabText section={item.sections}></BookTabText>
                </TabPanel>
            ))}
        </Tabs>
    );
}