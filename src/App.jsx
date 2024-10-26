import { useState,useEffect} from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './App.css';

function Page() {
  const [showLogIn,setShowLogIn]=useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const handleSignInClick = () => {
    setShowSignIn(true);
  };
    
  const closeSignInModal = () => {
      setShowSignIn(false);
     
  };

    const languageArray=[
        "5 popular Rust web frameworks—which one is right for you?",
        "From the simplicity of Poem to the full-featured speed of Actix, there's a Rust web framework for most every user and need.",
        "JAVA VS PHP: WHICH LANGUAGE TO CHOOSE?",
        "Choosing a programming language can be a major hurdle due to people lacking the necessary information to make the right decision.",
        "Dive into the world of an iOS  Developer – career, salary, and skills",
        "When it comes to developing iOS applications, there are two main programming languages that professionals use: Objective-C and Swift. Objective-C is a C language that has additional object-oriented design."
        ]
    
  return (
    <>      
      <Mistakes  onSignInClick={handleSignInClick}/>
    <Latest_posts>
        <Latest_posts_part_div  or1 = {1} or2 = {2} txt = {languageArray[1]} src = {"../src/assets/image 54 (3).png"} cls1 = {"txt_lang"} cls2 = {"lang_img"}>
            {languageArray[0]}
        </Latest_posts_part_div>

        <Latest_posts_part_div or1={2} or2={1} txt={languageArray[3]} src = {"../src/assets/image 55.png"}  cls1 = "txt_lang" cls2 = "lang_img">
            {languageArray[2]}
        </Latest_posts_part_div>

        <Latest_posts_part_div or1={1} or2={2} txt={languageArray[5]} src = "../src/assets/image 55 (1).png" cls1 = "txt_lang" cls2 = "lang_img">
            {languageArray[4]}
        </Latest_posts_part_div>
    </Latest_posts>

    <Our_values/>

    <SimpleSlider/>

    <Footer src="../src/assets/Group 47273.png"/>

    {showSignIn && <Sign_up_in_choice up_or_in="in" onClose={closeSignInModal} />}
    {showLogIn && <Sign_up_in_choice up_or_in="up" onClose={closeSignInModal} />}
    </>
    
  );
}

function EditImg({ width, height, src, borderRadius = 0, cls = null }) {
  return (
    <img
      className={cls}
      src={src}
      alt="Image"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: `${borderRadius}px`,
      }}
    />
  );
}

function Txt_p({ children, fontSize, fontFamily, fontWeight, cls }) {
  return (
    <p
      className={cls}
      style={{ fontSize:  `${fontSize}`, fontFamily: `${fontFamily}`, fontWeight: fontWeight }}
    >
      {children}
    </p>
  );
}

function Txt_h2({ children, fontSize, fontFamily, fontWeight, cls }) {
  return (
    <h2
      className={cls}
      style={{
        fontSize: `${fontSize}`,
        fontFamily: `${fontFamily}`,
        fontWeight: fontWeight,
      }}
    >
      {children}
    </h2>
  );
}

function Header({ sign = null, onSignInClick, }) {
  return (
      <header className='header'>
          <div className='Company_name_block'>
              <img src="../src/assets/Group 47273.png" alt="Company_name_logo"  id='Logotype' className='logo' />
          </div>

          <div className='children2Header'>
              <h3 id='Home'>Home</h3>
              <h3 id='Success'>Success Stories</h3>
              <h3 id='Services'>Services</h3>
              <h3 id='Blog'>Blog</h3>
              <h3 id="About">About us</h3>
              <h3 id='Career'>Career</h3>
          </div>

          {sign === "sign" ? (
              <div className='Sign_Up_In'>
                  <span className="sign Up">Sign Up</span>
                  <span className="sign in" onClick={onSignInClick}>Sign In</span>
              </div>
          ) : (
              <div className='user-block'>
                  <img src="../src/assets/jonas-kakaroto-KIPqvvTOC1s-unsplash 1 (1).png" alt="none" className='Adam_Sendler_img' />
                  <h3 className='Adam_Sendler'>Adam Sendler</h3>
              </div>
          )}
      </header>
  );
}

