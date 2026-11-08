import Link from "next/link";
import type { AppEntry, AppGuide } from "@/apps";
import { GuideTabs } from "@/components/GuideTabs";

/** Body of an app's guide page, shared by /howtoplay (games) and /help (apps). */
export function GuidePage({
  app,
  guide,
  title,
}: {
  app: AppEntry;
  guide: AppGuide;
  title: string;
}) {
  const { intro, paths, tips } = guide;

  return (
    <main className="legal guide">
      <Link href={`/${app.id}`} className="legal-back">
        ← {app.name}
      </Link>

      <h1>{title}</h1>
      <p className="guide-intro">{intro}</p>

      <GuideTabs paths={paths} />

      {tips && tips.length > 0 ? (
        <section className="guide-path">
          <h2>Good to know</h2>
          <ul className="guide-tips">
            {tips.map((tip) => (
              <li key={tip.title}>
                <strong>{tip.title}</strong> — {tip.detail}
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </main>
  );
}
