import { Avatar } from "@mui/material";

const ProfileView = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col sm:flex-row items-center justify-center ">
        <div className="flex flex-col items-center justify-center w-full sm:w-1/3 mb-10 sm:mb-0">
          <Avatar
            sx={{
              bgcolor: "#e3f2fd",
              width: 160,
              height: 160,
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            }}
          />
          <p className="mt-6 text-2xl font-semibold text-gray-800">
            سطح دسترسی : <span className="font-bold text-blue-600">مدیر</span>
          </p>
        </div>
        <div className="w-full sm:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8 h-full">
          <div className="py-6 px-4 rounded-lg flex flex-col justify-center h-full">
            <dt className="text-xl font-bold border-b-2 border-gray-300 text-gray-700">
              نام کامل
            </dt>
            <dd className="mt-2 text-lg text-gray-900 flex-grow">
              یتا بنده خدا
            </dd>
          </div>
          <div className="py-6 px-4 rounded-lg flex flex-col justify-center h-full">
            <dt className="text-xl font-bold border-b-2 border-gray-300 text-gray-700">
              آدرس ایمیل
            </dt>
            <dd className="mt-2 text-lg text-gray-900 flex-grow">
              johndoe@example.com
            </dd>
          </div>
          <div className="py-6 px-4 rounded-lg flex flex-col justify-center h-full">
            <dt className="text-xl font-bold border-b-2 border-gray-300 text-gray-700">
              شماره تماس
            </dt>
            <dd className="mt-2 text-lg text-gray-900 flex-grow">
              09140707704
            </dd>
          </div>
          <div className="py-6 px-4 rounded-lg flex flex-col justify-center h-full">
            <dt className="text-xl font-bold border-b-2 border-gray-300 text-gray-700">
              آدرس
            </dt>
            <dd className="mt-2 text-lg text-gray-900 flex-grow">
              خیابان اصلی، شهر نمونه
            </dd>
          </div>
          <div className="py-6 px-4 rounded-lg flex flex-col justify-center h-full">
            <dt className="text-xl font-bold border-b-2 border-gray-300 text-gray-700">
              کد پستی
            </dt>
            <dd className="mt-2 text-lg text-gray-900 flex-grow">
              1234567890
            </dd>
          </div>
          <div className="py-6 px-4 rounded-lg flex flex-col justify-center h-full">
            <dt className="text-xl font-bold border-b-2 border-gray-300 text-gray-700">
              شغل
            </dt>
            <dd className="mt-2 text-lg text-gray-900 flex-grow">
              برنامه‌نویس
            </dd>
          </div>
          
        </div>
     
      </div>
    </>
  );
};

export default ProfileView;
