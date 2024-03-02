import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CommentBox from './WithJSX/CommentBox';


const root = ReactDOM.createRoot(document.getElementById('root'));
const data = {
  post: {
      id: 123,
      user: 'Normando',
      content: 'What we hope ever to do with ease, we must first learn to do with diligence. — Samuel Johnson'
  },
  comments: [
      {
          id: 0,
          user: 'David',
          content: 'such. win.'
      }, {
          id: 1,
          user: 'Haley',
          content: 'Love it.'
      }, {
          id: 3,
          user: 'Mitchell',
          content: '@Peter get off Letters and do your homework'
      }]
};
root.render(
  <React.StrictMode>
    <App />
    <CommentBox comments={data.comments} post={data.post}/>
  </React.StrictMode>
);
// Initial commit
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
