import axios from "axios"
import { useEffect } from "react"

const Insert = (props: any) => {

    const { data } = props

    let controller = 1
    useEffect(() => {
        if (controller === 1) {

            let newData = {
                "nome": data.nome,
                "sobreNome": data.sobreNome,
                "email": data.email,
                "endereco": {
                    "estado": data.estado,
                    "cidade": data.cidade,
                    "bairro": data.bairro,
                    "rua": data.rua,
                    "numero": data.numero,
                    "codigoPostal": data.codigoPostal,
                    "informacoesAdicionais": data.informacoesAdicionais
                }
            }

            axios.post(`${process.env.REACT_APP_BASE_URL_API_CLIENTES}/cadastrar`, newData)
                .then(() => {
                    window.location.reload()
                })

                .catch((error) => {
                    console.log("Erro na listagem", error)
                })
        }
        controller++
    })



    return (
        <></>
    )

}

export default Insert