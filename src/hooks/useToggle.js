import { useState } from "react";
const useToggle = (value = false) => {
    const [state, setState] = useState(value);
    const toggle = () => {
        setState(!state);
    };
    return [state, toggle]
}
export default useToggle
