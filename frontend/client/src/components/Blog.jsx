import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      id: 725,
      title: 'Edison Real Estate: Redefining Happiness',
      date: '23 September 2025',
      image: '/admin/uploads/blog/Picture8.jpg',
      url: '/blog/edison-real-estate-redefining-happiness'
    },
    {
      id: 662,
      title: 'Top 10 Interior Designing Trends for 2025',
      date: '04 September 2025',
      image: '/admin/uploads/blog/Luxe-Vista-Living.jpg',
      url: '/blog/top-10-interior-designing-trends-for-2025'
    },
    {
      id: 615,
      title: 'এডিসন ডেসডিমোনাঃ যেখানে শৈশব অমলিন',
      date: '11 September 2023',
      image: '/admin/uploads/blog/bann-2.jpg',
      url: '/blog/edison-desdemona'
    },
    {
      id: 606,
      title: 'The Lakeside Dreams by Edison Real Estate',
      date: '11 September 2023',
      image: '/admin/uploads/blog/bann-1.jpg',
      url: '/blog/the-lakeside-dreams-by-edison-real-estate'
    },
    {
      id: 592,
      title: 'Interest Rate Ceiling On Home Loans Need Of The Hour',
      date: '31 July 2023',
      image: '/admin/uploads/blog/Untitled-2.jpg',
      url: '/blog/interest-rate-ceiling-on-home-loans'
    },
    {
      id: 576,
      title: 'Lakeside Serenity: A Tranquil Retreat by the Lake',
      date: '02 April 2023',
      image: '/admin/uploads/blog/Untitled-5.jpg',
      url: '/blog/lakeside-serenity-a-tranquil-retreat-by-the-lake'
    },
    {
      id: 509,
      title: 'ক্রেতাদের পছন্দের শীর্ষে বসুন্ধরা আবাসিক এলাকা',
      date: '02 March 2023',
      image: '/admin/uploads/blog/Untitled-1.jpg',
      url: '/blog/bashundhara-residential-area'
    },
    {
      id: 496,
      title: 'Edison Desdemona: launching of an iconic residence',
      date: '30 January 2023',
      image: '/admin/uploads/blog/Untitled-2-2.jpg',
      url: '/blog/edison-desdemona-launching-of-an-iconic-residence'
    },
    {
      id: 477,
      title: 'An Ideal Space',
      date: '09 January 2023',
      image: '/admin/uploads/blog/Edison-AEMILIUS5.jpg',
      url: '/blog/an-ideal-space'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Inner Banner */}
      <div className="relative h-64 sm:h-80 md:h-96 mt-16 sm:mt-20 bg-cover bg-center" 
           style={{ backgroundImage: "url('/themes/cms/assets/images/static/blog_image.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white uppercase">Blog</h1>
        </div>
      </div>

      {/* Blog Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                {/* Blog Image */}
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Blog Content */}
                <div className="p-5 sm:p-6">
                  <p className="text-sm text-gray-500 mb-3">{post.date}</p>
                  <h5 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 line-clamp-2 min-h-[3.5rem]">
                    {post.title}
                  </h5>
                  <a 
                    href={post.url} 
                    className="inline-block bg-primary text-white px-6 py-2.5 rounded uppercase text-sm font-semibold hover:bg-blue-900 transition"
                  >
                    Explore
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-10 sm:mt-12">
            <span className="px-4 py-2 bg-primary text-white rounded font-semibold">1</span>
            <a href="/blog/page/2" className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition">2</a>
            <a href="/blog/page/3" className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition">3</a>
            <a href="/blog/page/2" className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition">Next »</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
