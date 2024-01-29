import Content from "@/lib/components/container/Content";
import PageSection from "@/lib/components/container/PageSection";
import Button from "@/lib/components/interaction/forms/buttons/Button";
import NavLink from "@/lib/components/interaction/links/NavLink";
import { Box, Container, Flex, Section, Slider } from "@radix-ui/themes";
import { IceCream } from "lucide-react";

import variables from '@/app/variables.module.scss';

export default function Page() {
  return (
    // <Content className={['applyHeaderOffset'].join(' ')}>
    //   {/* Insert stuff here */}

    // </Content>
    <>
      <PageSection variant="page">
        <Container size={'3'}>
        <Flex direction={'column'} p={'1'} gap={'2'}>
          <Button ><IceCream />Test</Button>
          <Button variant="unstyled"><IceCream />Test</Button>
          <Button variant="solid"><IceCream />Test</Button>
          <Button variant="solidPlain"><IceCream />Test</Button>
          <Button variant="outline"><IceCream /></Button>
          <Button variant="outlinePlain"><IceCream />Test</Button>
          <Button variant="soft"><IceCream />Test</Button>
          <Button variant="surface"><IceCream /> Test</Button>
          <Button variant="surfacePlain"><IceCream />Test</Button>
        </Flex>
        </Container>
      </PageSection>
      <PageSection variant="page" style={{ backgroundColor: 'seashell' }}>

      </PageSection>
    </>
  );
};