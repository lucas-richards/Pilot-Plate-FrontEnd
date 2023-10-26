import { useParams } from 'react-router-dom'

export default function DetailPage({ data }) {
    const { dataId } = useParams()
    console.log('datadetailpage', data)
    return (
        <>
            {
                data
                    .filter((business) => business.id === dataId)
                    .map((business, idx) => {
                        <div>
                            <h1>{business.name}</h1>
                        </div>
                    })
            }
        </>
    )
}