import React from "react";

function Vote(props) {
    const vote = ({
    post,
    onVote,
    userUpvoted,
    userDownvoted,
    postScore
    }) => {
    return (
        <div className="post-vote-container">
        <div className="post-vote">
            <a
            href="#upvote"
            className={"vote-btn", { voted: userUpvoted }}
            onClick={e => {
                e.preventDefault();
                onVote({ type: "Upvote" });
            }}
            >
            <i className="fa fa-chevron-up" />
            </a>
            <div className="vote-count">
            {postScore}
            </div>
            <a
            href="#downvote"
            className={"vote-btn", {
                voted: userDownvoted
            }}
            onClick={e => {
                e.preventDefault();
                onVote({ type: "Downvote" });
            }}
            >
            <i className="fa fa-chevron-down" />
            </a>
        </div>
        </div>
    );
    };
}
export default Vote;
