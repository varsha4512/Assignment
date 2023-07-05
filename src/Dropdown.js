import { data } from "./data";
import { Card } from "./Card";
import { useEffect, useState } from "react";

export const Dropdown = () => {
  const [itemId, setItemId] = useState({
    name: "",
    price: 0,
    itemId: 0
  });

  useEffect(() => {
    const selectedItemId = 3;
    const selectedItem = data.find(
      (item) => item.id === parseInt(selectedItemId)
    );

    setItemId({
      name: selectedItem.Name,
      price: selectedItem.Price,
      itemId: selectedItemId
    });
  }, []);
  const onDropDOwnChange = (event) => {
    const selectedItemId = event.target.value;
    const selectedItem = data.find(
      (item) => item.id === parseInt(selectedItemId)
    );

    setItemId({
      name: selectedItem.Name,
      price: selectedItem.Price,
      itemId: selectedItemId
    });
  };

  return (
    <>
      <div className="main">
        <select onChange={onDropDOwnChange}>
          <option>List Of Items</option>
          {data.map((item) => (
            <option value={item.id}>{item.Name}</option>
          ))}
        </select>
        <Card item={itemId} />
      </div>
    </>
  );
};
