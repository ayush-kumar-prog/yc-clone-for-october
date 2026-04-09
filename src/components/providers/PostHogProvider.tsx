"use client";

/**
 * PostHog client provider.
 *
 * Initializes posthog-js once on mount with the public project key from
 * NEXT_PUBLIC_POSTHOG_KEY. The project key is client-side and safe to embed
 * (PostHog's own init snippet is what gets pasted into <head> on real sites).
 *
 * The matching personal API key lives in October's canvas connection UI,
 * never in this repo.
 *
 * This component also tracks route changes so Next.js App Router SPA
 * navigations fire $pageview events like they would on a traditional
 * multi-page site.
 */

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";

function PostHogPageview(): null {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname || typeof window === "undefined") return;
    let url = window.origin + pathname;
    const search = searchParams?.toString();
    if (search) url = `${url}?${search}`;
    posthog.capture("$pageview", { $current_url: url });
  }, [pathname, searchParams]);

  return null;
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";
    if (!key) {
      // Running without PostHog. Fine for local-only dev but no events fire.
      return;
    }
    if (typeof window === "undefined") return;
    if ((window as unknown as { __posthog_initialized?: boolean }).__posthog_initialized) return;
    posthog.init(key, {
      api_host: host,
      defaults: "2026-01-30",
      person_profiles: "identified_only",
      capture_pageview: false, // we capture manually via <PostHogPageview />
    });
    (window as unknown as { __posthog_initialized?: boolean }).__posthog_initialized = true;
  }, []);

  return (
    <PHProvider client={posthog}>
      <PostHogPageview />
      {children}
    </PHProvider>
  );
}
