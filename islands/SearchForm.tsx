export default function SearchForm() {
    return (
        <div class="centered_Div">
            <h1 class ="title">Buscador de Personajes de Star Wars!</h1>
            <form action="/personaje" className="flexForm" method="GET">
                <input
                    type="text"
                    name="name"
                    placeholder="Escribe aquí..."
                    required
                />
                <button type="submit">Buscar</button>
            </form>
        </div>
    );
}
