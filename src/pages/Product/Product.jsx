import styled from 'styled-components';
import useGetProduct from 'hooks/useGetProduct';
import ProductDetail from 'components/ProductDetail';
import Skeleton from 'components/Skeleton';
import ImgWrapper from 'components/ImgWrapper';
import comma from 'utils/comma';
import errorApiImg from 'assets/png/errorApiImg.png';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const Product = () => {
  const { getProduct, product, isProductLoading, isProductError } =
    useGetProduct();

  const { id } = useParams();
  useEffect(() => {
    getProduct(id);
  }, []);

  return (
    <Styled.Wrapper>
      {isProductLoading && <Skeleton sizeType="large" />}
      {isProductError && <ImgWrapper src={errorApiImg} alt="API 에러 이미지" />}
      {!isProductLoading && product && (
        <ProductDetail
          imgUrl={product.imgUrl}
          name={product.name}
          price={comma(product.price)}
          id={product.id}
        />
      )}
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 50px;
  `,
};

export default Product;
