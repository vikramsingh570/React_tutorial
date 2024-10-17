import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";

function App() {
 let foodItem = ["Daal", "Green Vegetables", "Fruits", "Milk", "Roti", "Fish","Ghee"];
  //let foodItem = [];


  return (
    <center>
      <h1>
        <u>[Healthy Food List]</u>
      </h1>
      <ErrorMsg items={foodItem}></ErrorMsg>
      <FoodItems items={foodItem}> </FoodItems>
    </center>
  );
}

export default App;
