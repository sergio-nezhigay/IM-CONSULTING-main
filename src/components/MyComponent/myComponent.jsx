import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function MyComponent() {
  const [ref, inView] = useInView();

  return <div ref={ref}>{inView ? 'In View' : 'Out of View'}</div>;
}
