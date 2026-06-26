import Image from "next/image";
import type { AppEntry } from "@/apps";

/** Renders an app icon (real image or monogram placeholder) at any size. */
export function AppIcon({ app, size = 64 }: { app: AppEntry; size?: number }) {
  const radius = Math.round(size * 0.22);

  if ("monogram" in app.icon) {
    return (
      <span
        className="monogram"
        style={{
          width: size,
          height: size,
          borderRadius: radius,
          fontSize: Math.round(size * 0.42),
        }}
        aria-hidden="true"
      >
        {app.icon.monogram}
      </span>
    );
  }

  return (
    <Image
      src={app.icon}
      alt=""
      width={size}
      height={size}
      className="app-icon"
      style={{ borderRadius: radius }}
    />
  );
}
