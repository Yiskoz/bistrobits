import { useState } from "react";
import bits from '../data/bits.json';
import specials from '../data/special.json';
const {meat_bits} = bits;
const {special_meat_bits} = specials;


export default function HomePage({ homepageState }) {

    const [userScrollPosition, setUserScrollPosition] = useState(0);
    const [userScrollStatus, setUserScrollStatus] = useState(false)

    function scrollPos() {

        setUserScrollPosition(window.scrollY);
        if(userScrollPosition > 150) {
            setUserScrollStatus(true);
        } else {
            setUserScrollStatus(false);
        }
    }


    function ToTheTop() {
        if(userScrollStatus) {
            function scrollToTop() {
                scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
                return(
                    <svg onClick={scrollToTop} className="toTheTop" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18 15L12.2278 8.26574C12.108 8.12606 11.892 8.12606 11.7722 8.26574L6 15" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path> </g></svg>
                );
        } else {
            return null;
        }
    }

    return(
        <>
            {!homepageState ? null : 
                        <div onWheel={scrollPos} onTouchEnd={scrollPos} className="homepage">
                            <Header/>
                        <div className="sections">
                            <AboutUs id='aboutUs'/>
                            <Menu  id='menu'/>
                            <Specials id='specials'/>
                            <Address id='address'/>     
                            <ToTheTop />
                        </div>
                            <Footer />
                        </div>
            }
        </>
    );
}

function Header() {
    const [mobileHeadersStatus, setMobileHeadersStatus] = useState({mobileMenu: true, mobileMenuHeader: false});
    const [state, setState] = useState(false);
    const [canExecute, setCanExecute] = useState(true);

    const handleLinkClick = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth'});
    }

    function pinToTop() {
        const header = document.querySelector('.header');

        if(state === false) {
            header.classList.add('header--fixed');
            // sections.style.paddingTop = `${header.clientHeight}px`;
            setState(!state);
        } else {
            header.style.transform = 'translateY(-100%)';
            header.style.transition = '1s';
            setTimeout(() => {
                header.classList.remove('header--fixed');
                header.style.transform = 'translateY(0%)';
            },1000);
            // sections.style.paddingTop = '0px';
            setState(!state);
        }
    }
    

    const Pin = () => {
        if(state === false) {
            return(<svg onClick={pinToTop} className="pin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1218 1.87023C15.7573 0.505682 13.4779 0.76575 12.4558 2.40261L9.61062 6.95916C9.61033 6.95965 9.60913 6.96167 9.6038 6.96549C9.59728 6.97016 9.58336 6.97822 9.56001 6.9848C9.50899 6.99916 9.44234 6.99805 9.38281 6.97599C8.41173 6.61599 6.74483 6.22052 5.01389 6.87251C4.08132 7.22378 3.61596 8.03222 3.56525 8.85243C3.51687 9.63502 3.83293 10.4395 4.41425 11.0208L7.94975 14.5563L1.26973 21.2363C0.879206 21.6269 0.879206 22.26 1.26973 22.6506C1.66025 23.0411 2.29342 23.0411 2.68394 22.6506L9.36397 15.9705L12.8995 19.5061C13.4808 20.0874 14.2853 20.4035 15.0679 20.3551C15.8881 20.3044 16.6966 19.839 17.0478 18.9065C17.6998 17.1755 17.3043 15.5086 16.9444 14.5375C16.9223 14.478 16.9212 14.4114 16.9355 14.3603C16.9421 14.337 16.9502 14.3231 16.9549 14.3165C16.9587 14.3112 16.9606 14.31 16.9611 14.3098L21.5177 11.4645C23.1546 10.4424 23.4147 8.16307 22.0501 6.79853L17.1218 1.87023ZM14.1523 3.46191C14.493 2.91629 15.2528 2.8296 15.7076 3.28445L20.6359 8.21274C21.0907 8.66759 21.0041 9.42737 20.4584 9.76806L15.9019 12.6133C14.9572 13.2032 14.7469 14.3637 15.0691 15.2327C15.3549 16.0037 15.5829 17.1217 15.1762 18.2015C15.1484 18.2752 15.1175 18.3018 15.0985 18.3149C15.0743 18.3316 15.0266 18.3538 14.9445 18.3589C14.767 18.3699 14.5135 18.2916 14.3137 18.0919L5.82846 9.6066C5.62872 9.40686 5.55046 9.15333 5.56144 8.97583C5.56651 8.8937 5.58877 8.84605 5.60548 8.82181C5.61855 8.80285 5.64516 8.7719 5.71886 8.74414C6.79869 8.33741 7.91661 8.56545 8.68762 8.85128C9.55668 9.17345 10.7171 8.96318 11.3071 8.01845L14.1523 3.46191Z" fill="#ffffff"></path> </g></svg>
            );
        } else {
            return(<svg onClick={pinToTop} className="pin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.1218 1.87023C15.7573 0.505682 13.4779 0.76575 12.4558 2.40261L9.75191 6.73289L11.1969 8.17793C11.2355 8.1273 11.2723 8.07415 11.3071 8.01845L14.1523 3.46191C14.493 2.91629 15.2528 2.8296 15.7076 3.28445L20.6359 8.21274C21.0907 8.66759 21.0041 9.42737 20.4584 9.76806L15.9019 12.6133C15.8462 12.6481 15.793 12.6848 15.7424 12.7234L17.1874 14.1684L21.5177 11.4645C23.1546 10.4424 23.4147 8.16307 22.0501 6.79852L17.1218 1.87023Z" fill="#ffffff"></path> <path d="M3.56525 8.85242C3.6015 8.26612 3.84962 7.68582 4.32883 7.27422L5.77735 8.72274C5.75784 8.72967 5.73835 8.7368 5.71886 8.74414C5.64516 8.7719 5.61855 8.80285 5.60548 8.82181C5.58877 8.84604 5.56651 8.8937 5.56144 8.97583C5.55046 9.15333 5.62872 9.40686 5.82846 9.6066L14.3137 18.0919C14.5135 18.2916 14.767 18.3699 14.9445 18.3589C15.0266 18.3538 15.0743 18.3316 15.0985 18.3149C15.1175 18.3018 15.1484 18.2752 15.1762 18.2015C15.1835 18.182 15.1907 18.1625 15.1976 18.143L16.6461 19.5915C16.2345 20.0707 15.6542 20.3188 15.0679 20.3551C14.2853 20.4035 13.4808 20.0874 12.8995 19.5061L9.36397 15.9705L2.68394 22.6506C2.29342 23.0411 1.66025 23.0411 1.26973 22.6506C0.879206 22.26 0.879206 21.6269 1.26973 21.2363L7.94975 14.5563L4.41425 11.0208C3.83293 10.4395 3.51687 9.63502 3.56525 8.85242Z" fill="#ffffff"></path> <path d="M2.00789 2.00786C1.61736 2.39838 1.61736 3.03155 2.00789 3.42207L20.5862 22.0004C20.9767 22.3909 21.6099 22.3909 22.0004 22.0004C22.391 21.6099 22.391 20.9767 22.0004 20.5862L3.4221 2.00786C3.03158 1.61733 2.39841 1.61733 2.00789 2.00786Z" fill="#ffffff"></path> </g></svg>);
        }
    }

    const changeMobileHeaderStatus = () => {
        if(canExecute === false) {
            return;
        } else {
        setCanExecute(false);
        setMobileHeadersStatus(
            {
                mobileMenu: !mobileHeadersStatus.mobileMenu,
                mobileMenuHeader: mobileHeadersStatus.mobileMenuHeader})
        setTimeout( () => {
            setMobileHeadersStatus(
            {
                mobileMenu: !mobileHeadersStatus.mobileMenu,
                mobileMenuHeader: !mobileHeadersStatus.mobileMenuHeader})
                setCanExecute(true);
        }, 955)
    }
    }

    const MobileMenuButton =  () => {
        let MobileClassName = `mobileMenuBar ${
            mobileHeadersStatus.mobileMenu && !mobileHeadersStatus.mobileMenuHeader ? '' : //STANDARD
            !mobileHeadersStatus.mobileMenu && !mobileHeadersStatus.mobileMenuHeader ? "disapearMob" : //AFTER CLICK EFFECT WILL APEAR
            !mobileHeadersStatus.mobileMenu && mobileHeadersStatus.mobileMenuHeader ? "hide" : "appear"
        }`;
        return(
            <div className={MobileClassName}>
                <h1>BistroBits</h1>
                <svg onClick={changeMobileHeaderStatus} className="image mobileMenuButton" fill="#ffffff" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 297.001 297.001" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M273.736,0.001H23.264C10.436,0.001,0,10.436,0,23.264v23.789C0,59.88,10.436,70.316,23.264,70.316h250.473 c12.827,0,23.264-10.435,23.264-23.263V23.264C297,10.436,286.564,0.001,273.736,0.001z"></path> <path d="M273.736,113.344H23.264C10.436,113.344,0,123.779,0,136.605v23.789c0,12.827,10.436,23.263,23.264,23.263h250.473 c12.827,0,23.264-10.435,23.264-23.263v-23.789C297,123.779,286.564,113.344,273.736,113.344z"></path> <path d="M273.736,226.686H23.264C10.436,226.686,0,237.121,0,249.949v23.789C0,286.565,10.436,297,23.264,297h250.473 C286.564,297,297,286.565,297,273.737v-23.789C297,237.121,286.564,226.686,273.736,226.686z"></path> </g> </g> </g> </g></svg>
            </div>
        );
    }


    let headerClassNamePerDevice;

    if(window.innerWidth > 768) {
        headerClassNamePerDevice = "header"; 
    } else {
        headerClassNamePerDevice = `header ${
            mobileHeadersStatus.mobileMenu && !mobileHeadersStatus.mobileMenuHeader ? 'hide' : //STANDARD
            !mobileHeadersStatus.mobileMenu && !mobileHeadersStatus.mobileMenuHeader ? "appear" : //AFTER CLICK EFFECT WILL APEAR
            !mobileHeadersStatus.mobileMenu && mobileHeadersStatus.mobileMenuHeader ? "" : "disapearMob"
    
        }`;
    }
    

    return(
        <>
        <MobileMenuButton/>
        <div className={headerClassNamePerDevice}>
            <div className="header_logo">
                <h1>BistroBits</h1>
                <p>Byte-Sized Bites, Big on Flavor</p>
            </div>
            <div className="nav">
                <nav className="nav_buttons">
                    <a onClick={() => {
                    handleLinkClick('aboutUs') 
                    changeMobileHeaderStatus();}}
                    className="button">About Us</a>

                    <a onClick={() => {
                    handleLinkClick('menu')
                    changeMobileHeaderStatus();}} 
                    className="button">Menu</a>

                    <a onClick={() => {handleLinkClick('specials')
                    changeMobileHeaderStatus();}} 
                    className="button">Specials</a>
                    <a onClick={() => {handleLinkClick('address')
                    changeMobileHeaderStatus();}} 
                    className="button">Address</a>
                </nav>
            </div>
            <Pin />
        </div>
        </>

    );
}
function Footer() {
    
    return(
        <>
        <div className="footer">
            <div className="header_logo">
                <h1>BistroBits</h1>
                <p>- Created by Oleksiy Kuleba -</p>
            </div>   
        </div>
        </>

    );
}


