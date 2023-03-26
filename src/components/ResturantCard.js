const ResturantCard = (props) => {
  return (
    <div className="card">
      <img alt="Cuisine Logo" src={props.info.image.url} />
      <h2>{props.info.name}</h2>
      <h3>{props.info.cuisine[0].name}</h3>
      <h4>{props.info.rating.rating_text} *</h4>
    </div>
  );
};

export default ResturantCard;
