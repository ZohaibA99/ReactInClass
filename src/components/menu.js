import "./sidebar.css";
import {HiBookOpen, HiAcademicCap} from "react-icons/hi"

export const menuConfig = [
    {
        name: "University",
        id: "id-1",
        icon: <HiBookOpen></HiBookOpen>,
    },
    {
        name: "Faculties",
        id: "id-2",
        icon: <HiAcademicCap></HiAcademicCap>,
    },
];

const MenuItem = ({menu}) => {
    return (
            <>
                {menu.map(menuItem => (
                    <li>
                        {menuItem.icon}
                        <a className="link" key={menuItem.id} href="google.com">{menuItem.name}</a>
                    </li>
            ))}
            </>
    )
}

const MenuList = () => { 
    return (
        <ul className="menuList">
            <MenuItem menu={menuConfig}></MenuItem>
        </ul>
    )
}

export default MenuList;