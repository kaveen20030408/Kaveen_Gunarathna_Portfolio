"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";

// ─── Types ─────────────────────────────────────────────────────────────────────

export interface CardItem {
  imgUrl: string;
  alt?: string;
  linkUrl?: string;
  onClick?: () => void;
  // Rich card face content
  title?: string;
  description?: string;
  bullets?: string[];
  stack?: string[];
  year?: string;
  github?: string;
}

interface SocialCardsProps {
  cards: CardItem[];
}

// ─── Fan layout constants ───────────────────────────────────────────────────────

const MAX_VISIBLE = 5;
const HALF = 2;

const FAN_POSITIONS = [
  { rot: -16, scale: 0.82, x: -26, y: 6.0, zIndex: 1 },
  { rot: -8,  scale: 0.92, x: -13, y: 1.5, zIndex: 2 },
  { rot: 0,   scale: 1.0,  x: 0,   y: 0.0, zIndex: 10 },
  { rot: 8,   scale: 0.92, x: 13,  y: 1.5, zIndex: 2 },
  { rot: 16,  scale: 0.82, x: 26,  y: 6.0, zIndex: 1 },
];

function getResponsiveMultiplier(width: number) {
  if (width < 480) return 0.32;
  if (width < 640) return 0.45;
  if (width < 768) return 0.6;
  if (width < 1024) return 0.8;
  return 1.0;
}

function getHeightMultiplier(width: number) {
  let idealPx: number;
  if (width < 480) idealPx = 30 * 16;
  else if (width < 640) idealPx = 36 * 16;
  else if (width < 768) idealPx = 42 * 16;
  else if (width < 1024) idealPx = 48 * 16;
  else idealPx = 54 * 16;

  const available = window.innerHeight * 0.75;
  if (available >= idealPx) return 1;
  return available / idealPx;
}

function getSlotConfig(totalCards: number, slot: number) {
  if (totalCards >= MAX_VISIBLE) return FAN_POSITIONS[slot];
  const center = totalCards >> 1;
  const maxDist = totalCards > 1 ? center : 1;
  const distance = (slot - center) / maxDist;
  const absDistance = Math.abs(distance);
  return {
    rot: distance * 16,
    scale: 1.0 - 0.18 * absDistance * absDistance,
    x: distance * 26,
    y: absDistance * absDistance * 6.0,
    zIndex: 10 - Math.abs(slot - center),
  };
}

// ─── Arrow button styles ────────────────────────────────────────────────────────

const ARROW_CLASSES =
  "relative flex items-center justify-center rounded-full border-[1.5px] border-white/10 bg-white/5 backdrop-blur-[16px] text-white/55 cursor-pointer shrink-0 z-30 outline-none shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:border-white/25 hover:text-white/80 active:opacity-70 transition-colors duration-300";

// ─── Inline GitHub icon ─────────────────────────────────────────────────────────

const GHIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.604-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3-.404c1.02.005 2.045.138 3 .404 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

// ─── Rich card face ─────────────────────────────────────────────────────────────

