// This is a functional component called Greeting with props destructured
function Greeting({name, language}) {  // destructuring props directly in the function's parameters
  const greeting = {
    'English': 'Hello',
    'Spanish': 'Hola',
    'French': 'Bonjour'
  };

  return <h1>{greeting[language]}, {name}!</h1>; 
}

// We are passing the props 'name' as 'JavaScript' and 'language' as 'English'
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(<Greeting name="JavaScript" language="English" />);
