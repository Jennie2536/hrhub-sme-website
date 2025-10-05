const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Airtable Configuration
const QUOTE_BASE_ID = 'appd8xzThRgQtkNZ5';
const QUOTE_TOKEN = 'patGcXnbTVhQui3mK.56454b78cee48fb8385448d66ea35b2deb4b16d0a4cb6bfb965161f079a35110';

const BOOKING_BASE_ID = 'appiCUoqChpTNjHeP';
const BOOKING_TOKEN = 'pat8qZhofPp2vut02.102867409598a37e4273dc3602ac5cb98fd450902271f1d6b65cdeb8fad4a2f5';

// Quote Request Endpoint
app.post('/api/quote', async (req, res) => {
    try {
        const { fullName, email, phone, companyName, location, serviceInterest, message } = req.body;

        const response = await fetch(`https://api.airtable.com/v0/${QUOTE_BASE_ID}/Quote%20Leads`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${QUOTE_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fields: {
                    'Full Name': fullName,
                    'Email': email,
                    'Phone': phone,
                    'Company Name': companyName,
                    'Location/Country': location,
                    'Service Interest': serviceInterest,
                    'Message': message,
                    'Submission Date': new Date().toISOString(),
                    'Status': 'New',
                },
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Airtable Error:', errorData);
            return res.status(response.status).json({ error: 'Failed to submit quote request', details: errorData });
        }

        const result = await response.json();
        console.log('Quote submitted successfully:', result.id);
        res.json({ success: true, id: result.id });

    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Strategy Call Booking Endpoint
app.post('/api/booking', async (req, res) => {
    try {
        const { name, email, phone, company, message } = req.body;

        const response = await fetch(`https://api.airtable.com/v0/${BOOKING_BASE_ID}/Bookings`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${BOOKING_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fields: {
                    'Full Name': name,
                    'Email': email,
                    'Phone': phone,
                    'Company Name': company,
                    'Message': message || '',
                    'Submission Date': new Date().toISOString(),
                    'Status': 'New',
                },
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Airtable Error:', errorData);
            return res.status(response.status).json({ error: 'Failed to submit booking request', details: errorData });
        }

        const result = await response.json();
        console.log('Booking submitted successfully:', result.id);
        res.json({ success: true, id: result.id });

    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});
