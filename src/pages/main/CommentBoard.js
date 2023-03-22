import React, { useState } from 'react';
import './CommentBoard.scss';
import Comment from './Comment';

function CommentBoard() {
  const [commentValue, setCommentValue] = useState('');
  const [commentList, setCommentArr] = useState([]);

  const handleInput = (e) => {
    setCommentValue(e.target.value);
  };

  const addComment = (e) => {
    console.log(e.keyCode);
    if (e.keyCode === 13) {
      setCommentArr([...commentList, commentValue]);
      setCommentValue('');
    }
  };

  return (
    <div className="CommentBoard">
      <ul>
        {commentList.map((item) => {
          return <Comment item={item} />;
        })}
      </ul>
      <input
        value={commentValue}
        onChange={handleInput}
        onKeyDown={addComment}
        type="text"
      />
    </div>
  );
}

export default CommentBoard;
