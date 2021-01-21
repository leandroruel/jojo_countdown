import useSWR from "swr";
import fetcher from "utils/fetcher";

const useEvent = (id = "") => {
  const { data, error } = useSWR(`/api/post/${id}`, fetcher);

  return {
    event: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useEvent;
