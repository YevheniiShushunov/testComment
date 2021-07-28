export function CommentList({ comments = [] }) {
  const renderList = () => {
    return comments.map(item => (
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
