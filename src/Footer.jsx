import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  IconButton,
  Button,
  Divider,
  Chip,
} from "@mui/material";

import {
  GitHub,
  LinkedIn,
  Email,
  KeyboardArrowUp,
} from "@mui/icons-material";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      component="footer"
      sx={{
        mt: 10,
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(180deg,#0B1020 0%,#0F172A 100%)",
      }}
    >
      {/* Background Glow */}
      <Box
        sx={{
          position: "absolute",
          width: 350,
          height: 350,
          borderRadius: "50%",
          background: "#4F8CFF",
          filter: "blur(180px)",
          opacity: 0.18,
          top: -120,
          left: -120,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "#8B5CF6",
          filter: "blur(180px)",
          opacity: 0.15,
          bottom: -120,
          right: -120,
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          py: 8,
        }}
      >
        {/* Glass Card */}
        <Box
          sx={{
            backdropFilter: "blur(18px)",
            background: "rgba(255,255,255,.05)",
            border: "1px solid rgba(255,255,255,.08)",
            borderRadius: 5,
            p: { xs: 4, md: 6 },
          }}
        >
          <Grid container spacing={5}>
            {/* Brand */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: "#fff",
                  mb: 2,
                }}
              >
                Hope Adeyemi
              </Typography>

              <Typography
                sx={{
                  color: "#B8C0CC",
                  lineHeight: 1.8,
                  maxWidth: 420,
                }}
              >
                Frontend Developer passionate about building
                beautiful, responsive and high-performance web
                applications using React and modern frontend
                technologies.
              </Typography>

              <Chip
                label="🟢 Available for Freelance"
                sx={{
                  mt: 3,
                  color: "#fff",
                  background:
                    "rgba(79,140,255,.18)",
                  border:
                    "1px solid rgba(79,140,255,.35)",
                }}
              />
            </Grid>

            {/* Navigation */}
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                Quick Links
              </Typography>

              <Stack spacing={1.5}>
                {[
                  "Home",
                  "About",
                  "Skills",
                  "Projects",
                  "Contact",
                ].map((item) => (
                  <Button
                    key={item}
                    sx={{
                      justifyContent: "flex-start",
                      color: "#B8C0CC",
                      textTransform: "none",
                      p: 0,
                      minWidth: 0,

                      "&:hover": {
                        color: "#4F8CFF",
                        background: "transparent",
                        pl: 1,
                      },
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </Stack>
            </Grid>

            {/* Contact */}
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                Connect
              </Typography>

              <Stack
                direction="row"
                spacing={2}
                sx={{ mb: 3 }}
              >
                {[GitHub, LinkedIn, Email].map(
                  (Icon, index) => (
                    <IconButton
                      key={index}
                      sx={{
                        color: "#fff",
                        background:
                          "rgba(255,255,255,.05)",
                        border:
                          "1px solid rgba(255,255,255,.08)",

                        "&:hover": {
                          bgcolor: "#4F8CFF",
                          transform: "translateY(-4px)",
                        },

                        transition: ".3s",
                      }}
                    >
                      <Icon />
                    </IconButton>
                  )
                )}
              </Stack>

              <Typography sx={{ color: "#B8C0CC" }}>
                📧opatorohope5@email.com
              </Typography>

              <Typography
                sx={{
                  color: "#B8C0CC",
                  mt: 1,
                }}
              >
                📍 Nigeria
              </Typography>
            </Grid>
          </Grid>

          <Divider
            sx={{
              my: 5,
              borderColor:
                "rgba(255,255,255,.08)",
            }}
          />

          {/* Bottom */}
          <Stack
            direction={{
              xs: "column",
              md: "row",
            }}
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              sx={{
                color: "#8A94A6",
              }}
            >
              © {new Date().getFullYear()} Hope Adeyemi.
              All Rights Reserved.
            </Typography>

            <IconButton
              onClick={scrollToTop}
              sx={{
                bgcolor: "#4F8CFF",
                color: "#fff",

                "&:hover": {
                  bgcolor: "#366DF3",
                  transform: "translateY(-5px)",
                },

                transition: ".3s",
              }}
            >
              <KeyboardArrowUp />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;