import { useState, useRef } from "react";
import { motion, stagger } from "framer-motion";
import { useDimensions } from "../../../hooks";
import { itemVariants, listNav, sidebarVariants } from "./constants";
import { NavItem, PathProps } from "./types";
import { background, list, listItem, nav, toggleContainer } from "./styles";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { height } = useDimensions(containerRef);

  return (
    <div>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        style={nav}
      >
        <motion.div style={background} variants={sidebarVariants} />
        <Navigation />
        <MenuToggle toggle={() => setIsOpen(!isOpen)} />
      </motion.nav>
    </div>
  );
}

const navVariants = {
  open: {
    transition: { delayChildren: stagger(0.07, { startDelay: 0.2 }) },
  },
  closed: {
    transition: { delayChildren: stagger(0.05, { from: "last" }) },
  },
};

const Navigation = () => (
  <motion.div style={list} variants={navVariants}>
    {listNav.map((item) => (
      <MenuItem name={item.name} href={item.href} key={item.name} />
    ))}
  </motion.div>
);

const MenuItem = ({ name, href }: NavItem) => (
  <motion.li
    style={listItem}
    variants={itemVariants}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <a href={href} className="nav-button-3d-mobile">
      {name}
    </a>
  </motion.li>
);

const Path = (props: PathProps) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle }: { toggle: () => void }) => (
  <button style={toggleContainer} onClick={toggle}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);