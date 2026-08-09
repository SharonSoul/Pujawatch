"use client";

import { useRef, useEffect, ReactNode } from "react";
import Link from "next/link";
import gsap from "gsap";

interface MagneticLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
  radius?: number;   // px distance at which magnet activates
  strength?: number; // 0–1 pull factor
}

/**
 * A <Link> that magnetically follows the cursor when it enters
 * within `radius` pixels, then snaps back elastically.
 */
export function MagneticLink({
  href,
  className,
  children,
  radius = 140,
  strength = 0.4,
}: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dist = Math.hypot(e.clientX - cx, e.clientY - cy);
      if (dist < radius) {
        gsap.to(el, {
          x: (e.clientX - cx) * strength,
          y: (e.clientY - cy) * strength,
          duration: 0.6,
          ease: "power2.out",
        });
      } else {
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.8,
          ease: "elastic.out(1, 0.3)",
        });
      }
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [radius, strength]);

  return (
    <Link href={href} ref={ref} className={className}>
      {children}
    </Link>
  );
}
