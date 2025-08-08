import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button, Form, Modal, Alert } from "react-bootstrap";

const API_URL = "https://mkart-seven.vercel.app/product";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({ productname: "", productcategory: "", productPrice: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loadingAction, setLoadingAction] = useState(false);

  useEffect(() => {
    const fetchProfileAndProducts = async () => {
      try {
        const profileResponse = await axios.get('https://mkart-seven.vercel.app/Customer/profile', { withCredentials: true });
        if (profileResponse.data?.user?.role === 'admin') {
          setIsAdmin(true);
          const productsResponse = await axios.get(API_URL, { withCredentials: true });
          setProducts(productsResponse.data);
        }
      } catch (error) {
        setError("Error fetching data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfileAndProducts();
  }, []);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (!isAdmin) {
    return <h3>Access Denied: Admins only</h3>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingAction(true);
    setError(null);
    try {
      if (isEditing) {
        await axios.put(`${API_URL}/${currentProduct.productname}`, currentProduct, { withCredentials: true });
        setProducts((prev) => prev.map((product) => (product.productname === currentProduct.productname ? currentProduct : product)));
      } else {
        const newProduct = { ...currentProduct, productPrice: Number(currentProduct.productPrice) };
        await axios.post(API_URL, newProduct, { withCredentials: true });
        setProducts((prev) => [...prev, newProduct]);
      }
      handleCloseModal();
    } catch (error) {
      setError("Error saving product. Please try again.");
    } finally {
      setLoadingAction(false);
    }
  };

  const handleDelete = async (productname) => {
    setLoadingAction(true);
    setError(null);
    try {
      await axios.delete(`${API_URL}/${productname}`, { withCredentials: true });
      setProducts(products.filter((product) => product.productname !== productname));
    } catch (error) {
      setError("Error deleting product. Please try again.");
    } finally {
      setLoadingAction(false);
    }
  };

  const handleOpenModal = (product = { productname: "", productcategory: "", productPrice: "" }) => {
    setCurrentProduct(product);
    setIsEditing(!!product.productname);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentProduct({ productname: "", productcategory: "", productPrice: "" });
  };

  return (
    <div className="container mt-4">
      <h2>Product Management</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Button variant="primary" onClick={() => handleOpenModal()}>Add Product</Button>

      {/* ⬇ Make the table responsive without external CSS */}
      <div style={{ overflowX: "auto" }} className="mt-3">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price ($)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.productname}>
                <td>{product.productname}</td>
                <td>{product.productcategory}</td>
                <td>${product.productPrice}</td>
                <td>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                    <Button variant="warning" size="sm" onClick={() => handleOpenModal(product)}>Update</Button>
                    <Button variant="danger" size="sm" onClick={() => handleDelete(product.productname)}>Delete</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Modal for Adding/Updating Products */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{isEditing ? "Update Product" : "Add Product"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control type="text" name="productname" value={currentProduct.productname} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control type="text" name="productcategory" value={currentProduct.productcategory} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price ($)</Form.Label>
              <Form.Control type="number" name="productPrice" value={currentProduct.productPrice} onChange={handleChange} required min="0" />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={loadingAction}>
              {loadingAction ? "Processing..." : (isEditing ? "Update Product" : "Add Product")}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ProductManagement;
