import { createRoot } from 'react-dom/client'; // This imports the createRoot function for manipulating the DOM

let name = 'John Doe';
const element = <h1>Hello, {name}</h1>;

const root = createRoot(document.getElementById('root'));
root.render(element);
