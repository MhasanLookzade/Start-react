import { useState } from 'react';

function TodoApp() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    const addTask = () => {
        if (input.trim() === '') return;
        setTasks([...tasks, { text: input, done: false }]);
        setInput('');
    };

    const toggleDone = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].done = !updatedTasks[index].done;
        setTasks(updatedTasks);
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div style={{ maxWidth: '400px', margin: 'auto' }}>
            <h2>📝 لیست کارها</h2>
            <input
                type="text"
                value={input}
                placeholder="کار جدید..."
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addTask()}
            />
            <button onClick={addTask}>➕ افزودن</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} style={{
                        textDecoration: task.done ? 'line-through' : 'none',
                        marginTop: '10px'
                    }}>
                        {task.text}
                        <button onClick={() => toggleDone(index)} style={{ marginLeft: '10px' }}>
                            ✅
                        </button>
                        <button onClick={() => deleteTask(index)} style={{ marginLeft: '5px', color: 'red' }}>
                            🗑
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;