//CONTENT
function AboutUs({id}) {
    return(
        <div id={id} className="section">
            <div className="section_image">
            <svg className="image image-ef" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 14H12.01M12 11H12.01M5.63233 15.4206L8 14L6.19496 18.8134C5.61677 20.3553 6.75656 22 8.40325 22C9.36763 22 10.2349 21.4129 10.593 20.5175L12 17L13.407 20.5175C13.7651 21.4129 14.6324 22 15.5968 22C17.2434 22 18.3832 20.3553 17.805 18.8134L16 14L17.8239 15.0944C19.2217 15.933 21 14.9262 21 13.2961C21 12.5018 20.5512 11.7756 19.8407 11.4204L14.7705 8.88523C15.5283 8.15735 16 7.13376 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 7.12205 8.46199 8.13619 9.20614 8.86258L3.77397 12.484C3.29044 12.8064 3 13.3491 3 13.9302C3 15.2812 4.47385 16.1157 5.63233 15.4206Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </div>
            <div className="section_content">
                <h1 className="section_content-title">About Us</h1>
                <p className="section_content-description">Welcome to BistroBits, where every byte is a flavorful masterpiece! Our culinary code is crafted with care, featuring succulent steaks and pixel-perfect pastries. But the true stars? Our tender Bits of Meat, handpicked by our expert 'byte-sized' chefs. Join us for a legendary gastronomic adventure!</p>
            </div>
        </div>
    );
}

