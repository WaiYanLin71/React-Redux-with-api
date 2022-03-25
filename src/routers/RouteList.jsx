import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import StoreRoutes from "./StoreRoutes";

const RouteList = () => {
	return (
		<Routes>
			{Object.keys(StoreRoutes).map((route) => {
				return (
					<Fragment key={route}>
						<Route path={StoreRoutes[route]} element={<Home />} />
					</Fragment>
				);
			})}
		</Routes>
	);
};

export default RouteList;
