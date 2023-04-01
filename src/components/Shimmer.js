const Shimmer = () => {
  return (
    <>
      <h1>restaurants are Loading...........</h1>
      <div className="shimmar-restaurant-list">
        {Array(5)
          .fill("")
          .map((e, index) => (
            <div key={index} className="shimmer-card"></div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
