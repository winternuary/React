import { useState } from "react";

const Counter = () => {
    const [value, setValue] = useState(0);

    return(
        <div>
            <p>숫자는 <p>{value}</p>이다</p>
            <button onClick={()=>setValue(value+1)}>+1</button>
            <button onClick={()=>setValue(value-1)}>-1</button>
        </div>
    );
};

export default Counter;