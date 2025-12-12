// src/utils/analytics.js
import ReactGA from 'react-ga4';

// Your GA4 Measurement ID
const MEASUREMENT_ID = 'G-DME2231Z49';

// Initialize GA4
export const initGA = () => {
    ReactGA.initialize(MEASUREMENT_ID, {
        gaOptions: {
            send_page_view: true // Changed to true for automatic page tracking
        }
    });
};

// Track downloads
export const trackDownload = (brochureType) => {
    ReactGA.event({
        category: 'Download',
        action: 'download_brochure',
        label: `${brochureType}-brochure`,
        brochure_type: brochureType
    });
};

// Track quote request form submission
export const trackQuoteRequest = (serviceType, location) => {
    ReactGA.event({
        category: 'Lead Generation',
        action: 'quote_request_submitted',
        label: serviceType,
        service_type: serviceType,
        user_location: location
    });
};

// Track strategy call booking
export const trackStrategyCallBooking = () => {
    ReactGA.event({
        category: 'Lead Generation',
        action: 'strategy_call_booked',
        label: 'Calendly'
    });
};

// Track CTA button clicks
export const trackCTAClick = (ctaName, ctaLocation) => {
    ReactGA.event({
        category: 'CTA',
        action: 'cta_click',
        label: `${ctaName} - ${ctaLocation}`,
        cta_name: ctaName,
        cta_location: ctaLocation
    });
};

// Track which audience segment user engages with
export const trackAudienceEngagement = (audience) => {
    ReactGA.event({
        category: 'Engagement',
        action: 'audience_engagement',
        label: audience,
        audience_type: audience
    });
};