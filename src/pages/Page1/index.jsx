import { Helmet } from "react-helmet";
import {Button, Img, Text, CheckBox, Input } from "../../components";
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import Sidebar1 from "../../components/Sidebar1";

export default function Page1() {
    return(
        <>
         <Helmet>
            <title>
                sample
            </title>
            <meta name="description" content="Web site"/>
         </Helmet>
         <div className="w-full bg-gray-100">
            <div>
                <Header className="flex items-center bg-white-A700_01 py-2.5 shadow-xs"/>
                <div className="flex md: flex-col">
                    <div className="flex-1 p-6 md:self-stretch md:p-5">
                        <div className="mb-3.5 mt-2 rounded-lg bg-white-A700_01 py-12 md:py-5">
                            <div className="flex flex-col items-center gap-[15px]">
                                <div className="flex items-center gap-3 self-end px-4">
                                    <Heading size="xl" as="h1" className="text-right">
                                        اینستاگرام
                                    </Heading>
                                    <Button size="2xl" variant="gradiant" shape="circle" color="amber_200_indigo_A200" className="w-[48px] !rounded-[24px]" >
                                        <Img src="images/img_info.svg"/>
                                    </Button>
                                </div>
                                <div className="self-stretch px-2.5">
                                    <div className="py-5">
                                        <div className="flex items-end pr-[9px] pt-[9px] md:flex-col">
                                            <div className="mt-[13px] flex flex-1 md:flex-col md:self-stretch">
                                                <div className="flex w-full items-start sm:flex-col">
                                                    <div className="relative z-[1] flex w-[13%] flex-col items-center gap-1 rounded-[28px] px-[17px] sm:w-full">
                                                        <div className="h-[40px] w-[40px] self-stretch rounded-[20px] border-2 border-solid border-gray-500">
                                                            <Heading size="xs" as="h2" className="text-center !text-gray-500"  >
                                                                محتوا
                                                            </Heading>
                                                        </div>
                                                        <div className="relative ml-[-18px] mt-[11px] flex flex-1 items-center sm:ml-0 sm:flex-col sm:self-stretch">
                                                            <Img src="images/img_rectangle_4.svg" alt="محتوا_two" className="h-[4px] w-[22%] sm:w-full"/>
                                                            <div className="h-[18px] w-[18px] flex-1 rounded-[9px] border border-solid border-blue-700 bg-white-A700_01 sm:self-stretch"/>
                                                            <Img src="images/img_rectangle_4.svg" alt="محتوا_four" className="h-[4px] w-[22%] sm:w-full"/>
                                                            <div className="h-[18px] w-[18px] flex-1 rounded-[9px] border border-solid border-blue-700 bg-white-A700_01 sm:self-stretch"/>
                                                            <Img src="images/img_rectangle_4.svg" alt="محتوا_six" className="h-[4px] w-[22%] sm:w-full"/>
                                                            <div className="h-[18px] w-[18px] flex-1 rounded-[9px] border border-solid border-blue-700 bg-white-A700_01 sm:self-stretch"/>
                                                            <Img src="images/img_rectangle_4.svg" alt="محتوا_eight" className="h-[4px] w-[22%] sm:w-full"/>
                                                        </div>

                                                    </div>
                                                    <div className="flex w-full items-start sm:flex-col">
                                                        <div className="relative z-[2] flex w-[11%] flex-col items-center gap-1 rounded-[28px] px-2 sm:w-full">
                                                            <div className="h-[40px] w-[40px] self-stretch rounded-[20px] border-2 border-solid border-gray-500">
                                                                <Heading size="xs" as="h3" className="text-center !text-gray-500"  >
                                                                کانال ها
                                                                </Heading>
                                                            </div>
                                                            <div className="relative ml-[-11px] mt-[11px] flex flex-1 items-center sm:ml-0 sm:flex-col sm:self-stretch">
                                                            <Img src="images/img_rectangle_4.svg" alt="image" className="h-[4px] w-[22%] sm:w-full"/>
                                                            <div className="h-[18px] w-[18px] flex-1 rounded-[9px] border border-solid border-blue-700 bg-white-A700_01 sm:self-stretch"/>
                                                            <Img src="images/img_rectangle_4.svg" alt="image1" className="h-[4px] w-[22%] sm:w-full"/>
                                                            <div className="h-[18px] w-[18px] flex-1 rounded-[9px] border border-solid border-blue-700 bg-white-A700_01 sm:self-stretch"/>
                                                            <Img src="images/img_rectangle_4.svg" alt="image2" className="h-[4px] w-[22%] sm:w-full"/>
                                                            <div className="p-1 flex-1 rounded-[9px] border border-solid border-blue-700 bg-white-A700_01 sm:self-stretch">
                                                                <div className="h-[10px] w-[10px] rounded-[5px] bg-blue-700 "/>
                                                            </div>
                                                            <div className="w-[22%] sm:w-full">
                                                                <div className="h-[-4px] bg-gray-800_01"/>
                                                                <div className="relative mt-[-4px] h-[4px] bg-blue-700"/>

                                                            </div>
                                                        </div>


                                                        </div>

                                                    </div>

                                                </div>

                                            </div>
                                            <div className="relative ml-[-11px] flex w-[5%] flex-col items-center gap-[3px] rounded-[28px] md:ml-0 md:w-full">
                                                <div className="w-[66%] rounded-[20px] border-2 border-solid border-blue-700 p-2 md:w-full">
                                                    <div className="h-[24px] w-[24px] rounded-[12px] bg-blue-700"/>


                                                </div>
                                                <heading size='xs'  className="text-center">
                                                    افراد خاص
                                                </heading>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                                <div className="flex w-[83%] flex-col gap-10 pb-[373px] md:w-full md:pb-5" >
                                    <div className="flex items-start gap-5 md:flex-col">
                                        <div className="flex w-full flex-col gap-[9px]">
                                            <div className="flex justify-between gap-5">
                                                <div className="flex rounded">
                                                    <div className="flex rounded">
                                                        <div className="flex py-0.5">
                                                            <Heading size="xs" as="h5" className="self-end text-center !text-amber-A700">
                                                                راهنما
                                                            </Heading>

                                                        </div>

                                                    </div>

                                                </div>
                                                <div className="flex flex-wrap">
                                                    <Heading as="h6" className="self-end text-right !text-blue_gray-900">
                                                        :
                                                    </Heading>
                                                    <Heading as="h5" className="self-start text-right !text-blue_gray-900">
                                                        هدف
                                                    </Heading>

                                                </div>

                                            </div>
                                            <div className="flex justify-end gap-[23px]">
                                                <CheckBox name="فالوئینگ" lable="فالوئینگ" id="Data1" className="gap-[17px] pr-8 text-right text-sm text-blue_gray-900 sm:pr-5"/>
                                                <CheckBox name="فالوئر" lable="فالوئر" id="Data" className="gap-[17px] pr-8 text-right text-sm text-blue_gray-900 sm:pr-5"/>

                                            </div>

                                        </div>
                                        <div className="flex w-full flex-col gap-2">
                                            <div className="flex items-center justify-between gap-5">
                                                <div className="flex rounded">
                                                    <div className="flex rounded">
                                                        <div className="flex py-0.5">
                                                            <Heading size="xs" as="p" className="self-end text-center !text-amber-A700">
                                                                راهنما
                                                            </Heading>

                                                        </div>

                                                    </div>

                                                </div>
                                                <div className="flex flex-wrap items-center self-end">
                                                    <Heading as="h5" className="text-right">
                                                        :
                                                    </Heading>
                                                    <Heading as="h5" className="text-right">
                                                        آیدی پیج
                                                    </Heading>

                                                </div>

                                            </div>
                                            <div className="flex flex-col items-end gap-1 rounded">
                                                <Input shape="round" name="weburl" placeholder={`Bimeh.Pasargad`}
                                                 prefix={<Img src="images/img_checkcircle.svg"
                                                 alt="check-circle"
                                                 className="h-[16px] w-[16px]"/>}
                                                 className="gap-[35px] self-stretch border-green-800"
                                                 />
                                                 <div className="flex pr-3">
                                                    <Text size="xs" as="p" className="text-right !text-green-800">
                                                        آیدی وارد شده معتبر است
                                                    </Text>
                                                 </div>
                                                
                                            </div>

                                        </div>
                                        

                                    </div>
                                    <a href="https://wwww.youtube.com/embed/bv8Fxk0sz7I">
                                        <Button color="blue_700" size="3xl" shape="round" className="w-full font-semibold sm:px-5">
                                            بررسی
                                        </Button>
                                    </a>

                                    </div>

                                </div>

                            </div>

                        </div>
                        <Sidebar1 className="!sticky top-0 ml-[-20px] flex h-screen w-[269px] flex-col gap-1 overflow-auto border-1 border-solid border-black-900_14 bg-white-A700_01 shadow-sm md:ml-0 md:hidden md:p-5"/>


                    </div>

                </div>
            </div>
                  
        </>
    );
}