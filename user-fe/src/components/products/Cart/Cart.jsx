import React from "react";
import { useCart } from "react-use-cart";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  // const priceString = item.price ? item.price.toLocaleString() : item.price
  if (isEmpty)
    return (
      <>
        <br></br>
        <h1> <strong className="text-center " style={{ paddingLeft: "100px"}}>My cart</strong> </h1>
       <br></br>
        <h1 className="text-center">Opps!...It's empty here and the kitties are really hungry now😿!</h1>
        <NavLink to={"/products"} className="nav-link text-center pt-3 ">
          <h6 className="btn btn-outline-secondary">Shopping Now</h6>
          </NavLink>
        <br></br>
      </>
    );
  return (
    <section className="py-4 container">
      <div className="row">
        <div className="col-12">
        <br></br>
        <h1> <strong className="text-center " style={{ paddingLeft: "100px"}}>My cart</strong> </h1>
       <br></br><br></br>
          <h5>
            Cart: ({totalUniqueItems}) Total Quanity: ({totalItems})
          </h5>
          <table className="table table-light table-hover m-0">
            <thead>
              <tr>
                <th></th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img
                        src={item.image}
                        style={{ height: "100px", width: "100px" }}
                        alt={item.title}
                      />
                    </td>
                    <td>{item.title}</td>
                    <td>₫ {item.price}</td>
                    <td>{item.quantity}</td>
                    <td>
                      <button
                        className="btn btn-info ms-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <button
                        className="btn btn-info ms-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <button
                        className="btn btn-danger ms-2"
                        onClick={() => removeItem(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-auto ms-auto">
          <h2>Total cost: ₫{cartTotal.toLocaleString()}</h2>
        </div>
        <div className="col-auto">
          <button className="btn btn-danger m-2" onClick={() => emptyCart()}>
            Delete All Items
          </button>
          <NavLink to="/checkout" className="btn btn-primary">
            Checkout
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Cart;