import React from "react";
import s from "./FoundError.module.scss"

const FoundError: React.FC = () => {
    return (
        <div className={s.wrapper}>
            <span>😕</span>
            <h1>Страница не найдена</h1>
        </div>
    )
}
export default FoundError;