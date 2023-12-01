import React, { useState, useMemo, useCallback } from 'react';

const ListComponent = ({ items, onItemClick }) => {
  const memoizedItems = useMemo(() => items.map(item => item.toUpperCase()), [items]);

  const handleItemClick = useCallback((index) => {
    console.log(`Clicked on item: ${memoizedItems[index]}`);
  }, [memoizedItems]);

  return (
    <ul>
      {memoizedItems.map((item, index) => (
        <li key={index} onClick={() => handleItemClick(index)}>
          {item}
        </li>
      ))}
    </ul>
  );
};

const App = () => {
  const initialItems = ['apple', 'banana', 'orange'];
  const [items, setItems] = useState(initialItems);

  const addItem = () => {
    const newItem = prompt('Enter a new item:');
    if (newItem) {
      setItems([...items, newItem]);
    }
  };

  return (
    <div>
      <h1>Dynamic List</h1>
      <button onClick={addItem}>Add Item</button>
      <ListComponent items={items} onItemClick={(index) => console.log(`Item clicked at index ${index}`)} />
    </div>
  );
};

export default App;
