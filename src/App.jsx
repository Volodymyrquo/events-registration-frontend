import { Route, Routes } from 'react-router-dom';
import { Event, Events, Home, Registration } from './pages';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<Event />} />
        </Routes>
    );
}

export default App;
