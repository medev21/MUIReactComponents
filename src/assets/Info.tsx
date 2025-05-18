// DEPENDENCIES
import { forwardRef, SVGProps } from 'react';
// THEME
import { palette } from 'src/theme/mainTheme';

const Info = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
    (
        { width = '24px', height = '24px', fill = palette.neutral[900], ...props },
        ref
    ) => {
        return (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"
                ref={ref}
                role="img"
                data-testid="info-svg"
                width={width}
                height={height}
                {...props}
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 10.4886C10.8954 10.4886 10 11.384 10 12.4886V17.5114C10 18.616 10.8954 19.5114 12 19.5114C13.1046 19.5114 14 18.616 14 17.5114V12.4886C14 11.384 13.1046 10.4886 12 10.4886ZM12 4.48861C10.8954 4.48861 10 5.38404 10 6.48861C10 7.59318 10.8954 8.48861 12 8.48861C13.1046 8.48861 14 7.59318 14 6.48861C14 5.38404 13.1046 4.48861 12 4.48861Z"
                    fill={fill}
                />
            </svg>
        );
    }
);

Info.displayName = 'InfoIcon';

export default Info;