export function Mistakes({ onSignInClick }) {
  return (
      <>
          <Header sign="sign" onSignInClick={onSignInClick} />
          <section className='section1'>
              <div className='Left_Block_Mistakes'>
                  <p className='Xceed'>Xceed Blog</p>
                  <h1 className='ten_mistakes_h1'>
                      10 Web Design <br /> Mistakes and How to <br /> Avoid Them
                  </h1>
                  <p className='ten_mistakes_p'>
                      Looking for more daily inspiration? Download Muzli extension — 
                      <br />
                      your go-to source for discovering design ideas from world’s top creators!
                  </p>
                  <p className='Grey_link_mistakes'>
                      13.06, 2024 · 2:15 PM ·
                      <Link className='Must_be_grey'
                          to="https://medium.muz.li/10-web-design-mistakes-and-how-to-avoid-them-ab3c694d8bf4"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                          medium.muz.li
                      </Link>
                  </p>
              </div>
              <img width={"592px"} height={"386px"} src="../src/assets/image 54.png" alt="robo_hand" className='robo_hand' />
          </section>
      </>
  );
}

export function Latest_posts({ children, cls }) {
    return (
    <>
      <h2 className="Lp" id='lp'>Latest Posts</h2>
      <section className='section2 language_blocks'>
      {children}  
      </section>
    </>
  );
}
function Latest_posts_part_div({children,or1,or2,txt,src,cls1,cls2,})
{
  return (
    <>
    <div className='Language_block_for_programmers'>
    <div className='txt_block_programming' style={{order:`${or1}`}}>
    <Txt_h2 fontSize={32} fontFamily={"Poppins"} fontWeight={700} className={cls1}>
    {children}
     </Txt_h2>
    <p className="describe_opportunity">{txt}</p>
    </div>
    <EditImg width={448} height={231} src={src} borderRadius={"16px"} cls={cls2} style={{order:`${or2}`}}/>
    </div>

    </>
  );
}

export const data = [
  {
    src: "../src/assets/Frame 8622.png",
    h2value: "Courageous",
    pvalue:
      "We face challenges with determination, creativity and unwavering commitment. Bringing authenticity to our work every day is a principle we consistently follow.",
  },
  {
    src: "../src/assets/Frame 8623.png",
    h2value: "Cheerfulness",
    pvalue:
      "We inject energy, positivity and fun into every task - this is our approach. We strive to actively engage and inspire our colleagues, clients and communities - this is the foundation of our work.",
  },
  {
    src: "../src/assets/Frame 8620.png",
    h2value: "Empowerment",
    pvalue:
      "We take responsibility for solving problems and hold ourselves fiercely accountable for success. This commitment to accountability is both individual and collective.",
  },
];

export const data1 = [
  {   
    src: "../src/assets/image 54 (6).png",
    h2value: "Empowerment",
    pvalue:
      "We take responsibility for solving problems and hold ourselves fiercely accountable for success. This commitment to accountability is both individual and collective.",
  },
  {
    src: "../src/assets/Frame 8619.png",
    h2value: "Courageous",
    pvalue: "We face challenges with determination, creativity and unwavering commitment. Bringing authenticity to our work every day is a principle we consistently follow.",
  },
  {
    src: "../src/assets/image 54 (7).png",
    h2value:"Cheerfulness",
    pvalue:"We inject energy, positivity and fun into every task - this is our approach. We strive to actively engage and inspire our colleagues, clients and communities - this is the foundation of our work.",
  },
];
export const data2=[
  {   
    src: "../src/assets/Frame 8621.png",
    h2value: "Empowerment",
    pvalue:
      "We take responsibility for solving problems and hold ourselves fiercely accountable for success. This commitment to accountability is both individual and collective.",
  },
  {
    src: "../src/assets/image 54 (8).png",
    h2value: "Courageous",
    pvalue: "We face challenges with determination, creativity and unwavering commitment. Bringing authenticity to our work every day is a principle we consistently follow.",
  },
  {
    src: "../src/assets/Frame 8623 (1).png",
    h2value:"Cheerfulness",
    pvalue:"We inject energy, positivity and fun into every task - this is our approach. We strive to actively engage and inspire our colleagues, clients and communities - this is the foundation of our work.",
  },
]
function Our_values() {
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => setSelectedItem(item);

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className='Our_values'>
      <div className='Our_values_matrix'>
        {[...data, ...data1, ...data2].map((item, index) => (
          <Our_values_galery_onePart
            key={index}
            src={item.src}
            h2value={item.h2value}
            pvalue={item.pvalue}
            onViewMore={() => openModal(item)}
          />
        ))}
      </div>

      {selectedItem && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <Our_values_galery_onePart
              src={selectedItem.src}
              h2value={selectedItem.h2value}
              pvalue={selectedItem.pvalue}
            />
          </div>
        </div>
      )}
    </div>
  );
}

