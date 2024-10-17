const ErrorMsg = () => {

    let foodItem = ["Daal", "Green Vegetables", "Fruits", "Milk", "Roti", "Fish","Ghee"];

  return <>{foodItem.length === 0 ? <h3>I am still Hungry</h3> : null}</>;
};

export default ErrorMsg;
