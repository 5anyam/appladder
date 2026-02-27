import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AppladderDifference1 from "@/assets/AppladderDifference1.png";
import AppladderDifference2 from "@/assets/AppladderDifference2.png";
import AppladderDifference3 from "@/assets/AppladderDifference3.png";
import AppladderDifference4 from "@/assets/AppladderDifference4.png";

type Slide = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
};

const slides: Slide[] = [
  {
    id: "Mobile First Thinking",
    title: "Mobile First Thinking",
    description:
      "With years of category-defining expertise in apps and web, we fuel user acquisition with precision and efficiency that the market depends on.",
    imageSrc:
      AppladderDifference1,
    imageAlt: "Mobile First Thinking",
  },
  {
    id: "Speedy Expansion",
    title: "Speedy Expansion",
    description:
      "Enter new markets backed by iron-clad performance experience, real-time behavioral insights, and teams who already understand your audience. While others are still learning, you’re already winning.",
    imageSrc: AppladderDifference2,
    imageAlt: "Speedy Expansion",
  },
  {
    id: "Scale Global Effortlessly",
    title: "Scale Global Effortlessly",
    description:
      "We act as a single, trusted partner for all your growth needs, combining robust technology, market know-how, and dedicated service. Rather than juggling multiple vendors, you get one streamlined growth engine covering everything from mobile acquisition to full-funnel performance marketing. Our expert team and proprietary infrastructure handle execution you stay focused on high-level strategy.",
    imageSrc:
      AppladderDifference3,
    imageAlt: "Scale Global Effortlessly",
  },
  {
    id: "ARPU That Keeps Climbing",
    title: "ARPU That Keeps Climbing ",
    description:
      "We don’t just bring users we bring valuable users. Our tools optimize their entire journey so engagement turns into revenue, and you see a tangible rise in average revenue per user, while we manage the heavy lifting.",
    imageSrc: AppladderDifference4,
    imageAlt: "ARPU That Keeps Climbing",
  },
];

const SLIDE_COLORS = ["#016630", "#9f0712", "#193cb8", "#6e11b0"];
const TAB_COLORS = SLIDE_COLORS.slice();

/* ---------------------
  TUNED MOTION CONFIG
----------------------*/
// entrance durations
const TEXT_DURATION = 0.45; // seconds — quick but visible
const IMAGE_DURATION = 0.50; // slightly longer for a trailing snap

// tuned stagger
const DEFAULT_TEXT_DELAY = 0; // text leads
const DEFAULT_IMAGE_DELAY = 0.15; // image follows ~140ms

// underline spring tuned (snappy)
const UNDERLINE_SPRING: any = { type: "spring", stiffness: 240, damping: 30 };

// motion transitions (kept as any to allow numeric easing arrays)
const textMotionBase: any = { duration: TEXT_DURATION, ease: [0.22, 1, 0.36, 1] as any };
const imageMotionBase: any = { duration: IMAGE_DURATION, ease: [0.22, 1, 0.36, 1] as any };
/* ------------------- end tuned config -----------------*/

/* Stagger / distance config (you can still edit) */
const STAGGER_ORDER: "text-first" | "image-first" = "image-first";
const USE_FIXED_DISTANCE = true;
const FIXED_X = 480;
const FIXED_Y = 360;

