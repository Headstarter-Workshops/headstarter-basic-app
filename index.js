import { registerRootComponent } from "expo"; // import this package from expo
import App from './src/App'; // imported the App screen

registerRootComponent(App); // registered the App screen as the ROOT component, which means this component is
// essentially "home base", which means this is where React Native configures this as the source of all truth
// in your project.