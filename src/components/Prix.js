import React from 'react';
import { Link } from 'react-router-dom';

const Prix = () => {
  return (
    <div className='pricing bg-black text-white py-10'>
      <div className='card-container grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto px-4 md:px-0 md:w-2/3'>
        <div className='card p-6 border border-gray-700 rounded-lg text-center'>
          <h3 className='text-xl font-bold mb-4'>- Basic -</h3>
          <span className='bar block border-t border-gray-500 mb-4'></span>
          <p className='dh text-2xl font-bold mb-4'>100 DH</p>
          <p className='mb-2'>- 3 days -</p>
          <p className='mb-2'>- views -</p>
          <p className='mb-2'>- featured -</p>
          <p className='mb-2'>- private quarters -</p>
        </div>
        <div className='card p-6 border border-gray-700 rounded-lg text-center'>
          <h3 className='text-xl font-bold mb-4'>- Premium -</h3>
          <span className='bar block border-t border-gray-500 mb-4'></span>
          <p className='dh text-2xl font-bold mb-4'>250 DH</p>
          <p className='mb-2'>- 10 days -</p>
          <p className='mb-2'>- views -</p>
          <p className='mb-2'>- featured -</p>
          <p className='mb-2'>- private quarters -</p>
        </div>
        <div className='card p-6 border border-gray-700 rounded-lg text-center'>
          <h3 className='text-xl font-bold mb-4'>- Gold Premium -</h3>
          <span className='bar block border-t border-gray-500 mb-4'></span>
          <p className='dh text-2xl font-bold mb-4'>500 DH</p>
          <p className='mb-2'>- 60 days -</p>
          <p className='mb-2'>- views -</p>
          <p className='mb-2'>- featured -</p>
          <p className='mb-2'>- private quarters -</p>
        </div>
      </div>
      <div className='text-center mt-8'>
        <Link to='/contact'>
          <button className='btn2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded'>
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Prix;
