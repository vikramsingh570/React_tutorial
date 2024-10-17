import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./assets/components/FoodItems";
import ErrorMsg from "./assets/components/ErrorMsg";

function App() {
 //let foodItem = ["Daal", "Green Vegetables", "Fruits", "Milk", "Roti", "Fish","Ghee"];
  //let foodItem = [];


  return (
    <center>
      <h1>
        <u>[Healthy Food List]</u>
      </h1>
      <ErrorMsg/>
      <FoodItems/>
    </center>
  );
}

export default App;
