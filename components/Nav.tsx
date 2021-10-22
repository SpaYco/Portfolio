import type { NextPage } from "next";
import Image from "next/image";
import info from "../assets/vector/info.svg";
import contact from "../assets/vector/contact.svg";
import file from "../assets/vector/file.svg";
import code from "../assets/vector/code.svg";

interface Props {
  status: boolean;
}

const Nav: NextPage<Props> = ({ status }) => {
  return (
    <nav className={status ? "show-nav" : "hide-nav"}>
      <ul>
        <li>
          <a className='nav-link' href='#about'>
            <Image src={info} alt='info icon' />
            <p>About</p>
          </a>
        </li>
        <li>
          <a className='nav-link' href='#projects'>
            <Image src={code} alt='code icon' />
            <p>Projects</p>
          </a>
        </li>
        <li>
          <a className='nav-link' href='#resume'>
            <Image src={file} alt='file icon' />
            <p>Resume</p>
          </a>
        </li>
        <li>
          <a className='nav-link' href='#contact'>
            <Image src={contact} alt='contact icon' />
            <p>Contact</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
