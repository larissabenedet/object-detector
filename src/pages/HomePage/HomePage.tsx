import React from 'react'
import {
  Container,
  HomeLink,
  MainContent,
  Navbar,
  SectionIntro,
} from './styles'

const HomePage = React.forwardRef<HTMLImageElement, {}>((props, ref) => {
  return (
    <>
      <header>
        <Navbar>
          <ul>
            <li>
              <HomeLink>
                <a href="/">AI Object Detection</a>
              </HomeLink>
            </li>
          </ul>
          <ul>
            <li>
              <a href="https://github.com/larissabenedet" target="_blank">
                Made with ❤️ by lari
              </a>
            </li>
          </ul>
        </Navbar>
      </header>
      <Container>
        <SectionIntro>
          <h1>🤖 Welcome to AI Object Detection</h1>
          <span>
            Discover the power of artificial intelligence by analyzing images to
            detect objects in real-time. <strong>Upload an image</strong> or
            <strong> use your webcam</strong> to get started.
          </span>
        </SectionIntro>
        <MainContent>
          <hgroup>
            <h2>📷 Select an image</h2>
            <h3>Choose from a gallery or use your webcam</h3>
            <p>Click on an image below or activate your webcam for analysis.</p>
          </hgroup>
        </MainContent>
      </Container>
    </>
  )
})
export default HomePage
