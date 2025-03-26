import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form, InputGroup, Pagination, Badge, Spinner } from 'react-bootstrap';

const Products = () => {
  // Sample products data - replace with your actual data
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  
  const productsPerPage = 8;
  const categories = ['All', 'Clothing', 'Footwear', 'Accessories', 'Jewelry'];
  
  // Simulate fetching products from an API
  useEffect(() => {
    // Replace this with your actual API call
    setTimeout(() => {
      const sampleProducts = [
        { id: 1, name: 'Classic T-Shirt', price: 19.99, category: 'Clothing', image: 'https://via.placeholder.com/300x300', description: 'Comfortable cotton t-shirt in various colors' },
        { id: 2, name: 'Slim Fit Jeans', price: 49.99, category: 'Clothing', image: 'https://via.placeholder.com/300x300', description: 'Modern slim fit jeans in dark wash' },
        { id: 3, name: 'Running Shoes', price: 89.99, category: 'Footwear', image: 'https://via.placeholder.com/300x300', description: 'Lightweight performance running shoes' },
        { id: 4, name: 'Leather Wallet', price: 29.99, category: 'Accessories', image: 'https://via.placeholder.com/300x300', description: 'Genuine leather wallet with card slots' },
        { id: 5, name: 'Silver Necklace', price: 79.99, category: 'Jewelry', image: 'https://via.placeholder.com/300x300', description: 'Sterling silver pendant necklace' },
        { id: 6, name: 'Denim Jacket', price: 59.99, category: 'Clothing', image: 'https://via.placeholder.com/300x300', description: 'Classic denim jacket with modern fit' },
        { id: 7, name: 'Canvas Sneakers', price: 39.99, category: 'Footwear', image: 'https://via.placeholder.com/300x300', description: 'Casual canvas sneakers for everyday wear' },
        { id: 8, name: 'Sunglasses', price: 24.99, category: 'Accessories', image: 'https://via.placeholder.com/300x300', description: 'UV protection sunglasses with stylish frames' },
        { id: 9, name: 'Gold Bracelet', price: 99.99, category: 'Jewelry', image: 'https://via.placeholder.com/300x300', description: 'Elegant gold bracelet with unique design' },
        { id: 10, name: 'Winter Coat', price: 129.99, category: 'Clothing', image: 'https://via.placeholder.com/300x300', description: 'Warm winter coat with insulation' },
        { id: 11, name: 'Leather Boots', price: 119.99, category: 'Footwear', image: 'https://via.placeholder.com/300x300', description: 'Durable leather boots for all seasons' },
        { id: 12, name: 'Backpack', price: 45.99, category: 'Accessories', image: 'https://via.placeholder.com/300x300', description: 'Spacious backpack with multiple compartments' },
      ];
      
      setProducts(sampleProducts);
      setFilteredProducts(sampleProducts);
      setLoading(false);
    }, 1000); // Simulate network delay
  }, []);
  
  // Handle filtering and sorting
  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (selectedCategory !== 'All') {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Sort products
    if (sortBy === 'price-low-high') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high-low') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name-a-z') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'name-z-a') {
      result.sort((a, b) => b.name.localeCompare(a.name));
    }
    
    setFilteredProducts(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchTerm, selectedCategory, sortBy, products]);
  
  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  // Render pagination items
  const renderPaginationItems = () => {
    let items = [];
    for (let number = 1; number <= totalPages; number++) {
      items.push(
        <Pagination.Item key={number} active={number === currentPage} onClick={() => paginate(number)}>
          {number}
        </Pagination.Item>
      );
    }
    return items;
  };

  return (
    <Container className="products-container mt-5">
      <div className="products-header">
        <h1>Our Products</h1>
        <p>Discover our wide range of high-quality products</p>
      </div>
      
      <div className="filters">
        <Row>
          <Col md={4}>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button variant="outline-secondary">Search</Button>
            </InputGroup>
          </Col>
          
          <Col md={4}>
            <Form.Select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </Form.Select>
          </Col>
          
          <Col md={4}>
            <Form.Select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Sort by: Default</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="name-a-z">Name: A to Z</option>
              <option value="name-z-a">Name: Z to A</option>
            </Form.Select>
          </Col>
        </Row>
      </div>
      
      {loading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          <Row>
            {currentProducts.length > 0 ? (
              currentProducts.map(product => (
                <Col key={product.id} md={6} lg={3}>
                  <Card className="product-card">
                    <Card.Img variant="top" src={product.image} className="product-img" />
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Badge bg="info" className="category-badge">{product.category}</Badge>
                      <Card.Text>${product.price.toFixed(2)}</Card.Text>
                      <Card.Text className="text-muted">{product.description}</Card.Text>
                      <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <Col className="text-center py-5">
                <h3>No products found</h3>
                <p>Try changing your search or filter options</p>
              </Col>
            )}
          </Row>
          
          {filteredProducts.length > productsPerPage && (
            <Pagination className="pagination">
              <Pagination.Prev 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              />
              {renderPaginationItems()}
              <Pagination.Next 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              />
            </Pagination>
          )}
        </>
      )}
    </Container>
  );
};

export default Products;