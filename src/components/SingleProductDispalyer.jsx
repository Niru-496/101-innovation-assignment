import axios from "axios";
import React, { useEffect, useState } from "react";
import icon from "../images/Icon.png";
import { useParams } from "react-router";
import Header from "./Header";

export default function SingleProduct() {
	const { code } = useParams();

	const [singledata, setSingledata] = useState({});

	useEffect(() => {
		axios
			.get(
				`https://innovative101assignement.herokuapp.com/foodData?code=${code}`
			)
			.then((res) => setSingledata(res.data[0]));
	}, [code]);


	return (
		<div>
			<Header />

			<div className="details">
				<div className="prod_name">
					<img src={icon} alt="not found" className="iconimgg" />
					<h3 className="prodalign">{singledata.product_name}</h3>
				</div>

				<table>
					<tbody>
						{Object.keys(singledata).map((key, index) => {
							return (
								<tr key={index}>
									<td>{key}</td>
									<td>{singledata[key]}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}
