import { useState } from "react";

function LikeButton() {
    const [isLiked, setIsLiked] = useState(false);

    function toggleLike() {
        setIsLiked(!isLiked);
    }

    return (
        <button className="like-button" onDoubleClick={toggleLike}>
            <h1>
                <i className={isLiked ? "fa-solid fa-heart liked" : "fa-regular fa-heart"}></i>
                {" "}Like
            </h1>
        </button>
    );
}

export default LikeButton;