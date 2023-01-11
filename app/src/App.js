import './App.css';
import SideBar from './components/sidebar';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <div className='min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900'>
      <div className='flex'>
        <div className='flex-none min-h-screen'>
          <SideBar />
        </div>
        <div className='bg-slate-700 flex-1'>
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
