import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



export default function Slider({ props }) {
    let { responsive, title, subtitle, text, url } = props;

    return (
        <section className="mt-10">
        <div className='p-0 md:p-10'>
            <div className="min-w-full">
                <div className="row min-w-full g-0 ">
                    <div className="col-12">
                        <div className='p-0 md:p-10'>
                            <div className="pl-4 pr-4">
                                <h1 className="text-3xl min-w-full block text-center">{title}</h1>
                                <h2 className="text-sm md:text-md block min-w-full text-center mt-2 mb-10">{subtitle}</h2>
                            </div>
                            <Carousel
                                additionalTransfrom={0}
                                arrows
                                autoPlaySpeed={3000}
                                centerMode={false}
                                className=""
                                containerClass="container-with-dots"
                                dotListClass=""
                                draggable
                                focusOnSelect={false}
                                infinite
                                itemClass=""
                                keyBoardControl
                                minimumTouchDrag={80}
                                pauseOnHover
                                renderArrowsWhenDisabled={false}
                                renderButtonGroupOutside={false}
                                renderDotsOutside={false}
                                responsive={(function () {
                                    if (responsive != null) {
                                        return responsive;
                                    } else {
                                        return {
                                            desktop: {
                                                breakpoint: {
                                                    max: 3000,
                                                    min: 1024
                                                },
                                                items: 2,
                                                partialVisibilityGutter: 40
                                            },
                                            mobile: {
                                                breakpoint: {
                                                    max: 800,
                                                    min: 0
                                                },
                                                items: 1,
                                                partialVisibilityGutter: 30
                                            },
                                            tablet: {
                                                breakpoint: {
                                                    max: 1024,
                                                    min: 800
                                                },
                                                items: 2,
                                                partialVisibilityGutter: 30
                                            }
                                        }
                                    }
                                })()}
                                rewind={false}
                                rewindWithAnimation={false}
                                rtl={false}
                                shouldResetAutoplay
                                showDots={false}
                                sliderClass=""
                                slidesToSlide={1}
                                swipeable
                            >
                                {text.map((content, i) => {
                                    if (content.type != null && content.type === 1) {
                                        return (
                                            <div key={i}>
                                                <h1 className="text-2xl italic">{content.title}</h1>
                                                <h2 className="text-md mb-10">{content.subTitle}</h2>
                                                <div style={{ backgroundImage: "url('" + content.image + "')" }} className="bg-contain bg-no-repeat bg-center min-h-[200px]"></div>
                                                <p className="mt-10 text-sm md:text-md">{(function () {
                                                    if (Array.isArray(content.text)) {
                                                        return content.text.map((txt, i) =>
                                                            <p className="text-sm md:text-md mt-3" key={i}>{txt}</p>
                                                        )
                                                    } else {
                                                        return content.text
                                                    }
                                                })()}</p>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div key={i} className="bg-gray-50 min-h-full ml-5 mr-5 p-5 shadow-md">
                                                <h1 className="text-2xl">{content.title}</h1>
                                                <h2 className="text-md mb-10">{content.subTitle}</h2>
                                                <div style={{ backgroundImage: "url('" + content.image + "')" }} className="bg-contain bg-no-repeat bg-center min-h-[200px]"></div>
                                                <p className="mt-10 text-sm md:text-md">{(function () {
                                                    if (Array.isArray(content.text)) {
                                                        return content.text.map((txt, i) =>
                                                            <p className="text-sm md:text-md mt-3" key={i}>{txt}</p>
                                                        )
                                                    } else {
                                                        return content.text
                                                    }
                                                })()}</p>
                                            </div>
                                        )
                                    }
                                })}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export { }