import { Component } from 'react';
import { createContext, useState } from 'react';

// named export
export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const propsObj = { theme, setTheme };

  return (
    <ThemeContext.Provider value={propsObj}>
      {children}
    </ThemeContext.Provider>
  );
}


// class ThemeProvider extends Component {
//   state = { theme: 'light' };

//   setTheme = (theme) => {
//     this.setState({ theme });
//   };

//   render() {
//     const propsObj = { theme: this.state.theme, setTheme: this.setTheme };
//     return (
//       <ThemeContext.Provider value={propsObj}>
//         {this.props.children}
//       </ThemeContext.Provider>
//     );
//   }
// }


// default export
export default ThemeProvider;