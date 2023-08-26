import React from "react";
import { useSelector } from "react-redux";

const CounterValue = () => {
	const value = useSelector((state) => state.counter.value); // State'den değeri alıyoruz
	return <div>
		{value}
	</div>;
};

export default CounterValue;
