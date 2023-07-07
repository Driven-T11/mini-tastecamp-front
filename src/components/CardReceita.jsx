import styled from "styled-components"

export default function CardReceita({ receita }) {
    const { titulo, preparo, ingredientes } = receita

    return (
        <Card>
            <p><b>Título: </b>{titulo}</p>
            <p><b>Ingredientes: </b>{ingredientes}</p>
            <p><b>Preparo: </b>{preparo}</p>
        </Card>
    )
}

const Card = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    padding: 20px;
    margin: 20px;
    width: 300px;
`