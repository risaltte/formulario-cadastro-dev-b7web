import { ChangeEvent, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { SelectOption } from "../../components/SelectOption";
import { Theme } from "../../components/Theme";
import { useForm, FormActions } from "../../contexts/FormContext";
import { FormStep1 } from "../FormStep1";
import * as C from "./styles";

export const FormStep2 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === '') {
            navigate('/');   
            return; 
        }
        
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 2
        });
    }, []);

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        });
    };

    const handleNextStep = () => {
        if (state.name.length > 3) {
            navigate('/step3');
            return;
        }

        alert('Digite um nome válido.');
    };

    return (
        <Theme>
            <C.Container>
                <p>Passo 2/3</p>
                <h2>{state.name}, o quemelhor descreve você?</h2>
                <p>Escolha a opção que melhor condiz com o seu estado atual, profissionalmente.</p>

                <hr />

                <SelectOption 
                    title='Sou iniciante'
                    description='Comecei a programar a menos de 2 anos'
                    icon='🥳'
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                />
                
                <SelectOption 
                    title='Sou programador'
                    description='Já programo a 2 anos ou mais'
                    icon='😎'
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />
                
                <Link to="/" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
};