function Menu({id}) {
    return(
        <div id={id} className="section">
            <div className="section_image">
                <svg className="image image-ef" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="none" stroke="#ffffff" stroke-width="2" d="M19,18 L5,18 L19,18 Z M12,18 L12,12 L12,18 Z M15,18 L15,14 L15,18 Z M9,18 L9,14 L9,18 Z M19,22 L19,11.3292943 C20.1651924,10.9174579 21,9.80621883 21,8.5 C21,6.84314575 19.6568542,5.5 18,5.5 C17.6192862,5.5 17.2551359,5.57091725 16.9200387,5.7002623 C16.5495238,3.87433936 14.4600194,2 12,2 C9.53998063,2 7.45047616,3.87433936 7.07996126,5.7002623 C6.74486408,5.57091725 6.38071384,5.5 6,5.5 C4.34314575,5.5 3,6.84314575 3,8.5 C3,9.80621883 3.83480763,10.9174579 5,11.3292943 L5,22 L19,22 Z"></path> </g></svg>
            </div>
            <div className="section_content">
                <h1 className="section_content-title">Menu</h1>
            <ul>
                {meat_bits.map((element, index) => {
                    return(
                    <>  
                            <li className="list" key={index}>
                                <p>{element.product}</p>
                                <p className="price">{element.price}</p>
                            </li>
                    </>
                    );
                })}
            </ul>
            <p className="info">For $5, the drink is refillable in the restaurant.</p>
            </div>
        </div>
    );
}

