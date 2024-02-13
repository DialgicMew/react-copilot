import "./grid.css";

const ProductList = ({ products }) => {
  const addToCart = (id) => {
    console.log("assa", id);
  };

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div>
              <img
                className="gridImageObj"
                src="https://img.freepik.com/free-psd/google-icon-isolated-3d-render-illustration_47987-9777.jpg?size=626&ext=jpg"
              ></img>
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <p>{product.description}</p>
              <button
                className="addToCartBtn"
                onClick={() => addToCart(product.id)}
              >
                Add to cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
