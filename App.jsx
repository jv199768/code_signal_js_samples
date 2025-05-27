import { createRoot } from 'react-dom/client';
import App from './App';
const root = createRoot(document.getElementById('root'));
root.render(<Greeting />);
const root_new = createRoot(document.getElementById('root'));
root.render(<App />);
// This is our main or App component
function App() {
  return (
    <div>
      <h1>Welcome to React.js!</h1>
    </div>
  );
}

export default App;  
