import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Materials from '../components/materials';
import getData from "../utils/getData";

export default function Index() {
  const [materials, setMaterials] = useState([]);

  // Fetch seed data from backend
  useEffect(() => {
    (async function () {
      const materials = await getData("materials");

      if (materials) {
        setMaterials(materials);
      }
    })();
  }, []);

  return (
    <Container maxWidth="md">
      <Materials title="Materials" materials={materials} />
    </Container>
  );
}
