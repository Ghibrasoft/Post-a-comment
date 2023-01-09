import React, { useState } from 'react'
import './App.css'
import PostComments from './components/postComments/PostComments'
import ShowComments from './components/showComments/ShowComments'
import { Posts } from './data/CommentsData'



const App: React.FC = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<Posts[]>([]);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const newComment = { id: Date.now(), name: name, comment: comment, isDone: false };
    if (comment) {
      setComments([...comments, newComment]);
      setComment('');
    }
  }


  return (
    <div className='container'>
      <div className='comments_div'>
        <h1 className='header_h1'>Post a comment:</h1>
        <PostComments name={name} setName={setName} comment={comment} setComment={setComment} submitHandler={submitHandler} />
        <ShowComments comments={comments} setComments={setComments} />
      </div>
    </div>
  )
}

export default App