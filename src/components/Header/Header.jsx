// proper way to import images - automatically generate path even after compilation and bundling
import reactImg from '../../assets/react-core-concepts.png'
import './Header.css'

const reactDescriptions = ['Fundamental', 'Crucial', 'Core']

function genRandomInt(max) {
 }

export default function Header() {
    const description = reactDescriptions[genRandomInt(3)]
  
    return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    )
  }