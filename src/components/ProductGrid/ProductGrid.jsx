import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import products from "../../Data/Products";
import styles from "./ProductGrid.module.css"; // Importamos CSS personalizado

const ProductGrid = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className={styles.sectionProductos}>
      <h2 className={styles.titulo}>Algunos de nuestros productos</h2>
      <Container>
        <Row className="justify-content-center">
          {products.map((product) => (
            <Col
              key={product.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={styles.colItem}
            >
              <Card
                className={`${styles.cardProducto} ${
                  hovered === product.id ? styles.hovered : ""
                }`}
                onMouseEnter={() => setHovered(product.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <Card.Img
                  variant="top"
                  src={product.img}
                  alt={product.name}
                  className={styles.imgProducto}
                />
                <Card.Body className="text-center">
                  <Card.Title className={styles.tituloProducto}>
                    {product.name}
                  </Card.Title>
                  <Link to={`/product/${product.id}`}>
                    <Button
                      variant="dark"
                      className={styles.btnConsultar}
                    >
                      CONSULTAR
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProductGrid;
