import React from "react";
import HeaderImage from "../../component/header";
import Slider from "../../component/carousel";
import Footer from "../../component/footer";


function Home() {
    return (
        <>
            <HeaderImage dat={{
                title: 'Webshunter',
                subTitle: 'Apps & Website Developer',
                bg: '/bg.avif'
            }}  />

            <Slider props={{
                title: 'Portofolio',
                subtitle: 'List daftar project yang pernah dikerjakan.',
                text: [
                    {
                        title: "Title",
                        subTitle: "Sub Title",
                        image: "/images/imagedev.jpg",
                        text: "If you're planning a trip to Bali and want to experience the island's rich cultural heritage, be sure to check out the daily performances at GWK Cultural Park."
                    }
                    , {
                        title: "Title",
                        subTitle: "Sub Title",
                        image: "/images/imagedev.jpg",
                        text: "These performances are held every day from 11 AM to 6 PM, and are included in the price of admission. To plan your visit and ensure you don't miss out on any of the cultural shows, you can download the schedule from the link available at the bottom of the park's website."
                    }
                    , {
                        title: "Title",
                        subTitle: "Sub Title",
                        image: "/images/imagedev.jpg",
                        text: "So why wait? Download the schedule today and start planning your unforgettable cultural experience at GWK Cultural Park."
                    }
                ]
            }} />

            <Footer />
        </>
    )
}

export default Home;