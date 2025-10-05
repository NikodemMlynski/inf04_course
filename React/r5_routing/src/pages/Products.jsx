import { Link } from "react-router-dom";

const produkty = [
  { id: 1, nazwa: "Laptop" },
  { id: 2, nazwa: "Telefon" },
  { id: 3, nazwa: "Tablet" },
];

export default function Products() {
  return (
    <div>
      <h2>Nasze produkty</h2>
      <ul className="list-group">
        {produkty.map((p) => (
          <li key={p.id} className="list-group-item d-flex justify-content-between align-items-center">
            {p.nazwa}
            <Link to={`/products/${p.id}`} className="btn btn-sm btn-primary">Szczegóły</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
