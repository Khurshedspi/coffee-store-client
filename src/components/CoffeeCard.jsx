import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photoURL } =
    coffee;

  const handleDelete = (_id) => {
    console.log("delete", _id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
          //   Swal.fire({
            //     title: "Deleted!",
            //     text: "Your file has been deleted.",
            //     icon: "success"
            //   });
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deleteCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              const remainingCoffees = coffees.filter((cof) => cof._id !== _id)
              setCoffees(remainingCoffees);
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="card card-side bg-green-50 shadow-xl py-4">
        <figure>
          <img src={photoURL} />
        </figure>
        <div className="flex justify-between  w-full pr-4">
          <div>
            <h2 className="card-title">{name}</h2>
            <h4 className="text-base font-medium">Supplier: {supplier}</h4>
            <h3 className="text-lg font-semibold">{category}</h3>
            <h3 className="text-lg font-semibold">Taste: {taste}</h3>
            <h3 className="text-lg font-semibold">Quantity: {quantity}</h3>

            <p>{details}</p>
          </div>
          <div className="card-actions justify-end">
            <div className="join join-vertical space-y-4">
              <button className="btn join-item bg-green-500 text-white">
                View
              </button>
             <Link to={`updateCoffee/${_id}`}>
             <button className="btn join-item bg-green-500 text-white">
                Edit
              </button>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn join-item bg-red-300 text-white"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
