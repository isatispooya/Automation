
const ProfileView = () => {
  return (
    <div dir="rtl">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8 px-4">
          {/* Decrease the width of the left part */}
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <div className="flex flex-col items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/94.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0 shadow-lg"
                  alt="پروفایل"
                />
                <h1 className="text-2xl font-bold text-gray-800 truncate">
                  محمدعلی سادات
                </h1>
                <p className="text-gray-500 font-medium mt-2">
                  سمت:{" "}
                  <span className="text-indigo-600">توسعه دهنده نرم افزار</span>
                </p>
                <p className="text-gray-500 font-medium mt-2">
                  سطح دسترسی: <span className="text-indigo-600">مدیر</span>
                </p>
                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                  <button
                    type="button"
                    className="inline-block bg-[#400a6f] rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2"
                  >
                    ویرایش اطلاعات
                  </button>
                </div>
              </div>
              <hr className="my-6 border-gray-200" />
              <div className="flex flex-col">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  دسترسی شرکت‌ها
                </h2>
                <ul className="space-y-2 text-gray-600">
                  <li className="hover:text-gray-800 transition-colors">
                    صنایع مفتول
                  </li>
                  <li className="hover:text-gray-800 transition-colors">
                    بیمه
                  </li>
                  <li className="hover:text-gray-800 transition-colors">
                    کارگزاری
                  </li>
                  <li className="hover:text-gray-800 transition-colors">
                    بورس
                  </li>
                  <li className="hover:text-gray-800 transition-colors">
                    فلان
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Increase the width of the right part */}
          <div className="col-span-4 sm:col-span-9">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
                اطلاعات
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-[#400a6f] pb-2">
                  <span className="text-gray-600 font-medium">سطح دسترسی:</span>
                  <p className="text-gray-800">مدیر</p>
                </div>
                <div className="flex justify-between items-center border-b border-[#400a6f] pb-2">
                  <span className="text-gray-600 font-medium">آدرس ایمیل:</span>
                  <p className="text-gray-800">example@example.com</p>
                </div>
                <div className="flex justify-between items-center border-b border-[#400a6f] pb-2">
                  <span className="text-gray-600 font-medium">تاریخ تولد:</span>
                  <p className="text-gray-800">14/12/80</p>
                </div>
                <div className="flex justify-between items-center border-b border-[#400a6f] pb-2">
                  <span className="text-gray-600 font-medium">نام پدر:</span>
                  <p className="text-gray-800">رضا</p>
                </div>
                <div className="flex justify-between items-center border-b border-[#400a6f] pb-2">
                  <span className="text-gray-600 font-medium">واحد:</span>
                  <p className="text-gray-800">62</p>
                </div>
                <div className="flex justify-between items-center border-b border-[#400a6f] pb-2">
                  <span className="text-gray-600 font-medium">مدیر:</span>
                  <p className="text-gray-800">معین دهقان</p>
                </div>
                <div className="flex justify-between items-center border-b border-[#400a6f] pb-2">
                  <span className="text-gray-600 font-medium">
                    وضعیت قرارداد:
                  </span>
                  <p className="text-gray-800">فعال</p>
                </div>
                <div className="flex justify-between items-center border-b border-[#400a6f] pb-2">
                  <span className="text-gray-600 font-medium">شماره تماس:</span>
                  <p className="text-gray-800">۰۹۱۲۳۴۵۶۷۸۹</p>
                </div>
                <div className="flex justify-between items-center border-b border-[#400a6f] pb-2">
                  <span className="text-gray-600 font-medium">آدرس:</span>
                  <p className="text-gray-800">تهران، خیابان آزادی، پلاک ۱۲۳</p>
                </div>

                <div className="flex justify-between items-center border-b border-[#400a6f] pb-2">
                  <span className="text-gray-600 font-medium">کد ملی:</span>
                  <p className="text-gray-800">۱۲۳۴۵۶۷۸۹۰</p>
                </div>
                <div className="flex justify-between items-center border-b border-[#400a6f] pb-2">
                  <span className="text-gray-600 font-medium">رمز عبور:</span>
                  <p className="text-gray-800">35465441234524</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
