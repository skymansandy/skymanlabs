"use client";

import { useRef, useState } from "react";
import type { AppGuidePath } from "@/apps";

/**
 * Tabbed view of how-to-play paths (e.g. Caller mode / Ticket mode). Follows the
 * WAI-ARIA tabs pattern: roving tabindex, arrow/Home/End keys, and all panels
 * kept in the DOM (inactive ones `hidden`) so the content stays crawlable.
 */
export function GuideTabs({ paths }: { paths: AppGuidePath[] }) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  if (paths.length === 0) return null;

  const focusTab = (i: number) => {
    const next = (i + paths.length) % paths.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    switch (e.key) {
      case "ArrowRight":
        e.preventDefault();
        focusTab(i + 1);
        break;
      case "ArrowLeft":
        e.preventDefault();
        focusTab(i - 1);
        break;
      case "Home":
        e.preventDefault();
        focusTab(0);
        break;
      case "End":
        e.preventDefault();
        focusTab(paths.length - 1);
        break;
    }
  };

  return (
    <div className="guide-tabs">
      <div className="guide-tablist" role="tablist" aria-label="How to play modes">
        {paths.map((path, i) => {
          const selected = i === active;
          return (
            <button
              key={path.title}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`guide-tab-${i}`}
              aria-controls={`guide-panel-${i}`}
              aria-selected={selected}
              tabIndex={selected ? 0 : -1}
              className={`guide-tab${selected ? " is-active" : ""}`}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
            >
              {path.tab ?? path.title}
            </button>
          );
        })}
      </div>

      {paths.map((path, i) => (
        <section
          key={path.title}
          role="tabpanel"
          id={`guide-panel-${i}`}
          aria-labelledby={`guide-tab-${i}`}
          hidden={i !== active}
          tabIndex={0}
          className="guide-tabpanel"
        >
          <h2>{path.title}</h2>
          {path.intro ? <p className="guide-path-intro">{path.intro}</p> : null}
          <ol className="howto">
            {path.steps.map((step, s) => (
              <li key={step.title} className="howto-step">
                <span className="howto-num" aria-hidden="true">
                  {s + 1}
                </span>
                <span className="howto-body">
                  {step.screen ? (
                    <span className="howto-screen">{step.screen}</span>
                  ) : null}
                  <span className="howto-title">{step.title}</span>
                  <span className="howto-detail">{step.detail}</span>
                </span>
              </li>
            ))}
          </ol>
        </section>
      ))}
    </div>
  );
}
