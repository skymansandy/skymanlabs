"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Sends hash links for content that lives on its own page (e.g. `/fullhouse#howtoplay`)
 * to that page. The hash never reaches the server, so this has to run client-side.
 */
export function HashRedirect({ routes }: { routes: Record<string, string> }) {
  const router = useRouter();

  useEffect(() => {
    const redirect = () => {
      const target = routes[window.location.hash.slice(1).toLowerCase()];
      if (target) router.replace(target);
    };
    redirect();
    window.addEventListener("hashchange", redirect);
    return () => window.removeEventListener("hashchange", redirect);
  }, [routes, router]);

  return null;
}
