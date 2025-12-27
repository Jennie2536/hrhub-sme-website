import { useEffect, useRef } from 'react';
import { trackSectionView, trackScrollDepth, trackTimeOnPage } from '@/utils/analytics';

interface VisibilityTrackingOptions {
    pageName: string;
    trackScroll?: boolean;
    trackTime?: boolean;
    trackSections?: boolean;
}

export const useVisibilityTracking = ({
    pageName,
    trackScroll = true,
    trackTime = true,
    trackSections = true,
}: VisibilityTrackingOptions) => {
    const startTimeRef = useRef<number>(Date.now());
    const trackedDepthsRef = useRef<Set<number>>(new Set());
    const trackedSectionsRef = useRef<Set<string>>(new Set());

    useEffect(() => {
        // Track scroll depth
        if (trackScroll) {
            const scrollDepths = [25, 50, 75, 100];

            const handleScroll = () => {
                const scrollPercentage = Math.round(
                    (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
                );

                scrollDepths.forEach((depth) => {
                    if (scrollPercentage >= depth && !trackedDepthsRef.current.has(depth)) {
                        trackScrollDepth(depth, pageName);
                        trackedDepthsRef.current.add(depth);
                    }
                });
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [pageName, trackScroll]);

    useEffect(() => {
        // Track section visibility
        if (trackSections) {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.5, // Section is considered visible when 50% is in viewport
            };

            const observerCallback = (entries: IntersectionObserverEntry[]) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const sectionName = entry.target.getAttribute('data-section-name');
                        if (sectionName && !trackedSectionsRef.current.has(sectionName)) {
                            trackSectionView(sectionName, pageName);
                            trackedSectionsRef.current.add(sectionName);
                        }
                    }
                });
            };

            const observer = new IntersectionObserver(observerCallback, observerOptions);

            // Observe all elements with data-section-name attribute
            const sections = document.querySelectorAll('[data-section-name]');
            sections.forEach((section) => observer.observe(section));

            return () => {
                sections.forEach((section) => observer.unobserve(section));
            };
        }
    }, [pageName, trackSections]);

    useEffect(() => {
        // Track time on page
        if (trackTime) {
            return () => {
                const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000);
                if (timeSpent > 3) { // Only track if user spent more than 3 seconds
                    trackTimeOnPage(pageName, timeSpent);
                }
            };
        }
    }, [pageName, trackTime]);
};