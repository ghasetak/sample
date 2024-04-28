import {Img , Heading} from"./..";
 
export default function Header({...props}) {
 return (
   <header {...props}>
     <div className="container-xs flex items-center justify-between gap-5 md:p-5 sm:flex-col">
       <div className="flex w-[21%] items-center justify-between gap-5 sm:w-full">
         <div className="flex w-[53%] flex-wrap items-center justify-center gap-2">
           <Img src="images/img_arrow_up.svg" alt="arrowup_one" className="h-[24px] w-[24px]" />
           <Heading size="s" as="h6" className="text-right !text-gray-800">
          محمد دادگر
           </Heading>
           <img src="images/img_w_icon_sample.png" alt="wiconsample_one" className="h-[36px] w-[36px] rounded-[50%]" />
         </div>
        <Img src="images/img_wallet.svg" alt="wallet_one" className="h-[32px] w-[32px]" />
        <Img src="images/img_mail.svg" alt="mail_one" className="h-[32px] w-[32px]" />
       </div>
       <Img src="images/img_header_logo.png" alt="headerlogo_one" className="h-[50px] w-[7%] object-cover sm:w-full" />
     </div>
    </header> 
  );
 }