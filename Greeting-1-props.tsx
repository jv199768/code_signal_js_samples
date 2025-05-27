// This is a functional component called Greeting
function Greeting(props) {  // props is an object containing properties passed down from a parent component
  const greeting = {
    'English': 'Hello',
    'Spanish': 'Hola',
    'French': 'Bonjour'
  };

  return <h1>{greeting[props.language]}, {props.name}!</h1>; 
}

// We are passing the props 'name' as 'JavaScript' and 'language' as 'English'
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(<Greeting name="JavaScript" language="English" />);
