import React from 'react';
import { Carousel } from 'antd';
import { Image } from 'antd';
import store1 from '../assets/store1.jpg'
import store from '../assets/store.jpg'

const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const StoreDetails: React.FC = () => (
    <>
        <Carousel autoplay>
            <div>
                <Image
                    width={300}
                    src={store1} />
            </div>
            <div>
                <Image
                    width={300}
                    src={store} />
            </div>
        </Carousel>
        <div><h2>Jequlin Parmacy</h2>
            Address: Block A,sector 16,Noida
            <br />
            Phone No: 95578xxxxx , Email-abc@gmail.com
            <br />
            GSTIN-26MS10LVMAY29
            <br />
            Dl No:20C VAD 94560, 20D VAD 93441 Dated 20 Mar 2000

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque dolore temporibus quae suscipit ratione quos! Obcaecati eaque at veritatis cumque.</p>
        </div>

    </>
);

export default StoreDetails;