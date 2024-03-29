import {render, screen} from '@testing-library/react';
import Ideas from '../pages/Ideas';
import { BrowserRouter } from 'react-router-dom';

describe('Testes da tela Ideas', () => {

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Ideas/>
      </BrowserRouter>
    );
  });

  it('Existe card em Ideas?', () => {
    expect(screen.getByTestId('mycard')).toBeInTheDocument();
  });

  it('Existe link Novo em Ideas?', () => {
    expect(screen.getByTestId('mylink')).toBeInTheDocument();
  });

  it('Existe table em Ideas?', () => {
    expect(screen.getByTestId('mytable')).toBeInTheDocument();
  });

  it('Existe botão editar em Ideas?', () => {
    expect(screen.getByTestId('mybtn1')).toBeInTheDocument();
  });

  it('Existe botão excluir em Ideas?', () => {
    expect(screen.getByTestId('mybtn2')).toBeInTheDocument();
  });

});