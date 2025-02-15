import { useDispatch } from "react-redux";
import { logoutThunk } from "../../redux/auth/operations";
import s from './UserMenu.module.css'

const UserMenu = () => {
	const dispatch = useDispatch();
	return (
		<button className={s.button} onClick={() => dispatch(logoutThunk())}>
          Logout
		</button>
	)
}

export default UserMenu