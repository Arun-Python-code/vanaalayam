import React from "react";
import { useState } from "react";
import "./App.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TestMonials from "./TestMonials";
import Button from "./button";

export default function Navbar() {
  const [roomId, setRoomId] = useState(null);
  const [open, setOpen] = useState(false);

  const navbar_items = [
    "picture",
    "HOME",
    "OFFERINGS",
    "ABOUT US",
    "GALLERY",
    "AT VANAALAYAM",
    "VANAM FOUNDATION",
    "CONTACT US",
    "BOOK NOW",
  ];

  const banner_image = [
    "/banner1.png",
    "/banner2.png",
    "/banner3.png",
    "/banner4.png",
  ];

  const offerings = [
    {
      img: "/bed1.jpg",
      title: "Deluxe Room - 180sq.ft",
      button: "BOOK NOW",
    },
    {
      img: "/bed4.jpg",
      title: "Family Room - 400sq.ft",
      button: "BOOK NOW",
    },
    {
      img: "/bed2.jpg",
      title: "Suite Room - 300sq.ft",
      button: "BOOK NOW",
    },
    {
      img: "/bed5.jpg",
      title: "Dormitory Room - 500sq.ft",
      button: "BOOK NOW",
    },
  ];
  const amenities = [
    "Complimentary Wifi Access",
    "Air-conditioning",
    "42-inch Television",
    "Complimentary Bottled Water",
    "Tea & Coffee Maker",
    "Minibar",
    "Room Service",
    "In-room Safe",
    "Wardrobe",
    "Laundry Service (Chargeable)",
    "Kids Outdoor Play Area",
  ];

  const about_us = [
    {
      title: "ABOUT VANAALAYAM",
      content:
        "Vanaalayam, Located On The Coimbatore –Tiruchy Highway Near Palladam, Is The Flagship Eco-Green Recreation Park Of The Vanam India Foundation. Spread Across 18 Acres, It Stands As More Than A Lush Retreat—It Embodies A Vibrant Commitment To Sustainability And Community Harmony.",
    },
    {
      title: "MISSION",
      content:
        "Our Mission Is To Nurture A Community That Embraces Eco-Living, Celebrates Mindfully, And Works Collectively Towards Environmental Growth",
    },
    {
      title: "VISION",
      content:
        "To Shape A Future Where Living, Gathering, And Celebrating At Vanaalayam Naturally Gives Back To The Earth And Nurtures Harmony With Nature",
    },
  ];

  const gallery = [
    {
      img: "/bed1.jpg",
      alt: "bed1_image",
    },
    {
      img: "/bed2.jpg",
      alt: "bed2_image",
    },
    {
      img: "/bed3.jpg",
      alt: "bed3_image",
    },
    {
      img: "/bed4.jpg",
      alt: "bed4_image",
    },
    {
      img: "/bed5.jpg",
      alt: "bed5_image",
    },
  ];

  const why_choose_us = [
    {
      img: "/icon1.png",
      alt: "GREEN CAMPUS",
      content: "GREEN CAMPUS",
    },
    {
      img: "/icon2.png",
      alt: "PEACEFUL STAY AMIDST NATURE",
      content: "PEACEFUL STAY AMIDST NATURE",
    },
    {
      img: "/icon3.png",
      alt: "NATURE-BLENDED",
      content: "NATURE-BLENDED",
    },
    {
      img: "/icon4.png",
      alt: "PLASTIC-FREE ENVIRONMENT",
      content: "PLASTIC-FREE ENVIRONMENT",
    },
  ];

  function ButtonClick(setcount) {
    setRoomId(setcount);
    setOpen(true);
    console.log(setcount);
  }
  return (
    <div>
      {open && (
        <div id="Button-open">
          <Button id={roomId - 1} onClose={() => setOpen(false)} />
        </div>
      )}
      {/* navbar */}
      <nav className="main-nav">
        {navbar_items.map((item, index) =>
          item === "picture" ? (
            <img
              key={index}
              src="/toplogo.png"
              alt="Logo"
              className="nav-logo"
            />
          ) : item === "BOOK NOW" ? (
            <button
              key={index}
              className="nav-button"
              onClick={() => ButtonClick(1)}
            >
              BOOK NOW
            </button>
          ) : (
            <a
              key={index}
              className="nav-link"
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {item}
            </a>
          ),
        )}
      </nav>
      {/* image cauosual */}
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1000}
        loop={true}
      >
        {banner_image.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Banner ${index + 1}`}
              className="hero-image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* offerings */}
      <div>
        <h2 className="offerings-title">OFFERINGS</h2>

        <div className="rooms-container">
          {offerings.map((room, index) => (
            <div className="room-card" key={index}>
              <img src={room.img} alt={room.title} />

              <div className="room-content">
                <h3>{room.title}</h3>

                <button
                  className="room-book-btn"
                  onClick={() => ButtonClick(index + 2)}
                >
                  BOOK NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Amenities Section  */}
      <h1 className="amenities-title">Amenities</h1>
      <div className="facilities">
        {amenities.map((facility, index) => (
          <div className="feature" key={index}>
            <span className="check">✓</span>
            <span className="feature-text">{facility}</span>
          </div>
        ))}
      </div>
      {/* about us */}
      <div>
        <h1 className="about-title">ABOUT US</h1>
        <div className="about-wrapper">
          <img src="/about.jpg" alt="about_image" className="about-bg-image" />

          <div className="about-content-box">
            {about_us.map((about, index) => (
              <div key={index}>
                <h3>{about.title}</h3>
                <p className="about-item-text">{about.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* gallery section */}
      <div id="gallery" className="gallery-section">
        <h2 className="section-title">GALLERY</h2>
        <div className="gallery-wrapper">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={true}
            slidesPerView={3}
            spaceBetween={15}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={1000}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="gallery-swiper"
          >
            {gallery.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="gallery-card">
                  <img
                    src={image.img}
                    alt={image.alt}
                    className="gallery-image"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* why choose us */}
      <div className="why-choose-section">
        <img
          src="/about.jpg"
          alt="about_image"
          className="why-choose-bg-image"
        />
        <div className="why-choose-overlay">
          <div className="why-choose-inner">
            <h3 className="why-choose-title">WHY CHOOSE US?</h3>
            <h4 className="why-choose-tagline">
              At Vanaalayam, You Don’t Just Stay — You Experience Nature.
            </h4>
            <h4>
              Every Moment Here Contributes To The Growth Of Trees And A Greener
              Tomorrow.
            </h4>
            <div className="icons">
              {why_choose_us.map((image, index) => (
                <div className="icon-item" key={index}>
                  <img src={image.img} alt={image.alt} className="icon-img" />
                  <h4 className="icon-text">{image.content}</h4>
                </div>
              ))}
            </div>
            <div className="eco-space-wrapper">
              <img
                src="/icon5.png"
                alt="COMMUNITY-BUILT ECO SPACE"
                className="eco-space-img"
              />
              <p>COMMUNITY-BUILT ECO SPACE</p>
            </div>
          </div>
        </div>
      </div>
      <TestMonials />
    </div>
  );
}
