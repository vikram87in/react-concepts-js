import { useContext } from 'react';
import ThemeProvider, { ThemeContext } from './ThemeProvider';

export default function ImprovedFunctionComponent() {
  return (
    <>
      <ThemeProvider>
        MainComponent
        <br />
        <ChildComponent />
      </ThemeProvider>
      <p style={{ backgroundColor: 'red' }}>
        {'Some paragraph that doesn\'t use the props'}
      </p>
      <ThemeProvider>
        MainComponent
        <br />
        <ChildComponent />
      </ThemeProvider>
    </>
  );
}

function ChildComponent() {
  return (
    <div>
      ChildComponent
      <br />
      <GrandChildComponent />
    </div>
  );
}

function GrandChildComponent() {
  const { theme, setTheme } = useContext(ThemeContext);

  const onClick = () => {
    const updatedTheme = theme == 'light' ? 'dark' : 'light';
    setTheme(updatedTheme);
  };

  console.log('theme: ', theme);
  return (
    <div style={theme == 'dark' ? { backgroundColor: 'black', color: 'white' } : { backgroundColor: 'white', color: 'black' }}>
      GrandChildComponent is in the {theme} theme
      <br />
      <button onClick={onClick}>Change Theme</button>
    </div>
  );
}