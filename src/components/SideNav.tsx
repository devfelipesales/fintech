import React from 'react';
import Logo from '../assets/fintech.svg';
import ImgConfiguracoes from '../assets/icons/configuracoes.svg';
import ImgContato from '../assets/icons/contato.svg';
import ImgResumo from '../assets/icons/resumo.svg';
import ImgSair from '../assets/icons/sair.svg';
import ImgVendas from '../assets/icons/vendas.svg';
import ImgWebhooks from '../assets/icons/webhooks.svg';
import { NavLink } from 'react-router-dom';

const SideNav = () => {
  return (
    <nav className='box bg-3'>
      <div className='mb'>
        <img src={Logo} alt='Logo' />
        {/* <NavLink to='/'>Resumo</NavLink> */}
      </div>
      <ul className='container gap-s'>
        <li>
          <img src={ImgResumo} alt='' />
          Resumo
        </li>
        <li>
          <img src={ImgVendas} alt='' />
          Vendas
        </li>
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
    </nav>
  );
};

export default SideNav;
