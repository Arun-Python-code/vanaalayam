import React from "react";

export default function TestMonials() {
  const test = [
    {
      content:
        "Nice Property with great serenity. The staff are friendly and helpful. Property is well maintained and rooms are neat and clean...",
      name: "Ravi Kumar",
      role: "Guest",
      photo: "/guest1.jpg",
    },
    {
      content:
        "In Vaanalayam our stay refreshed and energised us to face things that were waiting for us at our home and workplace. We had a memorable experience!",
      name: "Anjali Sharma",
      role: "Guest",
      photo: "/guest2.jpg",
    },
    {
      content:
        "We stayed at this property for 2 nights and enjoyed the stay very much.  The staff went out of their way to make us comfortable . They were so flexible and made us feel at home at their place ..",
      name: "Manoj Verma",
      role: "Guest",
      photo: "/guest3.jpg",
    },
    {
      content:
        "A perfect place to unwind! Excellent Location and surroundings. Highly recommend for nature lovers and families looking for a peaceful stay!",
      name: "Priya Singh",
      role: "Guest",
      photo: "/guest4.jpg",
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
      img: "/guest1.jpg",
      name: "Mr. Ajay Rane",
      content:
        "Mr. Ajay Rane, the visionary founder of Vanaalayam, has passionately worked on bringing this dream to life for over a decade. His mission is to promote safe adventure and meaningful connections with nature.",
    },
    {
      img: "/guest2.jpg",
      name: "Ms. Anjali Sharma",
      content:
        "Ms. Anjali Sharma is dedicated to fostering eco-friendly practices and community engagement at Vanaalayam. Her efforts have inspired countless visitors to embrace sustainability.",
    },
    {
      img: "/guest3.jpg",
      name: "Mr. Manoj Verma",
      content:
        "Mr. Manoj Verma believes in the transformative power of nature. His contributions to Vanaalayam include innovative programs that connect people with the environment.",
    },
    {
      img: "/guest4.jpg",
      name: "Ms. Priya Singh",
      content:
        "Ms. Priya Singh has been instrumental in creating a serene and welcoming atmosphere at Vanaalayam. Her vision is to make every visitor's experience unforgettable.",
    },
  ];

  return (
    <>
      {/* Testmoniels */}
      <div
        style={{
          marginTop: "5%",
        }}
      >
        <h1 style={{ textAlign: "center" }}>VALUABLE TESTIMONIALS</h1>
        <div className="reviews-container">
          {test.map((item, index) => (
            <div
              className="review-card"
              key={index}
              style={{
                height: index === 1 || index === 2 ? "420px" : "400px",
                marginTop: index === 1 || index === 2 ? "15%" : "0%",
              }}
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
        <div style={{display:"flex", justifyContent:"space-between",  background: "#aab28b",padding:"2%", height:"340px"}}>
          <div style={{width:"25%", heightL:"20px", display:"flex",  justifyContent:"center",}}>
            <img src="/plant.jpg" alt="plant_image" style={{width:"100%", height:"100%", objectFit:"cover"}} />
          </div>
          {at_vanaam.map((vanaam, index) => (
            <div
              key={index}
              style={{
                width:"70%",
                display: "flex",
                flexDirection: "column",
                color: "white",
          
              }}
            >
              <div >
                <h1 style={{ textAlign: "left", paddingBottom:"0px",}}>{vanaam.title}</h1>
              </div>
              <p
                style={{
                  fontSize: "105%",
                  letterSpacing: "0.08em",
                  lineHeight: 1.7,
                }}
              >
                {vanaam.content}
              </p>

             <div style={{display:"flex", justifyContent:"center"}}>
               <button
                style={{
                  backgroundColor: "#c2a482",
                  border: "none",
                  padding: "10px 20px",
                  cursor: "pointer",
                }}
              >
                KNOW MORE
              </button>
             </div>
            </div>
          ))}
        </div>
        {/* Near by loctions dtails */}
        <div style={{ marginTop: "5%" }}>
          <h2 style={{ textAlign: "center", letterSpacing: "0.08em" }}>
            INSIDE
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              marginTop: "2%",
            }}
          >
            {inside_img.map((image, index) => (
              <div
                key={index}
                style={{ width: "290px", height: "210px", textAlign: "center" }}
              >
                <img
                  src={image.img}
                  alt={image.alt}
                  style={{ width: "100%", height: "100%" }}
                />
                <p style={{ letterSpacing: "letter-spacing: 0.08em;" }}>
                  {image.content}
                </p>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: "6%",
              height: "400px",
              position: "relative",
              background: "rgba(255,255,255,0.85)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              letterSpacing: "0.08em",
            }}
          >
            <img
              src="/about.jpg"
              alt="about_image"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: "-1",
              }}
            />
            <h2 style={{ textAlign: "center", marginTop: "0%" }}>NEAR BY</h2>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                marginTop: "3%",
              }}
            >
              {nearby.map((image, index) => (
                <div
                  key={index}
                  style={{
                    width: "240px",
                    height: "170px",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={image.img}
                    alt={image.alt}
                    style={{ width: "100%", height: "100%" }}
                  />
                  <p style={{ letterSpacing: "letter-spacing: 0.08em;" }}>
                    {image.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* visions */}
        <div style={{ background: "#a07c54" }}>
          <h2 style={{ textAlign: "center", color: "#fff", marginTop: "3%" }}>
            VISIONARY BEHIND VANAALAYAM
          </h2>

          {vision.map((vison, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                marginBottom: "25px",
                paddingLeft: "3%",
                paddingRight: "3%",
              }}
            >
              <div
                style={{
                  width: "260px",
                  height: "200px",
                  borderRadius: 2,
                  boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
                }}
              >
                <img
                  src={vison.img}
                  alt={vison.name}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  width: "70%",
                  marginLeft: "2%",
                  color: "#fff",
                }}
              >
                <p style={{ marginBottom: "0%", fontSize: "22px" }}>
                  {vison.name}
                </p>

                <p style={{ lineHeight: 1.7, fontSize: "16px" }}>
                  {vison.content}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* footer section */}
        <div style={{ height: "400px", position: "relative" }}>
          <button className="footer-button">BOOK NOw</button>
          <div className="footer-contact">
            {/* CONTACT */}
            <div className="footer-section">
              <h4 style={{ fontSize: 22 }}>CONTACT</h4>

              <div className="contact-details">
                <span className="detais">ADDRESS:</span>
                <span className="detais"> VANAALAYAM,TRICHY RD,</span>
                <span className="detais"> PALLADAM, TAMIL NADU 641662</span>

                <span className="detais" style={{ marginTop: "8px" }}>
                  PHONE:
                </span>
                <span>9791346444</span>
                <span className="detais">9791396444</span>

                <span className="detais" style={{ marginTop: "8px" }}>
                  MAIL ID:
                </span>
                <span className="detais">
                  frontoffice@vanaalayamretreat.com
                </span>
              </div>
            </div>

            {/* QUESTIONS */}
            <div className="footer-section">
              <h4 style={{ fontSize: 22 }}>Have any Questions?</h4>

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
              <h4 style={{ fontSize: 22 }}>LOCATION</h4>

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
    </>
  );
}
