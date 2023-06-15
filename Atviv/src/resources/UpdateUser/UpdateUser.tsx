import axios from "axios"
import { useContext, useEffect } from "react"
import { RowsContext } from "../context/RowsContext"

const UpdateUser = (props: any) => {

    const { data, idUser } = props

    const element = useContext(RowsContext)
    const user = element[idUser]


    let controller = 1
    useEffect(() => {
        if (controller === 1) {

            let newData = {
                "id": user.id,
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

            axios.put(`${process.env.REACT_APP_BASE_URL_API_CLIENTES}/atualizar/}`, {
                headers: {},
                data: newData
            })
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

export default UpdateUser