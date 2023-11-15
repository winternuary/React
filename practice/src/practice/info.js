import { useState, useEffect } from "react";

const Info = () => {
    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");
    useEffect(() =>{
        console.log("마운트 될 떄만 실행됩니다.");}, []);

    const onCangeName = e => {
        setName(e.target.value);
    };

    const onChageNickname = e => {
        setNickname(e.target.value);
    };

    return(
        <div>
            <div>
                <input value={name} onChange={onCangeName} />
                <input value={nickname} onChange={onChageNickname} />
            </div>
            <div>
                <div>
                    <b>이름:</b>{name}
                </div>
                <div>
                    <b>닉네임:</b>{nickname}
                </div>
            </div>
        </div>
    )

};

export default Info;