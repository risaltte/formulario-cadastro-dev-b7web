import { ChangeEvent, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Theme } from "../../components/Theme";
import { useForm, FormActions } from "../../contexts/FormContext";
import * as C from "./styles";

export const FormStep3 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === '') {
            navigate('/');   
            return; 
        }

        dispatch({
            type: FormActions.setCurrentStep,
            payload: 3
        });
    }, []);

    const handleNextStep = () => {
        if (state.name.length < 3) {
            navigate('/');
            return;
        }

        if (state.email === '') {
            alert("Informe o seu e-mail.");
            return;
        }

        if (state.github === '') {
            alert("Informe o seu Github");
            return;
        }

        alert(`${state.name}, seus dados foram cadastrados com sucesso!`);
    };

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: event.target.value
        });
    };

    const handleGithubChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: event.target.value
        });
    };

    return (
        <Theme>
            <C.Container>
                <p>Passo 3/3</p>
                <h2>Legal {state.name}, onde te encontramos?</h2>
                <p>Preencha o seus contatos.</p>

                <hr />

                <label htmlFor="">
                    Qual o seu e-mail?

                    <input 
                        type="email"
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>

                <label htmlFor="">
                    Qual o seu Github?

                    <input 
                        type="url"
                        value={state.github}
                        onChange={handleGithubChange}
                    />
                </label>

                <Link to="/step2" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Finalizar cadastro</button>
            </C.Container>
        </Theme>
    );
};