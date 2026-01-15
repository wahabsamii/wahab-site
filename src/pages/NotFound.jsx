import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
 return (
 <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
 <div className="text-center">
<h1 className="text-8xl font-extrabold text-[#FF014F]">404</h1>
<h2 className="text-2xl md:text-4xl font-semibold mt-4">
 Oops! Page not found
 </h2>
<p className="text-gray-400 mt-2 max-w-md mx-auto">
The page you're looking for doesn't exist or has been moved.
</p>
 <Link
 to="/"
className="inline-block mt-6 px-6 py-3 bg-[#FF014F] text-white rounded-full hover:bg-[#e01346] transition duration-300"
> ← Go Back Home
</Link>
</div>
</div>
 );
}

export default NotFound;
