import BookList from './components/BookList';
import Narbar from './components/Narbar';
import ThemToggle from './components/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';
import ThemeContextProvider from './contexts/ThemeContext';
import logo from './logo.svg';


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Narbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ThemToggle />
        </AuthContextProvider>

      </ThemeContextProvider>
    </div>
  );
}

export default App;
