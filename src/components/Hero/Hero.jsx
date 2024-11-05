import {
  HeroBtn,
  HeroBg,
  HeroH1,
  HeroText,
  HeroTextContainer,
  HeroContainer,
  HeroSection,
} from './Hero.styled';

const Hero = () => {
  return (
    <HeroSection>
      <HeroContainer>
        <HeroTextContainer>
          <HeroH1>
            Lorem ipsum dolor sit amet consectetur. Leo a in nibh ipsum tempor
            diam.
          </HeroH1>
          <HeroText>
            Cursus vestibulum eget pretium viverra nec. Viverra quis mollis
            tristique at molestie quam orci sed laoreet. Viverra quis mollis
            tristique at molestie quam orci sed laoreet.
          </HeroText>
        </HeroTextContainer>

        <HeroBtn>
          <a
            href="https://www.instagram.com/luna.animalshop/"
            target="_blank"
            rel="noopener noreferrer"
          >
            До магазину
          </a>
        </HeroBtn>
      </HeroContainer>
    </HeroSection>
  );
};
export default Hero;
