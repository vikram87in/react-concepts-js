import { Component } from 'react';
import ThemeProvider, { ThemeContext } from './ThemeProvider';

export default function ImprovedClassChild() {
  console.log('ImprovedClassChild render');
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
  console.log('ChildComponent render');
  return (
    <div>
      ChildComponent
      <br />
      <GrandChildComponent />
    </div>
  );
}

class GrandChildComponent extends Component {

  onClick = (theme, setTheme) => {
    console.log('onclick: thme: ', theme);
    const updatedTheme = theme == 'light' ? 'dark' : 'light';
    setTheme(updatedTheme);
  };

  render() {
    console.log('GrandChildComponent render');
    return (
      <ThemeContext.Consumer>
        {
          (context) => {
            const { theme, setTheme } = context;
            console.log('consumer render');
            return (
              <div style={theme == 'dark' ? { backgroundColor: 'black', color: 'white' } : { backgroundColor: 'white', color: 'black' }}>
                GrandChildComponent is in the {theme} theme
                <br />
                <button onClick={() => this.onClick(theme, setTheme)}>Change Theme</button>
              </div>
            );
          }
        }
      </ThemeContext.Consumer>
    );
  }
}
