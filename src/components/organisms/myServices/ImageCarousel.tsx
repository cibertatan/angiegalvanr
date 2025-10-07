"use client";
import {
  AnimatePresence,
  motion,
  usePresenceData,
  Variant,
  Variants,
  wrap,
} from "motion/react";
import { SVGProps } from "react";
import { forwardRef, useState } from "react";
import { useNavigate } from "react-router";

type Props = {
  services: {
    id: number;
    image: string;
    title: string;
    description: string;
    textColor: string;
    backgroundColor: string;
    slug?: string;
  }[];
  variant?: "default" | "blog";
};

export default function ImageCarousel({
  services,
  variant = "default",
}: Props) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const navigate = useNavigate();

  function setSlide(dir: 1 | -1) {
    const nextIdx = wrap(0, services.length, index + dir);
    setIndex(nextIdx);
    setDirection(dir);
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        gap: 10,
      }}
    >
      {variant === "default" && (
        <motion.button
          initial={false}
          animate={{ backgroundColor: "#355C7D" }}
          aria-label="Previous"
          style={button}
          onClick={() => setSlide(-1)}
          whileFocus={{ outline: `2px solid #355C7D` }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowLeft />
        </motion.button>
      )}
      <AnimatePresence custom={direction} initial={false} mode="popLayout">
        <Slide
          key={index}
          src={services[index].image}
          title={services[index].title}
          textColor={services[index].backgroundColor}
          variant={variant}
          onPrev={() => setSlide(-1)}
          onNext={() => setSlide(1)}
          slug={services[index].slug}
          onNavigate={navigate}
        />
      </AnimatePresence>
      {variant === "default" && (
        <motion.button
          initial={false}
          animate={{ backgroundColor: "#355C7D" }}
          aria-label="Next"
          style={button}
          onClick={() => setSlide(1)}
          whileFocus={{ outline: `2px solid #355C7D` }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowRight />
        </motion.button>
      )}
    </div>
  );
}

const variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 100 }),
  center: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", bounce: 0.3 },
  },
  exit: (dir: number) => ({ opacity: 0, x: dir * -100 }),
} as Variants;

const Slide = forwardRef<
  HTMLDivElement,
  {
    src: string;
    title: string;
    textColor: string;
    variant?: "default" | "blog";
    onPrev?: () => void;
    onNext?: () => void;
    slug?: string;
    onNavigate?: (path: string) => void;
  }
>(
  (
    {
      src,
      title,
      textColor,
      variant = "default",
      onPrev,
      onNext,
      slug,
      onNavigate,
    },
    ref
  ) => {
    const direction = usePresenceData();
    return (
      <motion.div
        ref={ref as any}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        className="flex flex-col items-center justify-center"
        style={
          variant === "blog"
            ? { width: "95vw", maxWidth: 700, minHeight: 320 }
            : { width: 300, minHeight: 380 }
        }
      >
        <div
          style={
            variant === "blog"
              ? {
                  position: "relative",
                  width: "95vw",
                  maxWidth: 700,
                  cursor: "pointer",
                }
              : { position: "relative" }
          }
          onClick={
            variant === "blog" && slug && onNavigate
              ? () => onNavigate(`/blog/${slug}`)
              : undefined
          }
        >
          <img
            src={src}
            alt={title}
            style={
              variant === "blog"
                ? {
                    width: "95vw",
                    maxWidth: 700,
                    height: "auto",
                    borderRadius: 12,
                  }
                : {
                    width: 300,
                    height: 300,
                    objectFit: "cover",
                    borderRadius: 8,
                  }
            }
          />
          {variant === "blog" && (
            <>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(0,0,0,0.45)",
                  borderRadius: 12,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "16px 60px",
                  zIndex: 3,
                }}
              >
                <h3
                  className="text-2xl font-extrabold text-center"
                  style={{
                    color: "#ffffff",
                    textShadow: "0 2px 8px rgba(0,0,0,0.6)",
                    letterSpacing: 0.3,
                  }}
                >
                  {title}
                </h3>
              </div>
            </>
          )}
          {variant === "blog" && (
            <>
              <motion.button
                initial={false}
                aria-label="Previous"
                style={buttonArrowLeft}
                onClick={(e) => {
                  e.stopPropagation();
                  onPrev && onPrev();
                }}
                whileFocus={{ outline: `2px solid #355C7D` }}
              >
                <ArrowLeftSimple />
              </motion.button>
              <motion.button
                initial={false}
                aria-label="Next"
                style={buttonArrowRight}
                onClick={(e) => {
                  e.stopPropagation();
                  onNext && onNext();
                }}
                whileFocus={{ outline: `2px solid #355C7D` }}
              >
                <ArrowRightSimple />
              </motion.button>
            </>
          )}
        </div>
        {variant !== "blog" && (
          <h3
            className="text-2xl font-bold mt-4"
            style={{
              color: textColor,
              textShadow:
                "2px 2px 0 white, -2px 2px 0 white, 2px -2px 0 white, -2px -2px 0 white",
            }}
          >
            {title}
          </h3>
        )}
      </motion.div>
    );
  }
);

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
};

function ArrowLeft() {
  return (
    <svg {...iconsProps}>
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg {...iconsProps}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function ArrowLeftSimple() {
  return (
    <svg {...iconsProps}>
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ArrowRightSimple() {
  return (
    <svg {...iconsProps}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
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
};

const buttonOverlayBase: React.CSSProperties = {
  backgroundColor: "rgba(12, 220, 247, 0.9)",
  color: "#ffffff",
  width: 40,
  height: 40,
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 2,
};

const buttonOverlayLeft: React.CSSProperties = {
  ...buttonOverlayBase,
  left: 8,
};

const buttonOverlayRight: React.CSSProperties = {
  ...buttonOverlayBase,
  right: 8,
};

const buttonArrowBase: React.CSSProperties = {
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  color: "#355C7D",
  width: 32,
  height: 32,
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 4,
  border: "none",
  cursor: "pointer",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
  transformOrigin: "center",
};

const buttonArrowLeft: React.CSSProperties = {
  ...buttonArrowBase,
  left: 8,
};

const buttonArrowRight: React.CSSProperties = {
  ...buttonArrowBase,
  right: 8,
};