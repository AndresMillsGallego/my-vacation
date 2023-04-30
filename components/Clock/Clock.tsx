const Clock = () => {
  const today = new Date();
  const todayString = today.toLocaleDateString();

  return (
    <div>
      <h4>{todayString}</h4>
    </div>
  );
};

export default Clock;
