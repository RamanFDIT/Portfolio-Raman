import { useEffect } from "react";

const BASE_URL = "https://raman.studio";

/**
 * Lightweight SEO hook — sets <title>, meta description, canonical URL,
 * and Open Graph / Twitter tags per page.
 *
 * @param {{ title: string, description: string, path?: string }} options
 */
const useSEO = ({ title, description, path = "/" }) => {
    useEffect(() => {
        // Title
        document.title = title;

        // Helper to set or create a <meta> tag
        const setMeta = (attr, key, value) => {
            let el = document.querySelector(`meta[${attr}="${key}"]`);
            if (!el) {
                el = document.createElement("meta");
                el.setAttribute(attr, key);
                document.head.appendChild(el);
            }
            el.setAttribute("content", value);
        };

        // Helper to set or create a <link> tag
        const setLink = (rel, href) => {
            let el = document.querySelector(`link[rel="${rel}"]`);
            if (!el) {
                el = document.createElement("link");
                el.setAttribute("rel", rel);
                document.head.appendChild(el);
            }
            el.setAttribute("href", href);
        };

        const url = `${BASE_URL}${path}`;

        // Standard meta
        setMeta("name", "description", description);
        setMeta("name", "title", title);

        // Canonical
        setLink("canonical", url);

        // Open Graph
        setMeta("property", "og:title", title);
        setMeta("property", "og:description", description);
        setMeta("property", "og:url", url);

        // Twitter
        setMeta("name", "twitter:title", title);
        setMeta("name", "twitter:description", description);
        setMeta("name", "twitter:url", url);
    }, [title, description, path]);
};

export default useSEO;
