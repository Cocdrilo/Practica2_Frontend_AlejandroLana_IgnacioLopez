import { PageProps } from "$fresh/server.ts";
import axios from "axios";

export default async function PersonajePage(req: PageProps) {
    const url = new URL(req.url);
    const name = url.searchParams.get("name");

    if (!name) {
        return (
            <div class="personaje-container">
                <h1>Error</h1>
                <p>No se especificó un personaje.</p>
            </div>
        );
    }

    try {
        const response = await axios.get(`https://swapi.dev/api/people/?search=${name}&format=json`);
        const data = response.data;
        const character = data.results.length > 0 ? data.results[0] : null;

        return (
            <div class="personaje-container">
                {character ? (
                    <div class="personaje-card">
                        <h2 class="personaje-name">{character.name}</h2>
                        <p class="personaje-info">🌍 Altura: {character.height} cm</p>
                        <p class="personaje-info">⚖️ Peso: {character.mass} kg</p>
                        <p class="personaje-info">💇‍♂️ Color de cabello: {character.hair_color}</p>
                        <p class="personaje-info">🎨 Color de piel: {character.skin_color}</p>
                        <p class="personaje-info">🚻 Género: {character.gender}</p>
                        <p class="personaje-info">🎂 Año de nacimiento: {character.birth_year}</p>

                        <h3>🎬 Películas:</h3>
                        <ul class="films-list">
                            {character.films.map((film: string, index: number) => (
                                <li key={index}>
                                    <a href={film} target="_blank">{film}</a>
                                </li>
                            ))}
                        </ul>

                        <h3>🦸‍♂️ Especies:</h3>
                        <ul class="films-list">
                            {character.species.map((species: string, index: number) => (
                                <li key={index}>
                                    <a href={species} target="_blank">{species}</a>
                                </li>
                            ))}
                        </ul>

                        <h3>🚗 Vehículos:</h3>
                        <ul class="films-list">
                            {character.vehicles.map((vehicle: string, index: number) => (
                                <li key={index}>
                                    <a href={vehicle} target="_blank">{vehicle}</a>
                                </li>
                            ))}
                        </ul>

                        <h3>🚀 Naves Estelares:</h3>
                        <ul class="films-list">
                            {character.starships.map((starship: string, index: number) => (
                                <li key={index}>
                                    <a href={starship} target="_blank">{starship}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p>No se encontró el personaje.</p>
                )}
            </div>
        );
    } catch (error) {
        return (
            <div class="personaje-container">
                <h1>Error</h1>
                <p>No se pudo obtener la información del personaje.</p>
            </div>
        );
    }
}
