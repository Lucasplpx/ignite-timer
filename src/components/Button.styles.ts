import styled from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps {
  variant?: ButtonVariant;
}

export const ButtonContainer = styled.button<ButtonProps>`
  background: ${({ theme }) => theme.primary};

  width: 100px;
  height: 40px;
`;
