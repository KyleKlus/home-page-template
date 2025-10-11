/** @format */
import Content from '@/lib/container/Content';
import { Metadata } from 'next';
import { defaultSiteConfig } from './defaultSiteConfig';

export const metadata: Metadata = { ...defaultSiteConfig.metadata.en };

function Page() {
  return (
    <Content className={['applyHeaderOffset', 'dotted'].join(' ')} style={{ justifyContent: 'center' }}>
      <div style={{ maxWidth: 'clamp(200px, 80%, 600px)', padding: '50px', minHeight: '300px' }}>
        <center>
          <h2>404 - Page Not Found</h2>
        </center>
        <p>
          <br />
          <br />
          Sorry, this page does not exist. Please check the URL or return to the homepage.
          <br />
          <br />
        </p>
      </div>
    </Content>
  );
}

export default Page;