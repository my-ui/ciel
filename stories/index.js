import React from 'react';
import { storiesOf } from '@storybook/react';
// import { Button } from '@storybook/react/demo'; // 这里引入你想展示的组件
import Button from '../components/button/index';

storiesOf('Button', module)
  .add('with text', () => (  // 一个 add 表示添加一个 story
    <div>
      <Button text={'ciel'}></Button>
      <Button text={'ciel1'}></Button>
      <Button text={'ciel2'}></Button>
      <Button text={'ciel3'}></Button>
      <Button text={'ciel4'}></Button>
      <Button text={'ciel5'}></Button>
    </div>
  ))
  .add('with some emoji', () => (  // 这里是另一个 story
    <span role="img" aria-label="so cool">😀 😎 👍 💯</span>
  ));