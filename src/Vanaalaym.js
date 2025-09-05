import { useState, useEffect } from "react";
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

const menuItems = [
  "HOME",
  "OFFERINGS",
  "ABOUT US",
  "GALLERY",
  "WHY CHOOSE US?",
  "FACILITIES",
  "CONTACT US",
];

const sectionMap = {
  HOME: "toplogo",
  OFFERINGS: "offerings",
  "ABOUT US": "aboutus",
  GALLERY: "gallery",
  "WHY CHOOSE US?": "whychooseus",
  FACILITIES: "facilities",
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

const Vanaalaym = () => {
  const [current, setCurrent] = useState(0);

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

  return (
    <Box>
      <AppBar
        position="static"
        color="inherit"
        elevation={1}
        sx={{ boxShadow: "0 2px 8px rgba(0,0,0,0.07)" }}
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
              style={{ height: 108, marginLeft: "140%" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "40px 60px 40px 2px",
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
            <ReserveButton variant="contained">RESERVE</ReserveButton>
          </Box>
        </Toolbar>
      </AppBar>
      {/* Hero Section Carousel */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: 780,
          marginLeft: "0%",
          backgroundImage: `url(${banner.image})`,
          backgroundSize: "cover",
          backgroundPosition: "left",
          display: "flex",
          alignItems: "center",
          transition: "background-image 0.5s",
        }}
      >
        <Container
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
      <Container id="offerings" maxWidth={false} sx={{ px: 0 }}>
        <Box
          sx={{
            width: "90%",
            py: { xs: 8, md: 8 },
            px: { xs: 2, md: 6 },
            background: "rgba(255,255,255,0.95)", // bright white overlay
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
                title: "SINGLE BED ROOMS",
                desc: "The 03 Single Bed Rooms At Our Resort",
              },
              {
                img: "/bed4.jpg",
                title: "SUITE ROOMS",
                desc: "The 02 Suite Rooms At Our Resort",
              },
              {
                img: "/bed2.jpg",
                title: "QUEEN SIZE ROOMS",
                desc: "The 16 Queen Size Rooms At Our Resort",
              },
              {
                img: "/bed5.jpg",
                title: "DORMITORY ROOMS",
                desc: "The 05 Dormitory Rooms At Our Resort",
              },
              {
                img: "/bed3.jpg",
                title: "KING SIZE ROOMS",
                desc: "The 16 King Size Rooms At Our Resort",
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
                  }}
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
                        borderColor: "#efe7d9ff",
                        color: "#efe7d9ff",
                      },
                    }}
                  >
                    Book Now
                  </Button>
                </Box>
              </Box>
            ))}
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
            right: "25px",
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
              Vanaalayam, Located On The Coimbatore–Tiruchy (Trichy) Highway
              Near Palladam, Is The Flagship Eco-Green Recreation Park Of The
              Vanam India Foundation. Spread Across 18 Acres, It Stands As More
              Than A Lush Retreat—It Embodies A Vibrant Commitment To
              Sustainability And Community Harmony.
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

      <Container id="gallery" maxWidth={false} sx={{ px: 0 }}>
        <Container maxWidth={false} sx={{ px: 0 }}>
          {/* GALLERY */}
          <Box sx={{ width: "100%", mt: 6, mb: 4 }}>
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
                maxWidth: 900,
                margin: "0 auto",
                px: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Arrow pointer */}
              <Box
                sx={{
                  position: "absolute",
                  top: -18,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 36,
                  height: 18,
                  zIndex: 2,
                  overflow: "visible",
                  pointerEvents: "none",
                }}
              >
                <div style={{ marginTop: "18px" }}>
                  <svg
                    width="36"
                    height="18"
                    viewBox="0 0 36 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon points="0,0 18,18 36,0" fill="#fff" />
                  </svg>
                </div>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  background: "#a07c54",
                  borderRadius: 8,
                  p: { xs: 2, md: 3 },
                  display: "flex",
                  gap: { xs: 2, md: 3 },
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: 220,
                  boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                  flexWrap: "nowrap",
                  width: "100%",
                  maxWidth: 900,
                }}
              >
                {[
                  "/bed1.jpg",
                  "/bed2.jpg",
                  "/bed3.jpg",
                  "/bed4.jpg",
                  "/bed5.jpg",
                ].map((img, idx) => (
                  <Box
                    key={img}
                    sx={{
                      width: { xs: 120, md: 220 },
                      height: { xs: 90, md: 160 },
                      overflow: "hidden",
                      background: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflowX: "hidden",
                      borderRadius: 1,
                    }}
                  >
                    <img
                      src={img}
                      alt={`Gallery ${idx + 1}`}
                      style={{
                        width: "200px",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
            <Box
              sx={{
                position: "relative",
                maxWidth: 1100,
                mx: "auto",
                px: 2,
              }}
            >
              {/* Arrow pointer */}
              <Box
                sx={{
                  position: "absolute",
                  top: -18,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 36,
                  height: 18,
                  zIndex: 2,
                  pointerEvents: "none",
                }}
              >
                <svg
                  width="36"
                  height="18"
                  viewBox="0 0 36 18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="0,0 18,18 36,0" fill="#ffffff" />
                </svg>
              </Box>

              {/* Brown strip with images */}
              <Box
                sx={{
                  background: "#a07c54",
                  borderRadius: 2,
                  p: { xs: 2, md: 3 },
                  display: "flex",
                  gap: { xs: 2, md: 3 },
                  justifyContent: "center",
                  alignItems: "center",

                  minHeight: { xs: 180, md: 220 },
                }}
              >
                {["/bed1.jpg", "/bed2.jpg", "/bed3.jpg", "/bed4.jpg"].map(
                  (img, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        width: { xs: 150, sm: 200, md: 240 },
                        height: { xs: 110, sm: 140, md: 160 },
                        borderRadius: 1,
                        overflow: "hidden",
                        background: "#fff",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                        flexShrink: 0,
                      }}
                    >
                      <Box
                        component="img"
                        src={img}
                        alt={`Gallery ${idx + 1}`}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    </Box>
                  )
                )}
              </Box>
            </Box>
          </Box>

          {/* WHY CHOOSE US */}
          <Box
            id="whychooseus"
            sx={{
              width: "1320px",
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
                At Vanaalayam, You Don’t Just Stay — You Experience Nature.{" "}
                <br />
                Every Moment Here Contributes To The Growth Of Trees And A
                Greener Tomorrow.
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
                        width: 40,
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
        </Container>
      </Container>
      <Container maxWidth={false} sx={{ px: 0 }}>
        {/* ACTIVITIES */}
        <Box
          id="facilities"
          sx={{
            width: "1345px",
            position: "relative",
            right: "25px",
            mt: { xs: 6, md: 8 },
            mb: { xs: 6, md: 8 },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
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
            <Box
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
            </Box>

            {/* right content */}
            <Box
              sx={{
                flex: 2,
                minWidth: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
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
                  lineHeight: 1.8,
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

        {/* NEAR BY */}
        <Box
          sx={{
            width: "1345px",
            position: "relative",
            right: "25px",
            mb: { xs: 6, md: 8 },
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
                { img: "/nearby1.jpg", label: "ISA FOUNDATION" },
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

        {/* VISIONARY + FOOTER INFO */}
        <Box
          sx={{
            width: "1280px",
            position: "relative",
            right: "25px",
            marginLeft: 0,
            background: "#a07c54",
            py: { xs: 4, md: 6 },
            px: { xs: 2, md: 4 },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              width: "100%",
              maxWidth: 1200,
              gap: { xs: 4, md: 6 },
            }}
          >
            {/* visionary image */}
            <Box
              sx={{
                flex: 1,
                minWidth: 280,
                maxWidth: 400,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src="/plant.jpg"
                alt="Visionary Behind Vanaalayam"
                sx={{
                  width: "100%",
                  maxHeight: 320,
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Box>

            {/* visionary text */}
            <Box
              sx={{
                flex: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 700,
                  color: "#fff",
                  mb: 2,
                  letterSpacing: 1,
                  fontSize: { xs: 20, md: 26 },
                }}
              >
                VISIONARY BEHIND VANAALAYAM
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "#fff",
                  fontSize: { xs: 15, md: 18 },
                  lineHeight: 1.8,
                }}
              >
                Vanaalayam, A Part Of The Vanam India Foundation, Was Founded By
                Visionary Industrialists And Agriculturalists From Tirupur,
                Coimbatore, And Erode. Committed To Environmental Conservation
                And Sustainable Living, They Envisioned A Green Sanctuary
                Promoting Plastic Free Practices, Tree Adoption, And Community
                Engagement. Visitors Can Walk Through Lush Greenery, Connect
                With Nature, And Participate In Initiatives That Support
                Sustainability. Guided By Their Passion, Vanaalayam Continues To
                Inspire Learning, Reflection, And Meaningful Action For A
                Greener Tomorrow.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* FOOTER CONTACT / FACILITIES / LOCATION with ENQUIRY button */}
        <Box
          sx={{
            marginTop: "120px",
            width: "1280px",
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
            >
              ENQUIRY NOW
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
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9791396444
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

            {/* Facilities */}
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
                FACILITIES
              </Typography>
              {[
                "ROOM SERVICE",
                "FREE WI-FI",
                "FREE PARKING",
                "UNIQUE GARDENS",
              ].map((t) => (
                <Typography
                  key={t}
                  sx={{
                    color: "#fff",
                    fontSize: 16,
                    mt: 2,
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  {t}
                </Typography>
              ))}
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
                  width: 260,
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
    </Box>
  );
};

export default Vanaalaym;
