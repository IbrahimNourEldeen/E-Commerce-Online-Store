const Price = () => {
  return (
    <>
      <h4 className="font-bold">Price</h4>
      <div className="">
        <div className="">
          <input
            id="allprices"
            type="radio"
            className="me-2"
            name="price"
            value="all"
            //   onChange={handleBrand}
          />
          <label htmlFor="allrevs">All</label>
        </div>
        <div className="flex">
          <input
            id="range1"
            type="radio"
            className="me-2"
            name="price"
            value="Under EGP 400"
            //   onChange={handleBrand}
          />
          <label htmlFor="range1" className="">
            Under EGP 400
          </label>
        </div>
        <div className="flex">
          <input
            id="range2"
            type="radio"
            className="me-2"
            name="price"
            value="Under EGP 800"
            //   onChange={handleBrand}
          />
          <label htmlFor="range2" className="">
            Under EGP 800
          </label>
        </div>
        <div className="flex">
          <input
            id="range3"
            type="radio"
            className="me-2"
            name="price"
            value="Under EGP 1200"
            //   onChange={handleBrand}
          />
          <label htmlFor="range3" className="">
            Under EGP 1200
          </label>
        </div>
        <div className="flex">
          <input
            id="range4"
            type="radio"
            className="me-2"
            name="price"
            value="Under EGP 1600"
            //   onChange={handleBrand}
          />
          <label htmlFor="range4" className="">
            Under EGP 1600
          </label>
        </div>
        <div className="flex">
          <input
            id="range5"
            type="radio"
            className="me-2"
            name="price"
            value="EGP 1,600 & above"
            //   onChange={handleBrand}
          />
          <label htmlFor="range5" className="">
            EGP 1,600 & above
          </label>
        </div>
      </div>
    </>
  );
};

export default Price;
