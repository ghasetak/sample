
const sizes = {
    "2xl": "text-2xl font-bold md:text-[22px]",
    xl: "text-[22px] font-semibold",
    s: "text-base font-semibold",
    md: "text-lg font-semibold",
    xs: "text-sm font-semibold",
    lg: "text-xl font-semibold",
   };
   
   
   const Heading = ({ children, className = "", size = "lg", as, ...restProps }) => {
     const Component = as || "h6";
   
     return (
       <Component className={`text-gray-800_02 font-esteded ${className} ${sizes[size]}`} {...restProps}>
         {children}
       </Component>
     );
   };
   
   export { Heading };