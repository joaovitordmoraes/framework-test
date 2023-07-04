import { FormEvent, useState, useRef } from 'react';
import { Col, Row, Modal } from 'antd';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { v4 as uuid } from 'uuid';

import { Header } from 'components/Header';
import { ProductCard } from 'components/ProductCard';
import { ChartItem } from 'components/ChartItem';
import { Button } from 'components/Button';
import { PDFFile } from 'components/PDFFile';
import { SearchBar } from 'components/SearchBar';
import { Input } from 'components/Input';

import products from './products';

import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';

import * as S from './styles';

type ChartlistProps = {
  id: string;
  image: string;
  name: string;
  price: number;
}

export function Home() {
  const [chartlist, setChartlist] = useState<ChartlistProps[]>([]);
  const [search, setSearch] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef<HTMLFormElement>(null);

  console.log(chartlist)

  const unique_id = uuid();

  function insertNewChartItem (newItem: ChartlistProps) {
    setChartlist([...chartlist, newItem]);
  }

  function deleteChartItem (id: string | number) {

    const ItemsWithoutDeletedOne: ChartlistProps[] = chartlist.filter(item => {
      return item.id !== id;
    });

    setChartlist(ItemsWithoutDeletedOne);
  }

  function handleLogin() {
    if (!isLogged) {
      setIsModalOpen(true);
    } else {
      setIsLogged(false);
    }
  }

  function handleSuccess() {
    setIsLogged(true);
    setIsModalOpen(false);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    handleSuccess();
    
    if (ref?.current) {
      ref.current.reset();
    }
  }

  return (
    <>
      <Modal
        title="Login"
        open={isModalOpen}
        footer={null}
      >
        <S.InputWrapper ref={ref} onSubmit={(event: FormEvent) => handleSubmit(event)}>
          <Input label="E-mail" name="email" type="email" required />
          <Input label="Senha" name="senha" type="password" required />
          <S.ButtonsWrapper>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cancelar
            </Button>
            <Button type="submit">
              Entrar
            </Button>
          </S.ButtonsWrapper>
        </S.InputWrapper>
      </Modal>

      <S.Main>
        <Header onClick={handleLogin} buttonLabel={isLogged ? 'Sair' : 'Entrar'} />
        <S.Container>
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={24} md={24} xl={16}>
              <S.ContentSection>
                <S.SearchSection>
                  <SearchBar
                    onChange={(event) => setSearch(event.target.value.toLowerCase())}
                    placeholder="Digite o produto desejado"
                    type="search"
                  />
                </S.SearchSection>
                <S.ProductSection>
                  {products.filter(item => {
                    return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search);
                  }).map(product => (
                    <ProductCard
                      key={`product-${product.id}`}
                      image={product.image}
                      name={product.name}
                      onClick={() => {
                        insertNewChartItem({
                          id: unique_id,
                          image: product.image,
                          name: product.name,
                          price: product.price
                        });
                      }}
                      price={product.price}
                    />
                  ))}
                </S.ProductSection>
              </S.ContentSection>
            </Col>
            <Col xs={24} sm={24} md={24} xl={8}>
              <S.ChartColumn>
                <S.ChartHeader>
                  <S.ChartTitle><AddShoppingCart size={24} /> Seu Carrinho</S.ChartTitle>
                </S.ChartHeader>
                <S.ChartList>
                  {chartlist?.map(item => (
                    <ChartItem
                      key={`item-${item.id}`}
                      image={item.image}
                      name={item.name}
                      onClick={() => deleteChartItem(item.id)}
                      price={item.price}
                    />
                  ))}
                </S.ChartList>
                {chartlist.length > 0 && (
                  <S.ChartCheckout>
                    {isLogged ? (
                      <PDFDownloadLink document={<PDFFile items={chartlist} />} fileName="receipt.pdf">
                      <Button variant="primary">Finalizar compra</Button>
                    </PDFDownloadLink>
                    ) : (
                      <p>Efetue o login para finalizar a compra</p>
                    )}
                    
                  </S.ChartCheckout>
                )}
              </S.ChartColumn>
            </Col>
          </Row>
        </S.Container>
      </S.Main>
    </>
  );
}