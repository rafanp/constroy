import React from "react";

import { Container, Header, Content, Main, Footer } from "./styles";

import Button from "../../components/Button";
import ServiceItem from "../../components/ServiceItem";

import facebookLogo from "../../assets/facebook.svg";
import instagramLogo from "../../assets/instagram.svg";
import mailLogo from "../../assets/email.svg";
import whatsappLogo from "../../assets/whatsapp.svg";
import quote from "../../assets/quote.png";

import incendios from "../../assets/incendios.svg";
import hidraulicos from "../../assets/hidraulicos.svg";
import obras from "../../assets/obras.svg";
import regulamentos from "../../assets/regulamentos.svg";
import estruturas from "../../assets/estruturas.svg";
import eletricos from "../../assets/eletricos.svg";
import endereco from "../../assets/endereco.svg";

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Header>
          <section>
            <h1>CONSTROY</h1>
            <h2>Construtora e Incorporadora</h2>

            <span>Projetos e Execuções Civis</span>

            <Button>CONHEÇA</Button>
          </section>
        </Header>
        <Content>
          <section>
            <div>
              <h1>QUEM SOMOS</h1>
              <h2>Objetivos</h2>

              <h3>
                A CONSTROY Construtora e Incorporadora veio para trazer a vocês
                clientes todos os serviços relacionados a Projetos e Execuções
                Civis
              </h3>

              <p>
                Com um intuito de trazer uma nova perspectiva estrutural e
                arquitetônica em um projeto realizado totalmente dedicado a
                suprir as suas necessidades, assim sendo pensado e elaborado
                pelo engenheiro civil Murillo Coimbra Stanisoski.
              </p>
            </div>
            <div>
              <img
                src={quote}
                alt="Melhor comodidade e segurança em sua obra"
                hidden
              />
            </div>
          </section>
        </Content>
        <Main>
          <section>
            <h1>CONHEÇA MAIS</h1>
            <h2>NOSSOS SERVIÇOS</h2>
            <span>
              Executamos serviços na área da Projetos e Construção Civil
            </span>
            <span>Conheça nosso trabalho</span>
            <div className="itens">
              <div>
                <ServiceItem
                  icon={incendios}
                  title="Execução e Acompanhamento de obras"
                  description="Tincidunt lobortis feugiat vivamus at augue eget.
                Risus feugiat in ante metus dictum. Amet aliquam id diam maecenas."
                />
                <ServiceItem
                  icon={obras}
                  title="Execução e Acompanhamento de obras"
                  description="Tincidunt lobortis feugiat vivamus at augue eget.
                 Risus feugiat in ante metus dictum. Amet aliquam id diam maecenas."
                />
                <ServiceItem
                  icon={regulamentos}
                  title="Execução e Acompanhamento de obras"
                  description="Tincidunt lobortis feugiat vivamus at augue eget.
                Risus feugiat in ante metus dictum. Amet aliquam id diam maecenas."
                />
                <ServiceItem
                  icon={regulamentos}
                  title="Execução e Acompanhamento de obras"
                  description="Tincidunt lobortis feugiat vivamus at augue eget.
                   Risus feugiat in ante metus dictum. Amet aliquam id diam maecenas."
                />
              </div>
              <div>
                <ServiceItem
                  icon={hidraulicos}
                  title="Execução e Acompanhamento de obras"
                  description="Tincidunt lobortis feugiat vivamus at augue eget.
                Risus feugiat in ante metus dictum. Amet aliquam id diam maecenas."
                />
                <ServiceItem
                  icon={eletricos}
                  title="Execução e Acompanhamento de obras"
                  description="Tincidunt lobortis feugiat vivamus at augue eget.
                Risus feugiat in ante metus dictum. Amet aliquam id diam maecenas."
                />
                <ServiceItem
                  icon={estruturas}
                  title="Execução e Acompanhamento de obras"
                  description="Tincidunt lobortis feugiat vivamus at augue eget.
                Risus feugiat in ante metus dictum. Amet aliquam id diam maecenas."
                />
                <a className="whatsUrl" href="https://wa.me/55044999498550">
                  <img src={whatsappLogo} alt="Whatsapp" />
                  Entre em contato
                </a>
              </div>
            </div>
          </section>
        </Main>
        <Footer>
          <section className="main">
            <section className="itens">
              <h1>Mídias sociais</h1>
              <div>
                <a href="https://www.instagram.com/constroy.incorporadora/">
                  <img src={instagramLogo} alt="Instagram" />
                  <p>@constroy.incorporadora</p>
                </a>
              </div>
              <div>
                <a href="https://www.facebook.com/constroy.incorporadora">
                  <img src={facebookLogo} alt="Facebook" />
                  <p>@constroy.incorporadora</p>
                </a>
              </div>
            </section>

            <section className="itens">
              <h1>Fale conosco</h1>
              <div>
                <a href="https://wa.me/55044999498550">
                  <img src={whatsappLogo} alt="Facebook" />
                  <p>+55 (44) 99949-8550</p>
                </a>
              </div>
              <div>
                <a href="https://wa.me/55044999498550">
                  <img src={mailLogo} alt="Facebook" />
                  <p>constroy@gmail.com</p>
                </a>
              </div>
              <div>
                <a href="https://goo.gl/maps/RCN8squGcXboJChM9">
                  <img src={endereco} alt="Facebook" />
                  <p>Av. Maringá n2424, CEP 87111-001, Sarandi-PR</p>
                </a>
              </div>
            </section>
          </section>
        </Footer>
      </Container>
    </>
  );
};
export default Home;
