import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import About from '../views/About'
import Contact from '../views/Contact'
import Projects from '../views/Projects'
import ModernTechnologiesList from '../components/IconsList'

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl xxl:w-2/4`};
`

const FooterFlex = styled.div`
  display: flex;
  justify-content: space-between;
`

const Footer = styled.footer`
  width: 60vw;
  margin-top: 20px;

  @media (max-width: 768px) {
    width: 100vw;
  }

  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-sm sm:text-sm xxl:w-3/4`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={4}>
      <Hero offset={0}>
        <BigTitle>
          hello <br /> I'm christos,
        </BigTitle>
        <Subtitle>an engineer who crafts web solutions with modern technologies</Subtitle>
      </Hero>

      <About offset={1}>
        <Title>experience & passion</Title>
        <AboutDesc style={{ paddingTop: 0 }}>
          <p>
            The last half decade I have worked in startups and commercial industries, building beautifully designed and
            crafted digital user experiences & innovative end-to-end solutions.
          </p>
          <p>
            In this journey except from building user-centric applications, I got to know how to develop ideas. Taking a
            concept though research, design, testing & implementation.
          </p>
          <p>
            Whether I’m building something from scratch, or optimizing a product, I make sure the project reflects my
            creativity, attention to detail and appeal for delightful design and user experience.
          </p>
        </AboutDesc>
      </About>

      <Projects offset={2}>
        <Title>modern technologies</Title>
        <ModernTechnologiesList />
      </Projects>

      <Contact offset={3}>
        <Inner>
          <Title>want to discuss a project or collaborate?</Title>
          <ContactText>
            If you need a hand with a project, I have two!
            <br />
            Just feel free to reach out to me,
            either{' '}
            <a href="mailto:paschalidi@outlook.com">
              <strong>drop me a line</strong>
            </a>{' '}
            or{' '}
            <a href="tel:004917645732805">
              <strong>give me a call!</strong>
            </a>
            <br />
            <br />
          </ContactText>
        </Inner>
        <Footer>
          <div>
            <a href="https://github.com/paschalidi" target="_blank" rel="noopener noreferrer">
              Christos Paschalidis
            </a>{' '}
            <span>&copy; 2019</span>
          </div>
          <br />
          <br />
          <FooterFlex>
            <a href="https://www.linkedin.com/in/christos-paschalidis/" target="_blank" rel="noopener noreferrer">
              <strong>linkedin</strong>
            </a>
            <br />
            <a href="https://github.com/paschalidi" target="_blank" rel="noopener noreferrer">
              <strong>github</strong>
            </a>
            <br />
            <a href="https://www.instagram.com/paschalidis_chris/" target="_blank" rel="noopener noreferrer">
              <strong>instagram</strong>
            </a>
            <a href="mailto:paschalidi@outlook.com">
              <strong>e-mail</strong>
            </a>
          </FooterFlex>
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
