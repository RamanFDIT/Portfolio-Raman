import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * Attach to a wrapper element. Children with [data-reveal] will
 * fade + slide in when the wrapper scrolls into view.
 *
 * @param {Object}  opts
 * @param {number}  opts.y          – starting Y offset (px)   default 40
 * @param {number}  opts.duration   – animation duration (s)    default 0.8
 * @param {number}  opts.stagger    – stagger between children  default 0.15
 * @param {string}  opts.ease       – GSAP ease                 default "power3.out"
 * @param {number}  opts.threshold  – IntersectionObserver %    default 0.15
 */
const useReveal = ({
    y = 40,
    duration = 0.8,
    stagger = 0.15,
    ease = "power3.out",
    threshold = 0.15,
} = {}) => {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const targets = el.querySelectorAll("[data-reveal]");
        if (targets.length === 0) return;

        // Set initial hidden state
        gsap.set(targets, { autoAlpha: 0, y });

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    gsap.to(targets, {
                        autoAlpha: 1,
                        y: 0,
                        duration,
                        stagger,
                        ease,
                    });
                    observer.unobserve(el);
                }
            },
            { threshold }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [y, duration, stagger, ease, threshold]);

    return ref;
};

export default useReveal;
