import './App.css';
import { QuestionContainer } from './components/questioncontainer';

function App() {
  return (
    <div className="App flex justify-center items-center w-1/4 h-screen m-auto">
        <QuestionContainer
        question='What is your favorite color?'
        options={['Red', 'Green', 'Blue', 'Yellow']}
        onClick={(index) => console.log(index)}
        />
    </div>
  );
}

export default App;
