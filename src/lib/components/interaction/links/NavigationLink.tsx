'use client'

import React, { useEffect, useState } from 'react';
import HighlightedLink, { HighlightedLinkProps, LinkElement } from '@/lib/components/interaction/links/highlightedLink/HighlightedLink';

const NavigationLink = React.forwardRef<LinkElement, HighlightedLinkProps>(
    ({ children, href, ...props }, ref) => {
        const [isCurrentWindow, setIsCurrentWindow] = useState(false)

        useEffect(() => {
            const hash = window.location.hash;
            const isHashPresent = hash.length !== 0;
            const href = window.location.pathname;
            const hostname = window.location.hostname;
            const isPathPresent = href.length > 1;
            const isPropsPathNameAFullLink = href.indexOf('http') !== -1

            setIsCurrentWindow(
                (isHashPresent && href.split('/').reverse()[0] === hash) ||
                (isPathPresent && !isPropsPathNameAFullLink && href === href) ||
                (isPathPresent && isPropsPathNameAFullLink && ('/' + href.split('/').slice(3).join('/')) === href) ||
                (!isPathPresent && href.indexOf(hostname) !== -1)
            );
        });

        return (
            <HighlightedLink isHighlighted={isCurrentWindow} href={href} {...props} ref={ref}>
                {children}
            </HighlightedLink>
        );
    }
)



NavigationLink.displayName = 'NavigationLink';

export default NavigationLink;