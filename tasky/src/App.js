import './App.css';
import Task from './components/Task';
function App() {
    return (
        <div className="container">
            <h1>Tasky</h1>

            <Task title="Dishes " deadline="Today" discription=" Empty dishwasher" />
            <Task title="Laundry" deadline="Tomorrow" discription="fold laundry and put away" />

            <Task title="Tidy" deadline="Today" discription="tidy up" />

        </div>
    );
}

export default App;