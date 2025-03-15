import { AppProvider } from './context/AppContext';
import AppLayout from './layout/AppLayout';
import './styles/global.css';

function App() {
  return (
    <AppProvider>
      <AppLayout />
    </AppProvider>
  );
}

export default App;
