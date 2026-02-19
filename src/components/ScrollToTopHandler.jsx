import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        const sectionPaths = {
            '/features': 'features',
            '/how-it-works': 'how-it-works',
            '/business': 'business',
            '/faq': 'faq',
            '/hero': 'hero'
        };

        const targetId = sectionPaths[pathname] || (hash ? hash.replace('#', '') : null);

        if (targetId) {
            // For hash links (like #features) or path sections, wait for components to render
            // then smooth scroll to the target
            const scrollToElement = () => {
                const element = document.getElementById(targetId);
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
        } else {
            // If there's no hash or section path, jump to top immediately
            window.scrollTo({
                top: 0,
                behavior: "auto"
            });
        }
    }, [pathname, hash]);

    return null;
}
