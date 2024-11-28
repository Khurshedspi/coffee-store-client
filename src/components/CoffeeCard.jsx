const CoffeeCard = ({coffee}) => {
    const  {
        name,
        quantity,
        supplier,
        taste,
        category,
        details,
        photoURL,
      } = coffee;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={photoURL}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h4 className="text-base font-medium">Supplier: {supplier}</h4>
          <h3 className="text-lg font-semibold">{category}</h3>
          <h3 className="text-lg font-semibold">Taste: {taste}</h3>
          <h3 className="text-lg font-semibold">Quantity: {quantity}</h3>

          <p>{details}</p>
          <div className="card-actions justify-start">
            <button className="btn bg-green-600 text-white">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
