// /pages/add-school.jsx
import React from 'react';
import { useForm } from 'react-hook-form';

export default function AddSchoolPage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    // We will handle the actual image upload in a later, more advanced step.
    // For now, we'll send a placeholder path for the image field.
    const schoolData = {
        name: data.name,
        address: data.address,
        city: data.city,
        state: data.state,
        contact: data.contact,
        email_id: data.email_id,
        image: 'placeholder.jpg' // The image field in the database requires a value.
    };

    try {
        const response = await fetch('/api/schools', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(schoolData),
        });

        const result = await response.json();
        if (response.ok) {
            alert('School added successfully!');
            reset(); // Clear the form after successful submission
        } else {
            alert(`Failed to add school: ${result.message}`);
        }
    } catch (error) {
        alert('An error occurred while submitting the form.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-xl w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Add a New School</h1>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* School Name */}
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">School Name</label>
                <input type="text" id="name" {...register('name', { required: 'School name is required' })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>
            {/* Address */}
            <div className="mb-4">
                <label htmlFor="address" className="block text-gray-700 font-medium mb-2">Address</label>
                <input type="text" id="address" {...register('address', { required: 'Address is required' })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
            </div>
            {/* City */}
            <div className="mb-4">
                <label htmlFor="city" className="block text-gray-700 font-medium mb-2">City</label>
                <input type="text" id="city" {...register('city', { required: 'City is required' })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
            </div>
            {/* State */}
            <div className="mb-4">
                <label htmlFor="state" className="block text-gray-700 font-medium mb-2">State</label>
                <input type="text" id="state" {...register('state', { required: 'State is required' })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>}
            </div>
            {/* Contact */}
            <div className="mb-4">
                <label htmlFor="contact" className="block text-gray-700 font-medium mb-2">Contact Number</label>
                <input type="number" id="contact" {...register('contact', { required: 'Contact is required' })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                {errors.contact && <p className="text-red-500 text-sm mt-1">{errors.contact.message}</p>}
            </div>
            {/* Email */}
            <div className="mb-4">
                <label htmlFor="email_id" className="block text-gray-700 font-medium mb-2">Email ID</label>
                <input type="email" id="email_id" {...register('email_id', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email format' } })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                {errors.email_id && <p className="text-red-500 text-sm mt-1">{errors.email_id.message}</p>}
            </div>
            {/* Image */}
            <div className="mb-6">
                <label htmlFor="image" className="block text-gray-700 font-medium mb-2">School Image</label>
                <input type="file" id="image" {...register('image')} className="w-full text-gray-700" />
            </div>
            {/* Submit */}
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Add School
            </button>
        </form>
      </div>
    </div>
  );
}