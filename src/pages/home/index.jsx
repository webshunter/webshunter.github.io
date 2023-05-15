import React from "react";
import HeaderImage from "../../component/header";
import Slider from "../../component/carousel";


function Home() {
    return (
        <>
            <HeaderImage dat={{
                title: 'Webshunter',
                subTitle: 'Apps & Website Developer',
                bg: '/bg1.jpg'
            }}  />

            <Slider props={{
                title: 'Authentic',
                subtitle: 'Performance in GWK Cultural Park with downloadable schedule',
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

            <h1>Home</h1>
        </>
    )
}

export default Home;