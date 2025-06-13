import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Image, Modal } from "react-bootstrap";
import products from "../../Data/Products";
import styles from "./ProductDetail.module.css";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  if (!product) return <h2 className={styles.notFound}>Producto no encontrado</h2>;

  const handleShow = (img) => {
    setSelectedImage(img);
    setShow(true);
  };

  return (
    <Container className={styles.productContainer}>
      <h2 className={styles.productTitle}>{product.name}</h2>

      <Row className="align-items-center mt-4">
        <Col md={6}>
          <h5 className={styles.label}>Producto</h5>
          <p className={styles.productName}>{product.name}</p>
        </Col>
        <Col md={6} className="text-center">
          <Image
            src={product.img}
            alt={product.name}
            fluid
            onClick={() => handleShow(product.img)}
            className={styles.mainImage}
          />
        </Col>
      </Row>

      <h4 className={styles.galleryTitle}>Galería de Imágenes</h4>
      <Row className="mt-3 justify-content-center">
        {product.gallery.map((img, index) => (
          <Col key={index} xs={6} sm={4} md={2} className="text-center mb-3">
            <Image
              src={img}
              alt={product.name}
              fluid
              thumbnail
              onClick={() => handleShow(img)}
              className={styles.galleryImage}
            />
          </Col>
        ))}
      </Row>

      <div className="text-center mt-4">
        <Link to="/" className={styles.backButton}>Volver</Link>
      </div>

      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Body className="text-center">
          <Image src={selectedImage} alt="Imagen ampliada" fluid />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default ProductDetail;
