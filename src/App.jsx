import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Button } from 'react-vant';
import { List, Cell, Divider } from 'react-vant';
import styled from 'styled-components'

const Wrap = styled.span`
  display: flex;
  /* width:100%; */
  font-size: 12px;
  .name{
    width:25%;
    white-space: nowrap; /* 禁止文本换行 */
    overflow: hidden; /* 隐藏超出容器的内容 */
    text-overflow: ellipsis; /* 在文本溢出时显示省略号 */
    /* border-right:1px solid black; */
    /* background: red; */
  }
  .version{
    width: 8%;
    opacity:0.5;
    /* background: #4a4141; */
    
  }
  .color{
    width: 8%;
  }
  .capacity{
    width: 10%;
    white-space: nowrap; /* 禁止文本换行 */
    overflow: hidden; /* 隐藏超出容器的内容 */
    text-overflow: ellipsis; /* 在文本溢出时显示省略号 */
  }
  .price{
    width:13%;
    font-weight: bold;
    opacity:0.8;
    white-space: nowrap; /* 禁止文本换行 */
    overflow: hidden; /* 隐藏超出容器的内容 */
    text-overflow: ellipsis; /* 在文本溢出时显示省略号 */
  }
  .describe{
    opacity:0.5;
    width:41%;
    white-space: nowrap; /* 禁止文本换行 */
    overflow: hidden; /* 隐藏超出容器的内容 */
    text-overflow: ellipsis; /* 在文本溢出时显示省略号 */
  }
`
// const 

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <List>
        <Cell><Wrap>
          <span className='name'>苹果15ProMax</span>
          <span className='version'>国行</span>
          <span className='capacity'>512G</span>
          <span className='color'>黑色</span>
          <span className='price'>{`￥`}9100</span>
          <span className='describe'>全套原装靓机，保修至9月26日</span>
        </Wrap></Cell>
        <Cell><Wrap>
          <span className='name'>苹果15Pro</span>
          <span className='version'>国行</span>
          <span className='capacity'>256G</span>
          <span className='color'>原色</span>
          <span className='price'>{`￥`}7200</span>
          <span className='describe'>全套原装靓机，屏小花，保修至3月18日</span>
        </Wrap></Cell>
        <Cell><Wrap>
          <span className='name'>苹果15</span>
          <span className='version'>国行</span>
          <span className='capacity'>256G</span>
          <span className='color'>蓝色</span>
          <span className='price'>{`￥`}5150</span>
          <span className='describe'>在保，充电88次</span>
        </Wrap></Cell>
        <Cell><Wrap>
          <span className='name'>苹果15</span>
          <span className='version'>国行</span>
          <span className='capacity'>256G</span>
          <span className='color'>蓝色</span>
          <span className='price'>{`￥`}5100</span>
          <span className='describe'>原装靓机，充电64次，有盒</span>
        </Wrap></Cell>
        <Cell><Wrap>
          <span className='name'>苹果14ProMax</span>
          <span className='version'>国行</span>
          <span className='capacity'>256G</span>
          <span className='color'>黑色</span>
          <span className='price'>{`￥`}6580</span>
          <span className='describe'>AC+延保到25年3月18日，原装98新</span>
        </Wrap></Cell>
        <Cell><Wrap>
          <span className='name'>苹果14Pro</span>
          <span className='version'>国行</span>
          <span className='capacity'>256G</span>
          <span className='color'>紫色</span>
          <span className='price'>{`￥`}5780</span>
          <span className='describe'>原装靓机，电池91%</span>
        </Wrap></Cell>
        <Cell><Wrap>
          <span className='name'>苹果14Pro</span>
          <span className='version'>国行</span>
          <span className='capacity'>256G</span>
          <span className='color'>白色</span>
          <span className='price'>{`￥`}5650</span>
          <span className='describe'>原装靓机，电池87%</span>
        </Wrap></Cell>
        <Cell><Wrap>
          <span className='name'>苹果14</span>
          <span className='version'>国行</span>
          <span className='capacity'>256G</span>
          <span className='color'>紫色</span>
          <span className='price'>{`￥`}4050</span>
          <span className='describe'>在保到8月，电池96%</span>
        </Wrap></Cell>
        <Cell><Wrap>
          <span className='name'>苹果13ProMax</span>
          <span className='version'>国行</span>
          <span className='capacity'>256G</span>
          <span className='color'>白色</span>
          <span className='price'>{`￥`}4950</span>
          <span className='describe'>原装靓机，电池89%</span>
        </Wrap></Cell>
        <Cell><Wrap>
          <span className='name'>苹果13Pro</span>
          <span className='version'>国行</span>
          <span className='capacity'>256G</span>
          <span className='color'>蓝色</span>
          <span className='price'>{`￥`}3900</span>
          <span className='describe'>原装小花机，电池84%</span>
        </Wrap></Cell>
        <Cell><Wrap>
          <span className='name'>苹果13</span>
          <span className='version'>国行</span>
          <span className='capacity'>128G</span>
          <span className='color'>白色</span>
          <span className='price'>{`￥`}2880</span>
          <span className='describe'>原装靓机，电池87%</span>
        </Wrap></Cell>
        <Cell><Wrap>
          <span className='name'>苹果12ProMax</span>
          <span className='version'>国行</span>
          <span className='capacity'>256G</span>
          <span className='color'>蓝色</span>
          <span className='price'>{`￥`}3600</span>
          <span className='describe'>电池100%，换电芯</span>
        </Wrap></Cell>
        <Cell><Wrap>
          <span className='name'>苹果12Pro</span>
          <span className='version'>国行</span>
          <span className='capacity'>256G</span>
          <span className='color'>蓝色</span>
          <span className='price'>{`￥`}3050</span>
          <span className='describe'>原装靓机，电池84%</span>
        </Wrap></Cell>
        <Cell><Wrap>
          <span className='name'>苹果12</span>
          <span className='version'>国行</span>
          <span className='capacity'>256G</span>
          <span className='color'>白色</span>
          <span className='price'>{`￥`}2550</span>
          <span className='describe'>95新，换电芯</span>
        </Wrap></Cell>
      </List>
    </>
  )
}

export default App
