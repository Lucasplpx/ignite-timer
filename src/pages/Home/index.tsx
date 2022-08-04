import { Play } from 'phosphor-react';
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountDownButton,
  TaskInput,
} from './styles';

export const Home = () => {
  return (
    <HomeContainer>
      <form action=''>
        <FormContainer>
          <label htmlFor='task'>Vou trabalhar em</label>
          <TaskInput id='task' placeholder='Dê um nome para o seu projeto' />

          <label htmlFor='minutesAmount'>durante</label>
          <MinutesAmountInput
            id='minutesAmount'
            type='number'
            placeholder='00'
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountDownButton disabled type='submit'>
          <Play size={24} />
          Começar
        </StartCountDownButton>
      </form>
    </HomeContainer>
  );
};
