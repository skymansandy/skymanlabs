type Store = "play" | "appStore";

const COPY: Record<Store, { top: string; bottom: string; soonTop: string }> = {
  play: { top: "GET IT ON", bottom: "Google Play", soonTop: "COMING SOON ON" },
  appStore: {
    top: "Download on the",
    bottom: "App Store",
    soonTop: "Coming soon on the",
  },
};

/** The official Google Play four-colour triangle. */
function PlayGlyph() {
  return (
    <svg
      className="store-badge-glyph"
      viewBox="0 0 24 24"
      width="22"
      height="22"
      aria-hidden="true"
    >
      <path fill="#00D2FF" d="M3 1.8 12.5 12 3 12z" />
      <path fill="#00E676" d="M3 22.2 12.5 12 3 12z" />
      <path fill="#FF3B44" d="M3 1.8 21.5 12 12.5 12z" />
      <path fill="#FFC900" d="M3 22.2 21.5 12 12.5 12z" />
    </svg>
  );
}

/** The Apple logo. */
function AppleGlyph() {
  return (
    <svg
      className="store-badge-glyph"
      viewBox="0 0 24 24"
      width="22"
      height="22"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M16.37 12.78c.02 2.5 2.2 3.33 2.22 3.34-.02.06-.35 1.2-1.15 2.37-.69 1.02-1.4 2.03-2.53 2.05-1.1.02-1.46-.65-2.72-.65-1.27 0-1.66.63-2.7.67-1.09.04-1.92-1.1-2.62-2.11C5.45 16.4 4.4 12.6 5.86 10.04c.72-1.27 2.02-2.07 3.42-2.09 1.07-.02 2.08.72 2.74.72.65 0 1.88-.89 3.17-.76.54.02 2.06.22 3.03 1.65-.08.05-1.81 1.06-1.85 3.22ZM14.3 6.64c.58-.7.97-1.68.86-2.64-.84.03-1.85.56-2.45 1.26-.54.62-1.01 1.61-.88 2.56.93.07 1.89-.47 2.47-1.18Z"
      />
    </svg>
  );
}

/**
 * Official-style store badge ("Download on the App Store" / "Get it on Google
 * Play"). When the listing URL isn't set yet it renders a dimmed, non-clickable
 * "Coming soon on …" variant so the slot still reads as a real store badge.
 */
export function StoreBadge({ store, href }: { store: Store; href?: string }) {
  const live = !!href && /^https?:\/\//.test(href);
  const copy = COPY[store];
  const Glyph = store === "play" ? PlayGlyph : AppleGlyph;

  const inner = (
    <>
      <Glyph />
      <span className="store-badge-text">
        <span className="store-badge-top">{live ? copy.top : copy.soonTop}</span>
        <span className="store-badge-bottom">{copy.bottom}</span>
      </span>
    </>
  );

  if (live) {
    return (
      <a
        className="store-badge"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {inner}
      </a>
    );
  }

  return (
    <span className="store-badge store-badge-soon" aria-disabled="true">
      {inner}
    </span>
  );
}
