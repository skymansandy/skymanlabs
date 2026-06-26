type Store = "play" | "appStore";

const LABELS: Record<Store, string> = {
  play: "Google Play",
  appStore: "App Store",
};

function Glyph({ store }: { store: Store }) {
  if (store === "play") {
    // Google Play triangle
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
        <path
          fill="currentColor"
          d="M3.6 2.3a1 1 0 0 0-.6.92v17.56a1 1 0 0 0 .6.92l10.2-9.7L3.6 2.3Zm11.6 8.06 2.9-2.76-9.9-5.66a1 1 0 0 0-.5-.14l7.5 8.56Zm0 3.28-7.5 8.56a1 1 0 0 0 .5-.14l9.9-5.66-2.9-2.76Zm1.43-1.36 3.16-1.8a1 1 0 0 0 0-1.76l-3.16-1.8L13.9 12l2.73 2.28Z"
        />
      </svg>
    );
  }
  // Apple logo
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path
        fill="currentColor"
        d="M16.37 12.78c.02 2.5 2.2 3.33 2.22 3.34-.02.06-.35 1.2-1.15 2.37-.69 1.02-1.4 2.03-2.53 2.05-1.1.02-1.46-.65-2.72-.65-1.27 0-1.66.63-2.7.67-1.09.04-1.92-1.1-2.62-2.11C5.45 16.4 4.4 12.6 5.86 10.04c.72-1.27 2.02-2.07 3.42-2.09 1.07-.02 2.08.72 2.74.72.65 0 1.88-.89 3.17-.76.54.02 2.06.22 3.03 1.65-.08.05-1.81 1.06-1.85 3.22ZM14.3 6.64c.58-.7.97-1.68.86-2.64-.84.03-1.85.56-2.45 1.26-.54.62-1.01 1.61-.88 2.56.93.07 1.89-.47 2.47-1.18Z"
      />
    </svg>
  );
}

export function StoreBadge({ store, href }: { store: Store; href?: string }) {
  const live = !!href && /^https?:\/\//.test(href);

  if (live) {
    return (
      <a className="badge" href={href} target="_blank" rel="noopener noreferrer">
        <Glyph store={store} />
        <span>{LABELS[store]}</span>
      </a>
    );
  }

  // Not published yet: a non-clickable "Coming soon" pill.
  return (
    <span className="badge badge-soon" aria-disabled="true">
      <Glyph store={store} />
      <span>{LABELS[store]}</span>
      <span className="badge-soon-tag">Soon</span>
    </span>
  );
}
