import { NavItem } from "./types";
import { Variants } from "framer-motion";

export const listNav: NavItem[] = [
  { name: "QUIÉN SOY", href: "#quien-soy" },
  { name: "SERVICIOS", href: "#servicios" },
  { name: "BLOG", href: "/blog" },
  { name: "CONTÁCTAME", href: "/contacto" },
];

export const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const sidebarVariants: Variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    overflow: "hidden",
    marginTop: -8,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    marginTop: 8,
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};