import styled from 'styled-components';
import { useEffect, useState } from 'react';
import useGetCartList from 'hooks/useGetCartList';
import usePost from 'hooks/shared/usePost';
import TitleHeader from 'components/TitleHeader';
import CartTable from 'components/CartTable';
import CartOrder from 'components/CartOrder';
import ImgWrapper from 'components/ImgWrapper';
import errorApiImg from 'assets/png/errorApiImg.png';
import spinner from 'assets/svg/spinner.svg';
import useGetOrderList from 'hooks/useGetOrderList';
import { API_PATH } from 'constants/path';

const Cart = () => {
  const [checkedIdList, setCheckedIdList] = useState([]);
  const { cartList, isCartListLoading, isCartListError } = useGetCartList();

  const checkedItemList = cartList.filter(
    (item) =>
      checkedIdList.findIndex((checkedId) => item.id === checkedId) !== -1,
  );

  const totalPrice = checkedItemList.reduce((acc, cur) => {
    return acc + Number(cur.price * cur.cartQuantity);
  }, 0);

  const { callPostApi: postOrderList } = usePost(
    API_PATH.ORDER_LIST,
    checkedItemList,
  );
  const { getOrderList } = useGetOrderList();

  useEffect(() => {
    const initialIdList = cartList.map((item) => item.id);
    setCheckedIdList(initialIdList);
  }, [cartList]);

  const handleClickOrder = async () => {
    await postOrderList();
    getOrderList();
  };

  return (
    <>
      <Styled.CartSection>
        <TitleHeader>장바구니</TitleHeader>
        <Styled.FlexBetweenBox>
          <CartTable
            cartList={cartList}
            checkedIdList={checkedIdList}
            setCheckedIdList={setCheckedIdList}
          />
          <CartOrder
            totalPrice={totalPrice}
            totalCount={checkedIdList.length}
            handleClickOrder={handleClickOrder}
          />
        </Styled.FlexBetweenBox>
      </Styled.CartSection>
      {isCartListLoading && (
        <ImgWrapper src={spinner} isMini={true} alt="로딩 스피너" />
      )}
      {isCartListError && (
        <ImgWrapper src={errorApiImg} alt="API 에러 이미지" />
      )}
    </>
  );
};

const Styled = {
  CartSection: styled.section`
    padding: 24px 100px;
  `,
  FlexBetweenBox: styled.div`
    display: flex;
    justify-content: space-between;
  `,
};

export default Cart;
