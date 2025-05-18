// DEPENDENCIES
import { forwardRef, SVGProps } from 'react';
// THEME
import { palette } from 'src/theme/mainTheme';

const Divider = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
    (
        {
            fill = palette.neutral[800],
            height = 24,
        },
        ref
    ) => {
        return (
            <svg
                ref={ref}
                width="1"
                height={height}
                viewBox="0 0 1 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role='img'
                data-testid='divider-svg'
            >
                <g id="Divider">
                    <line
                        id="Line"
                        x1="0.5"
                        y1="2.18557e-08"
                        x2="0.499999"
                        y2="24"
                        stroke={fill}
                    />
                </g>
            </svg>
        );
    }
);

Divider.displayName = 'DividerIcon';

export default Divider;
