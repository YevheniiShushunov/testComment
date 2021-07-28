import './App.css';
import {CommentList} from './components/CommentList';
import { PostComment } from './components/PostComment';

function App() {
  return (
    <div className="App">
      <CommentList/>
      <PostComment/>
    </div>
  );
}

export default App;
