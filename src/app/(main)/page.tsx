import Content from "@/lib/components/container/Content";
import PageSection from "@/lib/components/container/PageSection";
import Button from "@/lib/components/interaction/forms/buttons/Button";
import NavLink from "@/lib/components/interaction/links/NavLink";
import { Box, Container, Flex, Section, Slider } from "@radix-ui/themes";
import { IceCream } from "lucide-react";

import variables from '@/app/variables.module.scss';
import ThemeButton from "@/lib/components/interaction/forms/buttons/themeButton/ThemeButton";

export default function Page() {
  return (
    // <Content className={['applyHeaderOffset'].join(' ')}>
    //   {/* Insert stuff here */}

    // </Content>
    <>
      <PageSection variant="page">
        <Container size={'3'}>
          <Flex direction={'column'} p={'1'} gap={'2'}>
            <ThemeButton/>
          </Flex>
        </Container>
      </PageSection>
      <PageSection variant="page" style={{ backgroundColor: 'seashell' }}>

      </PageSection>
    </>
  );
};