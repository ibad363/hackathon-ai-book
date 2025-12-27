import React from 'react';
import Layout from '@theme-original/Layout';
import type {Props} from '@docusaurus/types';
import FloatingChatButton from './FloatingChatButton';

export default function LayoutWrapper(props: Props): JSX.Element {
  return (
    <>
      <Layout {...props}>
        {props.children}
      </Layout>
      <FloatingChatButton />
    </>
  );
}
