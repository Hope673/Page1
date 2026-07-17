import { useState, useEffect } from "react";
import myImage from "./assets/myImage.png";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  useMediaQuery,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";


const tokens = {
  bg: "#15171c",
  bgScrolled: "#1c1f26",
  border: "rgba(255,255,255,0.06)",
  text: "#EDEBE6",
  textMuted: "rgba(237,235,230,0.62)",
  accent: "#C9A961",
  accentSoft: "rgba(201,169,97,0.12)",
};

const navLinks = [
  { label: "Home", href: "#home", icon: <HomeRoundedIcon fontSize="small" /> },
  { label: "About", href: "#about", icon: <PersonOutlineRoundedIcon fontSize="small" /> },
  { label: "Projects", href: "#projects", icon: <WorkOutlineRoundedIcon fontSize="small" /> },
  { label: "Blog", href: "#blog", icon: <ArticleOutlinedIcon fontSize="small" /> },
  { label: "Contact", href: "#contact", icon: <MailOutlineRoundedIcon fontSize="small" /> },
  { label: "Footer", href: "#footer", icon: <MailOutlineRoundedIcon fontSize="small" /> },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:900px)");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDrawer = () => setMobileOpen((prev) => !prev);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: scrolled ? tokens.bgScrolled : tokens.bg,
          borderBottom: `1px solid ${tokens.border}`,
          transition: "background-color 200ms ease, box-shadow 200ms ease",
          boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.35)" : "none",
        }}
      >
        <Toolbar
          sx={{
            minHeight: { xs: 64, md: 72 },
            px: { xs: 2, sm: 3, md: 6 },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <a href="#home" style={{
            color: "white",
            textDecoration: "none",
          }}>
             <Box component="span" sx={{
              fontSize: "2rem",
             }}
             onClick={window.scrollY = 0}
             >Hope</Box>
          </a>
{/*              <img src="myImage" alt="Developer Image" style={{ height: 32, borderRadius: "50%" }} />
 */}          {!isMobile && <Box
            sx={{
              fontFamily: "'Space Grotesk', 'Inter', sans-serif",
              fontWeight: 600,
              fontSize: "1.15rem",
              letterSpacing: "0.02em",
              color: tokens.text,
              cursor: "pointer",
            }}
          >
            ADEYEMI' S PLACE
           
          </Box>}

          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              {navLinks.map((link) => (
                <Button
                  key={link.label}
                  href={link.href}
                  sx={{
                    color: tokens.textMuted,
                    textTransform: "none",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.92rem",
                    fontWeight: 500,
                    px: 1.75,
                    borderRadius: "8px",
                    "&:hover": {
                      color: tokens.text,
                      backgroundColor: tokens.accentSoft,
                    },
                  }}
                >
                  {link.label}
                </Button>
              ))}

              <Divider
                orientation="vertical"
                flexItem
                sx={{ mx: 1.5, borderColor: tokens.border, my: 1 }}
              />

              <IconButton
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: tokens.textMuted, "&:hover": { color: tokens.accent } }}
              >
                <GitHubIcon fontSize="small" />
              </IconButton>
              <IconButton
                href="https://linkedin.com/in"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: tokens.textMuted, "&:hover": { color: tokens.accent } }}
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
            </Box>
          )}

          
          {isMobile && (
            <IconButton
              onClick={toggleDrawer}
              sx={{ color: tokens.text}}
              aria-label="open navigation menu"
            >
              <MenuRoundedIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>      
      <Toolbar sx={{ minHeight: { xs: 64, md: 72 } }} />
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            width: "min(78vw, 320px)",
            backgroundColor: tokens.bgScrolled,
            borderLeft: `1px solid ${tokens.border}`,
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1.5 }}>
          <IconButton onClick={toggleDrawer} sx={{ color: "black" }}>
            {<CloseRoundedIcon />}
          </IconButton>
        </Box>
        
        <List sx={{ px: 1 }}>
          {navLinks.map((link) => (
            <ListItem key={link.label} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                href={link.href}
                onClick={toggleDrawer}
                sx={{
                  borderRadius: "8px",
                  mx: 1,
                  "&:hover": { backgroundColor: tokens.accentSoft },
                }}
              >
                <ListItemIcon sx={{ minWidth: 36, color: tokens.accent }}>
                  {link.icon}
                </ListItemIcon>
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{
                    sx: {
                      color: tokens.text,
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.95rem",
                      fontWeight: 500,
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider sx={{ borderColor: tokens.border, mx: 2, my: 1 }} />

        <Box sx={{ display: "flex", gap: 1, px: 3, py: 1 }}>
          <IconButton
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: tokens.textMuted, "&:hover": { color: tokens.accent } }}
          >
            <GitHubIcon fontSize="small" sx={{color: "black"}}/>
          </IconButton>
          <IconButton
            href="https://linkedin.com/in"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: tokens.textMuted, "&:hover": { color: tokens.accent } }}
          >
            <LinkedInIcon fontSize="small" sx={{color: "black"}}/>
          </IconButton>
        </Box>
      </Drawer>
    </>
  );
}
