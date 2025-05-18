// DEPENDENCIES
import { forwardRef, SVGProps } from 'react';
// THEME
import { palette } from 'src/theme/mainTheme';

const Close = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
    (
        {
            fill = palette.neutral[900],
            width = '24px',
            height = '24px',
            ...restOfProps
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
                xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"
                role="img"
                data-testid="close-svg"
                {...restOfProps}
            >
                <g id="Icons/close">
                    <path
                        id="Vector"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.8573 12L2.65087 5.79357C1.78304 4.92574 1.78304 3.51871 2.65087 2.65087C3.51871 1.78304 4.92574 1.78304 5.79357 2.65087L12 8.8573L18.2064 2.65087C19.0743 1.78304 20.4813 1.78304 21.3491 2.65087C22.217 3.51871 22.217 4.92574 21.3491 5.79357L15.1427 12L21.3491 18.2064C22.217 19.0743 22.217 20.4813 21.3491 21.3491C20.4813 22.217 19.0743 22.217 18.2064 21.3491L12 15.1427L5.79357 21.3491C4.92574 22.217 3.51871 22.217 2.65087 21.3491C1.78304 20.4813 1.78304 19.0743 2.65087 18.2064L8.8573 12Z"
                        fill={fill}
                    />
                </g>
            </svg>
        );
    }
);

Close.displayName = 'CloseIcon';

export default Close;