function Our_values_galery_onePart({ src, h2value, pvalue, onViewMore }) {
  return (
    <div className="card_block_galery" id="border">
      <Txt_h2 fontSize={24} fontFamily="Arial" fontWeight={600}>
        {h2value}
      </Txt_h2>
      <EditImg width={368} height={200} src={src} />
      <Txt_p fontSize={16} fontFamily="Arial" fontWeight={400}>
        {pvalue}
      </Txt_p>
      <button  className="View_more" onClick={onViewMore}>
        View More
      </button>
    </div>
  );
}
export  {Our_values};

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className="slider-wrapper">
      <Slider className='Sliders' {...settings}>
        <div className='scroll_div'>
          <h3 className='scrool_h3'>Printify Blog</h3>
          <EditImg width={782} height={313} src="../src/assets/image 55 (2).png" />
          <Link
            className='scroll_green_link'
            to="https://medium.muz.li/10-web-design-mistakes-and-how-to-avoid-them-ab3c694d8bf4"
            target="_blank"
            rel="noopener noreferrer"
          >
            See more
          </Link>
        </div>

        <div className='scroll_div'>
          <h3 className='scrool_h3'>Printify Blog</h3>
          <EditImg width={782} height={313} src="../src/assets/sven-ciupka-x8Vg7Up6TUc-unsplash 1 (3).png" />
          <Link
            className='scroll_green_link'
            to="https://medium.muz.li/10-web-design-mistakes-and-how-to-avoid-them-ab3c694d8bf4"
            target="_blank"
            rel="noopener noreferrer"
          >
            See more
          </Link>
        </div>

        <div className='scroll_div'>
          <h3 className='scrool_h3'>Printify Blog</h3>
          <EditImg width={782} height={313} src="../src/assets/image 54 (8).png" className="scroll_img" />
          <Link
            className='scroll_green_link'
            to="https://medium.muz.li/10-web-design-mistakes-and-how-to-avoid-them-ab3c694d8bf4"
            target="_blank"
            rel="noopener noreferrer"
          >
            See more
          </Link>
        </div>
      </Slider>
    </div>
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}

export  {SimpleSlider};
function Footer({src,cls=null})
{
  return (  

      <footer className='footer'> 
      <div className='footer_container_div'>

        <EditImg width={129} height={100} src={src} borderRadius={0} />
        <div className='Footer-info-block'>
            <p className='txt_footer_p'>Succces</p>
            <p className='txt_footer_p'>Home</p>
            <p className='txt_footer_p'>Services</p>
            <p className='txt_footer_p'>Blog</p>
            <p className='txt_footer_p'>About us</p>
            <p className='txt_footer_p'>Carrer</p>
        </div>

        <div className='footer_galery_container'>
              <img className='footer_icon_galery Dribbble_Fill' src="../src/assets/Dribbble Fill.png" alt="Dribble fill"/>
              <img className='footer_icon_galery Vector' src="../src/assets/Vector.png" alt="Vector" />
              <img className='footer_icon_galery Behance' src="../src/assets/Behance Fill.png" alt="Behance"/>
              <img className='footer_icon_galery instagram' src="../src/assets/Instagram Fill.png" alt="instagram" />
              <img className='footer_icon_galery facebook' src="../src/assets/Facebook Fill.png" alt="facebook" />
              <img className='footer_icon_galery telegram' src="../src/assets/Vector (3).png" alt="telegram" />  
        </div>
      </div>
    </footer>   
 
    )
}

