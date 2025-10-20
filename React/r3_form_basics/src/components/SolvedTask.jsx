import { useState } from "react";

// stwórz prostą to-do liste, ktora wyświetla zadania 
// o takiej strukturze:
// {title: "tutył zadania", category: "katagoria", priority: "priorytet"}
// aplikacja powinna skladac sie z dwoch czesci:
// 1. Formularz z polami: 
//  - tytuł - input[text]
//  - category - select
//  - priority - input[range] od 0 do 5
// przycisk Dodaj zadanie.
// 2. Lista dodanych już zadań
// Wyświetla listę zadań dodanych w formularzu



// Funkcjonalność:
// po kliknięciu przycisku "Dodaj" sprawdzane jest czy:
// długość tytuły jest wieksza od 2 i cateogory nie jest puste
// jeżeli tak do dodaje zadanie do tablicy zadań, 
// która jest stanem. Nastepnie wartosci formularza sa resetowane

// jeżeli nie zostanie spełniona walidacja to wyswietla sie 
// alert z wiadomoscia o nieprawidlowych danych

// element listy wyglada nastepujaco:
// title, category, priority

// kolejna funkcjonalnoscia jest mozliwosc filtrowania po 
// kategoriach, jezeli wybrana nie jest wybrana zadna 
// kategoria wyswietlaja sie wszystkie, jezeli jakas kategoria
// jest wybrana to filtrujemy zadania

// podajscie do zapisywania danych w formularzu obojetne
// mozna zrobic za pomoca useState, albo formData
// pamietsaj ze zadanie ma sie dodawacpo kliknieciu 
// przycisku dodaj, czyli po wyslaniu formularza

export default function SolvedTask() {
    const [tasks, setTasks] = useState([]);

    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState(0);
    const [category, setCategory] = useState("");

    const [filteredCategory, setFilteredCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.length < 3 || category === "") {
            alert("Wypełnij wszystkie dane");
        } else {
            setTasks(prevState => [
                ...prevState, {
                    title: title,
                    priority: priority,
                    category: category
                }
            ])
            setTitle("")
            setCategory("")
            setPriority(0)
        }
    }
    const getDisplayedTasks = () => {
        if (filteredCategory === "") return tasks;
        else {
            return tasks.filter((task) => task.category === filteredCategory)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Title</label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)}  />
                </p>
                <p>
                    <label>Priority</label>
                    <input type="range" min={1} max={5} value={priority} onChange={(e) => setPriority(e.target.value)}  />
                    <span>{priority}</span>
                </p>
                <p>
                    <label>Category</label>
                    <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Wybierz</option>
                        <option value="praca">Praca</option>
                        <option value="szkoła">Szkoła</option>
                        <option value="zycie">Życia prywatne</option>
                    </select>
                </p>
                <button>Dodaj</button>
            </form>
            <div>
            <div>
                <button onClick={() => setFilteredCategory("")}>wszystkie</button>
                <button onClick={() => setFilteredCategory("praca")}>Praca</button>
                <button onClick={() => setFilteredCategory("szkoła")}>Szkoła</button>
                <button onClick={() => setFilteredCategory("zycie")}>Życie prywatne</button>
            </div>
            <ul>
                {
                    getDisplayedTasks().map((task, idx) => (
                        <li key={idx}>{task.title} - {task.category} - {task.priority}</li>
                    ))
                }
            </ul>
            </div>

        </div>
    )
}