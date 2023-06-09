const Shimmer = () => {
  return (
    <>
      <div className="shimmar-restaurant-list">
        {Array(30)
          .fill("")
          .map((e, index) => (
            <div key={index} className="shimmer-card"></div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
