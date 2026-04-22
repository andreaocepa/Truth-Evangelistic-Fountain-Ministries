import { useEffect, useRef } from 'react';

export default function ScrollReveal({ 
  children, 
  className = '', 
  direction = 'up', 
  delay = 0,
  threshold = 0.15 
}) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  const directionClass = {
    up: 'reveal',
    left: 'reveal-left',
    right: 'reveal-right',
    scale: 'reveal-scale',
  }[direction] || 'reveal';

  const delayClass = delay ? `delay-${delay}` : '';

  return (
    <div ref={ref} className={`${directionClass} ${delayClass} ${className}`}>
      {children}
    </div>
  );
}
