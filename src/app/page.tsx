import { apps } from "@/apps";
import { AppCard } from "@/components/AppCard";

export default function Home() {
  return (
    <main className="page">
      <header className="masthead">
        <span className="wordmark">skymanlabs</span>
        <p className="intro">
          An indie studio building serious hobby apps.
        </p>
      </header>

      <section className="apps">
        {apps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </section>

      <footer className="footer">
        <span>© skymanlabs</span>
      </footer>
    </main>
  );
}
