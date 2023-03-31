import React, {useState} from 'react';
import styles from './style.module.scss';
import {MdSecurity} from "react-icons/md";
import {BsSuitHeart} from "react-icons/bs";
import {RiAccountPinCircleLine, RiArrowDropDownFill} from "react-icons/ri";
import Link from "next/link";
import UserMenu from "./UserMenu";
import {v4 as uuidv4} from "uuid";

const Top = ({country}) => {
    const [loggedIn, setLoggedIn] = useState(true);
    const [visible, setVisible] = useState(false);


    return (
        <div className={styles.top}>
            <div className={styles.top__container}>
                <div></div>

                <ul className={styles.top__list}>
                    <li>
                        <img src={country.flag} alt=""/>
                        <span> {country.name}/ usd</span>
                    </li>

                    <li>
                        <MdSecurity/>
                        <span>Buyer Protection</span>
                    </li>

                    <li className={styles.li}>
                        <span>Customer Service</span>
                    </li>

                    <li className={styles.li}>
                        <span>Help</span>
                    </li>

                    <li>
                        <BsSuitHeart/>
                        <Link href="/profile/whishlist">
                            <span>Whishlist</span>
                        </Link>
                    </li>

                    <li
                        onMouseOver={() => setVisible(true)}
                        onMouseLeave={() => setVisible(false)}
                    >
                        {loggedIn ? (
                                <div className={styles.flex}>
                                    <img
                                        src="https://th.bing.com/th/id/OIP.H1w2cshS4jS9WqGDI-t3oQHaHa?pid=ImgDet&w=950&h=950&rs=1"
                                        alt=""
                                    />
                                    <span>IRINA</span>
                                    <RiArrowDropDownFill/>
                            </div>
                        ) : (
                                <div className={styles.flex}>
                                    <RiAccountPinCircleLine/>
                                    <span>Account</span>
                                    <RiArrowDropDownFill/>
                                </div>
                        )}

                        {visible && <UserMenu loggedIn={loggedIn}/>}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Top;

