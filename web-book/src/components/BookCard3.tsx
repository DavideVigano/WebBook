// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import CardDemo from './CardDemo';
import WhiteSpace from './WhiteSpace';

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
    copertina: string;
    capitoli: Capitoli[]
}

interface Props {
    book: Book[];
}

const BookCard3 = ({ book }: Props) => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log()}
            onSlideChange={() => console.log()}
            autoplay={{
                delay: 3000, // Intervallo in millisecondi tra le slide
                disableOnInteraction: false, // Autoplay continua dopo l'interazione dell'utente
            }}
        >
            {book.map((card, index) => (
                <SwiperSlide key={index}>
                    <WhiteSpace />
                    <CardDemo
                        book={card}
                    />
                    <WhiteSpace />
                </SwiperSlide>
            ))}
        </Swiper >
    );
};

export default BookCard3;
