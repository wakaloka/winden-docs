import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageContent from '@site/src/components/HomepageContent';

export default function Home() {
  return (
    <Layout
      description="Tailwind CSS inside WordPress Page Builders"
    >
      <HomepageContent />
    </Layout>
  );
}