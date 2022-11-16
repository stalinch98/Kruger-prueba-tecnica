import '../assets/styles/Administrador.css'

const Administrador = () => {

    const data = [
        {id: 1, personaje: "Naruto", anime: "Naruto"},
        {id: 2, personaje: "Goku", anime: "Dragon Ball"},
        {id: 3, personaje: "Kenshin Himura", anime: "Rurouni Kenshin"},
        {id: 4, personaje: "Monkey D. Luffy", anime: "One Piece"},
        {id: 5, personaje: "Edward Elric", anime: "Fullmetal Alchemist: Brotherhood"},
        {id: 6, personaje: "Seto Kaiba", anime: "Yu-Gi-Oh!"},
    ];

    return (
        <section className="administrador">
            <div className="usuarios">
                <button className={"btn btn-primary"}>
                    Registrar Usuario
                </button>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Personaje</th>
                        <th>Anime</th>
                        <th>Acción</th>
                    </tr>
                    </thead>

                    <tbody>
                    {data.map((dato) => (
                        <tr key={dato.id}>
                            <td>{dato.id}</td>
                            <td>{dato.personaje}</td>
                            <td>{dato.anime}</td>
                            <td>
                                <button className={"btn btn-success"}>
                                    Editar
                                </button>
                                {" "}
                                <button className={"btn btn-danger"}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}
export default Administrador;