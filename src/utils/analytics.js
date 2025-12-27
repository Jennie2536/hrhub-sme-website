// src/utils/analytics.js
import ReactGA from 'react-ga4';

// Your GA4 Measurement ID
const MEASUREMENT_ID = 'G-DME2231Z49';

// Initialize GA4
export const initGA = () => {
    ReactGA.initialize(MEASUREMENT_ID, {
        gaOptions: {
            send_page_view: true
        }
    });
};

// Track page views with custom parameters
export const trackPageView = (pageName, additionalParams = {}) => {
    ReactGA.send({
        hitType: "pageview",
        page: window.location.pathname,
        title: pageName,
        ...additionalParams
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

// ========== NEW TRACKING FUNCTIONS ==========

// Track service selection on Services page
export const trackServiceSelection = (serviceType) => {
    ReactGA.event({
        category: 'Service Interaction',
        action: 'service_selected',
        label: serviceType,
        service_type: serviceType
    });
};

// Track pricing tier views
export const trackPricingView = (tierName, serviceType) => {
    ReactGA.event({
        category: 'Pricing',
        action: 'pricing_tier_viewed',
        label: `${serviceType} - ${tierName}`,
        tier_name: tierName,
        service_type: serviceType
    });
};

// Track scroll depth
export const trackScrollDepth = (percentage, pageName) => {
    ReactGA.event({
        category: 'Engagement',
        action: 'scroll_depth',
        label: `${pageName} - ${percentage}%`,
        scroll_percentage: percentage,
        page_name: pageName
    });
};

// Track time spent on page
export const trackTimeOnPage = (pageName, timeInSeconds) => {
    ReactGA.event({
        category: 'Engagement',
        action: 'time_on_page',
        label: pageName,
        time_seconds: timeInSeconds,
        page_name: pageName
    });
};

// Track form interactions
export const trackFormInteraction = (formName, action, fieldName = '') => {
    ReactGA.event({
        category: 'Form Interaction',
        action: `form_${action}`,
        label: `${formName}${fieldName ? ` - ${fieldName}` : ''}`,
        form_name: formName,
        field_name: fieldName
    });
};

// Track navigation clicks
export const trackNavigation = (linkName, destination) => {
    ReactGA.event({
        category: 'Navigation',
        action: 'nav_click',
        label: `${linkName} to ${destination}`,
        link_name: linkName,
        destination: destination
    });
};

// Track section visibility (when user scrolls to a section)
export const trackSectionView = (sectionName, pageName) => {
    ReactGA.event({
        category: 'Engagement',
        action: 'section_viewed',
        label: `${pageName} - ${sectionName}`,
        section_name: sectionName,
        page_name: pageName
    });
};

// Track "How It Works" section interactions
export const trackProcessStep = (stepNumber, stepName) => {
    ReactGA.event({
        category: 'Process Engagement',
        action: 'step_viewed',
        label: `Step ${stepNumber}: ${stepName}`,
        step_number: stepNumber,
        step_name: stepName
    });
};

// Track calculator usage (if applicable)
export const trackCalculatorUse = (action, value = '') => {
    ReactGA.event({
        category: 'Calculator',
        action: `calculator_${action}`,
        label: value,
        calculator_action: action
    });
};

// Track outbound links (external sites)
export const trackOutboundLink = (url, linkText) => {
    ReactGA.event({
        category: 'Outbound Link',
        action: 'click',
        label: `${linkText} - ${url}`,
        url: url,
        link_text: linkText
    });
};

// Track modal/dialog interactions
export const trackModalInteraction = (modalName, action) => {
    ReactGA.event({
        category: 'Modal',
        action: `modal_${action}`,
        label: modalName,
        modal_name: modalName
    });
};

// Track WhatsApp/Phone clicks
export const trackContactMethod = (method, location) => {
    ReactGA.event({
        category: 'Contact',
        action: `contact_${method}`,
        label: location,
        contact_method: method,
        click_location: location
    });
};

// Track user journey milestones
export const trackJourneyMilestone = (milestone) => {
    ReactGA.event({
        category: 'User Journey',
        action: 'milestone_reached',
        label: milestone,
        milestone: milestone
    });
};

// Track errors (for debugging user experience issues)
export const trackError = (errorType, errorMessage, pageName) => {
    ReactGA.event({
        category: 'Error',
        action: errorType,
        label: `${pageName} - ${errorMessage}`,
        error_type: errorType,
        error_message: errorMessage,
        page_name: pageName
    });
};