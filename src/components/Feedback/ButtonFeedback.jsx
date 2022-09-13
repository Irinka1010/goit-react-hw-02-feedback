export default function ButtonFeedback({ leaveVote }) {
  return (
    <>
      <button onClick={() => leaveVote('good')}>Good</button>
      <button onClick={() => leaveVote('neutral')}>Neutral</button>
      <button onClick={() => leaveVote('bad')}>Bad</button>
    </>
  );
}
