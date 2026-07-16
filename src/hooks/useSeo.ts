import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(url: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', url);
}

/**
 * Per-page SEO: title, description, canonical URL, Open Graph, and
 * Twitter card metadata. Runs client-side, which is the practical option
 * for a static GitHub Pages SPA.
 */
export function useSeo(title: string, description?: string) {
  const { pathname } = useLocation();

  useEffect(() => {
    const fullTitle = title === siteConfig.siteName ? title : `${title} — ${siteConfig.siteName}`;
    const desc = description ?? siteConfig.defaultDescription;
    const canonical = siteConfig.siteUrl + (pathname === '/' ? '/' : pathname);

    document.title = fullTitle;
    setMeta('name', 'description', desc);
    setCanonical(canonical);
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', desc);
    setMeta('property', 'og:type', 'profile');
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:site_name', siteConfig.siteName);
    // Social-preview image placeholder — add public/images/social-preview.png
    // (1200x630) and it will be picked up automatically.
    setMeta('property', 'og:image', `${siteConfig.siteUrl}/images/social-preview.png`);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', desc);
  }, [title, description, pathname]);
}
