import { Container } from '@/components/Container';
import { HeroContent } from '@/components/HeroContent';

import { labelToLink } from '@/utils/labelToLink';

export const Hero = () => {
  const id = labelToLink('Головна');

  return (
    <section id={id} className=" xl:h-screen xl:w-full">
      <div
        className="xl:h-screen xl:w-full xl:fixed w-full -z-10 
      sm:hero-bgcolor h-[344px] md:h-[570px] overflow-hidden"
      >
        <Container className="hero-bg pt-[74px] md:pt-[120px] xl:pt-[168px] h-full w-full">
          <HeroContent />
        </Container>
      </div>
    </section>
  );
};
