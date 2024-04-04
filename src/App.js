import './App.css';
import { ConfigProvider } from 'antd';
import MenuComponent from './components/menu/menu';

const myTheme = {
  token: {
    // Seed Token
    colorPrimary: '#00b96b',
    borderRadius: 2,

    // Alias Token
    colorBgContainer: '#f6ffed',
  },
};

function App() {
  return (
    <ConfigProvider theme={myTheme}>
      <div className="App">
        <MenuComponent />
      </div>
    </ConfigProvider>
  );
}

export default App;
