import React, { useState } from "react";
import DraggableItem from "./DraggableItem";

const PlayerTable = ({ player, initialTeams }) => {
  const [items, setItems] = useState(initialTeams);

  const moveItem = (fromIndex, toIndex) => {
    const updatedItems = [...items];
    const [movedItem] = updatedItems.splice(fromIndex, 1);
    updatedItems.splice(toIndex, 0, movedItem);
    setItems(updatedItems);
  };

  return (
    <div>
      <h3>{player}</h3>
      {items.map((item, index) => (
        <DraggableItem
          key={item}
          id={item}
          index={index}
          moveItem={moveItem}
          name={item}
        />
      ))}
    </div>
  );
};

export default PlayerTable;
