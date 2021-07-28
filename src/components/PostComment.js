import { RequestState } from '../types/RequestState';

export function PostComment({ name, onChangeName, text, onChangeText, onPost, requestState }) {
  const handleChangeName = e => {
    onChangeName(e.currentTarget.value);
  }

  const handleChangeText = e => {
    onChangeText(e.currentTarget.value);
  }

  return (
    <div>
      <div>Add comment:</div>
      <div className="flex-row">
        <div>Name:</div>
        <div>
          <input value={name} onChange={handleChangeName}/>
        </div>
      </div>
      <div className="flex-row">
        <div>
          Message:
        </div>
        <div>
          <textarea value={text} onChange={handleChangeText}/>
        </div>
      </div>
      <div>
        <button disabled={requestState === RequestState.request} onClick={onPost}>
          Send
        </button>
      </div>
    </div>
  )
}
