import { useState, useEffect } from 'react';
import RespositoryItem from "./RepositoryItem";

import '../styles/repositories.scss'

function RespositoryList() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/danielarrais/repos')
            .then(response => response.json())
            .then(data => {
                setRepositories(data);
            })
    }, [repositories])

    const repositoriesItens = repositories.map(repository => {
        return <RespositoryItem key={repository.name} repository={repository} />;
    })

    onclick = (event) => {
        console.log(event.target);
    }

    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>
            <ul>
                {repositoriesItens}
            </ul>
            <button onClick={}></button>
        </section>
    );
}

export default RespositoryList;