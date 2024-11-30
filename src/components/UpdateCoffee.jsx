import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const updateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photoURL } =
    coffee;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoURL = form.photoURL.value;

    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photoURL,
    };
    console.log(updatedCoffee);

    // send data to the server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };

  return (
    <div>
      <div className="bg-[#f4f3f0] p-24">
        <h3 className="text-3xl font-extrabold">
          Update Coffee : <span className="text-red-700">{name}</span>
        </h3>

        <form onSubmit={handleUpdateCoffee}>
          {/* form name and quantity  row  */}
          <div className="md:flex mb-8">
            <div className="from-control md:w-1/2">
              <label className="label">
                <span className="label-text">Coffee Name</span>
              </label>
              <label className="input-group">
                <input
                  className="input input-bordered w-full"
                  defaultValue={name}
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
                  defaultValue={quantity}
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
                  defaultValue={supplier}
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
                  defaultValue={taste}
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
                  defaultValue={category}
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
                  defaultValue={details}
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
                  defaultValue={photoURL}
                  type="text"
                  name="photoURL"
                  placeholder="Photo URL"
                  id=""
                />
              </label>
            </div>
          </div>

          <button className="btn btn-block bg-black text-white font-bold">
          Update COFFEE
          </button>
        </form>
      </div>
    </div>
  );
};

export default updateCoffee;
