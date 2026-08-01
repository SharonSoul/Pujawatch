"use client";

import { useEffect, useRef } from "react";

interface CalendlyEmbedProps {
  url: string;
}

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: {
        url: string;
        parentElement: HTMLElement;
        prefill?: Record<string, unknown>;
        utm?: Record<string, unknown>;
      }) => void;
    };
  }
}

export function CalendlyEmbed({ url }: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const existing = container.querySelector("iframe, .calendly-inline-widget");
    if (existing) return;

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => {
      window.Calendly?.initInlineWidget({
        url,
        parentElement: container,
        prefill: {},
        utm: {},
      });
    };
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [url]);

  return (
    <div
      ref={containerRef}
      className="h-[700px] min-h-0 w-full overflow-hidden rounded-sm"
    />
  );
}
