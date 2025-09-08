import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import { CheckCircleOutlineRounded } from "@mui/icons-material";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import "./App.css";

const menuItems = [
  "HOME&OFFERINGS",
  "ABOUT US",
  "GALLERY",
  "AT VANAALAYAM",
  "VANAM FOUNDATION",
  "CONTACT US",
];

const sectionMap = {
  "HOME&OFFERINGS": "toplogo",
  "ABOUT US": "aboutus",
  GALLERY: "gallery",
  "AT VANAALAYAM": "whychooseus",
  "VANAM FOUNDATION": "facilities",
  "CONTACT US": "contactus",
};

const ReserveButton = styled(Button)({
  background: "#c2a482",
  color: "#7d6a4a",
  marginLeft: 16,
  fontWeight: 600,
  borderRadius: 0,
  boxShadow: "none",
  textTransform: "none",
  fontSize: 14,
  "&:hover": { background: "#bfa78f", color: "#7d6a4a" },
});

const banners = [
  {
    image: "/banner1.png",
    logo: "/toplogo.png",
    text: "Planting trees makes\nthe Earth happy",
    rightImage:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  },
  {
    image: "/banner2.png",
    logo: "/toplogo.png",
    text: "Join us to make a greener tomorrow",
    rightImage:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  },
  {
    image: "/banner3.png",
    logo: "/toplogo.png",
    text: "Grow with us for a better future",
    rightImage:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  },
  {
    image: "/banner4.png",
    logo: "/toplogo.png",
    text: "Experience nature's beauty at Vanaalayam",
    rightImage:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  },
];

const galleryImages = [
  "/bed1.jpg",
  "/bed2.jpg",
  "/bed3.jpg",
  "/bed4.jpg",
  "/bed5.jpg",
];

