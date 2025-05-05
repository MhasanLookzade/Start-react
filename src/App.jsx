import Header from './components/header/header.jsx';
import Footer from '././components/footer/footer';
import TodoApp from './components/TodoApp';

function App() {
    return (
        <div>
            <Header />
            <main>
                <TodoApp />
            </main>
            <Footer />
        </div>
    );
}

export default App;