function Specials({id}) {
    return(
        <div id={id} className="section">
            <div className="section_image">
                <svg className="image image-ef" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.245 4.174C11.4765 3.50808 11.5922 3.17513 11.7634 3.08285C11.9115 3.00298 12.0898 3.00298 12.238 3.08285C12.4091 3.17513 12.5248 3.50808 12.7563 4.174L14.2866 8.57639C14.3525 8.76592 14.3854 8.86068 14.4448 8.93125C14.4972 8.99359 14.5641 9.04218 14.6396 9.07278C14.725 9.10743 14.8253 9.10947 15.0259 9.11356L19.6857 9.20852C20.3906 9.22288 20.743 9.23007 20.8837 9.36432C21.0054 9.48051 21.0605 9.65014 21.0303 9.81569C20.9955 10.007 20.7146 10.2199 20.1528 10.6459L16.4387 13.4616C16.2788 13.5829 16.1989 13.6435 16.1501 13.7217C16.107 13.7909 16.0815 13.8695 16.0757 13.9507C16.0692 14.0427 16.0982 14.1387 16.1563 14.3308L17.506 18.7919C17.7101 19.4667 17.8122 19.8041 17.728 19.9793C17.6551 20.131 17.5108 20.2358 17.344 20.2583C17.1513 20.2842 16.862 20.0829 16.2833 19.6802L12.4576 17.0181C12.2929 16.9035 12.2106 16.8462 12.1211 16.8239C12.042 16.8043 11.9593 16.8043 11.8803 16.8239C11.7908 16.8462 11.7084 16.9035 11.5437 17.0181L7.71805 19.6802C7.13937 20.0829 6.85003 20.2842 6.65733 20.2583C6.49056 20.2358 6.34626 20.131 6.27337 19.9793C6.18915 19.8041 6.29123 19.4667 6.49538 18.7919L7.84503 14.3308C7.90313 14.1387 7.93218 14.0427 7.92564 13.9507C7.91986 13.8695 7.89432 13.7909 7.85123 13.7217C7.80246 13.6435 7.72251 13.5829 7.56262 13.4616L3.84858 10.6459C3.28678 10.2199 3.00588 10.007 2.97101 9.81569C2.94082 9.65014 2.99594 9.48051 3.11767 9.36432C3.25831 9.23007 3.61074 9.22289 4.31559 9.20852L8.9754 9.11356C9.176 9.10947 9.27631 9.10743 9.36177 9.07278C9.43726 9.04218 9.50414 8.99359 9.55657 8.93125C9.61593 8.86068 9.64887 8.76592 9.71475 8.57639L11.245 4.174Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </div>
            <div className="section_content">
                <h1 className="section_content-title">Specials</h1>
                <ul>
                {special_meat_bits.map((element, index) => {
                    return(
                    <>  
                            <li className="list" key={index}>
                                <div>
                                <p>{element.product}</p>
                                <p className="ProdDescription">{element.description}</p>
                                </div>
                                <p className="price">{element.price}</p>
                            </li>
                    </>
                    );
                })}
            </ul>
            <p className="info">For $5, the drink is refillable in the restaurant.</p>
            </div>
        </div>
    );
}

function Address({id}) {
    return(
        <div id={id} className="section">
            <div className="section_image">
                <svg className="image image-ef" viewBox="-3 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>pin_sharp_circle [#ffffff]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-183.000000, -5439.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M134,5287.635 C133.449,5287.635 133,5287.186 133,5286.635 C133,5286.084 133.449,5285.635 134,5285.635 C134.551,5285.635 135,5286.084 135,5286.635 C135,5287.186 134.551,5287.635 134,5287.635 M134,5283.635 C132.343,5283.635 131,5284.978 131,5286.635 C131,5288.292 132.343,5289.635 134,5289.635 C135.657,5289.635 137,5288.292 137,5286.635 C137,5284.978 135.657,5283.635 134,5283.635 M134,5296 C134,5296 129,5289 129,5286 C129,5283.243 131.243,5281 134,5281 C136.757,5281 139,5283.243 139,5286 C139,5289 134,5296 134,5296 M134,5279 C130.134,5279 127,5282.134 127,5286 C127,5289.866 134,5299 134,5299 C134,5299 141,5289.866 141,5286 C141,5282.134 137.866,5279 134,5279" id="pin_sharp_circle-[#ffffff]"> </path> </g> </g> </g> </g></svg>            
            </div>
            <div className="section_content">
                <h1 className="section_content-title">Address</h1>
                <p className="section_content-description">Visit us at <b>123 Maple Street, Greenhill Plaza, Cityville, USA</b>. We're right across from the charming City Park and just a stone's throw away from the bustling downtown district. Looking forward to welcoming you!</p>
            </div>
        </div>
    );
}