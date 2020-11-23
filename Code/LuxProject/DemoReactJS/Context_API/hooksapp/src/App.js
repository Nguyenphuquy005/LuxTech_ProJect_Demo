
import './App.css';
import SongList from './components/SongList';
import BookContextProvider from './contexts/BookContext';
import MousecontextProvider from './contexts/MouseContext';
import Narbar from './components/contextComponent/Narbar';
import BookList from './components/contextComponent/BookList';

import NewBookForm from './components/contextComponent/BookForm';
import MouseList from './components/mouseComponents/MouseList';
import NewMouseForm from './components/mouseComponents/MouseForm';
import CustomTextinput from './ref/RefDemo'

function App() {
  return (
    <div className="App">
      <div>
        <SongList />
      </div>
      <div>____________________________</div>
      {/* <div>
        <BookContextProvider>

          <Narbar />
          <BookList />
          <NewBookForm />
        </BookContextProvider>
      </div> */}
      {/* <div>____________________________</div> */}
      {/* <div>
        <MousecontextProvider>
          <MouseList />
          <NewMouseForm />
        </MousecontextProvider>
      </div> */}
      {/* <div>
        <CustomTextinput />
      </div> */}

    </div>
  );
}

export default App;
