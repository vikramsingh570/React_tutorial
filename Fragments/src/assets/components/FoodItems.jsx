import Item from "./Item";



const FoodItems = () => {

    let foodItem = ["Daal", "Green Vegetables", "Fruits", "Milk", "Roti", "Fish","Ghee"];

  return (
    <ul className="list-group">
      {foodItem.map((item) => (
        <Item key={item} foodItem = {item}></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
