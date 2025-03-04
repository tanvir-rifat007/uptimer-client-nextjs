"use client";

import { useMongoDBEdit } from "@/app/(uptime)/hooks/useMongodbMonitor";
import { EditMonitorProps } from "@/interfaces/monitor.interface";
import { ChangeEvent, FC } from "react";
import { useParams } from "next/navigation";
import Loader from "@/components/Loader";
import MonitorBaseInfo from "@/app/(uptime)/components/MonitorBaseInfo";
import Assertions from "@/app/(uptime)/components/Assertion";
import FormButtons from "@/app/(uptime)/components/FormButton";

const EditMongoDBMonitor: FC<EditMonitorProps> = () => {
  const { monitorId } = useParams<{ monitorId: string }>();
  const {
    loading,
    monitorInfo,
    notifications,
    validationErrors,
    setMonitorInfo,
    onHandleSubmit,
  } = useMongoDBEdit(monitorId);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <form
          action={onHandleSubmit}
          className="m-auto relative min-h-screen xl:container"
        >
          <div className="py-2 text-base lg:text-xl font-bold m-auto mt-4 w-[80%]">
            Edit MongoDB Monitor
          </div>
          <div className="p-6 m-auto mt-4 border w-[80%] bg-lightGray">
            <MonitorBaseInfo
              buttonsText={["MONGODB"]}
              urlLabel="MongoDB Connection String"
              type="mongodb"
              urlPlaceholder="mongodb://username:password@host:post/database"
              monitorInfo={monitorInfo}
              validationErrors={validationErrors}
              notifications={notifications}
              setMonitorInfo={setMonitorInfo}
            />
            <Assertions>
              <div className="mb-4">
                <div className="block mb-2 text-medium font-medium ">
                  And connection is (Default is established)
                </div>
                <select
                  id="connection"
                  name="connection"
                  className="bg-white border border-black text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  value={monitorInfo.connection}
                  onChange={(event: ChangeEvent) => {
                    const value: string = (event.target as HTMLInputElement)
                      .value;
                    setMonitorInfo({ ...monitorInfo, connection: value });
                  }}
                >
                  <option value="none">Select</option>
                  <option value="established">Established</option>
                  <option value="refused">Refused</option>
                </select>
              </div>
            </Assertions>
          </div>
          <FormButtons href="/status" buttonLabel="Update Monitor" />
        </form>
      )}
    </>
  );
};

export default EditMongoDBMonitor;
