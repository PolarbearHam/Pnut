import { Fragment, React } from "react";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavBar = () => {
  return (
    <div className="fixed z-50 flex w-full p-3 h-60 bg-white/80">
      <div className="flex items-center w-full justify-evenly">
        <img className="h-50" src="public\assets\Logo1.png" alt="logo" />

        <div className="flex items-center space-x-50">
          {/* 음식추천 */}
          <Menu as="div" className="relative w-120">
            <div>
              <Menu.Button className="flex items-center justify-center w-full font-regular text-md">
                음식추천
                <img
                  className="h-10 ml-10 rotate-90"
                  src="public\assets\chevron.png"
                  alt=""
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right w-170 rounded-5 bg-white/70 ">
                <div className="py-2">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-white " : "",
                          "block px-15 py-10 text-md rounded-5",
                        )}
                      >
                        개인설문조사
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-white " : "",
                          "block px-15 py-10 text-md rounded-5",
                        )}
                      >
                        보편적인 증상
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-white " : "",
                          "block px-15 py-10 text-md rounded-5",
                        )}
                      >
                        식재료 음식 검색
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          {/* 게시판 */}
          <Menu as="div" className="relative w-120">
            <div>
              <Menu.Button className="flex items-center justify-center w-full font-regular text-md">
                게시판
                <img
                  className="h-10 ml-10 rotate-90"
                  src="public\assets\chevron.png"
                  alt=""
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right w-170 rounded-5 bg-white/70 ">
                <div className="py-2">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-white " : "",
                          "block px-15 py-10 text-md rounded-5",
                        )}
                      >
                        금주의 레시피
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-white " : "",
                          "block px-15 py-10 text-md rounded-5",
                        )}
                      >
                        게시물 조회
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        <div className="flex items-center text-sm space-x-30">
          <div className="px-12 py-8 text-gray-800 bg-gray-100 rounded-full">
            회원가입
          </div>
          <div className="px-12 py-8 text-white font-semibold bg-#FF6B6C rounded-full">
            로그인
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;