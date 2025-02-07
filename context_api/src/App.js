import { useContext } from 'react';
import { ThemeContext } from './components/ThemeContext';
import logo from './logo.svg';
// import './App.css';


const App = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{
      backgroundColor: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#000' : '#fff',
      height: '100vh',
      padding: '0vh',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Current Theme: {theme}</h1>
      <button onClick={toggleTheme}
        className="text-xl p-2 rounded-full font-bold underline bg-blue-400"
      >Toggle Theme</button>
    </div>
  );
}

export default App;