function RespositoryItem(props) {
    return (
        <li>
            <strong>{props.repository.name}</strong>
            <p>{props.repository.description}</p>
            <a href={props.repository.url}>Acessar Repositório</a>
        </li>
    );
}

export default RespositoryItem;