import styles from "./spiner.style.css";
import React, {useState, useEffect} from "react";

const Loading = () => {
    const [showLoading, setShowLoading] = useState(false)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowLoading(true)
        }, 1800);
    })
    return (
     <div>
        {showLoading ? (
            <div className={`loader`}></div>
        ) : <div className={`loaderr`}></div>}
       
     </div>
    )
}
export default Loading;