export default function App() {
  return (
    <Router>
      <Page />
    </Router>
  );
}
function Sign_up_in_choice({up_or_in}){
 
  useEffect(() => {
    const Name = document.getElementById("Full_name");
    const mail = document.getElementById("mail");
    const password = document.getElementById("password");
  
    const handleNameInput = () => {
      localStorage.setItem("Name", Name.value);
    };
  
    const handleMailInput = () => {
      localStorage.setItem("mail", mail.value);
    };
  
    const handlePasswordInput = () => {
      localStorage.setItem("password", password.value);
    };
  
    Name.addEventListener("input", handleNameInput);
    mail.addEventListener("input", handleMailInput);
    password.addEventListener("input", handlePasswordInput);
  
    return () => {
      Name.removeEventListener("input", handleNameInput);
      mail.removeEventListener("input", handleMailInput);
      password.removeEventListener("input", handlePasswordInput);
    };
  }, []);
    
    
  
  return (
    <div className='shadow_screen_registraion'>
    {(up_or_in==="in") ? <div className='registrations'>
    <div className='div_with_exit'>
    <h1 className='h1_sign_in'>Sign In</h1>     
    <EditImg width={24} height={24} src="../src/assets/x-circle.png"/>
    </div>
    <div className='register_form_part1 register_part'>
    
      <label htmlFor="Full_name" className='Full_Name_label sign_label'>Full Name</label>
      <input  id="Full_name" classNames='name_surname_input input ' type="text" placeholder='Name Surname' />
      <label htmlFor="mail" className='Label_email sign_label'>Your Email</label> 
      <input id='mail' type='mail' className='Mail_input input' placeholder='Mail'/>
      </div> 

      <div className='register_part register_form_password'>
        <label htmlFor="password">Password</label>
        <input type="password" id='password' placeholder='Paswword' className='input password_input'/>
      </div>

      <div className='register_part  register_form_Phone'>
          <label htmlFor="phone">Your Phone</label>
          <input type="phone" placeholder='Phone' className='input_phone input' />

          <div className="Privacy_Policy">  
            <div className='flex-container-chekbox'>

              <input type="checkbox"/>
              <p className='agree_Policy'>Yes I have and agree to Privacy Policy</p>
            </div>
              <button className='View_more'>Sign in </button>
          </div>
          <div className='account_prompt_div'>
          <p className='account_prompt'>Already have an account</p>

            <span style={{color:"blue"}}>Log in</span>
        

          </div>
          </div>
    </div> : 

    <div className='shadow_screen_registraion'>
      <div className='registrations2'>
        <div className="div_with_exit">
            <h1 className='h1_sign_in'>Sign Up</h1>     
            <EditImg width={24} height={24} src="../src/assets/x-circle.png"/>
        </div>
     

    <div className='register_form_part1 register_part'>
        <label htmlFor="mail" className='Label_email sign_label'>Your Email</label> 
        <input id='mail' type='mail' className='Mail_input input' placeholder='Mail'/>
    </div> 

    <div className='register_part register_form_password'>
        <label htmlFor="password">Password</label>
        <input type="password" id='password' placeholder='Paswword' className='input password_input'/>
      </div>

        <button className='View_more'>
        Sign Up
        </button>
         
        <div className='account_prompt_div'>
          <p className='account_prompt'>Don`t have an account?</p>

          <Link className='Log_in'
              to="https://medium.muz.li/10-web-design-mistakes-and-how-to-avoid-them-ab3c694d8bf4"
              target="_blank"
              rel="noopener noreferrer"
            >Sign Up
          </Link>

          </div>
          </div>  
          </div>}

    </div>
  )
}
