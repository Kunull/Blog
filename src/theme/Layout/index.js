import React from 'react';
import Layout from '@theme-original/Layout';
import Head from '@docusaurus/Head';
import { useTitleFormatter } from '@docusaurus/theme-common/internal';

export default function LayoutWrapper(props) {
  const formatTitle = useTitleFormatter(' // ');
  const title = formatTitle(props.title);

  return (
    <>
      {title && (
        <Head>
          <title>{title}</title>
        </Head>
      )}
      <Layout {...props} />
    </>
  );
}
