// src/services/airtable.ts

interface QuoteFormData {
    fullName: string;
    email: string;
    phone: string;
    companyName: string;
    location: string;
    serviceInterest: string;
    message: string;
}

interface StrategyCallFormData {
    name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
}

const AIRTABLE_API_URL = 'https://api.airtable.com/v0';

export const submitQuoteRequest = async (data: QuoteFormData): Promise<void> => {
    const baseId = import.meta.env.VITE_AIRTABLE_QUOTE_BASE;
    const token = import.meta.env.VITE_AIRTABLE_QUOTE_TOKEN;

    if (!baseId || !token) {
        throw new Error('Airtable configuration missing. Please check environment variables.');
    }

    const response = await fetch(`${AIRTABLE_API_URL}/${baseId}/Quote%20Leads`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            fields: {
                'Full Name': data.fullName,
                'Email': data.email,
                'Phone': data.phone,
                'Company Name': data.companyName,
                'Location/Country': data.location,
                'Service Interest': data.serviceInterest,
                'Message': data.message,
            }
        })
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'Failed to submit quote request');
    }

    return response.json();
};

export const submitStrategyCall = async (data: StrategyCallFormData): Promise<void> => {
    const baseId = import.meta.env.VITE_AIRTABLE_STRATEGY_BASE;
    const token = import.meta.env.VITE_AIRTABLE_STRATEGY_TOKEN;

    if (!baseId || !token) {
        throw new Error('Airtable configuration missing. Please check environment variables.');
    }

    const response = await fetch(`${AIRTABLE_API_URL}/${baseId}/Bookings`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            fields: {
                'Full Name': data.name,
                'Email': data.email,
                'Phone': data.phone,
                'Company Name': data.company,
                'Message': data.message || '',
            }
        })
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'Failed to submit strategy call booking');
    }

    return response.json();
};