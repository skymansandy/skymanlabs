import { apps, APP_GROUPS } from "@/apps";
import { AppCard } from "@/components/AppCard";

export default function Home() {
  return (
    <main className="page">
      <header className="masthead">
        <span className="wordmark">skymanlabs</span>
        <p className="intro">An indie studio building serious hobby apps.</p>
      </header>

      <div className="groups">
        {APP_GROUPS.map((group) => {
          const items = apps.filter((app) => app.category === group.key);
          if (items.length === 0) return null;
          return (
            <section className="group" key={group.key}>
              <h2 className="group-title">{group.title}</h2>
              <div className="apps">
                {items.map((app) => (
                  <AppCard key={app.id} app={app} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <footer className="footer">
        <span>© skymanlabs</span>
      </footer>
    </main>
  );
}
