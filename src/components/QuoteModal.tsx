import { useState } from 'react';
import { X } from 'lucide-react';
import { submitQuoteRequest } from '../services/airtable';

interface QuoteModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface FormData {
    fullName: string;
    email: string;
    phone: string;
    companyName: string;
    location: string;
    serviceInterest: string;
    message: string;
}

export const QuoteModal = ({ isOpen, onClose }: QuoteModalProps) => {
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        email: '',
        phone: '',
        companyName: '',
        location: '',
        serviceInterest: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        if (errorMessage) setErrorMessage('');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage('');

        try {
            await submitQuoteRequest({
                fullName: formData.fullName,
                email: formData.email,
                phone: formData.phone,
                companyName: formData.companyName,
                location: formData.location,
                serviceInterest: formData.serviceInterest,
                message: formData.message,
            });

            setIsSubmitting(false);
            setIsSuccess(true);

            // Reset form after 3 seconds and close modal
            setTimeout(() => {
                setIsSuccess(false);
                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    companyName: '',
                    location: '',
                    serviceInterest: '',
                    message: '',
                });
                onClose();
            }, 3000);

        } catch (error) {
            console.error('Error submitting quote request:', error);
            setIsSubmitting(false);
            setErrorMessage(error instanceof Error ? error.message : 'An error occurred. Please try again.');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
            <div className="bg-[#FFF8E7] rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-[#1A5F3C]">
                    <h2 className="text-2xl font-bold text-[#1A5F3C]">Request a Quote</h2>
                    <button
                        onClick={onClose}
                        className="text-[#1A5F3C] hover:text-[#2D7A52] transition-colors"
                        aria-label="Close modal"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>

                {/* Success Message */}
                {isSuccess ? (
                    <div className="p-6">
                        <div className="text-center py-8">
                            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                                <svg
                                    className="h-6 w-6 text-[#1A5F3C]"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-medium text-[#1A5F3C] mb-2">
                                Quote Request Received!
                            </h3>
                            <p className="text-[#1A5F3C]">
                                We'll get back to you within 24 hours.
                            </p>
                        </div>
                    </div>
                ) : (
                    /* Form */
                    <form onSubmit={handleSubmit} className="p-6 space-y-4">
                        <p className="text-[#1A5F3C] mb-4">
                            Fill in your details and we'll contact you within 24 hours with a customized quote.
                        </p>

                        {/* Error Message */}
                        {errorMessage && (
                            <div className="p-3 bg-red-50 border border-red-300 rounded-lg">
                                <p className="text-sm text-red-800">{errorMessage}</p>
                            </div>
                        )}

                        {/* Full Name */}
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-[#1A5F3C] mb-2">
                                Full Name *
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border-2 border-[#1A5F3C] rounded-full focus:ring-2 focus:ring-[#1A5F3C] focus:border-[#1A5F3C] bg-white"
                                placeholder=""
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-[#1A5F3C] mb-2">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border-2 border-[#1A5F3C] rounded-full focus:ring-2 focus:ring-[#1A5F3C] focus:border-[#1A5F3C] bg-white"
                                placeholder=""
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-[#1A5F3C] mb-2">
                                Phone Number *
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border-2 border-[#1A5F3C] rounded-full focus:ring-2 focus:ring-[#1A5F3C] focus:border-[#1A5F3C] bg-white"
                                placeholder=""
                            />
                        </div>

                        {/* Company Name */}
                        <div>
                            <label htmlFor="companyName" className="block text-sm font-medium text-[#1A5F3C] mb-2">
                                Company Name *
                            </label>
                            <input
                                type="text"
                                id="companyName"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border-2 border-[#1A5F3C] rounded-full focus:ring-2 focus:ring-[#1A5F3C] focus:border-[#1A5F3C] bg-white"
                                placeholder=""
                            />
                        </div>

                        {/* Location */}
                        <div>
                            <label htmlFor="location" className="block text-sm font-medium text-[#1A5F3C] mb-2">
                                Location (City, Country) *
                            </label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border-2 border-[#1A5F3C] rounded-full focus:ring-2 focus:ring-[#1A5F3C] focus:border-[#1A5F3C] bg-white"
                                placeholder="e.g., Lagos, Nigeria"
                            />
                        </div>

                        {/* Service Interest */}
                        <div>
                            <label htmlFor="serviceInterest" className="block text-sm font-medium text-[#1A5F3C] mb-2">
                                Service Interest *
                            </label>
                            <select
                                id="serviceInterest"
                                name="serviceInterest"
                                value={formData.serviceInterest}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border-2 border-[#1A5F3C] rounded-full focus:ring-2 focus:ring-[#1A5F3C] focus:border-[#1A5F3C] bg-white"
                            >
                                <option value="">Select a service</option>
                                <option value="recruitment">Recruitment Services</option>
                                <option value="hrm-retainer">HRM Retainer</option>
                                <option value="both">Both Services</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-[#1A5F3C] mb-2">
                                Message (Optional)
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className="w-full px-4 py-3 border-2 border-[#1A5F3C] rounded-2xl focus:ring-2 focus:ring-[#1A5F3C] focus:border-[#1A5F3C] bg-white resize-none"
                                placeholder="Tell us briefly about your HR needs..."
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-[#1A5F3C] text-white py-3 px-6 rounded-full font-medium hover:bg-[#2D7A52] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit Request'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};