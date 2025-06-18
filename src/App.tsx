import React, { useState, useEffect, useRef } from "react";
import { Box, Container, Typography, Link, IconButton } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

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
        color: "#f5c518",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <IconButton
        aria-label="Chat on WhatsApp"
        href="https://wa.me/+19054305699"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          bgcolor: "#25D366",
          color: "#fff",
          "&:hover": {
            bgcolor: "#1ebe57",
          },
          boxShadow: "0 4px 10px rgba(37, 211, 102, 0.4)",
          zIndex: 9999,
        }}
      >
        <WhatsAppIcon fontSize="large" />
      </IconButton>

      {/* Header */}
      <Box
        component="nav"
        sx={{
          bgcolor: "transparent",
          position: "sticky",
          top: 0,
          zIndex: 50,
          boxShadow: 3,
          transform: showNavbar ? "translateY(0)" : "translateY(-110%)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: 64,
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", userSelect: "none" }}
            >
              <Link
                href="#"
                color="inherit"
                underline="none"
                sx={{ cursor: "pointer" }}
              >
                The Pearson Pub
              </Link>
            </Typography>
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
              {navLinks.map((link) => (
                <Link
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  color="inherit"
                  underline="none"
                  sx={{
                    "&:hover": { color: "#d4af37" },
                    transition: "color 0.3s ease",
                    userSelect: "none",
                    cursor: "pointer",
                  }}
                >
                  {link}
                </Link>
              ))}
            </Box>
            <IconButton
              sx={{
                display: { md: "none" },
                color: "#f5c518",
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
                width={24}
                height={24}
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
            <Box sx={{ display: { md: "none" }, bgcolor: "#111", pb: 2 }}>
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
                    "&:hover": { bgcolor: "#222" },
                    userSelect: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link}
                </Link>
              ))}
              <Link
                href="#book"
                sx={{
                  display: "block",
                  mx: 4,
                  mt: 2,
                  bgcolor: "#f5c518",
                  color: "#111",
                  fontWeight: "bold",
                  py: 2,
                  px: 4,
                  borderRadius: 2,
                  textAlign: "center",
                  textDecoration: "none",
                  "&:hover": { bgcolor: "#d4af37" },
                  userSelect: "none",
                  cursor: "pointer",
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                Book a Table
              </Link>
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
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.5)" }}
        />
        <Box
          sx={{
            position: "relative",
            textAlign: "center",
            maxWidth: "800px",
            px: 4,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "#f5c518",
              mb: 2,
              animation: "fadeIn 1s ease-out",
            }}
          >
            Restaurant page coming soon...
          </Typography>
        </Box>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          bgcolor: "#0b1223",
          color: "#f5c518",
          py: 12,
          mt: "auto",
          px: { xs: 2, sm: 4, md: 0 },
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
                  style={{ height: 48, width: "auto", marginRight: 12 }}
                />
                <Typography sx={{ fontWeight: "bold", color: "#f5c518" }}>
                  The Pearson Pub
                </Typography>
              </Box>
              <Typography sx={{ color: "#ccc", mb: 2, fontSize: "0.9rem" }}>
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
                    sx={{ color: "#f5c518", "&:hover": { color: "#d4af37" } }}
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
                sx={{ fontWeight: "bold", mb: 2 }}
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
                    sx={{ fontSize: "0.9rem", "&:hover": { color: "#f5c518" } }}
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
                sx={{ fontWeight: "bold", mb: 2 }}
              >
                Hours of Operation
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  fontSize: "0.9rem",
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
                sx={{ fontWeight: "bold", mb: 2 }}
              >
                Contact Us
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  fontSize: "0.9rem",
                  maxWidth: 280,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                  <LocationOnIcon
                    sx={{ color: "#f5c518", fontSize: 20, mt: 0.5 }}
                  />
                  <Typography sx={{ color: "#ccc" }}>
                    101 Mary St, Whitby, ON, L1N 2R4
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <PhoneIcon sx={{ color: "#f5c518", fontSize: 20 }} />
                  <Typography sx={{ color: "#ccc" }}>905-430-5699</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <EmailIcon sx={{ color: "#f5c518", fontSize: 20 }} />
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
              borderTop: "1px solid #333",
              mt: 6,
              pt: 4,
              textAlign: "center",
              color: "#ccc",
              fontSize: "0.85rem",
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
