import React from 'react';
import { useForm } from 'react-hook-form'; // Using react-hook-form as required 

export default function AddSchoolPage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    
    // Append all the text fields 
    formData.append('name', data.name);
    formData.append('address', data.address);
    formData.append('city', data.city);
    formData.append('state', data.state);
    formData.append('contact', data.contact);
    formData.append('email_id', data.email_id);
    
    // Append the image file 
    if (data.image[0]) {
      formData.append('image', data.image[0]);
    }

    try {
      const response = await fetch('/api/schools', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        alert('School added successfully!');
        reset(); 
      } else {
        alert(`Failed to add school: ${result.message}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-xl w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">Add a New School</h1>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* Input fields for name, address, city, state, contact, email_id, image  */}
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">School Name</label>
                <input type="text" id="name" {...register('name', { required: 'School name is required' })}
                    className="w-full text-gray-600 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="address" className="block text-gray-700 font-medium mb-2">Address</label>
                <input type="text" id="address" {...register('address', { required: 'Address is required' })}
                    className="w-full px-4 py-2 text-gray-600 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="city" className="block text-gray-700 font-medium mb-2">City</label>
                <input type="text" id="city" {...register('city', { required: 'City is required' })}
                    className="w-full px-4 text-gray-600 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="state" className="block text-gray-700 font-medium mb-2">State</label>
                <input type="text" id="state" {...register('state', { required: 'State is required' })}
                    className="w-full px-4 text-gray-600 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="contact" className="block text-gray-700 font-medium mb-2">Contact Number</label>
                <input type="number" id="contact" {...register('contact', { required: 'Contact is required' })}
                    className="w-full text-gray-600 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                {errors.contact && <p className="text-red-500 text-sm mt-1">{errors.contact.message}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="email_id" className="block text-gray-700 font-medium mb-2">Email ID</label>
                <input type="email" id="email_id" {...register('email_id', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email format' } })}
                    className="w-full text-gray-600 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                {errors.email_id && <p className="text-red-500 text-sm mt-1">{errors.email_id.message}</p>}
            </div>
            <div className="mb-6">
                <label htmlFor="image" className="block text-gray-700 font-medium mb-2">School Image</label>
                <input type="file" id="image" {...register('image', { required: 'An image is required' })} className="w-full text-gray-700" />
                {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>}
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Add School
            </button>
        </form>
      </div>
    </div>
  );
}