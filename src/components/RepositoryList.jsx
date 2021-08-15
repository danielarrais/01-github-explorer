import { useState, useEffect } from 'react';
import RespositoryItem from "./RepositoryItem";

import '../styles/repositories.scss'

// 

const repositories = [
    {
        name: "nlw-together-letmeask",
        description: "NLW Edição 06",
        url: "https://github.com/danielarrais/nlw-together-letmeask"
    },
    {
        name: "react-main-concepts",
        description: "Estudo dos conceitos básicos de React",
        url: "https://github.com/danielarrais/react-main-concepts"
    },
    {
        name: "clean-code-branas-io",
        description: "Curso de Clean Code e Clean Arquitecture",
        url: "https://github.com/danielarrais/clean-code-branas-io"
    },
]

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