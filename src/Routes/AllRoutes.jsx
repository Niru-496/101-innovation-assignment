import { Route, Routes } from "react-router";
import Homepage from "../components/FoodListAll";
import SingleProduct from "../components/SingleProductDispalyer";




export default function Routing(){
	return (
		<Routes>
			<Route path="/" element={<Homepage/>}></Route>
			<Route path="/:code" element={<SingleProduct />}></Route>
		</Routes>
	);
};


