import {Img, Button} from "./..";
import {MenuItem, SubMenu, Menu, Sidebar} from "react-pro-sidebar";

export default function Sidebar1({ ...props }) {
    return (
     <Sidebar {...props} width="267px !important">
      <Button size="md" shape="round" className="w-[40px]">
       <Img src="images/img_arrow_right.svg" />
      </Button>
      <Menu
       menuItemStyles={{
        button: {
         padding: 0,
         paddingTop: "31px",
         gap:"12px",
         color: "#3e3e3e",
         fontWeight:600,
         fontSize: "18px",
         ['&:hover, &.ps-active']: { color: "#f3aa0f" },
        },
       }}
       className="mb-[291px] flex w-full flex-col items-end self-end pl-4 pr-7 sm:pr-5"
      >
       <div className="flex flex-col gap-[0.48px] self-stretch">
        <MenuItem suffix={<div className="h-[24px] w-[14%]" />}>پیشخوان</MenuItem>
        <MenuItem suffix={<div className="h-[24px] w-[14%]" />}>پیامرسانی انبوه</MenuItem>
        <MenuItem
         icon={<img src="images/img_arrow_up.svg" alt="arrowup_three" className="h-[24px] w-[24px]" />}
         suffix={<div className="h-[24px] w=[22%]" />}
        >
         اطلاعات
        </MenuItem>
       </div>
       <div className="flex flex-col self-stretch">
        <MenuItem>تحلیل</MenuItem>
        <MenuItem suffix={<div className="h-[24px] w-[14%]" />}>پایگاه داده</MenuItem>
        <SubMenu suffix={<div className="h-[24px] w-[14%]" />} label="تراکنش ها">
         <MenuItem suffix={<div className="h-[24px] w-[14%]" />}>تنظیمات</MenuItem>
        </SubMenu>
       </div>
      </Menu>
     </Sidebar>
    );
   }