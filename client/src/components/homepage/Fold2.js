// import packages
import styled from 'styled-components'

//import components
import Languages from '../Languages'

const Fold2 = () => {
  return (
    <Wrapper id='fold_2'>
      <div>
        <h1>About Me</h1>
        <Details>I'm fascinated with the possibilities of storytelling using web technologies. Previously, I studied filmmaking, worked briefly on independent films as both a sound and lighting technician, as well as working within the hospital industry during the pandemic.</Details>
      </div>
      <Languages />
    </Wrapper>

  )
}

export default Fold2

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width:770px) {
    flex-direction: row;
    margin: 18rem 0rem;
    min-height: 100vh;

  }
`
const Details = styled.p`
  line-height: 34px;
  margin-top: 2rem;
  max-width: 42rem;
`