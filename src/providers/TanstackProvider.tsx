import {
    QueryClient,
    QueryClientProvider
} from "@tanstack/react-query";
import { type PropsWithChildren } from "react";

const queryClient = new QueryClient();

const TanstackProvider = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default TanstackProvider;
