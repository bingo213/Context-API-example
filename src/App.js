import { useContext } from 'react';
import './App.css';
import AppProvider, { AppContext } from './components/AppProvider';
import Counter from './components/Counter';
import Message from './components/Message';
import Test from './components/Test';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Message />
        <Counter />
        <Test />
      </AppProvider>
    </div>
  );
}

export default App;
