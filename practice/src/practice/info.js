import { useState, useEffect } from "react";

const Info = () => {
    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");
    useEffect(() =>{
        console.log("렌더링이 완료되었습니다.");
        console.log({
            name,
            nickname
        });
    });
    
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