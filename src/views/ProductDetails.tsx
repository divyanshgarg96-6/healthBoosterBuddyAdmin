import React from 'react';
import { Carousel } from 'antd';
import { Image } from 'antd';

const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const ProductDetails: React.FC = () => (
    <>
        <Carousel autoplay>
            <div>
                <Image.PreviewGroup
                    items={[
                        'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
                        'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
                        'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp',
                    ]}
                >
                    <Image
                        width={200}
                        src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                    />
                </Image.PreviewGroup>

            </div>
        </Carousel>
        <div><h2>A.T.U.N. (ALL THINGS UBER NICE) Girls Knee Length Dress<br />-52% ₹479</h2>
            M.R.P.: ₹999
            <h4>size chart</h4>
            5year-12year
            <h3>Product details</h3>
            Material typeCotton
            <br />
            LengthKnee-Length
            <br />
            Occasion typeCasual
            <br />
            Sleeve type3/4 Sleeve
            <br />
            PatternPolka Dots<br />
            StyleA-Line<br />
            Country of OriginIndia<br />
            <h4>About this item</h4>
            <p>Color Map: White; Department Name: Girls; Material Composition: 100% Polyester; Sleeve Type: 3/4 Sleeve
            </p>
        </div>

    </>
);

export default ProductDetails;