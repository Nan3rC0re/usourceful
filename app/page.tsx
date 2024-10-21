import ResourceNav from "@/components/ui/resource-nav";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-4 flex justify-center w-full">
      <main className="flex flex-col mt-[80px] w-[80rem] items-center text-center ">
        <h1 className=" md:text-4xl text-2xl font-semibold text-white/85">
          A library of resources for computer science students
        </h1>
        <p className="md:text-lg text-sm mt-1 text-muted-foreground">
          New recourses added frequently
        </p>
        <div className="new-additions-container flex flex-col gap-4  w-full max-w-4xl mt-[100px]">
          <ResourceNav />
          <div className="list-of-additions flex flex-col ">
            {/* <Link
              href=""
              className=" hover:bg-[#ececec] rounded-2xl p-3 w-full flex gap-4 items-center "
            >
              <div className="border rounded-md p-2 h-fit">fav</div>
              <div className="flex flex-col  items-start ">
                <h1>Resource Name</h1>
                <p className="text-sm">small description </p>
                <p className=" text-sm text-black/45">
                  type of resource(organization, project)
                </p>
              </div>
            </Link>
            <Link
              href=""
              className=" hover:bg-[#ececec] rounded-2xl p-3 w-full flex gap-4 items-center "
            >
              <div className="border rounded-md p-2 h-fit">fav</div>
              <div className="flex flex-col  items-start ">
                <h1>Resource Name</h1>
                <p className="text-sm">small description </p>
                <p className="text-sm text-black/45">
                  type of resource(organization, project)
                </p>
              </div>
            </Link>
            <Link
              href=""
              className=" hover:bg-[#ececec] rounded-2xl p-3 w-full flex gap-4 items-center "
            >
              <div className="border rounded-md p-2 h-fit">fav</div>
              <div className="flex flex-col  items-start ">
                <h1>Resource Name</h1>
                <p className="text-sm">small description </p>
                <p className="text-sm text-black/45">
                  type of resource(organization, project)
                </p>
              </div>
            </Link>
            <Link
              href=""
              className=" hover:bg-[#ececec] rounded-2xl p-3 w-full flex gap-4 items-center "
            >
              <div className="border rounded-md p-2 h-fit">fav</div>
              <div className="flex flex-col  items-start ">
                <h1>Resource Name</h1>
                <p className="text-sm">small description </p>
                <p className="text-sm text-black/45">
                  type of resource(organization, project)
                </p>
              </div>
            </Link>
            <Link
              href=""
              className=" hover:bg-[#ececec] rounded-2xl p-3 w-full flex gap-4 items-center "
            >
              <div className="border rounded-md p-2 h-fit">fav</div>
              <div className="flex flex-col  items-start ">
                <h1>Resource Name</h1>
                <p className="text-sm">small description </p>
                <p className="text-sm text-black/45">
                  type of resource(organization, project)
                </p>
              </div>
            </Link>
            <Link
              href=""
              className=" hover:bg-[#ececec] rounded-2xl p-3  w-full flex gap-4 items-center "
            >
              <div className="border rounded-md p-2 h-fit">fav</div>
              <div className="flex flex-col  items-start ">
                <h1>Resource Name</h1>
                <p className="text-sm">small description </p>
                <p className="text-sm text-black/45">
                  type of resource(organization, project)
                </p>
              </div>
            </Link>
            <Link
              href=""
              className=" hover:bg-[#ececec] rounded-2xl p-3 w-full flex gap-4 items-center "
            >
              <div className="border rounded-md p-2 h-fit">fav</div>
              <div className="flex flex-col  items-start ">
                <h1>Resource Name</h1>
                <p className="text-sm">small description </p>
                <p className="text-sm text-black/45">
                  type of resource(organization, project)
                </p>
              </div>
            </Link> */}
          </div>
        </div>
      </main>
    </div>
  );
}
