import { useGetPostsQuery } from "@/redux/services/api";
import PostTable from "@/components/table/PostTable";
import withAccessPermission from "@/hoc/withAccessPermission";

const HomePage = () => {
  const { data, isLoading, isError } = useGetPostsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;

  return (
    <div>
      <h1 className="text-xl mb-4">Posts</h1>
      {data && <PostTable data={data.slice(0, 10)} />}
    </div>
  );
};

export default withAccessPermission(HomePage);