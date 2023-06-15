import { useForm, Controller } from "react-hook-form";
import { TextField, Typography } from "@mui/material"
import './styles/styles.css'
import ButtonComp from "../Button/ButtonComp";
import { Insert } from "../../resources";
import { useState } from "react";

const InsertUser = () => {

    const { control, handleSubmit } = useForm({});
    const [dataForm, setDataForm] = useState('')



    const onSubmit = (data: any) => setDataForm(data)

    return (
        <>
            {dataForm !== '' &&
                <Insert
                    data={dataForm}
                />
            }
            <div className="bodyForm">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Cadastrar Usuário
                    </Typography>
                    <div className="inputsForm">
                        <Controller
                            name="nome"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <TextField required={true} onChange={onChange} value={value} label={"Nome"} />
                            )}
                        />
                    </div>

                    <div className="inputsForm">
                        <Controller
                            name="sobreNome"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <TextField required={true} onChange={onChange} value={value} label={"Sobrenome"} />
                            )}
                        />
                    </div>

                    <div className="inputsForm">
                        <Controller
                            name="email"
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
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <TextField required={true} onChange={onChange} value={value} label={"Estado"} />
                            )}
                        />
                    </div>
                    <div className="inputsForm">
                        <Controller
                            name="cidade"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <TextField required={true} onChange={onChange} value={value} label={"Cidade"} />
                            )}
                        />
                    </div>
                    <div className="inputsForm">
                        <Controller
                            name="bairro"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <TextField required={true} onChange={onChange} value={value} label={"Bairro"} />
                            )}
                        />
                    </div>
                    <div className="inputsForm">
                        <Controller
                            name="rua"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <TextField required={true} onChange={onChange} value={value} label={"Rua"} />
                            )}
                        />
                    </div>
                    <div className="inputsForm">
                        <Controller
                            name="numero"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <TextField required={true} onChange={onChange} value={value} label={"Número"} />
                            )}
                        />
                    </div>
                    <div className="inputsForm">
                        <Controller
                            name="codigoPostal"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <TextField required={true} onChange={onChange} value={value} label={"CEP"} />
                            )}
                        />
                    </div>
                    <div className="inputsForm">
                        <Controller
                            name="informacoesAdicionais"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <TextField onChange={onChange} value={value} label={"Infor. Adicional"} />
                            )}
                        />
                    </div>


                    <ButtonComp
                        variant='contained'
                        type="submit"
                        title='Cadastrar'
                    />
                </form>
            </div>
        </>
    )
}

export default InsertUser