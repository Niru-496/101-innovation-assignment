import React, { useEffect, useState } from 'react'
import axios from 'axios';
import icon from "../images/Icon.png";
import { useNavigate } from 'react-router';
import Header from './Header';

export default function Homepage() {

  const [data, setData] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://innovative101assignement.herokuapp.com/").then((res) => {
		setData(res.data);
	});
  }, [])

  return (
		<div>
			<Header />

			<div className="list-header-container">
				<div className="left-side-title">Food List</div>
				<div className="right-side-title">Favourites</div>
			</div>

			<div className="Details_of_products">
				{data.map((element) => (
					<div
						onClick={() => navigate(`/${element.code}`)}
						className="All_product-details"
						key={element.code}
					>
						<img src={icon} alt="NOT FOUND" className="icon" />
						<div className="individual_product">
							<h5>
								{element.product_name} ({element.generic_name})
							</h5>
						</div>
					</div>
				))}
			</div>
		</div>
  );
}
