import { Variants } from "framer-motion";

export interface NavItem {
    name: string
    href: string
  }

 export interface PathProps {
    d?: string
    variants: Variants
    transition?: { duration: number }
}