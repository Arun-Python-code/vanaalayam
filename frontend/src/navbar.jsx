import React from "react";
import "./App.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TestMonials from "./TestMonials";

export default function Navbar() {
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
  return (
    <div>
      {/* navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: "7px",
          marginLeft: "100px",
          marginRight: "100px",
        }}
      >
        {navbar_items.map((item, index) =>
          item === "picture" ? (
            <img
              src="/toplogo.png"
              alt="Logo"
              style={{ width: "100px", height: "auto" }}
            />
          ) : item === "BOOK NOW" ? (
            <button
              style={{
                backgroundColor: "#c2a482",
                border: "none",
                padding: "10px 20px",
                cursor: "pointer",
              }}
            >
              BOOK NOW
            </button>
          ) : (
            <a
              style={{ textDecoration: "none", color: "black" }}
              key={index}
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
              style={{
                marginTop: "1px",
                width: "100%",
                height: "82vh",
                display: "block",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* offerings */}
      <div>
        <h2 style={{ textAlign: "center", fontSize: "215%" }}>OFFERINGS</h2>

        <div className="rooms-container">
          {offerings.map((room, index) => (
            <div className="room-card" key={index}>
              <img src={room.img} alt={room.title} />

              <div
                className="room-content"
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontDisplay: "swap",
                  fontWeight: "900",
                  color: " #111",
                  letterSpacing: "0.00938em",
                }}
              >
                <h3>{room.title}</h3>

                <button
                  style={{
                    backgroundColor: "#c2a482",
                    border: "none",
                    padding: "10px 20px",
                    cursor: "pointer",
                    marginTop: "3%",
                  }}
                >
                  BOOK NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Amenities Section  */}
      <h1 style={{ textAlign: "center", fontSize: "200%", marginTop: "5%" }}>
        Amenities
      </h1>
      <div className="facilities">
        {amenities.map((facility, index) => (
          <div className="feature" key={index}>
            <span className="check" style={{ textAlign: "center" }}>
              ✓
            </span>
            <span
              style={{
                padding: "10px",
                fontWeight: "550",
                color: "#333",
                whiteSpace: "nowrap",
              }}
            >
              {facility}
            </span>
          </div>
        ))}
      </div>
      {/* about us */}
      <div>
        <h1 style={{ textAlign: "center", marginTop: "5%", fontSize: "200%" }}>
          ABOUT US
        </h1>
        <div
          style={{
            height: "575px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="/about.jpg"
            alt="about_image"
            style={{
              position: "absolute",
              height: "91%",
              width: "100%",
              zIndex: "-1",
            }}
          ></img>

          <p
            style={{
              boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
              width: "50%",
              background: "rgba(151, 156, 123, 0.95)",
              textAlign: "center",
              padding: "3%",
              marginTop: "6%",
              borderRadius: "3%",
              fontFamily: "Poppins, Arial, sans-serif",
              fontWeight: 600,
              color: "#fff",
              letterSpacing: 1,
            }}
          >
            {about_us.map((about, index) => (
              <div>
                <h3>{about.title}</h3>
                <p style={{ fontSize: "97%" }}>{about.content}</p>
              </div>
            ))}
          </p>
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
      <div style={{ marginTop: "1%", position: "relative", letterSpacing: "0.04em" }}>
        <img
          src="/about.jpg"
          alt="about_image"
          style={{
            position: "absolute",
            zIndex: "-1",
            height: "100%",
            width: "100%",
          }}
        />
        <div
          style={{
            background: "rgba(255,255,255,0.85)",
            width: "100%",
            height: "full",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "50px",
          }}
        >
          <div style={{ textAlign: "center", width: "70%" }}>
            <h3 style={{ marginTop: "5%", fontSize: "200%" }}>
              WHY CHOOSE US?
            </h3>
            <h4 style={{ textAlign: "center", padding: "2%" }}>
              At Vanaalayam, You Don’t Just Stay — You Experience Nature.
            </h4>
            <h4>
              {" "}
              Every Moment Here Contributes To The Growth Of Trees And A Greener
              Tomorrow.
            </h4>
            <div className="icons" style={{}}>
              {why_choose_us.map((image, index) => (
                <div key={index} style={{ display: "inline", marginTop: "3%" }}>
                  <img
                    src={image.img}
                    alt={image.alt}
                    style={{ width: "40px" }}
                  ></img>
                  <h4>{image.content}</h4>
                </div>
              ))}
            </div>
            <div>
              <img
                src="/icon5.png"
                alt="COMMUNITY-BUILT ECO SPACE"
                style={{ width: "40px", marginTop: "3%" }}
              />
              <p>COMMUNITY-BUILT ECO SPACE</p>
            </div>
          </div>
        </div>
      </div>
      <TestMonials/>
    </div>
  );
}
