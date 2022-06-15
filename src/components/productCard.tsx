import React from "react";
import { Link } from "react-router-dom";

class ProductCard extends React.Component {
  render() {
    return (
      <div>
        <div>
          Card1
          <button>
            <Link to="/product-description">Descrition</Link>
          </button>
        </div>
        <div>Card2</div>
        <div>Card3</div>
      </div>
    );
  }
}

export default ProductCard;
