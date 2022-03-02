import { ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Theme } from "../../components/Theme";
import { useForm, FormActions } from "../../contexts/FormContext";
import * as C from "./styles";

export const FormStep1 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        });
    }, []);

    const handleNextStep = () => {
        if (state.name.length > 3) {
            navigate('/step2');
            return;
        }

        alert('Digite um nome válido.');
    };

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: event.target.value
        });
    };

    return (
        <Theme>
            <C.Container>
                <p>Passo 1/3</p>
                <h2>Vamos começar com seu nome</h2>
                <p>Preencha o campo a baixo com seu nome completo.</p>

                <hr />

                <label htmlFor="">
                    Seu nome completo

                    <input 
                        type="text"
                        autoFocus
                        value={state.name}
                        onChange={handleNameChange}
                    />
                </label>

                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
};