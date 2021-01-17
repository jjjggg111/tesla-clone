import './App.css';
import Header from './components/Header';
import Item from './components/Item';

import Accessories from './assets/Accessories.jpg';
import ModelS from './assets/ModelS.jpeg';
import Model3 from './assets/Model3.jpeg';
import ModelX from './assets/ModelX.jpeg';
import ModelY from './assets/ModelY.jpeg';
import SolarPanel from './assets/SolarPanels.jpeg';
import SolarRoof from './assets/SolarRoof.jpeg';

function App() {
  return (
    <div className="App">
      {/*header */}
      <Header />
      <div className="app__itemsContainer">
        <Item
          title="Lowest Cost Solar Panels in America"
          desc="Money-back guarantee"
          descLink=""
          backgroundImg={SolarPanel}
          leftBtnTxt="ORDER NOW"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
          first
        />
        <Item
          title="Model S"
          desc="Starting at $69,420"
          descLink=""
          backgroundImg={ModelS}
          leftBtnTxt="CUSMTOM ORDER"
          leftBtnLink=""
          rightBtnTxt="EXISTING INVENTORY"
          twoButtons="true"
        />
        <Item
          title="Model 3"
          desc="Order Online for Touchless Delivery"
          descLink=""
          backgroundImg={Model3}
          leftBtnTxt="CUSMTOM ORDER"
          leftBtnLink=""
          rightBtnTxt="EXISTING INVENTORY"
          twoButtons="true"
        />
        <Item
          title="Model X"
          desc="Order Online for Touchless Delivery"
          descLink=""
          backgroundImg={ModelX}
          leftBtnTxt="CUSMTOM ORDER"
          leftBtnLink=""
          rightBtnTxt="EXISTING INVENTORY"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Model Y"
          desc="Order Online for Touchless Delivery"
          descLink=""
          backgroundImg={ModelY}
          leftBtnTxt="CUSMTOM ORDER"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Solar for New Roofs"
          desc="
          Solar Roof Costs Less Than a New Roof Plus Solar Panels"
          descLink=""
          backgroundImg={SolarRoof}
          leftBtnTxt="CUSMTOM ORDER"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Accessories"
          desc=""
          descLink=""
          backgroundImg={Accessories}
          leftBtnTxt="SHOP NOW"
          leftBtnLink=""
          // rightBtnTxt="LEARN MORE"
          // rightBtnLink=""
          // twoButtons="false"
        />
      </div>
    </div>
  );
}

export default App;
