/** @format */
import { Section } from '@radix-ui/themes';
import styles from './PageSection.module.scss';
import { cn } from '@/lib/utils';
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import React from 'react';

export const pageSectionVariants = cva(styles.pageSection,
    {
        variants: {
            variant: {
                page: styles.hasScreenHeight,
                section: '',
            }
        },
        defaultVariants: {
            variant: "section",
        },
    }
)


interface IPageSectionProps extends React.ComponentProps<typeof Section>,
    VariantProps<typeof pageSectionVariants> {
    variant?: 'page' | 'section'
}

/**
 * This is a component fro declaring sections. They can either be as large as the viewport (variant: 'page') or they are as large as the children need it (variant: 'section').
 * @param {"page" | "section" | undefined} variant - The variant of the component
 * @returns {JSX.Element}
 */
const PageSection = React.forwardRef<typeof Section, IPageSectionProps>(
    ({ className, variant, ...props }, ref) => {
        return (
            <Section
                {...props}
                width={'100%'}
                p={'0'}
                className={cn(
                    pageSectionVariants({ variant, className })
                )}
            >
                {props.children}
            </Section>
        );
    }

)

PageSection.displayName = "PageSection";

export default PageSection;