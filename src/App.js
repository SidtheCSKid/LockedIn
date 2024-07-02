import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './routes/Home';
import Tasks from './routes/Tasks';
import TaskCategoryWrapper from './components/TaskCategory/TaskCategoryWrapper';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
            {/* <TaskCategoryWrapper category="ur mom"/> */}
          </Route>
        </Switch>
        
        <Switch>
          <Route exact path="/tasks">
            <Tasks  />
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
