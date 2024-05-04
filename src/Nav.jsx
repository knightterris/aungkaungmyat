import { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { motion } from "framer-motion";
import SvgIcon from "@mui/material/SvgIcon";
import "./index.css";
import { useNavigate } from "react-router-dom";

const IconPathVariant = {
  hidden: {
    opacity: 0,
    pathLength: 0
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut"
    }
  }
};
const HomeIcon = (
  <SvgIcon>
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="white"
    >
      <motion.path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
        variants={IconPathVariant}
        initial="hidden"
        animate="visible"
      />
    </motion.svg>
  </SvgIcon>
);

const AboutIcon = (
  <SvgIcon>
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="white"
    >
      <motion.path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 12 2 C 6 2 2 6 2 12 C 2 18 6 22 12 22 C 18 22 22 18 22 12 C 22 6 18 2 12 2 Z M 12 16 C 13.1045695 16 14 15.1045695 14 14 C 14 12.8954305 13.1045695 12 12 12 C 10.8954305 12 10 12.8954305 10 14 C 10 15.1045695 10.8954305 16 12 16 Z M 12 8 C 11.4477153 8 11 8.44771525 11 9 C 11 9.55228475 11.4477153 10 12 10 C 12.5522847 10 13 9.55228475 13 9 C 13 8.44771525 12.5522847 8 12 8 Z"
        variants={IconPathVariant}
        initial="hidden"
        animate="visible"
      />
    </motion.svg>
  </SvgIcon>
);

const ContactIcon = (
  <SvgIcon>
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="3"
        ry="3"
        variants={IconPathVariant}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M2 10L12 16L22 10"
        variants={IconPathVariant}
        initial="hidden"
        animate="visible"
      />
    </motion.svg>
  </SvgIcon>
);

const NavComponent = () => {
  const [value, setValue] = useState("recents");
  const navigate = useNavigate();

  return (
    <nav
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%"
      }}
    >
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        className="bottomNav"
      >
        <BottomNavigationAction
          onClick={() => {
            setValue("home");
            navigate("/");
          }}
          label="Home"
          value="home"
          icon={HomeIcon}
        />
        <BottomNavigationAction
          onClick={() => {
            setValue("about");
            navigate("/about");
          }}
          label="About"
          value="about"
          icon={AboutIcon}
        />
        <BottomNavigationAction
          onClick={() => {
            setValue("contact");
            navigate("/contact");
          }}
          label="Contact"
          value="contact"
          icon={ContactIcon}
        />
      </BottomNavigation>
    </nav>
  );
};

export default NavComponent;
