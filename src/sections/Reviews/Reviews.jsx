'use client';

import React from 'react';

import { useInView } from 'react-intersection-observer';
import { Container } from '@/components/Container';
import { labelToLink } from '@/utils/labelToLink';
import { ReviewSwiper } from '@/components/ReviewSwiper';

export const Reviews = () => {
  const id = labelToLink('Відгуки');
  const [ref, inView, entry] = useInView({
    threshold: 0.5, // Set the threshold to 0.5 (50% intersection)
  });
  const intersectionPercentage = entry?.intersectionRatio * 100 || 0;

  return (
    <section
      ref={ref}
      id={id}
      className="pt-[60px] md:pt-[80px] xl:pt-[120px] pb-[97px] md:pb-[141px] xl:pb-[186px] bg-bgColor overflow-hidden"
    >
      <p>Element is {inView ? 'in view' : 'out of view'}</p>
      <p>Intersection Percentage: {intersectionPercentage.toFixed(2)}%</p>
      <Container>
        <h2 className="visually-hidden">Відгуки</h2>
        <ReviewSwiper />
      </Container>
    </section>
  );
};
