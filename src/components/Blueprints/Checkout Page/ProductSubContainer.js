import React from "react";
import "./ProductCheckoutPage.css";
import { FaChevronDown } from "react-icons/fa";

function ProductSubContainer() {
  return (
    <div className="sub-container-2">
      <div className="special-offers-section">
        <p className="products-title">Special offers and product promotions</p>
        <ul>
          <li>
            <p className="special-offer">
              Get 7.5% up to Rs. 1500 Instant Discount on Kotak Bank Credit Card
              and Debit Card EMI transactions.{" "}
              <span>
                Here's how <FaChevronDown className="fa-chevron-down" />
              </span>
            </p>
          </li>
          <li>
            <p className="special-offer">
              Get 7.5% up to Rs. 1500 Instant Discount on Standard Chartered
              Credit Card EMI transactions.{" "}
              <span>
                Here's how <FaChevronDown className="fa-chevron-down" />
              </span>
            </p>
          </li>
          <li>
            <p className="special-offer">
              5% Instant Discount up to INR 250 on HSBC Cashback Card Credit
              Card Transactions. Minimum purchase value INR 1000.{" "}
              <span>
                Here's how <FaChevronDown className="fa-chevron-down" />
              </span>
            </p>
          </li>
          <li>
            <p className="special-offer">
              No cost EMI available on select cards. Please check 'EMI options'
              above for more details.{" "}
              <span>
                Here's how <FaChevronDown className="fa-chevron-down" />
              </span>
            </p>
          </li>
          <li>
            <p className="special-offer">
              Get GST invoice and save up to 28% on business purchases.{" "}
              <span>
                Here's how <FaChevronDown className="fa-chevron-down" />
              </span>
            </p>
          </li>
        </ul>
      </div>
      <hr />
      <div className="customer-reviews">
        <p className="products-title">Customer reviews</p>
        <p className="text-2">Failed to load reviews...</p>
      </div>
    </div>
  );
}

export default ProductSubContainer;
