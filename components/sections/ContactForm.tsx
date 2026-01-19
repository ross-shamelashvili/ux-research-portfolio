'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input, Textarea } from '../ui/Input';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check for spam
    if (formData.honeypot) {
      return;
    }

    if (!validateForm()) {
      return;
    }

    setStatus('loading');

    try {
      // Simulating form submission
      // In production, replace with EmailJS or your preferred service
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Example EmailJS integration:
      // await emailjs.send(
      //   process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      //   process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      //   {
      //     from_name: formData.name,
      //     from_email: formData.email,
      //     subject: formData.subject,
      //     message: formData.message,
      //   },
      //   process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      // );

      setStatus('success');
      setStatusMessage('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
    } catch (error) {
      setStatus('error');
      setStatusMessage('Something went wrong. Please try again or email me directly.');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot field - hidden from users */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          placeholder="Your name"
          required
          disabled={status === 'loading'}
        />
        <Input
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="your@email.com"
          required
          disabled={status === 'loading'}
        />
      </div>

      <Input
        label="Subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="What's this about?"
        disabled={status === 'loading'}
      />

      <Textarea
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        placeholder="Tell me about your project or research needs..."
        required
        disabled={status === 'loading'}
      />

      {/* Status Messages */}
      {status === 'success' && (
        <div className="flex items-center gap-2 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400">
          <CheckCircle className="w-5 h-5 flex-shrink-0" />
          <p>{statusMessage}</p>
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-center gap-2 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <p>{statusMessage}</p>
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        isLoading={status === 'loading'}
        rightIcon={<Send className="w-4 h-4" />}
        className="w-full md:w-auto"
      >
        Send Message
      </Button>
    </form>
  );
}
