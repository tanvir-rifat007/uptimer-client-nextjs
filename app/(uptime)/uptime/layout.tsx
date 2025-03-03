import LayoutBody from "@/components/LayoutBody";
import ProtectedRoute from "@/components/ProtectedRoute";
import React, { PropsWithChildren } from "react";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";

dayjs.extend(relativeTime);

const UptimeLayout = ({ children }: PropsWithChildren) => {
  return (
    <ProtectedRoute>
      <LayoutBody>{children}</LayoutBody>;
    </ProtectedRoute>
  );
};

export default UptimeLayout;
