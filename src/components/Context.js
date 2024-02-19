import React, { useContext } from 'react';

const MyContext = React.createContext();

function MyProvider({ children }) {
  const sharedData = 'This is shared data';

  return <MyContext.Provider value={sharedData}>{children}</MyContext.Provider>;
}

function MyComponent() {
  const sharedData = useContext(MyContext);

  return <div>{sharedData}</div>;
}

function App() {
  return (
    <MyProvider>
      <MyComponent />
    </MyProvider>
  );
}

export default App;
