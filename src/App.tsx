import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Link,
  IconButton,
  Tooltip,
} from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";


const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const navLinks = ["Home", "Menu", "Events", "About", "Contact Us"];

  const socialLinks = [
    { name: "Facebook", icon: <FacebookIcon />, url: "https://facebook.com" },
    {
      name: "Instagram",
      icon: <InstagramIcon />,
      url: "https://instagram.com",
    },
    { name: "Twitter", icon: <TwitterIcon />, url: "https://twitter.com" },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const businessHours = [
    { days: "Monday - Tuesday", hours: "11:00 AM - 12:00 AM" },
    { days: "Wednesday - Saturday", hours: "11:00 AM - 2:00 AM" },
    { days: "Sunday", hours: "11:00 AM - 12:00 AM" },
  ];

  const currentYear = new Date().getFullYear();

  const themeColors = {
    dark: {
      background:
        "radial-gradient(circle at 60% 40%, #232946 0%, #070c1b 100%)",
      navBg: "rgba(7,12,27,0.95)",
      navBorder: "#232946",
      navText: "#f5c518",
      navHover: "#fff",
      navUnderline: "#f5c518",
      cardBg: "rgba(30, 40, 60, 0.55)",
      cardBorder: "1.5px solid rgba(245,197,24,0.15)",
      cardShadow: "0 8px 32px 0 rgba(31,38,135,0.37)",
      cardTitle: "#f5c518",
      cardText: "#fff",
      footerBg: "#10172b",
      footerText: "#f5c518",
      icon: "#f5c518",
      iconHover: "#d4af37",
    },
    light: {
      background:
        "radial-gradient(circle at 60% 40%, #fffbe6 0%, #e6e6e6 100%)",
      navBg: "rgba(255,255,255,0.95)",
      navBorder: "#e0e0e0",
      navText: "#232946",
      navHover: "#f5c518",
      navUnderline: "#f5c518",
      cardBg: "rgba(255,255,255,0.85)",
      cardBorder: "1.5px solid #f5c51833",
      cardShadow: "0 8px 32px 0 rgba(245,197,24,0.07)",
      cardTitle: "#232946",
      cardText: "#232946",
      footerBg: "#10172b", // keep same as dark mode
      footerText: "#f5c518",
      icon: "#232946",
      iconHover: "#d4af37",
    },
  };
  const colors = themeColors.dark; // Always use dark theme

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
            // scrolling down
            setShowNavbar(false);
          } else {
            // scrolling up
            setShowNavbar(true);
          }
          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        bgcolor: "transparent",
        color: colors.navText,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Roboto', sans-serif",
        background: colors.background,
        transition: "background 0.4s",
      }}
    >
      {/* Floating Phone Button */}
      <Tooltip title="Call us!" placement="left">
        <IconButton
          aria-label="Call Pearson Pub"
          href="tel:+19054305699"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            position: "fixed",
            bottom: 32,
            right: 32,
            bgcolor: "#25D366",
            color: "#fff",
            boxShadow: "0 4px 24px 0 rgba(37, 211, 102, 0.4)",
            zIndex: 9999,
            border: "3px solid #fff",
            animation: "pulse 1.5s infinite",
            "&:hover": {
              bgcolor: "#1ebe57",
              transform: "scale(1.1)",
              boxShadow: "0 6px 32px 0 rgba(37, 211, 102, 0.6)",
            },
            "@keyframes pulse": {
              "0%": { boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.7)" },
              "70%": { boxShadow: "0 0 0 12px rgba(37, 211, 102, 0)" },
              "100%": { boxShadow: "0 0 0 0 rgba(37, 211, 102, 0)" },
            },
          }}
        >
          <PhoneIcon fontSize="medium" />
        </IconButton>
      </Tooltip>

      {/* Header */}
      <Box
        component="nav"
        sx={{
          bgcolor: colors.navBg,
          position: "sticky",
          top: 0,
          zIndex: 50,
          boxShadow: 3,
          borderBottom: `1.5px solid ${colors.navBorder}`,
          backdropFilter: "blur(8px)",
          transform: showNavbar ? "translateY(0)" : "translateY(-110%)",
          transition: "transform 0.3s cubic-bezier(.4,2,.6,1)",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: 72,
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", userSelect: "none", letterSpacing: 1 }}
            >
              <Link
                href="#"
                color="inherit"
                underline="none"
                sx={{
                  cursor: "pointer",
                  fontFamily: "'Pacifico', cursive",
                  fontSize: 28,
                }}
              >
                The Pearson Pub
              </Link>
            </Typography>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 4,
                alignItems: "center",
              }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  color="inherit"
                  underline="none"
                  sx={{
                    position: "relative",
                    px: 2,
                    py: 1,
                    fontWeight: 500,
                    letterSpacing: 0.5,
                    borderRadius: 2,
                    userSelect: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    transition: "color 0.2s",
                    "&:hover": {
                      color: colors.navHover,
                    },
                    "&:after": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      left: 12,
                      right: 12,
                      bottom: 4,
                      height: 3,
                      borderRadius: 2,
                      background: colors.navUnderline,
                      opacity: 0,
                      transform: "scaleX(0)",
                      transition: "all 0.3s cubic-bezier(.4,2,.6,1)",
                    },
                    "&:hover:after": {
                      opacity: 1,
                      transform: "scaleX(1)",
                    },
                  }}
                >
                  {link}
                </Link>
              ))}
              {/* Canada Day 158 Badge */}
              <Box
                sx={{
                  ml: 3,
                  px: 2.5,
                  py: 0.5,
                  color: "#fff",
                  borderRadius: 3,
                  fontWeight: "bold",
                  fontSize: 17,
                  letterSpacing: 1,
                  boxShadow: "0 2px 8px #d32d2f33",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  animation: "canadaDayPulse 1.5s infinite",
                  "@keyframes canadaDayPulse": {
                    "0%": { boxShadow: "0 0 0 0 #d32d2f99" },
                    "70%": { boxShadow: "0 0 0 10px #d32d2f00" },
                    "100%": { boxShadow: "0 0 0 0 #d32d2f00" },
                  },
                }}
              >
                <span
                  className="canada-leaf-emoji"
                  role="img"
                  aria-label="Maple Leaf"
                >
                  🍁
                </span>
                Canada Day 158
              </Box>
            </Box>
            {/* Canada Day 158 Badge for mobile */}
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                alignItems: "center",
                justifyContent: "flex-end",
                width: "100%",
                mb: 1,
              }}
            >
              <Box
                sx={{
                  px: 2,
                  py: 0.5,
                  bgcolor: "#d32d2f",
                  color: "#fff",
                  borderRadius: 3,
                  fontWeight: "bold",
                  fontSize: 15,
                  letterSpacing: 1,
                  boxShadow: "0 2px 8px #d32d2f33",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  border: "2px solid #fff",
                  animation: "canadaDayPulse 1.5s infinite",
                  "@keyframes canadaDayPulse": {
                    "0%": { boxShadow: "0 0 0 0 #d32d2f99" },
                    "70%": { boxShadow: "0 0 0 10px #d32d2f00" },
                    "100%": { boxShadow: "0 0 0 0 #d32d2f00" },
                  },
                }}
              >
                <span
                  className="canada-leaf-emoji-mobile"
                  role="img"
                  aria-label="Maple Leaf"
                >
                  🍁
                </span>
                Canada Day 158
              </Box>
            </Box>
            <IconButton
              sx={{
                display: { md: "none" },
                color: colors.icon,
                transition: "transform 0.3s ease",
                transform: isMenuOpen ? "rotate(90deg)" : "rotate(0deg)",
              }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                width={28}
                height={28}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </IconButton>
          </Box>
          {isMenuOpen && (
            <Box
              sx={{
                display: { md: "none" },
                bgcolor: colors.navBg,
                pb: 2,
                borderRadius: 2,
                mt: 1,
                boxShadow: 2,
              }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  color="inherit"
                  underline="none"
                  sx={{
                    display: "block",
                    px: 4,
                    py: 2,
                    borderRadius: 2,
                    userSelect: "none",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    "&:hover": {
                      bgcolor: colors.navUnderline,
                      color: colors.navText,
                    },
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link}
                </Link>
              ))}
            </Box>
          )}
        </Container>
      </Box>

      {/* Hero Section */}
      <Box
        component="section"
        sx={{
          position: "relative",
          bgcolor: "#000",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: { xs: "60vh", md: "70vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.55)" }}
        />
        <Box
          sx={{
            position: "relative",
            textAlign: "center",
            maxWidth: "700px",
            px: 4,
            py: 6,
            mx: "auto",
            borderRadius: 6,
            background: colors.cardBg,
            boxShadow: colors.cardShadow,
            backdropFilter: "blur(8px)",
            border: colors.cardBorder,
            animation: "fadeInUp 1.2s cubic-bezier(.4,2,.6,1)",
            "@keyframes fadeInUp": {
              "0%": { opacity: 0, transform: "translateY(40px)" },
              "100%": { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: colors.cardTitle,
              mb: 2,
              letterSpacing: 1,
              textShadow: "0 2px 12px #000, 0 1px 0 #d4af37",
              animation: "fadeIn 1.5s cubic-bezier(.4,2,.6,1)",
              "@keyframes fadeIn": {
                "0%": { opacity: 0 },
                "100%": { opacity: 1 },
              },
            }}
          >
            Welcome to The Pearson Pub
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: colors.cardText,
              mb: 4,
              opacity: 0.85,
              fontWeight: 400,
            }}
          >
            <span className="hero-highlight">
              We’re almost ready — stay tuned for something truly special!
            </span>
          </Typography>
        </Box>
      </Box>

      {/* Events & Specials Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          justifyContent: "center",
          alignItems: "stretch",
          px: { xs: 2, md: 8 },
          py: 8,
        }}
      >
        <Box
          sx={{
            flex: 1,
            minWidth: 220,
            maxWidth: 380,
            minHeight: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            bgcolor: colors.cardBg,
            border: colors.cardBorder,
            borderRadius: 5,
            boxShadow: colors.cardShadow,
            p: 3,
            animation: "slideInLeft 1s",
            "@keyframes slideInLeft": {
              "0%": { opacity: 0, transform: "translateX(-60px)" },
              "100%": { opacity: 1, transform: "translateX(0)" },
            },
            transition: "box-shadow 0.3s",
            "&:hover": {
              boxShadow: "0 8px 32px 0 #f5c51855",
            },
            borderTop: "6px solid #d32d2f", // Canada Day accent
          }}
        >
          <Box
            sx={{
              width: "100%",
              aspectRatio: "3/4",
              mb: 2,
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: "0 4px 24px 0 #0003",
              background: "#222",
              position: "relative",
              border: "2px solid #fff",
            }}
          >
            <img
              src="./images/pub/pearson_event.png"
              alt="Pearson Events"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                display: "block",
                transition: "transform 0.5s cubic-bezier(.4,2,.6,1)",
                cursor: "pointer",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.04)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                bgcolor: "rgba(211,45,47,0.85)",
                color: "#fff",
                py: 1,
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 16,
                letterSpacing: 1,
                textShadow: "0 1px 4px #000",
              }}
            >
              Events Poster
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                bgcolor: "#fff",
                color: "#d32d2f",
                px: 1.5,
                py: 0.5,
                borderRadius: 2,
                fontWeight: "bold",
                fontSize: 13,
                boxShadow: "0 2px 8px #d32d2f33",
                letterSpacing: 1,
              }}
            >
              🍁 Canada Day 158
            </Box>
          </Box>
          <Typography
            variant="h5"
            sx={{
              color: colors.cardTitle,
              fontWeight: "bold",
              mb: 1.5,
              letterSpacing: 1,
            }}
          >
            Pearson Events
          </Typography>
          <Typography
            sx={{
              color: colors.cardText,
              fontSize: 16,
              mb: 1.5,
              textAlign: "center",
              opacity: 0.92,
            }}
          >
            Join us for live music, trivia nights, and special community
            gatherings every week!
          </Typography>
        </Box>
        <Box
          sx={{
            flex: 1,
            minWidth: 220,
            maxWidth: 380,
            minHeight: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            bgcolor: colors.cardBg,
            border: colors.cardBorder,
            borderRadius: 5,
            boxShadow: colors.cardShadow,
            p: 3,
            animation: "slideInRight 1s",
            "@keyframes slideInRight": {
              "0%": { opacity: 0, transform: "translateX(60px)" },
              "100%": { opacity: 1, transform: "translateX(0)" },
            },
            transition: "box-shadow 0.3s",
            "&:hover": {
              boxShadow: "0 8px 32px 0 #f5c51855",
            },
            borderTop: "6px solid #d32d2f", // Canada Day accent
          }}
        >
          <Box
            sx={{
              width: "100%",
              aspectRatio: "3/4",
              mb: 2,
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: "0 4px 24px 0 #0003",
              background: "#222",
              position: "relative",
              border: "2px solid #fff",
            }}
          >
            <img
              src="./images/pub/pearson_specials.png"
              alt="Pearson Specials"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                display: "block",
                transition: "transform 0.5s cubic-bezier(.4,2,.6,1)",
                cursor: "pointer",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.04)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                bgcolor: "rgba(211,45,47,0.85)",
                color: "#fff",
                py: 1,
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 16,
                letterSpacing: 1,
                textShadow: "0 1px 4px #000",
              }}
            >
              Specials Poster
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                bgcolor: "#fff",
                color: "#d32d2f",
                px: 1.5,
                py: 0.5,
                borderRadius: 2,
                fontWeight: "bold",
                fontSize: 13,
                boxShadow: "0 2px 8px #d32d2f33",
                letterSpacing: 1,
              }}
            >
              🍁 Canada Day 158
            </Box>
          </Box>
          <Typography
            variant="h5"
            sx={{
              color: colors.cardTitle,
              fontWeight: "bold",
              mb: 1.5,
              letterSpacing: 1,
            }}
          >
            Pearson Specials
          </Typography>
          <Typography
            sx={{
              color: colors.cardText,
              fontSize: 16,
              mb: 1.5,
              textAlign: "center",
              opacity: 0.92,
            }}
          >
            Enjoy our chef’s weekly specials and exclusive pub offers, crafted
            just for you!
          </Typography>
        </Box>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          bgcolor: colors.footerBg,
          color: colors.footerText,
          py: 10,
          mt: "auto",
          px: { xs: 2, sm: 4, md: 0 },
          borderTop: `2px solid ${colors.navBorder}`,
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={6}
            sx={{
              mb: 8,
              justifyContent: "space-between",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {/* Branding and Social Links */}
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <img
                  src="./images/pub/logo.png"
                  alt="Pearson Pub Logo"
                  style={{
                    height: 54,
                    width: "auto",
                    marginRight: 14,
                    borderRadius: 8,
                    boxShadow: `0 2px 8px ${colors.navBorder}`,
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: colors.footerText,
                    fontSize: 22,
                  }}
                >
                  The Pearson Pub
                </Typography>
              </Box>
              <Typography sx={{ color: "#ccc", mb: 2, fontSize: "1rem" }}>
                A traditional pub atmosphere in the heart of Whitby
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                {socialLinks.map((link) => (
                  <IconButton
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener"
                    sx={{
                      color: colors.icon,
                      "&:hover": {
                        color: colors.iconHover,
                        transform: "scale(1.15)",
                      },
                      transition: "all 0.2s",
                    }}
                    aria-label={link.name}
                  >
                    {link.icon}
                  </IconButton>
                ))}
              </Box>
            </Grid>

            {/* Quick Links */}
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", mb: 2, fontSize: 18 }}
              >
                Quick Links
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.path}
                    color="#ccc"
                    underline="hover"
                    sx={{
                      fontSize: "1rem",
                      "&:hover": { color: colors.footerText, pl: 1 },
                      transition: "all 0.2s",
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </Box>
            </Grid>

            {/* Hours of Operation */}
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", mb: 2, fontSize: 18 }}
              >
                Hours of Operation
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  fontSize: "1rem",
                }}
              >
                {businessHours.map((schedule) => (
                  <Box key={schedule.days}>
                    <Typography sx={{ fontWeight: "medium", color: "#ddd" }}>
                      {schedule.days}
                    </Typography>
                    <Typography sx={{ color: "#ccc" }}>
                      {schedule.hours}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>

            {/* Contact Information */}
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", mb: 2, fontSize: 18 }}
              >
                Contact Us
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  fontSize: "1rem",
                  maxWidth: 280,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                  <LocationOnIcon
                    sx={{ color: colors.icon, fontSize: 22, mt: 0.5 }}
                  />
                  <Typography sx={{ color: "#ccc" }}>
                    101 Mary St, Whitby, ON, L1N 2R4
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <PhoneIcon sx={{ color: colors.icon, fontSize: 22 }} />
                  <Typography sx={{ color: "#ccc" }}>905-430-5699</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <EmailIcon sx={{ color: colors.icon, fontSize: 22 }} />
                  <Typography sx={{ color: "#ccc" }}>
                    thepearsonpub@rogers.com
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>

          {/* Copyright */}
          <Box
            sx={{
              borderTop: `1.5px solid ${colors.navBorder}`,
              mt: 6,
              pt: 4,
              textAlign: "center",
              color: "#ccc",
              fontSize: "0.95rem",
              letterSpacing: 0.2,
            }}
          >
            <Typography>
              © {currentYear} The Pearson Pub. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default App;
