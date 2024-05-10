import React, { useEffect } from "react";
import { FetchAllProduct } from "../features/products/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Flex } from "antd";

const ProductList = () => {
  const dispatch = useDispatch();
  const productData = useSelector(
    (state) => state?.allProduct?.productData || []
  );
  const loading = useSelector((state) => state?.loading);
  const error = useSelector((state) => state?.error);

  useEffect(() => {
    dispatch(FetchAllProduct());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log("productData=>", productData);
  return (
    <div>
      <Flex wrap="wrap" gap={16}>
        {productData?.map((item,index)=>(
        <Card
         key={index}
          // title={item.brand}
          // extra={<a href="#">More</a>}
          style={{
            width: 300,
            textAlign: "left"
          }}
          cover={<img style={{width: '100%', height: '12rem', objectFit: 'cover',borderRadius: 0,padding: '4px 4px'}} src={item.thumbnail} alt={item.title} />}
        >
          <Flex justify="space-between">
            <p>Price : ${item.price}</p>
            <p>Rating : {item.rating}</p>
          </Flex>
          <p style={{fontWeight: 600, fontSize: 18,textTransform: 'uppercase',margin: 0}}>{item.category}</p>
          <p style={{fontWeight: 600, fontSize: 14,textTransform: 'capitalize',margin: 0}}>{item.title}</p>
          <p style={{fontWeight: 400, fontSize: 12,textTransform: 'capitalize',margin: 0,color:'#898383'}}>{item.description}</p>
          <Button block type="primary">Add to Cart</Button>
        </Card>
        ))}
      </Flex>
    </div>
  );
};

export default ProductList;
