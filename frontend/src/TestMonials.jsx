import { useState } from "react";
import Button from "./Button";

export default function TestMonials() {
  const [roomId, setRoomId] = useState(null);
  const [open, setOpen] = useState(false);

  const test = [
    {
      content:
        "Nice Property with great serenity. The staff are friendly and helpful. Property is well maintained and rooms are neat and clean...",
      name: "Ravi Kumar",
      role: "Guest",
      photo: "/profile.png",
    },
    {
      content:
        "In Vaanalayam our stay refreshed and energised us to face things that were waiting for us at our home and workplace. We had a memorable experience!",
      name: "Anjali Sharma",
      role: "Guest",
      photo: "/profile.png",
    },
    {
      content:
        "We stayed at this property for 2 nights and enjoyed the stay very much.  The staff went out of their way to make us comfortable . They were so flexible and made us feel at home at their place ..",
      name: "Manoj Verma",
      role: "Guest",
      photo: "/profile.png",
    },
    {
      content:
        "A perfect place to unwind! Excellent Location and surroundings. Highly recommend for nature lovers and families looking for a peaceful stay!",
      name: "Priya Singh",
      role: "Guest",
      photo: "/profile.png",
    },
  ];

  const at_vanaam = [
    {
      title: "AT VANAALAYAM",
      content:
        "At Vanaalayam, Nature Meets Community And Learning In A Plastic-Free Environment. Guests Can Adopt A Tree, Contribute To Saplings, Or Participate In The Adopt A Tree Program, Where The Foundation Plants, Nurtures, And Monitors The Growth Of A Tree On Your Behalf. Guests Can Walk Through Our Lush Green Campus And Enjoy Pure, Nature-Friendly Food, Or Host Small Gatherings, Workshops, Or Cultural Programs Amid The Natural Surroundings. Every Visit Supports Conservation And Helps Grow A Greener, Sustainable Tomorrow.",
    },
  ];

  const inside_img = [
    {
      img: "/inside1.jpg",
      alt: "WALKTHROUGH PARK",
      content: "WALKTHROUGH PARK",
    },
    {
      img: "/inside2.jpg",
      alt: "CHILDRENS PLAY AREA",
      content: "CHILDRENS PLAY AREA",
    },
    {
      img: "/inside3.jpg",
      alt: "NAKSHATRA VANAM",
      content: "NAKSHATRA VANAM",
    },
  ];

  const nearby = [
    {
      img: "/nearby1.jpg",
      alt: "ISHA FOUNDATION",
      content: "ISHA FOUNDATION",
    },
    {
      img: "/nearby2.jpg",
      alt: "OOTY",
      content: "OOTY",
    },
    {
      img: "/nearby3.jpg",
      alt: "SIRUVANI WATERFALLS",
      content: "SIRUVANI WATERFALLS",
    },
    {
      img: "/nearby4.jpg",
      alt: "AIRPORT",
      content: "AIRPORT",
    },
  ];

  const vision = [
    {
      img: "/profile.png",
      name: "Mr. Ajay Rane",
      content:
        "Mr. Ajay Rane, the visionary founder of Vanaalayam, has passionately worked on bringing this dream to life for over a decade. His mission is to promote safe adventure and meaningful connections with nature.",
    },
    {
      img: "/profile.png",
      name: "Ms. Anjali Sharma",
      content:
        "Ms. Anjali Sharma is dedicated to fostering eco-friendly practices and community engagement at Vanaalayam. Her efforts have inspired countless visitors to embrace sustainability.",
    },
    {
      img: "/profile.png",
      name: "Mr. Manoj Verma",
      content:
        "Mr. Manoj Verma believes in the transformative power of nature. His contributions to Vanaalayam include innovative programs that connect people with the environment.",
    },
    {
      img: "/profile.png",
      name: "Ms. Priya Singh",
      content:
        "Ms. Priya Singh has been instrumental in creating a serene and welcoming atmosphere at Vanaalayam. Her vision is to make every visitor's experience unforgettable.",
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
      {/* Testmoniels */}
      <div className="testimonials-section">
        <h1 className="testimonials-title">VALUABLE TESTIMONIALS</h1>
        <div className="reviews-container">
          {test.map((item, index) => (
            <div
              className={`review-card ${
                index === 1 || index === 2 ? "review-card-tall" : ""
              }`}
              key={index}
            >
              <h3 className="review-text">{item.content}</h3>

              <div className="review-user">
                <img
                  src={item.photo}
                  alt={item.name}
                  className="review-photo"
                />

                <div className="review-info">
                  <div className="review-name">{item.name}</div>
                  <div className="review-role">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* At Vannalayam */}
        <div className="vanaalayam-banner">
          <div className="vanaalayam-image">
            <img src="/plant.jpg" alt="plant_image" />
          </div>
          {at_vanaam.map((vanaam, index) => (
            <div key={index} className="vanaalayam-content">
              <div>
                <h1 className="vanaalayam-title">{vanaam.title}</h1>
              </div>
              <p className="vanaalayam-text">{vanaam.content}</p>

              <div className="vanaalayam-btn-wrap">
                <button className="vanaalayam-btn">KNOW MORE</button>
              </div>
            </div>
          ))}
        </div>
        {/* Near by loctions dtails */}
        <div className="inside-section">
          <h2 className="inside-title">INSIDE</h2>
          <div className="inside-grid">
            {inside_img.map((image, index) => (
              <div key={index} className="inside-card">
                <img src={image.img} alt={image.alt} />
                <p className="card-caption">{image.content}</p>
              </div>
            ))}
          </div>
          <div className="nearby-section">
            <img
              src="/about.jpg"
              alt="about_image"
              className="nearby-bg-image"
            />
            <h2 className="nearby-title">NEAR BY</h2>
            <div className="nearby-grid">
              {nearby.map((image, index) => (
                <div key={index} className="nearby-card">
                  <img src={image.img} alt={image.alt} />
                  <p className="card-caption">{image.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* visions */}
        <div className="vision-section">
          <h2 className="vision-title">VISIONARY BEHIND VANAALAYAM</h2>

          {vision.map((vison, index) => (
            <div key={index} className="vision-card">
              <div className="vision-card-image">
                <img src={vison.img} alt={vison.name} />
              </div>

              <div className="vision-card-content">
                <p className="vision-name">{vison.name}</p>
                <p className="vision-text">{vison.content}</p>
              </div>
            </div>
          ))}
        </div>
        {/* footer section */}
        <div className="footer-wrapper">
          <button className="footer-button" onClick={() => ButtonClick(1)}>
            BOOK NOw
          </button>
          <div className="footer-contact">
            {/* CONTACT */}
            <div className="footer-section">
              <h4 className="footer-heading">CONTACT</h4>

              <div className="contact-details">
                <span className="detais">ADDRESS:</span>
                <span className="detais"> VANAALAYAM,TRICHY RD,</span>
                <span className="detais"> PALLADAM, TAMIL NADU 641662</span>

                <span className="detais detais-spaced">PHONE:</span>
                <span>9791346444</span>
                <span className="detais">9791396444</span>

                <span className="detais detais-spaced">MAIL ID:</span>
                <span className="detais">
                  frontoffice@vanaalayamretreat.com
                </span>
              </div>
            </div>

            {/* QUESTIONS */}
            <div className="footer-section">
              <h4 className="footer-heading">Have any Questions?</h4>

              <div className="question-details">
                <span className="detais">E-mail us at</span>
                <span className="detais">
                  frontoffice@vanaalayamretreat.com
                </span>
                <span className="detais">and we'll get in touch</span>

                <div className="social-icons">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/facebook-logo.png" alt="Facebook" />
                  </a>

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/instagram-logo.png" alt="Instagram" />
                  </a>

                  <a
                    href="https://tripadvisor.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/TRIP.png" alt="Tripadvisor" />
                  </a>
                </div>
              </div>
            </div>

            {/* LOCATION */}
            <div className="footer-section location-section">
              <h4 className="footer-heading">LOCATION</h4>

              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps?q=Vanaalayam%20Retreat%2C%20Trichy%20Rd%2C%20Palladam%20641662&output=embed"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Vanaalayam Location"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
