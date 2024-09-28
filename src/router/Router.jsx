import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import MixLoading from "../component/mixLoading/MixLoading";
import RootLayout from "../component/layout/RootLayout";
import PingLoading from "../component/pingLoading/PingLoading";

let route = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<MixLoading />} />
        <Route path="/pingloading" element={<PingLoading />} />
        <Route path="/mixloading" element={<MixLoading />} />
      </Route>
    </Route>
  )
);
export default route;
