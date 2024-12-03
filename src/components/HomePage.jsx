import React from "react";
import GooglePlayIcon from '../assets/google-play.svg';
import AppStoreIcon from '../assets/app-store.svg';
import dl from '../assets/dl.png'
import dlb from '../assets/dlb.png'

const HomePage = () => {
    return (
        <div className="bg-aliceBlue text-black font-sans">
        <div className="flex">
            <section className="py-7 p-8">
                <div className="max-w-3xl p-1 mx-auto text-center">
                    <h1 className="text-5xl font-extrabold mb-4 text-gray-800">
                        Elevate Your Dining Experience
                    </h1>
                    <p className="text-lg mb-8 text-green-600 font-medium">
                        Seamless Catering • Personalized Menus • Instant Bookings
                    </p>
                    
                    
                        <div>
                        <h3 className="text-2xl font-extrabold  text-gray-800">Download Our App </h3>
                        <div className="flex justify-center space-x-4">
                        <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                            <img src={GooglePlayIcon} alt="Google Play" className="w-100 h-44 hover:opacity-80 transition" />
                        </a>
                        <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                            <img src={AppStoreIcon} alt="App Store" className="w-100 h-44 hover:opacity-80 transition" />
                        </a>
                    </div>
                    </div>
                </div>
            </section>
            
            <section className="flex items-center justify-center ">
                <img src={dl} alt="Description" className="object-contain h-full " />
            </section>
            </div>
            {/* Rest of the component remains the same */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Meal Genie",
                            image: dlb,
                            buttonText: "Customize Meal",
                        },
                        {
                            title: "Home Delivery",
                            image:  dlb,
                            buttonText: "Order Now",
                        },
                        {
                            title: "Bulk Catering",
                            image:  dlb,
                            buttonText: "Plan Catering",
                        },
                    ].map(({ title, image, buttonText }) => (
                        <div
                            key={title}
                            className="bg-white text-black p-6 transition"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
                            <img src={image} alt={title} className="mb-4 rounded-md" />
                            <a
                                href="#"
                                className="bg-green-600 text-white px-4 py-2 rounded-md font-medium hover:bg-green-700 transition"
                            >
                                {buttonText}
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            <section className="p-20">
                <h2 className="text-3xl font-bold mb-12 text-left text-green-700">
                    CATERING FOR ALL OF VARIETIES
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            title: "Wedding Catering",
                            image:  dlb,
                        },
                        {
                            title: "Corporate Events",
                            image: dlb,
                        },
                        {
                            title: "Special Occasions",
                            image:  dlb,
                        },
                        {
                            title: "Custom Menu Design",
                            image:  dlb,
                        },
                    ].map(({ title, image }) => (
                        <div key={title} className="text-center">
                            <img
                                src={image}
                                alt={title}
                                className="mb-4 rounded-lg shadow-md hover:scale-105 transition"
                            />
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">
                                {title}
                            </h3>
                            <a
                                href="#"
                                className="text-green-600 font-medium hover:underline"
                            >
                                Explore
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HomePage;