export default function AppLadderDifference(): JSX.Element {
  const [active, setActive] = useState<number>(0);

  // Explicit navigation direction state:
  // 'forward' = user moved left → right (newIndex > oldIndex)
  // 'backward' = user moved right → left (newIndex < oldIndex)
  const [navDir, setNavDir] = useState<"forward" | "backward">("forward");

  // tabs underline
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const navRef = useRef<HTMLDivElement | null>(null);
  const [underline, setUnderline] = useState({ left: 0, width: 0, color: TAB_COLORS[0] });

  // main measurement refs
  const mainRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);

  // measured dims for distances & centering
  const [parentHeight, setParentHeight] = useState<number>(400);
  const [parentWidth, setParentWidth] = useState<number>(1200);
  const [textTopPx, setTextTopPx] = useState<number>(0);
  const [imgTopPx, setImgTopPx] = useState<number>(0);

  function measureUnderline(index = active) {
    const nav = navRef.current;
    const btn = tabRefs.current[index];
    if (!nav || !btn) return setUnderline((u) => ({ ...u, left: 0, width: 0 }));
    const navRect = nav.getBoundingClientRect();
    const bRect = btn.getBoundingClientRect();
    const left = Math.round(bRect.left - navRect.left);
    const width = Math.round(bRect.width);
    setUnderline({ left, width, color: TAB_COLORS[index % TAB_COLORS.length] });
  }

  function measurePanels() {
    const parent = mainRef.current;
    if (!parent) return;
    const pRect = parent.getBoundingClientRect();
    const pH = Math.round(pRect.height);
    const pW = Math.round(pRect.width);
    setParentHeight(pH);
    setParentWidth(pW);

    if (textRef.current) {
      const tRect = textRef.current.getBoundingClientRect();
      setTextTopPx(Math.round((pH - Math.round(tRect.height)) / 2));
    } else setTextTopPx(Math.round((pH - 200) / 2));

    if (imgRef.current) {
      const iRect = imgRef.current.getBoundingClientRect();
      setImgTopPx(Math.round((pH - Math.round(iRect.height)) / 2));
    } else setImgTopPx(Math.round((pH - 320) / 2));
  }

  useEffect(() => {
    requestAnimationFrame(() => {
      measureUnderline();
      measurePanels();
    });

    const onResize = () => {
      measureUnderline();
      measurePanels();
    };

    let ro: ResizeObserver | null = null;
    if ((window as any).ResizeObserver && mainRef.current) {
      ro = new ResizeObserver(() => {
        measureUnderline();
        measurePanels();
      });
      ro.observe(mainRef.current);
    }

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      if (ro && mainRef.current) ro.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // measure when active changes
  useEffect(() => {
    requestAnimationFrame(() => {
      measureUnderline();
      measurePanels();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  function handleImageLoad() {
    setTimeout(measurePanels, 40);
  }

  // change tab helper — sets navDir synchronously then changes active
  function changeTab(index: number) {
    if (index === active) return;
    // set nav direction immediately based on index vs current active
    setNavDir(index > active ? "forward" : "backward");
    setActive(index);
    requestAnimationFrame(() => {
      measureUnderline(index);
      measurePanels();
    });
  }

  // compute isForward/isBackward from navDir (now reliable)
  const isForward = navDir === "forward";
  const isBackward = navDir === "backward";

  // distances
  const horizontalDistance = USE_FIXED_DISTANCE ? FIXED_X : parentWidth;
  const verticalDistance = USE_FIXED_DISTANCE ? FIXED_Y : parentHeight;

  // --- NAV-DIRECTION ONLY rule (exactly as you requested) ---
  // If clicking left→right (forward): text from TOP (-Y), image from LEFT (-X)
  // If clicking right→left (backward): text from BOTTOM (+Y), image from RIGHT (+X)
  const textStartY = isForward ? -verticalDistance : verticalDistance;
  const imgStartX = isForward ? -horizontalDistance : horizontalDistance;
  // --- end change ---

  // decide effective stagger order depending on navigation direction:
  const normalTextDelay = DEFAULT_TEXT_DELAY;
  const normalImageDelay = DEFAULT_IMAGE_DELAY;

  let textDelay = STAGGER_ORDER === "text-first" ? normalTextDelay : normalImageDelay;
  let imageDelay = STAGGER_ORDER === "text-first" ? normalImageDelay : normalTextDelay;

  if (isBackward) {
    // reverse stagger when going backward
    [textDelay, imageDelay] = [imageDelay, textDelay];
  }

  // motion transitions with per-element durations & delays
  const textTransition = { ...textMotionBase, delay: textDelay };
  const imageTransition = { ...imageMotionBase, delay: imageDelay };

  const slideColor = SLIDE_COLORS[active % SLIDE_COLORS.length];
  const textStyle: React.CSSProperties = { position: "absolute", left: 0, right: 0, top: textTopPx };
  const imgStyle: React.CSSProperties = { position: "absolute", left: 0, right: 0, top: imgTopPx };

  return (
    <section className="w-full">
      <div className="container mx-auto px-6 py-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          The AppLadder <span className="gradient-text">Difference</span>
        </h2>

        {/* Tabs */}
        <div ref={navRef} className="mb-4 relative">
          <ul className="flex gap-8">
            {slides.map((s, i) => (
              <li key={s.id} className="relative">
                <button
                  ref={(el) => (tabRefs.current[i] = el)}
                  onClick={() => changeTab(i)}
                  className={`text-lg font-medium px-1 py-2 focus:outline-none ${
                    active === i ? "text-slate-900" : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  {s.title}
                </button>
              </li>
            ))}
          </ul>

          <motion.div
            aria-hidden
            initial={false}
            animate={{ left: underline.left, width: underline.width, backgroundColor: underline.color }}
            transition={UNDERLINE_SPRING}
            className="absolute -bottom-2 h-[4px] rounded-full"
            style={{ left: underline.left, width: underline.width }}
          />
        </div>

        {/* Card */}
        <div className="relative rounded-lg overflow-hidden w-full">
          <div className="absolute inset-0 z-0" style={{ background: slideColor }} />

          <div ref={mainRef} className="relative z-20 w-full h-[240px] md:h-[450px] lg:h-[510px]">
            {/* TEXT PANEL */}
            <div className="absolute left-0 w-7/12 px-6 top-0 bottom-0">
              <div style={{ position: "relative", height: "100%" }}>
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={slides[active].id + "-text"}
                    ref={textRef as any}
                    style={textStyle}
                    initial={{ y: textStartY, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: textStartY, opacity: 0 }}
                    transition={textTransition}
                    className="flex flex-col"
                  >
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2">
                      {slides[active].title}
                    </h3>
                    <p className="text-base md:text-lg text-white/90 max-w-xl">{slides[active].description}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* IMAGE PANEL */}
            <div className="absolute right-0 w-5/12 pr-6 top-0 bottom-0">
              <div style={{ position: "relative", height: "100%" }}>
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={slides[active].id + "-img"}
                    ref={imgRef as any}
                    style={imgStyle}
                    initial={{ x: imgStartX, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: imgStartX, opacity: 0 }}
                    transition={imageTransition}
                    className="flex items-center justify-center"
                  >
                    <img
                      src={slides[active].imageSrc}
                      alt={slides[active].imageAlt}
                      onLoad={handleImageLoad}
                      className="w-[260px] h-[260px] md:w-[320px] md:h-[320px] lg:w-[450px] lg:h-[450px] object-cover rounded-xl"
                      decoding="async"
                      draggable={false}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="absolute inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
