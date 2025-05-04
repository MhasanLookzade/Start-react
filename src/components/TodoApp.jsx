import { useState } from 'react';
import styles from './TodoApp.module.css';

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
        <div className={styles.container}>
            <h2>📝 لیست کارها</h2>
            <input
                className={styles.input}
                type="text"
                value={input}
                placeholder="کار جدید..."
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addTask()}
            />
            <button onClick={addTask} className={styles.button}>➕ افزودن</button>
            <ul>
                {tasks.map((task, index) => (
                    <li
                        key={index}
                        className={`${styles.taskItem} ${task.done ? styles.done : ''}`}
                    >
                        <span>{task.text}</span>
                        <span>
                            <button onClick={() => toggleDone(index)} className={styles.actionBtn}>
                                ✅
                            </button>
                            <button onClick={() => deleteTask(index)} className={styles.actionBtn} style={{ color: 'red' }}>
                                🗑
                            </button>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;
