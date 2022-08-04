import { ThemeProvider } from 'styled-components';
import { ButtonContainer } from './components/Button.styles';
import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ButtonContainer variant='primary'>acessar</ButtonContainer>
      <ButtonContainer variant='secondary'>clique</ButtonContainer>
    </ThemeProvider>
  );
}