const Vanaalaym = () => {
  const [current, setCurrent] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [openBookingModal, setOpenBookingModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    roomType: "",
    checkIn: "",
    checkOut: "",
    email: "",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 6000); // 6 seconds interval for smoother scroll
    return () => clearInterval(interval);
  }, []);

  const banner = banners[current];

  const handleMenuClick = (item) => {
    const sectionId = sectionMap[item];
    if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleBookingModalOpen = () => {
    setOpenBookingModal(true);
  };

  const handleBookingModalClose = () => {
    setOpenBookingModal(false);
    setFormData({
      name: "",
      phoneNumber: "",
      roomType: "",
      checkIn: "",
      checkOut: "",
      email: "",
    }); // Reset form data
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // Post formData to backend
    console.log("Form Data Submitted:", formData);
    // Close modal after submission
    setOpenBookingModal(false);
  };

  // const swipeHandlers = useSwipeable({
  //   onSwipedLeft: () => handleSwipe("LEFT"),
  //   onSwipedRight: () => handleSwipe("RIGHT"),
  // });

  return (
    <Box style={{ overflowY: "hidden" }}>
      <AppBar
        position="fixed" // Changed from "static" to "sticky"
        color="inherit"
        elevation={1}
        sx={{ boxShadow: "0 2px 8px rgba(0,0,0,0.07}" }}
      >
        <Toolbar sx={{ justifyContent: "space-between", minHeight: 80 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* Header Logo */}
            <img
              src="/toplogo.png"
              alt="Vanaalayam Logo"
              style={{ height: 108, marginLeft: "100%" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "35px 60px 40px 2px",
            }}
          >
            {menuItems.map((item) => (
              <Typography
                key={item}
                sx={{
                  fontWeight: 700,
                  fontSize: 16,
                  mx: 2,
                  color: "#222",
                  cursor: "pointer",
                }}
                onClick={() => handleMenuClick(item)}
              >
                {item}
              </Typography>
            ))}
            <ReserveButton variant="contained" onClick={handleBookingModalOpen}>
              BOOK NOW
            </ReserveButton>
          </Box>
        </Toolbar>
      </AppBar>
      {/* Hero Section Carousel */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: 800,
          backgroundImage: `url(${banner.image})`,
          backgroundSize: "cover",
          backgroundPosition: "left",
          display: "flex",
          alignItems: "center",
          transition: "background-image 0.5s",
        }}
      >
        <Container
          id="toplogo"
          maxWidth="lg"
          sx={{
            display: "flex",
            alignItems: "center",
            height: "100%",
            justifyContent: "center", // Center content horizontally
            px: 2, // Padding to match other sections
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              minHeight: 300,
            }}
          >
            {/* Banner content here */}
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Banner right image here */}
          </Box>
        </Container>
        {/* Carousel Controls - Dots */}
        <Box
          sx={{
            position: "absolute",
            bottom: 24,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            gap: 1,
          }}
        >
          {banners.map((_, idx) => (
            <Box
              key={idx}
              onClick={() => setCurrent(idx)}
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: idx === current ? "#fff" : "rgba(255,255,255,0.5)",
                boxShadow: idx === current ? "0 0 6px #222" : "none",
                cursor: "pointer",
                border:
                  idx === current
                    ? "2px solid #d2b8a3"
                    : "2px solid transparent",
                transition: "all 0.2s",
              }}
            />
          ))}
        </Box>
      </Box>
      {/* Offerings Section - Updated UI */}
      <Container maxWidth={false} sx={{ px: 0 }}>
        <Box
          sx={{
            width: "90%",
            py: { xs: 8, md: 8 },
            px: { xs: 2, md: 6 },
            background: "rgba(255,255,255,0.95)",
          }}
        >
          {/* Section Title */}
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Poppins, Arial, sans-serif",
              fontWeight: 800,
              fontSize: { xs: 32, md: 40 },
              textAlign: "center",
              mb: { xs: 6, md: 8 },
              color: "#000",
              letterSpacing: 2,
            }}
          >
            OFFERINGS
          </Typography>

          {/* Wrapper */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              rowGap: { xs: 6, md: 8 },
              columnGap: { xs: 0, md: 8 },
              maxWidth: 1200,
              mx: "auto",
            }}
          >
            {/* Reusable component pattern */}
            {[
              {
                img: "/bed1.jpg",
                title: "Deluxe Room - 180sq.ft",
              },
              {
                img: "/bed4.jpg",
                title: "Family Room - 240sq.ft ",
              },
              {
                img: "/bed2.jpg",
                title: "Suite Room - 400sq.ft",
              },
              {
                img: "/bed5.jpg",
                title: "Dormitory Room - 500sq.ft",
              },
            ].map((item, idx) => (
              <Box
                key={idx}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "center",
                  gap: { xs: 3, md: 4 },
                }}
              >
                {/* Image */}
                <Box
                  component="img"
                  src={item.img}
                  alt={item.title}
                  sx={{
                    width: { xs: "100%", sm: 240, md: 280 },
                    height: { xs: 180, md: 200 },
                    objectFit: "cover",
                    borderRadius: 2,
                    boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
                    flexShrink: 0,
                    cursor: "pointer", // Add pointer cursor
                  }}
                  onClick={() => setOpenModal(true)} // Open modal on click
                />

                {/* Text */}
                <Box sx={{ flex: 1 }}>
                  <Typography
                    sx={{
                      fontFamily: "Poppins, Arial, sans-serif",
                      fontWeight: 800,
                      fontSize: { xs: 17, md: 25 },
                      color: "#000",
                      mb: 1,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins, Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: { xs: 14, md: 20 },
                      lineHeight: 1.9,
                      color: "#111",
                      mb: 2.5,
                    }}
                  >
                    {item.desc}
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: "#7d6a4a", // deep brown border
                      color: "#7d6a4a", // same brown text
                      fontWeight: 700,
                      textTransform: "none",
                      fontSize: { xs: 14, md: 16 },
                      px: 3,
                      py: 0.75,
                      borderWidth: 2,
                      borderRadius: "4px",
                      backgroundColor: "#efe7d9ff",
                      "&:hover": {
                        backgroundColor: "#efe7d9ff", // faint brown shade
                        borderColor: "#000",
                        color: "#000",
                      },
                    }}
                    onClick={handleBookingModalOpen} // Open booking modal
                  >
                    Book Now
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>

          {/* New Amenities Section */}
          <Box
            sx={{
              mt: { xs: 6, md: 8 },
              px: { xs: 2, md: 6 },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Poppins, Arial, sans-serif",
                fontWeight: 700,
                fontSize: { xs: 24, md: 28 },
                textAlign: "center",
                mb: { xs: 4, md: 6 },
                color: "#000",
              }}
            >
              Amenities
            </Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "repeat(4, 1fr)" },
                gap: { xs: 2, md: 2 },
                textAlign: "center",
              }}
            >
              {[
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
              ].map((amenity, idx) => (
                <Typography
                  key={idx}
                  sx={{
                    fontFamily: "Poppins, Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: { xs: 14, md: 16 },
                    textAlign: "left",
                    color: "#333",
                    whiteSpace: "nowrap", // Prevent line breaks
                  }}
                >
                  <CheckCircleOutlineRounded
                    style={{
                      height: "30px",
                      width: "30px",
                      position: "relative",
                      top: "10px",
                      color: "green",
                    }}
                  />{" "}
                  &nbsp;{amenity}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>

      <Container id="aboutus" maxWidth={false} sx={{ px: 0 }}>
        {/* ABOUT US Title with same background */}
        <Box
          sx={{
            width: "100%",
            py: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Poppins, Arial, sans-serif",
              fontWeight: 700,
              textAlign: "center",
              letterSpacing: 2,
              fontSize: 26,
            }}
          >
            ABOUT US
          </Typography>
        </Box>

        {/* ABOUT VANAALAYAM content box */}
        <Box
          sx={{
            width: "1345px",
            position: "relative",
            minHeight: 420,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: "url(/about.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            py: { xs: 4, md: 8 },
          }}
        >
          <Box
            sx={{
              background: "rgba(151, 156, 123, 0.95)", // same background color
              borderRadius: 3,
              maxWidth: 600,
              width: "100%",
              mx: 2,
              px: { xs: 3, md: 6 },
              py: { xs: 4, md: 6 },
              boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Poppins, Arial, sans-serif",
                fontWeight: 700,
                color: "#fff",
                textAlign: "center",
                mb: 2,
                letterSpacing: 1,
                fontSize: 20,
              }}
            >
              ABOUT VANAALAYAM
            </Typography>

            <Typography
              variant="body2"
              sx={{
                fontFamily: "Poppins, Arial, sans-serif",
                color: "#fff",
                textAlign: "center",
                mb: 3,
                fontSize: 15,
                lineHeight: 1.7,
              }}
            >
              Vanaalayam, Located On The Coimbatore–Tiruchy Highway Near
              Palladam, Is The Flagship Eco-Green Recreation Park Of The Vanam
              India Foundation. Spread Across 18 Acres, It Stands As More Than A
              Lush Retreat—It Embodies A Vibrant Commitment To Sustainability
              And Community Harmony.
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontFamily: "Poppins, Arial, sans-serif",
                fontWeight: 700,
                color: "#fff",
                textAlign: "center",
                mb: 1,
                letterSpacing: 1,
                fontSize: 18,
              }}
            >
              MISSION
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Poppins, Arial, sans-serif",
                color: "#fff",
                textAlign: "center",
                mb: 3,
                fontSize: 15,
                lineHeight: 1.7,
              }}
            >
              Our Mission Is To Nurture A Community That Embraces Eco-Living,
              Celebrates Mindfully, And Works Collectively Towards Environmental
              Growth
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontFamily: "Poppins, Arial, sans-serif",
                fontWeight: 700,
                color: "#fff",
                textAlign: "center",
                mb: 1,
                letterSpacing: 1,
                fontSize: 18,
              }}
            >
              VISION
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Poppins, Arial, sans-serif",
                color: "#fff",
                textAlign: "center",
                fontSize: 15,
                lineHeight: 1.7,
              }}
            >
              To Shape A Future Where Living, Gathering, And Celebrating At
              Vanaalayam Naturally Gives Back To The Earth And Nurtures Harmony
              With Nature
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* GALLERY */}
      <Container id="gallery" maxWidth={false} sx={{ px: 0 }}>
        <Box sx={{ width: "100%", mt: 6, mb: 0 }}>
          <Typography
            sx={{
              fontFamily: "Poppins, Arial, sans-serif",
              fontWeight: 800,
              fontSize: { xs: 22, md: 28 },
              textAlign: "center",
              mb: 4,
              color: "#111",
              letterSpacing: 1,
            }}
          >
            GALLERY
          </Typography>
          <Box
            sx={{
              position: "relative",
              borderRadius: "10px",
              maxWidth: 900,
              margin: "0 auto",
              px: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "baseline",
              backgroundColor: "#a07c54",
            }}
          >
            {/* Swiper Gallery with Autoplay */}
            <Swiper
              slidesPerView={3}
              centeredSlides={false}
              spaceBetween={30}
              pagination={{ clickable: true }}
              navigation={true}
              autoplay={{
                delay: 3000, // Auto-slide every 3 seconds
                disableOnInteraction: false, // Keep autoplay even after user interaction
              }}
              modules={[Navigation, Autoplay]} // Add Autoplay module
              style={{
                width: "100%",
                maxWidth: 900,
                minHeight: 220,
                paddingLeft: "43px",
                boxSizing: "border-box",
              }}
            >
              {galleryImages.map((img, idx) => (
                <SwiperSlide key={img}>
                  <Box
                    sx={{
                      width: { xs: 120, md: 220 },
                      height: { xs: 90, md: 160 },
                      overflow: "hidden",
                      background: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 2,
                      marginTop: "30px",
                    }}
                  >
                    <img
                      src={img}
                      alt={`Gallery ${idx + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      </Container>

      {/* WHY CHOOSE US */}
      <Box
        sx={{
          width: "1380px",
          position: "relative",
          right: "55px",
          backgroundImage: "url(/about.jpg)", // faint bg like screenshot
          backgroundSize: "cover",
          backgroundPosition: "center",
          py: { xs: 6, md: 8 },
          px: 2,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(255,255,255,0.85)", // white overlay
            zIndex: 0,
          }}
        />

        <Box
          sx={{
            position: "relative",
            maxWidth: 1100,
            mx: "auto",
            textAlign: "center",
            zIndex: 1,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins, Arial, sans-serif",
              fontWeight: 800,
              fontSize: { xs: 20, md: 24 },
              color: "#000",
              mb: 2,
            }}
          >
            WHY CHOOSE US?
          </Typography>

          <Typography
            sx={{
              fontFamily: "Poppins, Arial, sans-serif",
              fontWeight: 500,
              fontSize: { xs: 15, md: 17 },
              lineHeight: 1.7,
              color: "#111",
              mb: 5,
            }}
          >
            At Vanaalayam, You Don’t Just Stay — You Experience Nature. <br />
            Every Moment Here Contributes To The Growth Of Trees And A Greener
            Tomorrow.
          </Typography>

          {/* Icon list */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: { xs: 4, md: 8 },
            }}
          >
            {[
              { icon: "/icon1.png", label: "GREEN CAMPUS" },
              { icon: "/icon2.png", label: "PEACEFUL STAY AMIDST NATURE" },
              { icon: "/icon3.png", label: "NATURE-BLENDED" },
              { icon: "/icon4.png", label: "PLASTIC-FREE ENVIRONMENT" },
              { icon: "/icon5.png", label: "COMMUNITY-BUILT ECO SPACE" },
            ].map((item, idx) => (
              <Box
                key={idx}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: { xs: "40%", sm: "auto" },
                  textAlign: "center",
                }}
              >
                <Box
                  component="img"
                  src={item.icon}
                  alt={item.label}
                  sx={{
                    height: 40,
                    mb: 1,
                    objectFit: "contain",
                    filter:
                      "invert(32%) sepia(24%) saturate(1100%) hue-rotate(10deg) brightness(90%)",
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: "Poppins, Arial, sans-serif",
                    fontWeight: 700,
                    fontSize: { xs: 13, md: 15 },
                    color: "#333",
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      {/* TESTIMONIALS SECTION - UPDATED */}
      <Box
        sx={{
          width: "1280px",
          position: "relative",
          right: "25px",
          marginLeft: 0,
          backgroundImage: "url(/background.jpg)", // Replace with your background image
          backgroundSize: "cover",
          backgroundPosition: "center",
          py: { xs: 6, md: 8 },
          px: { xs: 2, md: 4 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins, Arial, sans-serif",
            fontWeight: 700,
            fontSize: { xs: 20, md: 26 },
            color: "#000",
            mb: 4,
            textAlign: "center",
          }}
        >
          VALUABLE TESTIMONIALS
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(4, 1fr)" },
            gap: { xs: 4, md: 4 },
            width: "100%",
            maxWidth: 1200,
          }}
        >
          {[
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
          ].map((testimonial, idx) => (
            <Box
              key={idx}
              sx={{
                background: "#8a8a6a",
                borderRadius: 2,
                p: 3,
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: 360, // Adjusted height to match the image
                marginTop: idx === 1 || idx === 2 ? "50px" : "0",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins, Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: { xs: 14, md: 18 },
                  color: "#fff",
                  mb: 2,
                  lineHeight: 1.6,
                }}
              >
                {testimonial.content}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: "auto",
                }}
              >
                <Box
                  component="img"
                  src={testimonial.photo} // Replace with the actual guest photo path
                  alt={testimonial.name}
                  sx={{
                    width: 50, // Adjust size as needed
                    height: 50,
                    borderRadius: "50%",
                    objectFit: "cover",
                    mr: 2,
                    border: "1px solid #fff", // Add border for styling
                  }}
                />
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Poppins, Arial, sans-serif",
                      fontWeight: 600,
                      fontSize: 17,
                      color: "#fff",
                    }}
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins, Arial, sans-serif",
                      fontWeight: 400,
                      fontSize: 16,
                      color: "#fff",
                    }}
                  >
                    {testimonial.role}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Container maxWidth={false} sx={{ px: 0 }}>
        {/* ACTIVITIES */}
        <Box
          sx={{
            width: "1345px",
            position: "relative",
            mt: { xs: 6, md: 0 },
            mb: { xs: 6, md: 0 },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            id="whychooseus"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              background: "#aab28b",
              borderRadius: 0,
              // maxWidth: 1200, // hard center alignment
              px: { xs: 2, md: 4 },
              py: { xs: 3, md: 4 },
              gap: { xs: 3, md: 4 },
            }}
          >
            {/* left image */}
            {/* <Box
              sx={{
                flex: 1,
                minWidth: { xs: 280, md: 380 },
                maxWidth: { md: 420 },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src="/about.jpg"
                alt="Nature Stay"
                sx={{
                  width: "100%",
                  maxHeight: 320,
                  objectFit: "cover",
                  borderRadius: 2,
                  display: "block",
                }}
              />
            </Box> */}

            {/* right content */}
            <Box
              sx={{
                flex: 2,
                minWidth: 0,
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                px: { xs: 0, md: 2 },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 700,
                  color: "#fff",
                  mb: 3,
                  letterSpacing: 1,
                  fontSize: { xs: 22, md: 28 },
                }}
              >
                AT VANAALAYAM
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "#fff",
                  fontSize: { xs: 15, md: 18 },
                  lineHeight: 1.7,
                  mb: 3,
                  textAlign: "left",
                }}
              >
                At Vanaalayam, Nature Meets Community And Learning In A
                Plastic-Free Environment. Guests Can Adopt A Tree, Contribute To
                Saplings, Or Participate In The Adopt A Tree Program, Where The
                Foundation Plants, Nurtures, And Monitors The Growth Of A Tree
                On Your Behalf. Guests Can Walk Through Our Lush Green Campus
                And Enjoy Pure, Nature-Friendly Food, Or Host Small Gatherings,
                Workshops, Or Cultural Programs Amid The Natural Surroundings.
                Every Visit Supports Conservation And Helps Grow A Greener,
                Sustainable Tomorrow.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  background: "#c2a482",
                  color: "#7d6a4a",
                  fontWeight: 700,
                  textTransform: "none",
                  fontSize: 16,
                  borderRadius: 0,
                  px: 4,
                  py: 1,
                  boxShadow: "none",
                  "&:hover": { background: "#b79773", boxShadow: "none" },
                }}
              >
                KNOW MORE
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "1345px",
            position: "relative",
            background: "#fff",
            right: "25px",
            mb: { xs: 6, md: 0 },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: 1200,
              px: { xs: 2, md: 4 },
              py: { xs: 4, md: 6 },
              position: "relative",
              zIndex: 1,
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                textAlign: "center",
                mb: 4,
                color: "#222",
                letterSpacing: 1,
                fontSize: 22,
              }}
            >
              INSIDE
            </Typography>

            {/* equal-width grid for perfect alignment */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(3, 0.5fr)",
                },
                gap: { xs: 4, md: 6 },
              }}
            >
              {[
                { img: "/inside1.jpg", label: "WALKTHROUGH PARK" },
                { img: "/inside2.jpg", label: "CHILDRENS PLAY AREA" },
                { img: "/inside3.jpg", label: "NAKSHATRA VANAM" },
              ].map((item) => (
                <Box
                  key={item.label}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "80%",
                      aspectRatio: "22 / 15", // same as 220x150 proportion, responsive
                      mb: 2,
                      background: "#eee",
                      borderRadius: 1,
                      overflow: "hidden",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    }}
                  >
                    <Box
                      component="img"
                      src={item.img}
                      alt={item.label}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      color: "#222",
                      fontWeight: 700,
                      fontSize: 16,
                      textAlign: "center",
                      letterSpacing: 1,
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* faint background overlay */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              zIndex: 0,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.18,
              pointerEvents: "none",
            }}
          />
        </Box>

        {/* NEAR BY */}
        <Box
          sx={{
            width: "1345px",
            position: "relative",
            mb: { xs: 6, md: 0 },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: 1200,
              px: { xs: 2, md: 4 },
              py: { xs: 4, md: 6 },
              position: "relative",
              zIndex: 1,
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                textAlign: "center",
                mb: 4,
                color: "#222",
                letterSpacing: 1,
                fontSize: 22,
              }}
            >
              NEAR BY
            </Typography>

            {/* equal-width grid for perfect alignment */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(4, 1fr)",
                },
                gap: { xs: 4, md: 6 },
              }}
            >
              {[
                { img: "/nearby1.jpg", label: "ISHA FOUNDATION" },
                { img: "/nearby3.jpg", label: "OOTY" },
                { img: "/nearby4.jpg", label: "SIRUVANI WATERFALLS" },
                { img: "/nearby2.jpg", label: "AIRPORT" },
              ].map((item) => (
                <Box
                  key={item.label}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      aspectRatio: "22 / 15", // same as 220x150 proportion, responsive
                      mb: 2,
                      background: "#eee",
                      borderRadius: 1,
                      overflow: "hidden",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    }}
                  >
                    <Box
                      component="img"
                      src={item.img}
                      alt={item.label}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      color: "#222",
                      fontWeight: 700,
                      fontSize: 16,
                      textAlign: "center",
                      letterSpacing: 1,
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* faint background overlay */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              zIndex: 0,
              backgroundImage: "url(/about.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.18,
              pointerEvents: "none",
            }}
          />
        </Box>

        {/* VISIONARY BEHIND VANAALAYAM */}
        {/* VISIONARY BEHIND VANAALAYAM */}
        <Box
          id="facilities"
          sx={{
            width: "1345px",
            mx: "auto",
            background: "#a07c54",
            py: { xs: 4, md: 6 },
            px: { xs: 2, md: 4 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              color: "#fff",
              mb: 4,
              letterSpacing: 1,
              fontSize: { xs: 20, md: 26 },
              textAlign: "center",
            }}
          >
            VISIONARY BEHIND VANAALAYAM
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: 4, md: 6 },
              width: "100%",
              maxWidth: 1200,
            }}
          >
            {[
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
            ].map((item, idx) => (
              <Box
                key={idx}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "center",
                  gap: { xs: 3, md: 4 },
                }}
              >
                {/* Guest Image */}
                <Box
                  component="img"
                  src={item.img}
                  alt={item.name}
                  sx={{
                    width: { xs: "100%", md: 280 },
                    height: { xs: 180, md: 200 },
                    objectFit: "cover",
                    borderRadius: 2,
                    boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
                  }}
                />

                {/* Guest Content */}
                <Box sx={{ flex: 1 }}>
                  <Typography
                    sx={{
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 700,
                      fontSize: { xs: 17, md: 22 },
                      color: "#fff",
                      mb: 1,
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 400,
                      fontSize: { xs: 14, md: 16 },
                      lineHeight: 1.7,
                      color: "#fff",
                    }}
                  >
                    {item.content}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* FOOTER CONTACT / FACILITIES / LOCATION with ENQUIRY button */}
        <Box
          sx={{
            marginTop: "100px",
            width: "1345px",
            position: "relative",
            right: "25px",
            background: "#a07c54",
            py: { xs: 6, md: 8 },
            px: { xs: 2, md: 4 },
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* vertical enquiry button (desktop only) */}
          <Box
            sx={{
              position: "absolute",
              top: { xs: 32, md: 40 },
              right: 0,
              zIndex: 2,
              display: { xs: "none", md: "block" },
            }}
          >
            <Button
              variant="contained"
              sx={{
                bottom: 97,
                marginRight: "50px",
                background: "#d2b8a3",
                rotate: "180deg",
                color: "#7d6a4a",
                fontWeight: 700,
                borderRadius: 0,
                boxShadow: "none",
                textTransform: "none",
                fontSize: 18,
                px: 1,
                py: 1,
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                letterSpacing: 2,
                minHeight: 120,
                minWidth: "0 !important",
                maxWidth: 45,
                "&:hover": { background: "#c2a482", color: "#7d6a4a" },
              }}
              onClick={handleBookingModalOpen}
            >
              BOOK NOW
            </Button>
          </Box>

          <Box
            sx={{
              width: "100%",
              maxWidth: 1200, // hard center alignment
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: { xs: 6, md: 4 },
              alignItems: "flex-start",
            }}
          >
            {/* Contact */}
            <Box sx={{ px: { xs: 0, md: 2 } }} id="contactus">
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 22,
                  fontFamily: "Montserrat, sans-serif",
                  borderBottom: "2px solid #fff",
                  display: "inline-block",
                  pb: 0.5,
                }}
              >
                CONTACT
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: 16,
                  mt: 2,
                  mb: 1,
                  fontFamily: "Montserrat, sans-serif",
                  whiteSpace: "pre-line",
                }}
              >
                ADDRESS: VANAALAYAM,{`\n`}TRICHY RD, PALLADAM,{`\n`}TAMIL NADU
                641662
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: 16,
                  mb: 1,
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                PHONE : 9791346444
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9791396444
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: 16,
                  mb: 1,
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                MAIL ID :
                <br />
                frontoffice@vanaalayamretreat.com
              </Typography>
            </Box>

            {/* Have any Questions? */}
            <Box sx={{ px: { xs: 0, md: 2 } }}>
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 22,
                  fontFamily: "Montserrat, sans-serif",
                  borderBottom: "2px solid #fff",
                  display: "inline-block",
                  pb: 0.5,
                }}
              >
                Have any Questions?
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: 16,
                  mt: 2,
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                E-mail us at <br />
                <span style={{ fontWeight: 600 }}>
                  frontoffice@vanaalayamretreat.com
                </span>{" "}
                and we'll
                <br />
                get in touch
              </Typography>
              <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#fff" }}
                >
                  <img
                    src="/facebook-logo.png"
                    alt="Facebook"
                    style={{ width: 28, height: 28 }}
                  />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#fff" }}
                >
                  <img
                    src="/instagram-logo.png"
                    alt="Instagram"
                    style={{ width: 28, height: 28 }}
                  />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#fff" }}
                >
                  <img
                    src="/TRIP.png"
                    alt="Instagram"
                    style={{ width: 28, height: 28 }}
                  />
                </a>
              </Box>
            </Box>

            {/* Location */}
            <Box sx={{ px: { xs: 0, md: 2 } }}>
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 22,
                  fontFamily: "Montserrat, sans-serif",
                  borderBottom: "2px solid #fff",
                  display: "inline-block",
                  pb: 0.5,
                }}
              >
                LOCATION
              </Typography>
              <Box
                sx={{
                  mt: 2,
                  width: 500,
                  height: 180, // keep same card size as your design
                  background: "#fff",
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
                }}
              >
                {/* Responsive iframe map */}
                <Box
                  component="iframe"
                  // Option A: simple embed via query (reliable)
                  src="https://www.google.com/maps?q=Vanaalayam%20Retreat%2C%20Trichy%20Rd%2C%20Palladam%20641662&output=embed"
                  // Option B (optional): try direct short link (may be blocked in some browsers)
                  // src="https://www.google.com/maps?q=https%3A%2F%2Fmaps.app.goo.gl%2F8kmQLJHKAYuRFcZF6&output=embed"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Vanaalayam Location"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      {/* Modal */}
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          {/* Close Icon */}
          <IconButton
            onClick={() => setOpenModal(false)}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Large Image */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 4,
            }}
          >
            <Box
              component="img"
              src={galleryImages[currentImageIndex]} // Display the selected image
              alt={`Room Image ${currentImageIndex + 1}`}
              sx={{
                width: "100%",
                maxHeight: 400,
                objectFit: "contain",
                borderRadius: 2,
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            />
          </Box>

          {/* Thumbnail Images */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
            }}
          >
            {galleryImages.map((img, idx) => (
              <Box
                key={idx}
                component="img"
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                onClick={() => setCurrentImageIndex(idx)} // Update the large image on thumbnail click
                sx={{
                  width: 80,
                  height: 80,
                  objectFit: "cover",
                  borderRadius: 2,
                  cursor: "pointer",
                  border:
                    currentImageIndex === idx
                      ? "2px solid #000"
                      : "2px solid transparent",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
              />
            ))}
          </Box>
        </Box>
      </Modal>

      {/* Booking Modal */}
      <Modal open={openBookingModal} onClose={handleBookingModalClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          {/* Close Icon */}
          <IconButton
            onClick={handleBookingModalClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Form */}
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Poppins, Arial, sans-serif",
              fontWeight: 700,
              mb: 3,
              textAlign: "center",
            }}
          >
            Book Your Stay
          </Typography>
          <Box
            component="form"
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 3,
            }}
          >
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
              fullWidth
              required
              inputProps={{ maxLength: 100 }} // Limit input to 100 characters
              error={formData.name.length > 100}
              helperText={
                formData.name.length > 100
                  ? "Name cannot exceed 100 characters."
                  : ""
              }
            />
            <TextField
              label="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleFormChange}
              fullWidth
              required
              inputProps={{ maxLength: 13, pattern: "[0-9]*" }} // Limit input to 13 digits and numbers only
              error={
                formData.phoneNumber.length > 13 || isNaN(formData.phoneNumber)
              }
              helperText={
                formData.phoneNumber.length > 13
                  ? "Phone number cannot exceed 13 digits."
                  : isNaN(formData.phoneNumber)
                  ? "Phone number must contain only digits."
                  : ""
              }
            />
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleFormChange}
              fullWidth
              required
              error={
                formData.email &&
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) // Validate email format
              }
              helperText={
                formData.email &&
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
                  ? "Please enter a valid email address."
                  : ""
              }
            />
            <TextField
              label="Check-In Date & Time"
              name="checkIn"
              type="datetime-local"
              value={formData.checkIn}
              onChange={handleFormChange}
              fullWidth
              required
              InputLabelProps={{
                shrink: true, // Ensures the label stays above the input
              }}
              error={
                formData.checkIn &&
                formData.checkOut &&
                new Date(formData.checkIn) >= new Date(formData.checkOut)
              }
              helperText={
                formData.checkIn &&
                formData.checkOut &&
                new Date(formData.checkIn) >= new Date(formData.checkOut)
                  ? "Check-In time must be earlier than Check-Out time."
                  : ""
              }
            />
            <TextField
              label="Check-Out Date & Time"
              name="checkOut"
              type="datetime-local"
              value={formData.checkOut}
              onChange={handleFormChange}
              fullWidth
              required
              InputLabelProps={{
                shrink: true, // Ensures the label stays above the input
              }}
              error={
                formData.checkIn &&
                formData.checkOut &&
                new Date(formData.checkOut) <= new Date(formData.checkIn)
              }
              helperText={
                formData.checkIn &&
                formData.checkOut &&
                new Date(formData.checkOut) <= new Date(formData.checkIn)
                  ? "Check-Out time must be later than Check-In time."
                  : ""
              }
            />
            <FormControl fullWidth required>
              <InputLabel>Room Type</InputLabel>
              <Select
                name="roomType"
                value={formData.roomType}
                onChange={handleFormChange}
              >
                <MenuItem value="Deluxe Room">Deluxe Room</MenuItem>
                <MenuItem value="Family Room">Family Room</MenuItem>
                <MenuItem value="Suite Room">Suite Room</MenuItem>
                <MenuItem value="Dormitory Room">Dormitory Room</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 3,
            }}
          >
            <Button
              variant="contained"
              sx={{
                background: "#c2a482",
                color: "#7d6a4a",
                fontWeight: 700,
                textTransform: "none",
                fontSize: 16,
                px: 4,
                py: 1,
                boxShadow: "none",
                "&:hover": { background: "#b79773", boxShadow: "none" },
              }}
              onClick={handleSubmit}
              disabled={
                !formData.name ||
                !formData.phoneNumber ||
                !formData.email ||
                !formData.checkIn ||
                !formData.checkOut ||
                new Date(formData.checkIn) >= new Date(formData.checkOut) ||
                new Date(formData.checkOut) <= new Date(formData.checkIn) ||
                formData.name.length > 100 ||
                formData.phoneNumber.length > 13 ||
                isNaN(formData.phoneNumber) ||
                (formData.email &&
                  !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
              }
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Vanaalaym;