function RichCardFace({ card, index }: { card: CardItem; index: number }) {
  const isRich = !!card.title;
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: "linear-gradient(160deg, #0f192d 0%, #080f1e 100%)" }}>
      {/* Image */}
      <div style={{ position: "relative", flexShrink: 0, height: isRich ? "44%" : "100%", overflow: "hidden" }}>
        <img
          src={card.imgUrl}
          loading="lazy"
          alt={card.alt || `Card ${index + 1}`}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        {/* Bottom fade into content */}
        {isRich && (
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "48px", background: "linear-gradient(to top, #080f1e, transparent)" }} />
        )}
        {/* Year badge */}
        {card.year && (
          <span style={{ position: "absolute", bottom: "8px", left: "12px", fontSize: "9px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>
            {card.year}
          </span>
        )}
        {/* Hover hint */}
        {card.onClick && (
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0)", transition: "background 0.2s" }}
            className="card-hover-hint">
          </div>
        )}
      </div>

      {/* Content */}
      {isRich && (
        <div style={{ flex: 1, padding: "14px", display: "flex", flexDirection: "column", gap: "8px", overflowY: "auto", minHeight: 0, scrollbarWidth: "none" }}>
          {/* Title */}
          <h3 style={{
            margin: 0, fontSize: "13.5px", fontWeight: 700, color: "#fff",
            lineHeight: 1.35,
          }}>
            {card.title}
          </h3>

          {/* Description */}
          {card.description && (
            <p style={{
              margin: 0, fontSize: "11px", color: "rgba(255,255,255,0.65)",
              lineHeight: 1.55,
            }}>
              {card.description}
            </p>
          )}

          {/* Point-wise Content (Bullets) */}
          {card.bullets && card.bullets.length > 0 && (
            <ul style={{ margin: "2px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "7px" }}>
              {card.bullets.map((b, i) => (
                <li key={i} style={{ display: "flex", gap: "6px", fontSize: "10.5px", lineHeight: 1.45, color: "rgba(255,255,255,0.55)" }}>
                  <span style={{ color: "#fbbf24", marginTop: "3px", flexShrink: 0, fontSize: "7.5px" }}>▶</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Spacer */}
          <div style={{ flex: 1 }} />

          {/* Tech stack */}
          {card.stack && card.stack.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "6px" }}>
              {card.stack.map((tech) => (
                <span key={tech} style={{
                  padding: "3px 8px", borderRadius: "999px",
                  border: "1px solid rgba(251,191,36,0.22)",
                  background: "rgba(251,191,36,0.06)",
                  fontSize: "9.5px", fontWeight: 500, color: "rgba(251,191,36,0.8)",
                }}>
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* GitHub button */}
          {card.github && (
            <a
              href={card.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                display: "inline-flex", alignItems: "center", gap: "5px",
                padding: "4px 10px", borderRadius: "6px",
                border: "1px solid rgba(255,255,255,0.13)",
                background: "rgba(255,255,255,0.06)",
                color: "rgba(255,255,255,0.75)", fontSize: "10px", fontWeight: 600,
                textDecoration: "none", alignSelf: "flex-start",
                cursor: "pointer",
              }}
            >
              <GHIcon /> GitHub
            </a>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Main component ─────────────────────────────────────────────────────────────

export default function SocialCards({ cards }: SocialCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);
  const hasEntered = useRef(false);
  const directionRef = useRef<"left" | "right" | null>(null);
  const prevVisible = useRef<Set<number>>(new Set());

  const totalCards = cards.length;
  const needsPagination = totalCards > MAX_VISIBLE;
  const [centerIndex, setCenterIndex] = useState(needsPagination ? HALF : totalCards >> 1);

  const getVisibleMap = useCallback((center: number) => {
    const map = new Map<number, number>();
    if (!needsPagination) {
      cards.forEach((_, i) => map.set(i, i));
      return map;
    }
    for (let slot = 0; slot < MAX_VISIBLE; slot++) {
      map.set(((center + slot - HALF) % totalCards + totalCards) % totalCards, slot);
    }
    return map;
  }, [totalCards, needsPagination, cards]);

  const cycle = useCallback((direction: "left" | "right") => {
    if (isAnimating.current || !needsPagination) return;
    isAnimating.current = true;
    directionRef.current = direction;
    setCenterIndex(prev =>
      direction === "right" ? (prev + 1) % totalCards : (prev - 1 + totalCards) % totalCards
    );
  }, [totalCards, needsPagination]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !totalCards) return;

    const cardElements = Array.from(container.querySelectorAll<HTMLElement>(".fan-card"));
    if (!cardElements.length) return;

    const visibleMap = getVisibleMap(centerIndex);
    const previouslyVisible = prevVisible.current;
    const direction = directionRef.current;
    const isFirstMount = !hasEntered.current;
    const multiplier = getResponsiveMultiplier(window.innerWidth);
    const hMult = getHeightMultiplier(window.innerWidth);
    const slotCount = needsPagination ? MAX_VISIBLE : totalCards;
    const config = (slot: number) => getSlotConfig(slotCount, slot);

    if (isFirstMount) isAnimating.current = true;

    let completedCount = 0;
    const visibleCount = visibleMap.size;
    const onCardDone = () => {
      if (++completedCount >= visibleCount) {
        isAnimating.current = false;
        if (isFirstMount) hasEntered.current = true;
      }
    };

    cardElements.forEach((card, cardIndex) => {
      const slot = visibleMap.get(cardIndex);
      const wasVisible = previouslyVisible.has(cardIndex);

      if (slot !== undefined) {
        const { x, y, rot, scale, zIndex } = config(slot);
        const target = {
          x: `${x * multiplier}rem`,
          y: `${y * hMult}rem`,
          rotation: rot,
          scale,
          opacity: 1,
          zIndex,
        };

        if (isFirstMount) {
          gsap.set(card, { x: 0, y: `${14 * hMult}rem`, rotation: 0, scale: 0.5, opacity: 0 });
          gsap.to(card, { ...target, duration: 1.2, ease: "elastic.out(1.05,.78)", delay: 0.2 + slot * 0.07, onComplete: onCardDone });
        } else if (!wasVisible) {
          const enterX = direction === "right" ? 45 : -45;
          gsap.set(card, { x: `${enterX}rem`, y: `${y * hMult}rem`, rotation: direction === "right" ? 30 : -30, scale: 0.5, opacity: 0 });
          gsap.to(card, { ...target, duration: 0.6, ease: "power2.out", onComplete: onCardDone });
        } else {
          gsap.to(card, { ...target, duration: 0.5, ease: "power2.out", onComplete: onCardDone });
        }
      } else if (wasVisible) {
        const exitX = direction === "right" ? -45 : 45;
        gsap.to(card, { x: `${exitX}rem`, opacity: 0, scale: 0.5, rotation: direction === "right" ? -30 : 30, duration: 0.4, ease: "power2.in", zIndex: 0 });
      } else if (isFirstMount) {
        gsap.set(card, { opacity: 0, scale: 0.3, x: 0, y: 0, zIndex: 0 });
      }
    });

    prevVisible.current = new Set(visibleMap.keys());

    // Hover interactions
    const visibleEntries: { el: HTMLElement; slot: number }[] = [];
    cardElements.forEach((el, i) => {
      const slot = visibleMap.get(i);
      if (slot !== undefined) visibleEntries.push({ el, slot });
    });
    visibleEntries.sort((a, b) => a.slot - b.slot);

    let activeSlot: number | null = null;
    let leaveTimer: ReturnType<typeof setTimeout> | null = null;
    const centerSlot = visibleEntries.length >> 1;

    const updateHoverLayout = (hoveredSlot: number | null) => {
      const mult = getResponsiveMultiplier(window.innerWidth);
      const hM = getHeightMultiplier(window.innerWidth);

      visibleEntries.forEach(({ el, slot }) => {
        const base = config(slot);
        let targetX = base.x * mult;
        let targetY = base.y * hM;
        let targetRot = base.rot;
        let targetScale = base.scale;
        let delay = 0;

        if (hoveredSlot !== null) {
          const distance = Math.abs(slot - hoveredSlot);
          delay = distance * 0.02;

          if (slot === hoveredSlot) {
            targetY -= 2.0 * hM;
            targetScale *= 1.06;
          } else {
            const normalized = centerSlot > 0 ? (slot - centerSlot) / centerSlot : 0;
            const pushStrength = 9 * (1 - Math.abs(normalized)) * (1 + 0.2 * Math.max(0, 3 - distance));
            if (slot < hoveredSlot) {
              targetX -= pushStrength * mult;
              targetRot -= 3 / (distance + 1);
            } else {
              targetX += pushStrength * mult;
              targetRot += 3 / (distance + 1);
            }
          }
        } else {
          delay = Math.abs(slot - centerSlot) * 0.02;
        }

        gsap.to(el, {
          x: `${targetX}rem`, y: `${targetY}rem`, rotation: targetRot, scale: targetScale,
          duration: 0.5, delay, ease: "elastic.out(1,.75)", overwrite: "auto",
        });
        gsap.set(el, { zIndex: base.zIndex });
      });
    };

    const enterHandlers = visibleEntries.map(({ el, slot }) => {
      const handler = () => {
        if (isAnimating.current) return;
        if (leaveTimer) { clearTimeout(leaveTimer); leaveTimer = null; }
        if (activeSlot !== slot) { activeSlot = slot; updateHoverLayout(slot); }
      };
      el.addEventListener("mouseenter", handler);
      return { el, handler };
    });

    const onMouseLeave = () => {
      if (isAnimating.current) return;
      if (leaveTimer) clearTimeout(leaveTimer);
      leaveTimer = setTimeout(() => { activeSlot = null; updateHoverLayout(null); }, 50);
    };
    container.addEventListener("mouseleave", onMouseLeave);

    const onResize = () => { if (!isAnimating.current) updateHoverLayout(activeSlot); };
    window.addEventListener("resize", onResize);

    return () => {
      enterHandlers.forEach(({ el, handler }) => el.removeEventListener("mouseenter", handler));
      container.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", onResize);
      if (leaveTimer) clearTimeout(leaveTimer);
    };
  }, [centerIndex, totalCards, getVisibleMap, needsPagination]);

  if (!totalCards) return null;

  const chevron = (direction: "left" | "right") => (
    <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points={direction === "left" ? "15 18 9 12 15 6" : "9 18 15 12 9 6"} />
    </svg>
  );

  return (
    <section className="flex flex-col items-center w-full py-4 lg:py-8 px-4 md:px-8 relative z-20">
      <div className="flex items-center justify-center w-full max-w-[100rem]">
        <div ref={containerRef} className="fan-layout flex relative justify-center items-center w-full max-w-[90rem]">
          {cards.map((card, index) => {
            const inner = <RichCardFace card={card} index={index} />;

            if (card.onClick) {
              return (
                <div
                  key={index}
                  role="button"
                  tabIndex={0}
                  className="fan-card cursor-pointer"
                  onClick={card.onClick}
                  onKeyDown={(e) => e.key === "Enter" && card.onClick!()}
                  aria-label={card.title ? `View ${card.title}` : card.alt || `Open card ${index + 1}`}
                >
                  {inner}
                </div>
              );
            }
            if (card.linkUrl) {
              return (
                <a key={index} href={card.linkUrl} target={card.linkUrl.startsWith("http") ? "_blank" : "_self"} rel="noopener noreferrer" className="fan-card block cursor-pointer">
                  {inner}
                </a>
              );
            }
            return <div key={index} className="fan-card">{inner}</div>;
          })}
        </div>
      </div>

      {needsPagination && (
        <div className="flex items-center justify-center gap-4 mt-4 md:mt-6 z-30">
          <button className={`${ARROW_CLASSES} w-10 h-10 md:w-12 md:h-12`} onClick={() => cycle("left")} aria-label="Previous">
            {chevron("left")}
          </button>
          <div className="flex items-center gap-2">
            {cards.map((_, i) => (
              <span key={i} className={`w-2 h-2 rounded-full transition-all duration-300 ${i === centerIndex ? "bg-white/80 scale-[1.3]" : "bg-white/15"}`} />
            ))}
          </div>
          <button className={`${ARROW_CLASSES} w-10 h-10 md:w-12 md:h-12`} onClick={() => cycle("right")} aria-label="Next">
            {chevron("right")}
          </button>
        </div>
      )}
    </section>
  );
}
