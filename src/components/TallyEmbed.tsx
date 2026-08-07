"use client";

import { useEffect, useRef, useState } from "react";

interface TallyEmbedProps {
  formId: string;
}

export function TallyEmbed({ formId }: TallyEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(700);

  const embedUrl = `https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`;

  useEffect(() => {
    function handleMessage(ev: MessageEvent) {
      if (!ev.origin.startsWith("https://tally.so")) return;
      if (
        ev.data &&
        typeof ev.data === "object" &&
        ev.data.type === "TALLY_RESIZE" &&
        typeof ev.data.height === "number"
      ) {
        setHeight(ev.data.height + 40);
      }
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className="w-full overflow-hidden rounded-sm">
      <iframe
        ref={iframeRef}
        src={embedUrl}
        width="100%"
        height={height}
        style={{ border: 0, transition: "height 0.2s ease-out" }}
        title="Tally booking form"
        loading="lazy"
      />
    </div>
  );
}
