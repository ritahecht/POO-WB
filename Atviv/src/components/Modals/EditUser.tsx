import { useForm, Controller } from "react-hook-form";
import { TextField, Typography } from "@mui/material"
import './styles/styles.css'
import ButtonComp from "../Button/ButtonComp";
import { UpdateUser } from "../../resources";
import { useContext, useState } from "react";
import { IUpdateUser } from "./types/IUpdateUser";
import { RowsContext } from "../../resources/context/RowsContext";

const EditUser = ({idUser}: IUpdateUser) => {

    const { control, handleSubmit } = useForm({});
    const [dataForm, setDataForm] = useState('')

    const element = useContext(RowsContext)
    const user = element[idUser]
    const endereco = user.endereco

    const onSubmit = (data: any) => setDataForm(data)

    return (
        <>
            {dataForm !== '' &&
                <UpdateUser
                    data={dataForm}
                    idUser={idUser}
                />
            }
            <div className="bodyForm">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Editar Usuário
                    </Typography>
                    <div className="inputsForm">
                        <Controller
                            name="nome"
                            defaultValue={user.nome}
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <TextField required={true} onChange={onChange} value={value} label={"Nome"} />
                            )}
                        />
                    </div>

                    <div className="inputsForm">
                        <Controller
                            name="sobreNome"
                            defaultValue={user.sobreNome}
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <TextField required={true} onChange={onChange} value={value} label={"Sobrenome"} />
                            )}
                        />
                    </div>

                    <div className="inputsForm">
                        <Controller
                            name="email"
                            defaultValue={user.email}
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <TextField required={true} onChange={onChange} value={value} label={"email"} />
                            )}
                        />
                    </div>

                    <div className="inputsForm">
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Endereço
                        </Typography>
                    </div>
                    <div className="inputsForm">
                        <Controller
                            name="estado"
                            defaultValue={endereco.estado}
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <TextField required={true} onChange={onChange} value={value} label={"Estado"} />
                            )}
                        />
                    </div>
                    <div className="inputsForm">
                        <Controller
                            name="cidade"
                            defaultValue={endereco.cidade}
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <TextField required={true} onChange={onChange} value={value} label={"Cidade"} />
                            )}
                        />
                    </div>
                    <div className="inputsForm">
                        <Controller
                            name="bairro"
                            defaultValue={endereco.bairro}
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <TextField required={true} onChange={onChange} value={value} label={"Bairro"} />
                            )}
                        />
                    </div>
                    <div className="inputsForm">
                        <Controller
                            name="rua"
                            defaultValue={endereco.rua}
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <TextField required={true} onChange={onChange} value={value} label={"Rua"} />
                            )}
                        />
                    </div>
                    <div className="inputsForm">
                        <Controller
                            name="numero"
                            defaultValue={endereco.numero}
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <TextField required={true} onChange={onChange} value={value} label={"Número"} />
                            )}
                        />
                    </div>
                    <div className="inputsForm">
                        <Controller
                            name="codigoPostal"
                            defaultValue={endereco.codigoPostal}
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <TextField required={true} onChange={onChange} value={value} label={"CEP"} />
                            )}
                        />
                    </div>
                    <div className="inputsForm">
                        <Controller
                            name="informacoesAdicionais"
                            defaultValue={endereco.informacoesAdicionais}
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <TextField onChange={onChange} value={value} label={"Infor. Adicional"} />
                            )}
                        />
                    </div>


                    <ButtonComp
                        variant='contained'
                        type="submit"
                        title='Atualizar'
                    />
                </form>
            </div>
        </>
    )
}

export default EditUser