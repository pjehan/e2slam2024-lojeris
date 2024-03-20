import { useState } from "react";

export default function useFormInput(initialValue) {
	const [value, setValue] = useState(initialValue);
	return {
		value: value,
		onChange: event => setValue(event.target.value)
	};
}
