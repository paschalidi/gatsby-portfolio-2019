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

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={3}>
      <Hero offset={0}>
        <BigTitle>
          hello, <br /> I'm christos.
        </BigTitle>
        <Subtitle>
          a frontend engineer who cares about the end product beyond just writing code that makes it work.
        </Subtitle>
      </Hero>
      <About offset={1}>
        <Title>few words</Title>
        <AboutDesc style={{ paddingTop: 0 }}>
          <p>
            Have been coding for 5 years give or take. Love crafting ideas while working among great people. Interested
            in projects that can have a positive impact in people's life!
          </p>
          <p>
            If you ask me what is my goal, my answer would be to have an understanding for the business interests and
            also be a developer who "gets things done".
          </p>
          <p>
            For the rest, I love educating myself in all matters. I believe the more you know about a variety of
            subjects the more creative you can be. I try to always develop and evolve the map I use to navigate through.
          </p>
        </AboutDesc>
      </About>
      <Contact offset={2}>
        <Inner>
          <Title>you liked what you read?</Title>
          <ContactText>
            dont hesitate to reach me via{' '}
            <a href="mailto:paschalidi@outlook.com">
              <strong>email</strong>
            </a>
            ! <br />
            follow me on{' '}
            <a href="https://github.com/paschalidi" target="_blank" rel="noopener noreferrer">
              <strong>github</strong>
            </a>{' '}
            &{' '}
            <a href="https://www.linkedin.com/in/christos-paschalidis/" target="_blank" rel="noopener noreferrer">
              <strong>linkedin</strong>
            </a>
            .
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019
          <br />
          <a href="https://github.com/paschalidi" target="_blank" rel="noopener noreferrer">
            Christos Paschalidis
          </a>
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
