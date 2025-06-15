const Discount = () => {
  return (
    <>
      <h4 className="font-bold">Discount</h4>
      <div className="">
        <div className="">
          <input
            id="alldiscounts"
            type="radio"
            className="me-2"
            name="discount"
            value="all"
            //   onChange={handleBrand}
          />
          <label htmlFor="allrevs">All</label>
        </div>
        <div className="flex">
          <input
            id="num1"
            type="radio"
            className="me-2"
            name="discount"
            value="10% off or more"
            //   onChange={handleBrand}
          />
          <label htmlFor="num1" className="">
            10% off or more
          </label>
        </div>
        <div className="flex">
          <input
            id="num2"
            type="radio"
            className="me-2"
            name="discount"
            value="25% off or more"
            //   onChange={handleBrand}
          />
          <label htmlFor="num2" className="">
            25% off or more
          </label>
        </div>
        <div className="flex">
          <input
            id="num3"
            type="radio"
            className="me-2"
            name="discount"
            value="50% off or more"
            //   onChange={handleBrand}
          />
          <label htmlFor="num3" className="">
            50% off or more
          </label>
        </div>
        <div className="flex">
          <input
            id="num4"
            type="radio"
            className="me-2"
            name="discount"
            value="70% off or more"
            //   onChange={handleBrand}
          />
          <label htmlFor="num4" className="">
            70% off or more
          </label>
        </div>
      </div>
    </>
  );
};

export default Discount;
