import { ImageResponse } from "next/og";
import { SITE } from "@/site";

export const alt = `${SITE.name} — ${SITE.description}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "96px",
          background: "#0b0c0e",
          color: "#ededf0",
        }}
      >
        <div style={{ fontSize: 76, fontWeight: 600, letterSpacing: "-0.02em" }}>
          {SITE.name}
        </div>
        <div style={{ fontSize: 36, color: "#9aa0a6", marginTop: 20 }}>
          {SITE.description}
        </div>
      </div>
    ),
    { ...size },
  );
}
