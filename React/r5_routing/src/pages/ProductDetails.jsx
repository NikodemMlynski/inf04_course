import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  return (
    <div>
      <h2>Szczegóły produktu</h2>
      <p>Wyświetlasz produkt o ID: <strong>{id}</strong></p>
    </div>
  );
}
