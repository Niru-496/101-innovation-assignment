import axios from "axios";
import React, { useEffect, useState } from "react";
import icon from "../images/Icon.png";
import { useParams } from "react-router";
import Header from "./Header";
import Button from "@mui/material/Button";
export default function SingleProduct() {
	const { code } = useParams();

	const [product, SetProduct] = useState({});

	useEffect(() => {
		axios
			.get(
				`https://innovative101assignement.herokuapp.com/foodData?code=${code}`
			)
			.then((res) => SetProduct(res.data[0]));
	}, [code]);

	return (
		<div>
			<Header />

			<div className="details">
				<div className="Product-container-div">
					<img src={icon} alt="not found" className="Icon-img-src" />
					<h4 className="Product-name-tag">{product.product_name}</h4>
					<Button variant="contained" onClick={()=>{ }}> + Favourities</Button>
				</div>

				<div className="table-main-container">
					<table>
						<tbody>
							{Object.keys(product).map((key, index) => {
								return (
									<tr key={index}>
										<td>{key}</td>
										<td>{product[key]}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
