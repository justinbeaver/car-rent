export const RentalSummary = () => {
  return (
    <section>
      <header>
        <h2>Rental Summary</h2>
        <p>
          Prices may change depending on the length of the rental and the price
          of your rental car.
        </p>
      </header>
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <p>Nissan GT-R</p>
      </div>
      <div>
        <p>
          <span>Subtotal</span>
          <span>$80.00</span>
        </p>
        <p>
          <span>Tax</span>
          <span>$0</span>
        </p>
      </div>
      <div>
        <label className="visually-hidden" htmlFor="promo-code-input">
          Promo code:
        </label>
        <input
          id="promo-code-input"
          type="text"
          placeholder="Apply promo code"
        />
        <button>Apply now</button>
      </div>
      <footer>
        <div>
          <p>Total Rental Price</p>
          <p>Overall price and includes rental discount</p>
        </div>
        <p>$80.00</p>
      </footer>
    </section>
  );
};
