// components/contact/ContactForm.tsx (Client Component)
'use client';
import { useState } from 'react';
import { MotionDiv } from '../motion/MotionProvider';

// Simple mock form submission handler
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Placeholder for actual Resend/Nodemailer logic
    console.log("Form Submitted!"); 
    // In a real implementation: 
    // 1. Collect form data
    // 2. Use 'fetch' or Axios to post data to a Next.js API route (e.g., /api/contact)
    // 3. The API route uses Resend/Nodemailer to send the email.
    
    alert("Thank you for your inquiry! We will be in touch shortly. (This is a mock submission.)");
};

export function ContactForm() {
    // Basic state management for form inputs (optional, but good practice)
    const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-bg-dark/5 rounded-xl shadow-xl border-t-4 border-accent-gold/50"
        >
            <h3 className="text-3xl font-serif font-bold text-text-dark mb-6">
                Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
                
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-dark/90 mb-1">Name *</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        required 
                        className="w-full px-4 py-3 border border-text-dark/20 rounded-md focus:ring-accent-gold focus:border-accent-gold transition-colors bg-bg-primary text-text-dark"
                    />
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-text-dark/90 mb-1">Email *</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email}
                            onChange={handleChange}
                            required 
                            className="w-full px-4 py-3 border border-text-dark/20 rounded-md focus:ring-accent-gold focus:border-accent-gold transition-colors bg-bg-primary text-text-dark"
                        />
                    </div>
                    <div>
                        <label htmlFor="company" className="block text-sm font-medium text-text-dark/90 mb-1">Company</label>
                        <input 
                            type="text" 
                            id="company" 
                            name="company" 
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-text-dark/20 rounded-md focus:ring-accent-gold focus:border-accent-gold transition-colors bg-bg-primary text-text-dark"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-dark/90 mb-1">Message *</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        rows={5} 
                        value={formData.message}
                        onChange={handleChange}
                        required 
                        className="w-full px-4 py-3 border border-text-dark/20 rounded-md focus:ring-accent-gold focus:border-accent-gold transition-colors bg-bg-primary text-text-dark"
                    ></textarea>
                </div>
                
                <button 
                    type="submit" 
                    className="w-full px-6 py-3 mt-4 text-lg font-bold bg-accent-gold text-bg-dark hover:bg-text-dark hover:text-bg-primary transition-colors rounded-md shadow-md"
                >
                    Submit Inquiry
                </button>

            </form>
        </MotionDiv>
    );
}