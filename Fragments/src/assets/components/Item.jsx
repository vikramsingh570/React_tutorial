const Item = (Props) => {
  return (
    <li  className="list-group-item">
      {Props.foodItem}
    </li>
  );
};

export default Item;
