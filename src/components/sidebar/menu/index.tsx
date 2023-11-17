import '../sidebar.scss'
import GridViewIcon from '@mui/icons-material/GridView';
import Link from "next/link";

const Menu = () => {
    return (
        <li>
            <Link href="">
                <div className="link-wrapper">
                    <GridViewIcon className="link-icon" />
                    <span className="link-name">Dashboard</span>
                </div>
            </Link>
        </li>
    )
}

export default Menu;