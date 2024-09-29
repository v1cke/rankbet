import React from "react";
import { useDrag, useDrop } from "react-dnd";

const DraggableItem = ({ id, index, moveItem, name, className }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "ITEM",
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "ITEM",
    drop: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
      }
    },
  });

  const opacity = isDragging ? 0.5 : 1;

  return (
    <div
      ref={(node) => drag(drop(node))}
      className={className}
      style={{ opacity }}
    >
      {name}
    </div>
  );
};

export default DraggableItem;
