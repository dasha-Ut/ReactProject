import { Fragment } from 'react';

function Fruits(): JSX.Element {
  return (
    <Fragment>
      <li>Apple</li>
      <li>Apple</li>
      <li>Apple</li>
      <li>Apple</li>
    </Fragment>
  );
}

function Vegetables(): JSX.Element {
  return (
    <>
      <li>tomato 🍅</li>
      <li>eggplant 🍆</li>
      <li>avocado 🥑</li>
      <li>cucumber 🥒</li>
      <li>pepper 🌶</li>
    </>
  );
}

export function HelloWorld(): JSX.Element {
  return (
    <>
      <div>Hello, world!dsfsdfsdf 👽</div>
      sdfsdf
      <ul>
        <ul>
          <Fruits />
          <Vegetables />
        </ul>
      </ul>
    </>
  );
}

export const AlsoHelloWorld = (): JSX.Element => {
  return <div>Also hello, world! </div>;
};
