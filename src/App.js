import './App.css';
import Sidebar from './components/Sidebar';
import MachinesPage from './pages/MachinesPage';
import TransactionPage from './pages/TransactionPage';

function App() {
  return (
    <div id="page-wrapper">
      <Sidebar></Sidebar>
      <div id="content-container">
      {window.location.pathname==='/machines' && <MachinesPage></MachinesPage>}
      {window.location.pathname==='/transactions' && <TransactionPage/>}
      </div>
    </div>
  );
}

export default App;
