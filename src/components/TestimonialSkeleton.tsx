import React from 'react';
import '../scss/Testimonials.scss'; // Usaremos los mismos estilos

const TestimonialSkeleton = () => {
  return (
    <div className="testimonial-card skeleton">
      <div className="skeleton-header">
        <div className="skeleton-avatar"></div>
        <div className="skeleton-header-text">
          <div className="skeleton-line" style={{ width: '60%' }}></div>
          <div className="skeleton-line" style={{ width: '40%' }}></div>
        </div>
      </div>
      <div className="skeleton-content">
        <div className="skeleton-line"></div>
        <div className="skeleton-line"></div>
        <div className="skeleton-line" style={{ width: '80%' }}></div>
      </div>
    </div>
  );
};

export const TestimonialsSkeleton = ({ count = 3 }) => {
    return (
        <div className="testimonial-grid">
            {Array.from({ length: count }).map((_, index) => (
                <TestimonialSkeleton key={index} />
            ))}
        </div>
    );
}; 