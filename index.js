import { registerRootComponent } from "expo"; // import this package from expo
//import App from './src/App'; 
import Main from '/Users/ayanreza/Desktop/headstarter/headstarter-basic-app/src/screens/Main.js';

registerRootComponent(Main); // registered the App screen as the ROOT component, which means this component is
// essentially "home base", which means this is where React Native configures this as the source of all truth
// in your project.