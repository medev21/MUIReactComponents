// DEPENDENCIES
import { SVGProps, forwardRef } from 'react';
// THEME
import { palette } from 'src/theme/mainTheme';

const Warning = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
    (
        {
            width = '24px',
            height = '24px',
            fill = palette.neutral[900],
            ...props
        },
        ref
    ) => {
        return (
            <svg
                width={width}
                height={height}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"
                role="img"
                data-testid="warning-svg"
                ref={ref}
                {...props}
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.1176 2.30588C13.4303 2.49083 13.6916 2.75044 13.8777 3.06116L23.6922 19.7128C24.3095 20.7434 23.9692 22.0761 22.9321 22.6895C22.594 22.8895 22.2078 22.995 21.8143 22.995H2.18536C0.978418 22.995 0 22.0228 0 20.8235C0 20.4325 0.106237 20.0488 0.307495 19.7128L10.122 3.06116C10.7393 2.03061 12.0805 1.69246 13.1176 2.30588ZM11.9998 17.4299C11.0946 17.4299 10.3608 18.1591 10.3608 19.0585C10.3608 19.958 11.0946 20.6872 11.9998 20.6872C12.905 20.6872 13.6388 19.958 13.6388 19.0585C13.6388 18.1591 12.905 17.4299 11.9998 17.4299ZM11.9998 6.57229L11.9138 6.57467C11.0588 6.62186 10.4042 7.34885 10.4517 8.19842L10.8465 15.26C10.8805 15.8683 11.3868 16.3441 11.9998 16.3441C12.6129 16.3441 13.1191 15.8683 13.1531 15.26L13.5497 8.15571L13.5432 7.96459C13.4681 7.18331 12.8058 6.57229 11.9998 6.57229Z"
                    fill={fill}
                />
            </svg>
        );
    }
);

Warning.displayName = 'WarningIcon';

export default Warning;
