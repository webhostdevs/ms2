import React from "react";
import GooglePlayIcon from "../assets/google-play.svg";
import AppStoreIcon from "../assets/app-store.svg";
import dl from "../assets/dl.png";
import db from "../assets/dl.jpg";
import dlb from "../assets/dlb.png";

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
              <h3 className="text-2xl font-extrabold  text-gray-800">
                Download Our App{" "}
              </h3>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={GooglePlayIcon}
                    alt="Google Play"
                    className="w-100 h-44 hover:opacity-80 transition"
                  />
                </a>
                <a
                  href="https://www.apple.com/app-store/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={AppStoreIcon}
                    alt="App Store"
                    className="w-100 h-44 hover:opacity-80 transition"
                  />
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
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Box Genie",
              image:
                "https://5.imimg.com/data5/SELLER/Default/2023/2/BX/WK/QF/5331327/3cp-meal-tray-natraj.jpg",
              buttonText: "Order Now",
            },
            {
              title: "Home Delivery",
              image: db,
              buttonText: "Order Now",
            },
            {
              title: "Bulk Catering",
              image:
                "https://5.imimg.com/data5/JU/UP/KR/SELLER-87393189/catering-services-500x500.jpg",
              buttonText: "Order Now",
            },
          ].map(({ title, image, buttonText }) => (
            <div
              key={title}
              className="bg-white  text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
            >
              <h3 className="text-2xl font-extrabold mb-4 text-gray-800 border-b-2 border-green-500 pb-2">
                {title}
              </h3>
              <img
                src={image}
                alt={title}
                className="mb-4 rounded-md object-fit h-48 w-full transition-transform"
              />
              <a
                href="#"
                className="bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-2 rounded-lg font-medium shadow-md hover:from-green-500 hover:to-green-700 hover:shadow-lg transition-transform transform"
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
        <div className="max-w-6xl mx-auto space-y-6">
          {[
            {
              title: "Wedding Catering",
              description: [
                "Engagement",
                "Haldhi",
                "Pelli koduku & Pelli Kuthuru",
                "Marriage",
                "Vratham",
              ],
              image:
                "https://static01.nyt.com/images/2023/05/14/multimedia/FAT-INDIAN-WEDDINGS-01-hptq/FAT-INDIAN-WEDDINGS-01-hptq-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
            },
            {
              title: "Corporate Events",
              description: [
                "Corporate Meeting",
                "Get together",
                "Celebrations",
                "Birthday Parties",
              ],
              image: "https://shahipakwaan.in/wp-content/uploads/2023/02/business-people-taking-snacks-from-buffet-table_1262-1701-1.png",
            },
            {
              title: "Event Caterers",
              description: [
                "Birthday",
                "House warming",
                "Cardel",
                "Festivals",
              ],
              image: "https://www.shutterstock.com/image-photo/big-family-celebrating-diwali-indian-600nw-2334107349.jpg",
            },
            {
              title: "Design your own Menu",
              description: [
                "Corporate Meetings",
                "Birthdays",
                "Engagements",
                "Marriage",
                "Reception",
              ],
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxa7JfqO3EaPKyw7DOlOFIADBQ8Y-FP7MfLw&s",
            },
          ].map(({ title, description, image }) => (
            <div
              key={title}
              className="flex bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <img
                src={image}
                alt={title}
                className="w-32 h-32 object-cover rounded-lg mr-4"
              />
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-700">{title}</h3>
                <ul className="list-disc list-inside mt-2 text-sm text-gray-600">
                  {description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="text-right mt-4">
                  <a
                    href="/details"
                    className="text-sm font-medium text-green-500 hover:text-green-600 transition"
                  >
                    View More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
