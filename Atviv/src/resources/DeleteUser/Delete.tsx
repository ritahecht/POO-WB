import axios from "axios"
import { IDelete } from "./IDelete"
import { useEffect } from "react"

const DeleteUserRes = ({ idUser }: IDelete) => {

    console.log(idUser)

    let controller = 1
    useEffect(() => {
        if (controller === 1) {
            
    let newData: any = {
        'id': idUser
    }

    axios.delete(`${process.env.REACT_APP_BASE_URL_API_CLIENTES}/excluir/`, {
        headers: {}, 
        data: newData
    })
        .then(() => {
            window.location.reload()
        })

        .catch((error) => {
            console.log("Erro", error)
        })
    }
    controller++
})

        return (
            <></>
        )
}

export default DeleteUserRes