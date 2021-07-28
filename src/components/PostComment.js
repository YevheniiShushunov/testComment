import { RequestState } from '../types/RequestState';
import { ApiService } from '../api/ApiService';
import { useState } from 'react';

export function PostComment() {
  const [requestState, setRequestState] = useState(RequestState.none);
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleClickSend = async () => {
    if (requestState === RequestState.none) {
      try {
        setRequestState(RequestState.request);
        await ApiService.postComment(name, text);
        setText('');
        setRequestState(RequestState.success);
      } catch (e) {
        setRequestState(RequestState.failure);
      }
    }
  }

  return (
    <div>
      <div>Add comment:</div>
      <div className="flex-row">
        <div>Name:</div>
        <div><input value={name} onChange={e => setName(e.currentTarget.value)}/></div>
      </div>
      <div className="flex-row">
        <div>
          Message:
        </div>
        <div>
          <textarea value={text} onChange={e => setText(e.currentTarget.value)}/>
        </div>
      </div>
      <div>
        <button disabled={requestState === RequestState.request} onClick={handleClickSend}>
          Send
        </button>
      </div>
    </div>
  )
}
