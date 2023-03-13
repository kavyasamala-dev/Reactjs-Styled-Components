import './App.css'
import {Heading, CustomButton} from './styledComponents'

const App = () => (
  <>
    <Heading>Hello World</Heading>
    {/* <CustomButton type="button" color="#ffffff" bgColor="#0070c1">
      Click
    </CustomButton> */}
    {/* <CustomButton type="button" outline={false}>
      Click
    </CustomButton> */}

    <CustomButton type="button">Click</CustomButton>

    {/* <CustomButton type="button" color="#0070c1" bgColor="#ffffff">
      Click
    </CustomButton> */}

    {/* <CustomButton type="button" outline={true}>
      Click
    </CustomButton> */}
    <CustomButton type="button" outline>
      Click
    </CustomButton>
  </>
)

export default App
