import React from 'react';

const testimonialsData = [
  {
    quote: "This is a section of some simple filler text, also known as placeholder text.",
    author: "John McCulling",
    role: "CEO / Datadrift",
    image: "https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112"
  },
  {
    quote: "This is a section of some simple filler text, also known as placeholder text.",
    author: "Kate Berg",
    role: "CFO / Dashdash",
    image: "https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112"
  },
  {
    quote: "This is a section of some simple filler text, also known as placeholder text.",
    author: "Greg Jackson",
    role: "CTO / Uptime",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=500"
  }
];

const Testimonials = () => {
  return (
    <div className="py-32 bg-secondary">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8 relative">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-100 md:mb-12 lg:text-3xl">What others say about us</h2>
        <div className="grid gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 lg:divide-x">
          {testimonialsData.map((testimonial, index) => (
            <div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8" key={index}>
              <div className="text-center text-gray-300">{testimonial.quote}</div>
              <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
                  <img src={testimonial.image} loading="lazy" alt={`${testimonial.author}`} className="h-full w-full object-cover object-center" />
                </div>
                <div>
                  <div className="text-center text-sm font-bold text-primary sm:text-left md:text-base">{testimonial.author}</div>
                  <p className="text-center text-sm text-gray-300 sm:text-left md:text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 max-w-lg mx-auto h-72 blur-[118px]" style={{ background: 'linear-gradient(#14b8a642, #14b8a61a)' }}></div>
      </div>
    </div>
  );
};

export default Testimonials;
