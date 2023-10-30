import Logo from '../assets/fintech.svg';
import ImgConfiguracoes from '../assets/icons/configuracoes.svg';
import ImgContato from '../assets/icons/contato.svg';
import ImgResumo from '../assets/icons/resumo.svg';
import ImgSair from '../assets/icons/sair.svg';
import ImgVendas from '../assets/icons/vendas.svg';
import ImgWebhooks from '../assets/icons/webhooks.svg';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  padding: var(--gap);
  border-radius: 1.25rem;
  background-color: var(--color-3);

  ul {
    font-size: 1.125rem; // 18px
    color: var(--color-1);
    display: grid;
    gap: var(--gap);
  }

  li {
    display: flex;
    gap: var(--gap-s);
    align-items: center;
  }

  li img {
    background-color: var(--color-5);
    padding: 5px;
    border-radius: 50%;
  }

  li:hover img {
    background-color: var(--color-3);
  }

  a {
    text-decoration: none;
    color: var(--color-1);
    cursor: pointer;
  }
`;

const SideNav = () => {
  return (
    <NavContainer>
      <div className='mb'>
        <img src={Logo} alt='Logo' />
      </div>
      <ul>
        <NavLink to='/'>
          <li>
            <img src={ImgResumo} alt='' />
            Resumo
          </li>
        </NavLink>
        <NavLink to='/vendas'>
          <li>
            <img src={ImgVendas} alt='' />
            Vendas
          </li>
        </NavLink>
        <li>
          <img src={ImgWebhooks} alt='' />
          WebHooks
        </li>
        <li>
          <img src={ImgConfiguracoes} alt='' />
          Configurações
        </li>
        <li>
          <img src={ImgContato} alt='' />
          Contato
        </li>
        <li>
          <img src={ImgSair} alt='' />
          Sair
        </li>
      </ul>
    </NavContainer>
  );
};

export default SideNav;
