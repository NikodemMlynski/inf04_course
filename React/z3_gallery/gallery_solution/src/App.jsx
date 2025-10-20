import { useState } from "react"
import obraz1 from "./assets/obraz1.jpg"
import obraz2 from "./assets/obraz2.jpg"
import obraz3 from "./assets/obraz3.jpg"
import obraz4 from "./assets/obraz4.jpg"
import obraz5 from "./assets/obraz5.jpg"
import obraz6 from "./assets/obraz6.jpg"
import obraz7 from "./assets/obraz7.jpg"
import obraz8 from "./assets/obraz8.jpg"
import obraz9 from "./assets/obraz9.jpg"
import obraz10 from "./assets/obraz10.jpg"
import obraz11 from "./assets/obraz11.jpg"
import obraz12 from "./assets/obraz12.jpg"

// Tablica zdjęć – spełnia wymaganie egzaminu: dane z pliku dane.txt w postaci tablicy obiektów
const defaultImages = [
    {id: 0, alt: "Mak", filename: obraz1, category:1, downloads: 35},
    {id: 1, alt:"Bukiet", filename: obraz2, category: 1, downloads: 43},
    {id: 2, alt:"Dalmatyńczyk", filename: obraz3, category:2, downloads: 2},
    {id: 3, alt:"Świnka morska", filename: obraz4, category:2, downloads: 53},
    {id: 4, alt:"Rotwailer", filename: obraz5, category:2, downloads: 43},
    {id: 5, alt:"Audi", filename: obraz6, category:3, downloads: 11},
    {id: 6, alt:"kotki", filename: obraz7, category:2, downloads: 22},
    {id: 7, alt:"Róża", filename: obraz8, category:1, downloads: 33},
    {id: 8, alt:"Świnka morska", filename: obraz9, category:2, downloads: 123},
    {id: 9, alt:"Foksterier", filename: obraz10, category:2, downloads: 22},
    {id: 10, alt:"Szczeniak", filename: obraz11, category:2, downloads: 12},
    {id: 11, alt:"Garbus", filename: obraz12, category:3, downloads: 321}
]

function App() {
  // Stan pól switch – wszystkie włączone na start, spełnia wymaganie egzaminu
  const [checkedFields, setCheckedFields] = useState({1: true, 2: true, 3: true})
  
  // Stan zdjęć, potrzebny do dynamicznego zwiększania liczby pobrań
  const [images, setImages] = useState([...defaultImages]);

  // Funkcja do przełączania kategorii
  const handleCategoryClick = (category) => {
    setCheckedFields(prev => ({...prev, [category]: !prev[category]}))
  }

  // Funkcja zwiększająca liczbę pobrań dla konkretnego zdjęcia
  const onDownload = (id) => {
    // iterujemy po tablicy i za pomocą ternary operatora zwracamy:
    // 1. zmodyfikowany obiekt jeżeli id jest takie samo
    // 2. niezmieniony obiekt jeżeli jest różne
    setImages(prev => prev.map(img => img.id === id ? {...img, downloads: img.downloads + 1} : img))
  }
  
  // Filtruje zdjęcia w zależności od włączonych kategorii – spełnia wymaganie egzaminu
  const displayedImages = images.filter(img => checkedFields[img.category])

  return (
   <div style={{padding: "20px"}}>
    {/* Nagłówek H1 zgodnie z wymaganiami */}
    <h1>Kategorie zdjęć</h1>

    {/* Sekcja switch – pola checkbox w linii */}
    <div className="form-check form-switch form-check-inline">
      <input className="form-check-input" type="checkbox" id="flowers" checked={checkedFields[1]} onChange={() => handleCategoryClick(1)}/>
      <label className="form-check-label" htmlFor="flowers">Kwiaty</label>
    </div>
    <div className="form-check form-switch form-check-inline">
      <input className="form-check-input" type="checkbox" id="animals" checked={checkedFields[2]} onChange={() => handleCategoryClick(2)}/>
      <label className="form-check-label" htmlFor="animals">Zwierzęta</label>
    </div>
    <div className="form-check form-switch form-check-inline">
      <input className="form-check-input" type="checkbox" id="cars" checked={checkedFields[3]} onChange={() => handleCategoryClick(3)}/>
      <label className="form-check-label" htmlFor="cars">Samochody</label>
    </div>

    {/* Bloki zdjęć */}
    <div style={{display: "flex", flexWrap: "wrap", marginTop: "20px"}}>
        {displayedImages.map(img => (
          <ImageItem key={img.id} {...img} onDownload={onDownload} />
        ))}
    </div>
   </div>
  )
}

// Komponent pojedynczego zdjęcia
const ImageItem = ({filename, alt, id, downloads, onDownload}) => {
  return (
    <div style={{margin: "5px"}}>
        <img style={{borderRadius: "8px", objectFit: "cover"}} src={filename} alt={alt} />      {/* Wyświetlenie zdjęcia z zaokrąglonymi rogami */}
        <h4>Pobrań {downloads}</h4>     {/* Liczba pobrań */}
        <button className="btn btn-success" onClick={() => onDownload(id)}>Pobierz</button>   {/* Przycisk pobierz, zwiększa liczbę pobrań */}
    </div>
  )
}

export default App
