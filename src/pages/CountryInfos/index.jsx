import { useParams } from "react-router-dom"
import { Container, Datas } from './styles'

function CountryInfos({data}) {
    const { id } = useParams()
    console.log("meus dados", data)
    return(
        <Container>
                <h1>{id}</h1>
                <div>
                    <img src={data.flagUrl} alt={id} />
                </div>
                <p>Border Countries:</p>
                <hr />
            {data?.borderCountries?.map((evento, index) => (
                <div key={index}>{evento.commonName}</div>
            ))}
            <p>population Data:</p>
            <hr />
            {data?.populationData?.map((evento, index) => (
                <Datas>
                    <div key={index}>year {evento.year}:</div>
                    <div key={index}> {evento.value} peoples</div>
                </Datas>
            ))}
        </Container>
    )
}

export default CountryInfos