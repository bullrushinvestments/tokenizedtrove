import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';
import axios from 'axios';

interface TestimonialForm {
  name: string;
  email: string;
  message: string;
}

const WriteTestimonial: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<TestimonialForm>();

  const onSubmit: SubmitHandler<TestimonialForm> = async (data) => {
    try {
      setLoading(true);
      await axios.post('/api/testimonials', data);
      router.push('/');
    } catch (err) {
      setError('An error occurred while submitting the testimonial.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Write a Testimonial</h2>
      {error && <p className="bg-red-100 border-l-4 border-red-500 text-red-700 p-3 mb-4" role="alert">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} aria-label="Testimonial Form">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            id="name"
            type="text"
            {...register('name', { required: 'Name is required' })}
            className={`w-full px-3 py-2 border rounded ${errors.name ? 'border-red-500 focus:border-red-500' : ''}`}
            aria-invalid={errors.name ? true : false}
          />
          <p className="text-red-500 text-sm mt-1" role="alert">{errors.name?.message}</p>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            id="email"
            type="email"
            {...register('email', { required: 'Email is required' })}
            className={`w-full px-3 py-2 border rounded ${errors.email ? 'border-red-500 focus:border-red-500' : ''}`}
            aria-invalid={errors.email ? true : false}
          />
          <p className="text-red-500 text-sm mt-1" role="alert">{errors.email?.message}</p>
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
          <textarea
            id="message"
            {...register('message', { required: 'Message is required' })}
            rows={5}
            className={`w-full px-3 py-2 border rounded ${errors.message ? 'border-red-500 focus:border-red-500' : ''}`}
            aria-invalid={errors.message ? true : false}
          />
          <p className="text-red-500 text-sm mt-1" role="alert">{errors.message?.message}</p>
        </div>
        <button type="submit" disabled={loading} className={`w-full px-4 py-2 rounded ${loading ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}>
          {loading ? 'Submitting...' : 'Submit Testimonial'}
        </button>
      </form>
    </div>
  );
};

export default WriteTestimonial;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';
import axios from 'axios';

interface TestimonialForm {
  name: string;
  email: string;
  message: string;
}

const WriteTestimonial: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<TestimonialForm>();

  const onSubmit: SubmitHandler<TestimonialForm> = async (data) => {
    try {
      setLoading(true);
      await axios.post('/api/testimonials', data);
      router.push('/');
    } catch (err) {
      setError('An error occurred while submitting the testimonial.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Write a Testimonial</h2>
      {error && <p className="bg-red-100 border-l-4 border-red-500 text-red-700 p-3 mb-4" role="alert">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} aria-label="Testimonial Form">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            id="name"
            type="text"
            {...register('name', { required: 'Name is required' })}
            className={`w-full px-3 py-2 border rounded ${errors.name ? 'border-red-500 focus:border-red-500' : ''}`}
            aria-invalid={errors.name ? true : false}
          />
          <p className="text-red-500 text-sm mt-1" role="alert">{errors.name?.message}</p>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            id="email"
            type="email"
            {...register('email', { required: 'Email is required' })}
            className={`w-full px-3 py-2 border rounded ${errors.email ? 'border-red-500 focus:border-red-500' : ''}`}
            aria-invalid={errors.email ? true : false}
          />
          <p className="text-red-500 text-sm mt-1" role="alert">{errors.email?.message}</p>
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
          <textarea
            id="message"
            {...register('message', { required: 'Message is required' })}
            rows={5}
            className={`w-full px-3 py-2 border rounded ${errors.message ? 'border-red-500 focus:border-red-500' : ''}`}
            aria-invalid={errors.message ? true : false}
          />
          <p className="text-red-500 text-sm mt-1" role="alert">{errors.message?.message}</p>
        </div>
        <button type="submit" disabled={loading} className={`w-full px-4 py-2 rounded ${loading ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}>
          {loading ? 'Submitting...' : 'Submit Testimonial'}
        </button>
      </form>
    </div>
  );
};

export default WriteTestimonial;