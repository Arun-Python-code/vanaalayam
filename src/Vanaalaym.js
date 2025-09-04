import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";

const menuItems = [
  "HOME",
  "OFFERINGS",
  "ABOUT US",
  "GALLERY",
  "WHY CHOOSE US?",
  "FACILITIES",
  "CONTACT US",
];

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
          minHeight: 660,
          backgroundImage: `url(${banner.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
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
      <Container maxWidth={false} sx={{ px: 0 }}>
        <Box
          sx={{
            width: "100%",
            py: 10,
            background: "rgba(255,255,255,0.7)",
            position: "relative",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Roboto', Arial, sans-serif",
              fontWeight: 300,
              fontSize: "24px",
              textAlign: "center",
              mb: 4,
              color: "#0e0000ff",
              letterSpacing: 2,
            }}
          >
            OFFERINGS
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 10, // Increased gap between cards
              maxWidth: 1300, // Increased max width
              margin: "0 auto",
            }}
          >
            {/* Left Column */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {/* Single Bed Room */}
              <Box
                sx={{
                  display: "flex",
                  gap: 5, // Increased gap inside card
                  alignItems: "flex-start",
                  justifyContent: "center",
                  background: "rgba(255,255,255,0.9)",
                  borderRadius: 3,
                  p: 4, // Increased padding
                }}
              >
                <img
                  src="/bed1.jpg"
                  alt="Single Bed Room"
                  style={{ width: 220, height: "100%", objectFit: "cover" }} // Increased image size
                />
                <Box
                  sx={{
                    minWidth: 220,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    position: "relative",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "'Roboto', Arial, sans-serif",
                      fontWeight: 300,
                      fontSize: "18px",
                      color: "#000000ff",
                    }}
                  >
                    SINGLE BED ROOMS
                  </Typography>
                  <Typography variant="body1" sx={{ my: 2, fontSize: "16px" }}>
                    The 03 Single Bed Rooms
                    <br />
                    At Our Resort
                  </Typography>
                  <Box
                    sx={{ position: "absolute", top: 98, right: 10, bottom: 0 }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        marginTop:'20px',
                        background: "#c2a482",
                        color: "#7d6a4a",
                        fontWeight: 700,
                        boxShadow: "none",
                        textTransform: "none",
                        fontSize: 16,
                        borderRadius: 0,
                        px: 3,
                        py: 1,
                      }}
                    >
                      Book Now
                    </Button>
                  </Box>
                </Box>
              </Box>
              {/* Queen Size Room */}
              <Box
                sx={{
                  display: "flex",
                  gap: 5,
                  alignItems: "flex-start",
                  justifyContent: "center",
                  background: "rgba(255,255,255,0.9)",
                  borderRadius: 3,
                  p: 4,
                }}
              >
                <img
                  src="/bed2.jpg"
                  alt="Queen Size Room"
                  style={{ width: 220, height: 140, objectFit: "cover" }}
                />
                <Box
                  sx={{
                    minWidth: 220,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    position: "relative",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "'Roboto', Arial, sans-serif",
                      fontWeight: 300,
                      fontSize: "18px",
                      color: "#000000ff",
                    }}
                  >
                    QUEEN SIZE ROOMS
                  </Typography>
                  <Typography variant="body1" sx={{ my: 2, fontSize: "16px" }}>
                    The 16 Queen Size Rooms
                    <br />
                    At Our Resort
                  </Typography>
                  <Box
                    sx={{ position: "absolute", top: 98, right: 10, bottom: 0 }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        background: "#c2a482",
                        color: "#7d6a4a",
                        fontWeight: 700,
                        boxShadow: "none",
                        textTransform: "none",
                        fontSize: 16,
                        borderRadius: 0,
                        px: 3,
                        py: 1,
                      }}
                    >
                      Book Now
                    </Button>
                  </Box>
                </Box>
              </Box>
              {/* King Size Room */}
              <Box
                sx={{
                  display: "flex",
                  gap: 5,
                  alignItems: "flex-start",
                  justifyContent: "center",
                  background: "rgba(255,255,255,0.9)",
                  borderRadius: 3,
                  p: 4,
                }}
              >
                <img
                  src="/bed3.jpg"
                  alt="King Size Room"
                  style={{ width: 220, height: 140, objectFit: "cover" }}
                />
                <Box
                  sx={{
                    minWidth: 220,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    position: "relative",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "'Roboto', Arial, sans-serif",
                      fontWeight: 300,
                      fontSize: "18px",
                      color: "#000000ff",
                    }}
                  >
                    KING SIZE ROOMS
                  </Typography>
                  <Typography variant="body1" sx={{ my: 2, fontSize: "16px" }}>
                    The 16 King Size Rooms
                    <br />
                    At Our Resort
                  </Typography>
                  <Box
                    sx={{ position: "absolute", top: 98, right: 10, bottom: 0 }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        background: "#c2a482",
                        color: "#7d6a4a",
                        fontWeight: 700,
                        boxShadow: "none",
                        textTransform: "none",
                        fontSize: 16,
                        borderRadius: 0,
                        px: 3,
                        py: 1,
                      }}
                    >
                      Book Now
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
            {/* Right Column */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {/* Suite Room */}
              <Box
                sx={{
                  display: "flex",
                  gap: 5,
                  alignItems: "flex-start",
                  justifyContent: "center",
                  background: "rgba(255,255,255,0.9)",
                  borderRadius: 3,
                  p: 4,
                }}
              >
                <img
                  src="/bed4.jpg"
                  alt="Suite Room"
                  style={{ width: 220, height: 140, objectFit: "cover" }}
                />
                <Box
                  sx={{
                    minWidth: 220,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    position: "relative",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "'Roboto', Arial, sans-serif",
                      fontWeight: 300,
                      fontSize: "18px",
                      color: "#000000ff",
                    }}
                  >
                    SUITE ROOMS
                  </Typography>
                  <Typography variant="body1" sx={{ my: 2, fontSize: "16px" }}>
                    The 02 Suite Rooms
                    <br />
                    At Our Resort
                  </Typography>
                  <Box
                    sx={{ position: "absolute", top: 98, right: 10, bottom: 0 }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        background: "#c2a482",
                        color: "#7d6a4a",
                        fontWeight: 700,
                        boxShadow: "none",
                        textTransform: "none",
                        fontSize: 16,
                        borderRadius: 0,
                        px: 3,
                        py: 1,
                      }}
                    >
                      Book Now
                    </Button>
                  </Box>
                </Box>
              </Box>
              {/* Dormitory Room */}
              <Box
                sx={{
                  display: "flex",
                  gap: 5,
                  alignItems: "flex-start",
                  justifyContent: "center",
                  background: "rgba(255,255,255,0.9)",
                  borderRadius: 3,
                  p: 4,
                }}
              >
                <img
                  src="/bed5.jpg"
                  alt="Dormitory Room"
                  style={{ width: 220, height: 140, objectFit: "cover" }}
                />
                <Box
                  sx={{
                    minWidth: 220,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    position: "relative",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "'Roboto', Arial, sans-serif",
                      fontWeight: 300,
                      fontSize: "18px",
                      color: "#000000ff",
                    }}
                  >
                    DORMITORY ROOMS
                  </Typography>
                  <Typography variant="body1" sx={{ my: 2, fontSize: "16px" }}>
                    The 05 Dormitory Rooms
                    <br />
                    At Our Resort
                  </Typography>
                  <Box
                    sx={{ position: "absolute", top: 98, right: 10, bottom: 0 }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        background: "#c2a482",
                        color: "#7d6a4a",
                        fontWeight: 700,
                        boxShadow: "none",
                        textTransform: "none",
                        fontSize: 16,
                        borderRadius: 0,
                        px: 3,
                        py: 1,
                      }}
                    >
                      Book Now
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <Container maxWidth={false} sx={{ px: 0 }}>
        <Box
          sx={{
            width: "100%",
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
              background: "rgba(151, 156, 123, 0.95)",
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
      <Container maxWidth={false} sx={{ px: 0 }}>
        <Box sx={{ width: "100%", mt: 6, mb: 2 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              fontSize: "18px",
              textAlign: "center",
              mb: 3,
              color: "#222",
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
        </Box>
      </Container>
      <Container maxWidth={false} sx={{ px: 0 }}>
        <Box sx={{ width: "100%", marginTop: "10%", mb: 2 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              textAlign: "center",
              mb: 2,
              color: "#000",
              letterSpacing: 1,
            }}
          >
            WHY CHOOSE US?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "#222",
              mb: 2,
              fontWeight: 500,
              fontSize: 16,
            }}
          >
            At Vanaalayam, You Don't Just Stay — You Experience Nature.
            <br />
            Every Moment Here Contributes To The Growth Of Trees And A Greener
            Tomorrow.
          </Typography>
          {/* <Box
            sx={{
              width: "100%",
              maxWidth: 900,
              margin: "8% auto 0 auto",
              backgroundSize: "cover",
              backgroundPosition: "center",
              py: 4,
              px: { xs: 2, md: 4 },
              borderRadius: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              mb: 2,
              position: "relative",
              opacity: 0.95,
            }}
          > */}
            {/* <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "center",
                alignItems: "center",
                gap: { xs: 3, md: 6 },
                width: "100%",
                mb: 2,
              }}
            >
              {[
                { icon: "/icon1.png", label: "GREEN CAMPUS" },
                { icon: "/icon2.png", label: "PEACEFUL STAY AMIDST NATURE" },
                { icon: "/icon3.png", label: "NATURE-BLENDED" },
              ].map((item, idx) => (
                <Box
                  key={item.label}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: 180,
                  }}
                >
                  <Box
                    sx={{
                      width: 38,
                      height: 38,
                      mb: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={item.icon}
                      alt={item.label}
                      style={{
                        width: "100%",
                        height: "100%",
                        filter:
                          "invert(32%) sepia(24%) saturate(1100%) hue-rotate(10deg) brightness(90%)",
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "#a07c54",
                      fontWeight: 700,
                      fontSize: 15,
                      textAlign: "center",
                      mb: 0,
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              ))}
            </Box> */}
            {/* <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "center",
                alignItems: "center",
                gap: { xs: 3, md: 6 },
                width: "100%",
              }}
            >
              {[
                { icon: "/icon4.png", label: "PLASTIC-FREE ENVIRONMENT" },
                { icon: "/icon5.png", label: "COMMUNITY-BUILT ECO SPACE" },
              ].map((item, idx) => (
                <Box
                  key={item.label}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: 180,
                  }}
                >
                  <Box
                    sx={{
                      width: 38,
                      height: 38,
                      mb: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={item.icon}
                      alt={item.label}
                      style={{
                        width: "100%",
                        height: "100%",
                        filter:
                          "invert(32%) sepia(24%) saturate(1100%) hue-rotate(10deg) brightness(90%)",
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "#a07c54",
                      fontWeight: 700,
                      fontSize: 15,
                      textAlign: "center",
                      mb: 0,
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              ))}
            </Box> */}
          {/* </Box> */}
          <Box sx={{ width: "100%", mt: 8, mb: 2 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                textAlign: "center",
                mb: 2,
                color: "#a07c54",
                letterSpacing: 1,
              }}
            >
              WHY CHOOSE US?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                color: "#222",
                mb: 2,
                fontWeight: 500,
                fontSize: 16,
              }}
            >
              At Vanaalayam, You Don't Just Stay — You Experience Nature.
              <br />
              Every Moment Here Contributes To The Growth Of Trees And A Greener
              Tomorrow.
            </Typography>
            <Box
              sx={{
                width: "100%",
                maxWidth: 900,
                margin: "0 auto",
                backgroundSize: "cover",
                backgroundPosition: "center",
                py: 4,
                px: { xs: 2, md: 4 },
                borderRadius: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                mb: 2,
                position: "relative",
                opacity: 0.95,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  justifyContent: "center",
                  alignItems: "center",
                  gap: { xs: 3, md: 6 },
                  width: "100%",
                  mb: 2,
                }}
              >
                {[
                  { icon: "/icon1.png", label: "GREEN CAMPUS" },
                  { icon: "/icon2.png", label: "PEACEFUL STAY AMIDST NATURE" },
                  { icon: "/icon3.png", label: "NATURE-BLENDED" },
                ].map((item, idx) => (
                  <Box
                    key={item.label}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      width: 180,
                    }}
                  >
                    <Box
                      sx={{
                        width: 38,
                        height: 38,
                        mb: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={item.icon}
                        alt={item.label}
                        style={{
                          width: "100%",
                          height: "100%",
                          filter:
                            "invert(32%) sepia(24%) saturate(1100%) hue-rotate(10deg) brightness(90%)",
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: "#a07c54",
                        fontWeight: 700,
                        fontSize: 15,
                        textAlign: "center",
                        mb: 0,
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  justifyContent: "center",
                  alignItems: "center",
                  gap: { xs: 3, md: 6 },
                  width: "100%",
                }}
              >
                {[
                  { icon: "/icon4.png", label: "PLASTIC-FREE ENVIRONMENT" },
                  { icon: "/icon5.png", label: "COMMUNITY-BUILT ECO SPACE" },
                ].map((item, idx) => (
                  <Box
                    key={item.label}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      width: 180,
                    }}
                  >
                    <Box
                      sx={{
                        width: 38,
                        height: 38,
                        mb: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={item.icon}
                        alt={item.label}
                        style={{
                          width: "100%",
                          height: "100%",
                          filter:
                            "invert(32%) sepia(24%) saturate(1100%) hue-rotate(10deg) brightness(90%)",
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: "#a07c54",
                        fontWeight: 700,
                        fontSize: 15,
                        textAlign: "center",
                        mb: 0,
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              mt: 6,
              mb: 0,
              display: "flex",
              py: 0,
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
                maxWidth: 1250,
                width: "100%",
                px: { xs: 2, md: 4 },
                py: { xs: 3, md: 4 },
                gap: { xs: 3, md: 4 },
                boxShadow: "none",
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  minWidth: 320,
                  maxWidth: 420,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="/about.jpg"
                  alt="Nature Stay"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 12,
                    objectFit: "cover",
                    maxHeight: 320,
                  }}
                />
              </Box>
              <Box
                sx={{
                  flex: 2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  px: { xs: 0, md: 2 },
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    color: "#fff",
                    mb: 2,
                    textAlign: "left",
                    letterSpacing: 1,
                    fontSize: { xs: 22, md: 28 },
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  ACTIVITIES AT OUR NATURE STAY
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#fff",
                    fontSize: { xs: 15, md: 18 },
                    lineHeight: 1.8,
                    mb: 3,
                    textAlign: "left",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  At Vanaalayam, Nature Meets Community And Learning In A
                  Plastic-Free Environment. Guests Can Adopt A Tree, Contribute
                  To Saplings, Or Participate In The Adopt A Tree Program, Where
                  The Foundation Plants, Nurtures, And Monitors The Growth Of A
                  Tree On Your Behalf. Guests Can Walk Through Our Lush Green
                  Campus And Enjoy Pure, Nature-Friendly Food, Or Host Small
                  Gatherings, Workshops, Or Cultural Programs Amid The Natural
                  Surroundings. Every Visit Supports Conservation And Helps Grow
                  A Greener, Sustainable Tomorrow.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    background: "#c2a482",
                    color: "#7d6a4a",
                    fontWeight: 700,
                    boxShadow: "none",
                    textTransform: "none",
                    fontSize: 16,
                    borderRadius: 0,
                    px: 4,
                    py: 1,
                    alignSelf: "flex-start",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  KNOW MORE
                </Button>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              mt: 0,
              mb: 6,
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: 1200,
                px: { xs: 2, md: 4 },
                py: { xs: 4, md: 6 },
                // background: "rgba(255,255,255,0.7)",
                borderRadius: 0,
                boxShadow: "none",
                position: "relative",
                zIndex: 1,
              }}
            >
              <Typography
                variant="h5"
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
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },

                  justifyContent: "center",
                  alignItems: "flex-start",
                  gap: { xs: 4, md: 6 },
                }}
              >
                {[
                  { img: "/nearby1.jpg", label: "ISA FOUNDATION" },
                  { img: "/nearby3.jpg", label: "OOTY" },
                  { img: "/nearby4.jpg", label: "SIRUVANI WATERFALLS" },
                  { img: "/nearby2.jpg", label: "AIRPORT" },
                ].map((item, idx) => (
                  <Box
                    key={item.label}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      width: { xs: "100%", md: 220 },
                    }}
                  >
                    <Box
                      sx={{
                        width: 220,
                        height: 150,
                        mb: 2,
                        background: "#eee",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                      }}
                    >
                      <img
                        src={item.img}
                        alt={item.label}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: 0,
                        }}
                      />
                    </Box>
                    <Typography
                      variant="subtitle1"
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
            {/* Optional faint background overlay for nature effect */}
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
                borderRadius: 0,
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Vanaalaym;
