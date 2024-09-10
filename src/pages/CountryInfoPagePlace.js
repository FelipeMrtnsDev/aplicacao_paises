import { useParams } from "react-router-dom"

function CountryInfos({data}) {
    const { id } = useParams()
    console.log("mues dados", data)
    return(
        <div>
                <h1>{id}</h1>
                <div>
                    <img src={data.flagUrl} alt={id} />
                </div>
            {data?.borderCountries?.map((evento, index) => (
                <div key={index}>{evento.commonName}</div>
            ))}
        </div>
    )
}

export default CountryInfos