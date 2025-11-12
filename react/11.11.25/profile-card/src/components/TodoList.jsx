import React, { useState } from "react";

const TodoList = () => {
  const [list, setList] = useState([]);
  const [content, setContent] = useState("");

  const addTodo = () => {
    if (!content.trim()) return;
    const newTodo = {
      id: list.length + 1,
      content,
    };
    setList([...list, newTodo]);
    setContent(""); // clear the input
  };

  const deleteTodo = (id) => {
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
  };

  return (
    <>
      <div className="flex gap-3">
        <input
          className="p-4 text-black bg-amber-50 border-amber-400"
          type="text"
          placeholder="enter todo here"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button className="text-black bg-white color-black" onClick={addTodo}>
          +
        </button>
      </div>
      <ul>
        {list.map((item) => (
          <div
            key={item.id}
            className="flex flex-row justify-around gap-3 mt-6 border border-amber-400"
          >
            {item.content ? (
              <>
                <li className="flex items-center">{item.content}</li>
                <button onClick={() => deleteTodo(item.id)}>-</button>
              </>
            ) : null}
          </div>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
