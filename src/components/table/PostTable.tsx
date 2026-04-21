import { Post } from "@/redux/services/api";
import { useAppDispatch } from "@/redux/hooks";
import { setSelectedId } from "@/redux/features/ui/uiSlice";

const PostTable = ({ data }: { data: Post[] }) => {
  const dispatch = useAppDispatch();

  return (
    <table className="min-w-full border">
      <thead>
        <tr>
          <th className="border p-2">ID</th>
          <th className="border p-2">Title</th>
        </tr>
      </thead>
      <tbody>
        {data.map((post) => (
          <tr
            key={post.id}
            className="hover:bg-red-500 cursor-pointer"
            onClick={() => dispatch(setSelectedId(post.id))}
          >
            <td className="border p-2">{post.id}</td>
            <td className="border p-2">{post.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PostTable;