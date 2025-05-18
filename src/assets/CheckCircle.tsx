// DEPENDENCIES
import { forwardRef, SVGProps } from 'react';
// THEME
import { palette } from 'src/theme/mainTheme';

const CheckCircle = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
    (
        {
            fill = palette.neutral[800],
            width = 24,
            height = 24,
        },
        ref
    ) => {
        return (
            <svg
                ref={ref}
                width={width}
                height={height}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                data-testid="check-circle-icon"
            >
                <g id="Icons/check-circle">
                    <path
                        id="Subtract"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM15.9034 7.87724L10.4671 13.606L8.15515 10.7564C7.75393 10.2619 7.00107 10.1659 6.47358 10.5421C5.94609 10.9182 5.84372 11.624 6.24494 12.1186L9.43952 16.0561C9.89679 16.6197 10.7891 16.6518 11.2912 16.1227L17.6965 9.37276C18.137 8.90855 18.0927 8.19746 17.5976 7.78448C17.1024 7.3715 16.3439 7.41303 15.9034 7.87724Z"
                        fill={fill}
                    />
                </g>
            </svg>
        );
    }
);

CheckCircle.displayName = 'CheckCircleIcon';

export default CheckCircle;
