import Swal from 'sweetalert2'

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoURL = form.photoURL.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photoURL,
    };
    console.log(newCoffee);

    // send data to the server
    fetch("http://localhost:5000/coffee", {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newCoffee)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data); 

        if(data.insertedId){
          Swal.fire({
            title: 'Success!',
            text: 'Coffee Added Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      });
  };
  return (
    <div className="bg-[#f4f3f0] p-24">
      <h3 className="text-3xl font-extrabold">Add a Coffee</h3>

      <form onSubmit={handleAddCoffee}>
        {/* form name and quantity  row  */}
        <div className="md:flex mb-8">
          <div className="from-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                className="input input-bordered w-full"
                type="text"
                name="name"
                placeholder="coffee Name"
                id=""
              />
            </label>
          </div>
          <div className="from-control ml-4 md:w-1/2">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                className="input input-bordered w-full"
                type="text"
                name="quantity"
                placeholder="Available Quantity"
                id=""
              />
            </label>
          </div>
        </div>
        {/* form supplier and taste row  */}
        <div className="md:flex mb-8">
          <div className="from-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <label className="input-group">
              <input
                className="input input-bordered w-full"
                type="text"
                name="supplier"
                placeholder="Supplier Name"
                id=""
              />
            </label>
          </div>
          <div className="from-control ml-4 md:w-1/2">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <input
                className="input input-bordered w-full"
                type="text"
                name="taste"
                placeholder="Taste"
                id=""
              />
            </label>
          </div>
        </div>
        {/* form category and details row  */}
        <div className="md:flex mb-8">
          <div className="from-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                className="input input-bordered w-full"
                type="text"
                name="category"
                placeholder="Category"
                id=""
              />
            </label>
          </div>
          <div className="from-control ml-4 md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                className="input input-bordered w-full"
                type="text"
                name="details"
                placeholder="Details"
                id=""
              />
            </label>
          </div>
        </div>
        {/* form PHOTO URL row  */}
        <div className="mb-8">
          <div className="from-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                className="input input-bordered w-full"
                type="text"
                name="photoURL"
                placeholder="Photo URL"
                id=""
              />
            </label>
          </div>
        </div>

        <button className="btn btn-block bg-black text-white font-bold">
          ADD COFFEE
        </button>
      </form>
    </div>
  );
};

export default AddCoffee;
