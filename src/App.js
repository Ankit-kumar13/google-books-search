import logo from './logo.svg';
import './App.css';
import SearchBooks from './SearchBooks';

function App() {
  return (
    <div className="App">
    <header className="w-full mb-10 text-center p-8 bg-gradient-to-b from-rose-300 via-pink-200 to-blue-200">
          <a className="text-6xl text-black hover:text-gray-600" to="/">Search Books</a>
      </header>
      <SearchBooks/>
    </div>
  );
}

export default App;
