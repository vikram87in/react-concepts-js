# Explaination:

## Concept for Functional Component

We create a 'MainFunctionComponent' functional component that makes use of the ThemeContext and enables the 'theme' and 'setTheme' for child components down the hierarchy.
Deep down, the 'GrandChildComponent' component makes use of these props. The problem here is that if we need to use the Provider at 2 different places (like shown in the example), the states are not mutually exclusive. Clicking on one button updates the state of MainFunctionComponent and hence both the Providers are impacted.

## Improvement

We can improve this code by creating a Provider that also has the state and the function to update the state. So we created 'ThemeProvider'. Creating a separate file for the provider is a good coding practice. In the **ImprovedFunctionComponent**, we imported the default and the named export. Now we just need to wrap the components (that require the state and setState) with ThemeProvider (as shown in the ImprovedFunctionComponent). Now, clicking the button only updates the state of the corresponding Provider.

## Concept for Class component

