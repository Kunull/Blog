import React from 'react';
import Layout from '@theme-original/Layout';
import Head from '@docusaurus/Head';
import { useDocusaurusContext } from '@docusaurus/core';

export default function LayoutWrapper(props) {
  const {
    siteConfig: { title: siteTitle },
  } = useDocusaurusContext();

  const pageTitle = props.title;

  let fullTitle = siteTitle;
  if (pageTitle && pageTitle !== siteTitle) {
    fullTitle = `${pageTitle} // ${siteTitle}`;
  }

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
      </Head>
      <Layout {...props} />
    </>
  );
}
