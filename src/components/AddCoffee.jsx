import React from "react";

const AddCoffee = () => {
  return (
    <div>
      <h3>Add a Coffee</h3>

      <form>
        <div>
          <div className="join">
            <input
              className="input input-bordered join-item"
              placeholder="Email"
            />
            <button className="btn join-item rounded-r-full">Subscribe</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
