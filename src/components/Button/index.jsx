import PropTypes from "prop-types";
const shapes = { 
    circle: "rounded-[50%]",
    round: "rounded", 
    square: "rounded-[Opx]",
};
const variants = { 
    outline: { 
        gray_400: "-border-gray-400 border border-solid text-gray-400",
        gray_800_02: "border-gray-800_02 border border-solid",
        blue_700: "border-blue-700 border border-solid text-blue-700",
    },
    fill:{
        white_A700: "bg-white-A700 text-blue_gray-900",
        blue_A700: "bg-blue-A700",
        blue_gray_50: "bg-blue_gray-50 text-blue_gray-900-",
        blue_gray_100: "bg-blue_gray-100 text-gray-600",
        gray_200: "bg-gray-200 text-gray-400",
        blue_700: "bg-blue-700 text-white-A700_01",
        indigo_300: "bg-indigo-300 text-indigo-900",
        indigo_100: "bg-indigo-100 text-blue_gray-900",
    },
    gradient: { 
        amber_200_indigo_A200: "bg-gradient",
    },
};
const sizes = {
    lg: "h-(40px] px-3 text-sm",
    sm: "h-[32px] px-2",
    "2xl": "h-[48px] px-[11px]",
    "4xl": "h-[59px] px-[15px] text-base",
    md: "h-[40px] px-2",
    xs: "h-[20px] px-[9px]",
    "3xl": "-h-[56px] px-[35px] text-lg",
    xl: "h-[45px] px-4 text-base",
};
const Button = ({ 
    children,
    className = "",
    leftIcon,
    rightIcon,
    shape,
    variant = "fill",
    size = "xl",
    color = "blue_gray_50",
    ...restProps 
}) =>  {
    return (
         <button
          className={`$className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) ||""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color])||""}`}
          {...restProps}
          >
         {!!leftIcon && leftIcon} 
         {children}
         {!!rightIcon && rightIcon} 
         </button> 
         );
        };
    Button.propTypes = {
        className: PropTypes.string,
        children: PropTypes.node,
        leftIcon: PropTypes.node,
        rightIcon: PropTypes.node,
        shape: PropTypes.oneOf(["circle", "round", "square"]),
        size: PropTypes.oneOf(["lg", "sm", "2xl", "4xl", "md", "xs", "3xl", "xl"]),
        variant: PropTypes.oneOf(["outline", "fill", "gradient"]),
        color: PropTypes.oneOf([
            "gray_400",
            "gray_800_02",
            "blue_700",
            "white_A700",
            "blue_A700",
            "blue_gray_50",
            "blue_gray_100",
            "gray_200",
            "indigo_300",
            "indigo_100",
            "amber_200_indigo_A200",
        ]),
    };
    export { Button };