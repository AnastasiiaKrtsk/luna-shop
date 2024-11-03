import {
  HeroBannerContainer,
  HeroBtn,
  HeroContent,
  HeroH1,
  HeroText,
} from './Hero.styled';
import heroBanner from '../../images/mobile/hero-dog-mobi.png';
import Section from 'components/base/Section';
const Hero = () => {
  return (
    <Section>
      <HeroContent>
        <HeroH1>
          Lorem ipsum dolor sit amet consectetur. Leo a in nibh ipsum tempor
          diam.
        </HeroH1>
        <HeroText>
          Cursus vestibulum eget pretium viverra nec. Viverra quis mollis
          tristique at molestie quam orci sed laoreet. Viverra quis mollis
          tristique at molestie quam orci sed laoreet.
        </HeroText>
        <HeroBtn>
          <a
            href="https://www.instagram.com/luna.animalshop/"
            target="_blank"
            rel="noopener noreferrer"
          >
            До магазину
          </a>
        </HeroBtn>
        <HeroBannerContainer>
          <img src={heroBanner} alt="" />
        </HeroBannerContainer>
      </HeroContent>
    </Section>
  );
};
export default Hero;
