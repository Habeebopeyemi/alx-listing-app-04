import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/src/store";
import { setUser } from "@/src/store/slices/userSlice";

const UserProfile: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const updateUser = () => {
    dispatch(setUser({ name: "John Doe", email: "john@example.com" }));
  };

  return (
    <>
      <div className="w-full text-black">
        <h1>User Profile</h1>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <button onClick={updateUser}>Update User</button>
      </div>
    </>
  );
};

export default UserProfile;
