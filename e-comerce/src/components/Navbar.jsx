import React, { useContext, useState } from "react";
import { FaAmazon, FaShoppingCart, FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import DataContext from "../context/DataContext";

const Navbar = () => {
  const { cart } = useContext(DataContext);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/product/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg amazon-navbar shadow-lg">
      <div className="container-fluid">

        {/* Logo */}
        <Link to="/" className="navbar-brand d-flex align-items-center logo-hover">
          <FaAmazon className="text-warning fs-2 me-2" />
          <span className="fs-4 fw-bold text-white">Amazon</span>
        </Link>

        {/* Search */}
        <form onSubmit={handleSubmit} className="search-container d-none d-md-flex">
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control search-input"
            placeholder="Search Products..."
          />
          <button className="search-button" type="submit">
            <FaSearch className="text-dark" />
          </button>
        </form>

        {/* Categories */}
        <ul className="navbar-nav mx-auto gap-3 d-none d-lg-flex">
          {["Mobiles", "Laptops", "Tablets", "Watches"].map((category) => (
            <li key={category} className="nav-item category-hover">
              <Link
                to={`/product/category/${category.toLowerCase()}`}
                className="nav-link text-white"
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>

        {/* Cart */}
        <Link to="/cart" className="btn btn-warning position-relative cart-button">
          <FaShoppingCart className="fs-4" />

          {cart.length > 0 && (
            <span className="cart-badge">
              {cart.length > 99 ? "99+" : cart.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
