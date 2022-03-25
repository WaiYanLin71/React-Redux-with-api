import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchStudents } from "../../Reducer/StudentSlice";

export const Home = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchStudents("http://127.0.0.1:8000/api/students"));
	}, []);
	return <div>Home</div>;
};
