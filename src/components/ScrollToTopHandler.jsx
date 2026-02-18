import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // If there's no hash (section ID), jump to top immediately
        // This is important for page transitions to feel snappy and correct
        if (!hash) {
            window.scrollTo({
                top: 0,
                behavior: "auto"
            });
        } else {
            // For hash links (like #features), wait for components to render
            // then smooth scroll to the target
            const scrollToElement = () => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    const offset = 80; // Navbar height approx
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = element.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                    });
                }
            };

            // Short delay to allow the new page/component to mount
            const timer = setTimeout(scrollToElement, 100);
            return () => clearTimeout(timer);
        }
    }, [pathname, hash]);

    return null;
}
