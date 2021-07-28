import { useEffect, useState } from 'react';
import { RequestState } from '../types/RequestState';
import { ApiService } from '../api/ApiService';

export function CommentList() {
  const [requestState, setRequestState] = useState(RequestState.none);
  const [comments, setComments] = useState([]);

  async function requestList() {
    if (requestState === RequestState.none) {
      try {
        setRequestState(RequestState.request);
        const response = await ApiService.getCommentList(16);
        setComments(response.data);
        setRequestState(RequestState.success);
      } catch (e) {
        setRequestState(RequestState.failure);
      }
    }
  }

  useEffect(requestList, []);

  function renderList() {
    const list = comments.data || [];
    return list.map(item => (
      <li key={item.id}>
        <div><b>Name: {item.name}</b></div>
        <div>Comment: {item.text}</div>
      </li>
    ));
  }

  return (
    <div>
      <ul>
        {renderList()}
      </ul>
    </div>
  );
}
