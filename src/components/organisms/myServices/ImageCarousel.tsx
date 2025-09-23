"use client"
import { AnimatePresence, motion, usePresenceData, Variant, Variants, wrap } from "motion/react"
import { SVGProps } from "react"
import { forwardRef, useState } from "react"

type Props = { services: { id: number, image: string, title: string, description: string, textColor: string, backgroundColor: string }[] }

export default function ImageCarousel({ services }: Props) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState<1 | -1>(1)

  function setSlide(dir: 1 | -1) {
    const nextIdx = wrap(0, services.length, index + dir)
    setIndex(nextIdx)
    setDirection(dir)
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', gap: 10 }}>
      <motion.button initial={false}
                animate={{ backgroundColor: "#355C7D" }}
                aria-label="Previous"
                style={button}
                onClick={() => setSlide(-1)}
                whileFocus={{ outline: `2px solid #355C7D` }}
                whileTap={{ scale: 0.9 }}><ArrowLeft /></motion.button>
      <AnimatePresence custom={direction} initial={false} mode="popLayout">
        <Slide key={index} src={services[index].image} title={services[index].title} textColor={services[index].backgroundColor} />
      </AnimatePresence>
      <motion.button  initial={false}
                animate={{ backgroundColor: "#355C7D" }}
                aria-label="Next"
                style={button}
                onClick={() => setSlide(1)}
                whileFocus={{ outline: `2px solid #355C7D` }}
                whileTap={{ scale: 0.9 }}><ArrowRight /></motion.button>
    </div>
  )
}

const variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 100 }),
  center: { opacity: 1, x: 0, transition: { type: 'spring', bounce: 0.3 } },
  exit: (dir: number) => ({ opacity: 0, x: dir * -100 }),
} as Variants

const Slide = forwardRef<HTMLDivElement, { src: string, title: string, textColor: string }>(({ src, title, textColor }, ref) => {
  const direction = usePresenceData()
  return (
    <motion.div
      ref={ref as any}
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="flex flex-col items-center justify-center"
      style={{ width: 300, minHeight: 380, }}
    >
      <img src={src} alt={title} style={{ width: 300, height: 300, objectFit: 'cover', borderRadius: 8 }} />
      <h3 className="text-2xl font-bold mt-4" style={{color: textColor, textShadow: '2px 2px 0 white, -2px 2px 0 white, 2px -2px 0 white, -2px -2px 0 white'}}>{title}</h3>
    </motion.div>
  )
})

/**
 * ==============   Icons   ================
 */
const iconsProps: SVGProps<SVGSVGElement> = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "28",
  height: "28",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

function ArrowLeft() {
  return (
      <svg {...iconsProps}>
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
      </svg>
  )
}

function ArrowRight() {
  return (
      <svg {...iconsProps}>
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
      </svg>
  )
}

const button: React.CSSProperties = {
  backgroundColor: "#0cdcf7",
  color: "#ffffff",
  width: 40,
  height: 40,
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  zIndex: 1,
  outlineOffset: 2,
}