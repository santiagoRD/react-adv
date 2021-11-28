import React from 'react';
import { lazy } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  Component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  children?: Route[];
}

export const routes: Route[] = [
  {
    path: '/lazyload',
    Component: lazy(() => import(/* webpackChunkName: "lazyLayout" */ '../01-lazyload/layout/LazyLayout')),
    name: 'lazyloading Nested',
  },
  {
    path: '/no-lazy',
    Component: NoLazy,
    name: 'No Lazy Loading',
  },
];
