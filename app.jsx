/// DATA USED IN APP
const nav_links_data = [
    {   
        title : 'follow us on x',
        link: 'https://x.com/fLxtime1'
    },
    {   
        title : 'join Discord',
        link: 'https://discord.com/invite/KYJyxH42xk'
    },
    {   
        title : 'docs',
        link: 'https://flxtime.fun/docs/'
    },
    {   
        title : 'trade $FLXT',
        link: 'https://solscan.io/token/CwMuoD9nK6LEN6BwzLVZEmbuJXm8rXfzRGaM1YGim14h'
    }, 
]

const footer_links = [
    {   
        title : 'flex with us @FIxtime1',
        icon: './assets/icon/x.svg',
        link:'https://x.com/fLxtime1'
    },
    {   
        title : 'join the fun at discord',
        icon: './assets/icon/discord.svg',
        link:'https://discord.com/invite/KYJyxH42xk'
    },
    {   
        title : 'CA: CwMuoD9nK6LEN6BwzLVZEmbuJXm8rXfzRGaM1YGim14h',
        icon: './assets/icon/cre.svg',
       
    } 
]

const flex_cards = [
    {
      id: 1,
      title: "Rewards",
      description:
        "Submit proofs to the oracle, and you will be rewarded for valid submissions.",
      icon:"../assets/icon/rewards.svg", // Path to the image
    },
    {
      id: 2,
      title: "Community",
      description:
        "Be part of a global, fast-growing, and active Flexers community.",
      icon: "../assets/icon/union.svg", // Path to the image
    },
    {
      id: 3,
      title: "Multi-modal",
      description:
        "Choose where you want to mine. Use Crankk, ESP32-S3 Board, Docker, and more.",
      icon: "../assets/icon/cards.svg", // Path to the image
    },
];

const token_map = [
    {
        title : '70% mining rewards',
        icon : './assets/img/reward-img.png'
    },
    {
        title : '8% staking rewards',
        icon : './assets/img/stake-img.png'
    },
    {
        title : '2% airdrop',
        icon : './assets/img/airdrop-img.png'
    },
    {
        title : '10% partnerships',
        icon : './assets/img/partners-img.png'
    },
    {
        title : '5% founding team (3-years locked)',
        icon : './assets/img/community-img.png'
    },
    {
        title : '5% strategic reserves',
        icon : './assets/img/reserve-img.png'
    },
    {
        title : '10B total supply',
        icon : './assets/img/timeframe-img.png'
    }
]
  



///============== MAIN HOME PAGE COMPONENT
function App (){
    return(
        <div className="bg-[#003338] ">
            <div className=" flex flex-col relative gap-0 mx-0 w-full px-[1rem] sm:px-[2rem] min-[1500px]:px-0 min-[1500px]:w-[1300px] min-[1500px]:mx-auto">
                
                <NavBar />
                <HeroSection className='flex-1 py-4 w-full min-h-[82vh] my-4 sm:my-8 mt-2' />
                {/* <div className="h-[100vh] flex flex-col items-center py-4  gap-6 w-full">
                    
                    
                </div> */}
                <ProjectDesc className="my-4 sm:my-8"/>
                <Separator className="my-4 sm:my-8" />
                <Flexer className="my-4 sm:my-8" />
                <TokenomicsSection className="my-4 sm:my-8" />
                <StakeSection className="my-4 sm:my-8" />
                <Separator className="my-4 sm:my-8" />
                <Footer className="my-4 sm:my-8" />
            </div>
        </div>
    )
}



//=============== SECTIONS 

///NAVBAR 
// this is the top bar navigation section
function NavBar(){

    const[icon, setIcon] = React.useState('menu'); // stores BOXICON assign name for icons used in menu button

    ///handle menu open and close || switching of menu button icon
    // i'm only using icon value to conditionally display menu tray on small screens because of speed 
    const handleOpenMenu = () => setIcon(oldValue => oldValue === 'menu' ? 'x' : 'menu');
    

    return(
        <nav className="px-0 py-4 sticky top-0 left-auto z-50  w-full bg-[#003338]">
            <div className="flex justify-between items-center w-full">
                <a href="#" className="no-underline block">
                    <img src="../assets/img/Logo.png" alt="FlexTime logo - a decentralized mining platform" 
                        className="h-[1.5rem]"
                    />
                </a>
                <button type="button" onClick={handleOpenMenu}
                    className="capitalize font-bold text-sm p-0 text-white block md:hidden"
                >
                    <i className={`bx bx-${icon} bx-md`}></i>
                </button>
                <div className={`w-[105%]  md:w-fit h-[100vh] md:h-fit  flex flex-col p-4 md:p-0 absolute top-[100%] -right-[2.5%] md:relative md:flex-row md:top-0 md:right-0 gap-3 items-center items-center justify-center bg-[#003338] ${icon === 'menu' ? 'invisible' : 'visible'} md:visible transition-all duration-300 `}>
                    {nav_links_data.map(link => (<NavLink link={link.link} title={link.title} key={link.title} />))}
                    <FilledBtn title='console' href='https://console.flxtime.fun/' />
                </div>
            </div>
        </nav>
    )
}

///HERO SECTION
function HeroSection({className =''}){
    return(
        <section className={`w-full p-4 relative flex flex-col items-center justify-center bg-[#161616] rounded-[1.5rem] overflow-hidden  ${className}`}>

            <video 
                preload='auto'
                poster="../assets/img/hero-vid-poster.png"
                autoPlay 
                loop
                muted 
                playsInline
                className="h-full w-full min-w-full min-h-full object-cover  absolute z-[1]"
            >
                <source src="../assets/vids/hero-vid.mp4" type="video/mp4" />
                <div className="absolute inset-0 bg-[url('./assets/hero.png')] bg-no-repeat bg-cover bg-center opacity-60 rounded-[1.5rem]"></div>
            </video>
            <div className="absolute w-full h-full  z-[2] bg-[rgba(0,0,0)] opacity-40 rounded-[1.5rem]"></div>
            <div className="relative z-[3]">
                <h1 className="text-white text-6xl md:text-8xl text-center font-bold">FIxTime</h1>
                <h6 className="text-white text-lg md:text-2xl text-center">Make time more rewarding.</h6>
            </div>

            <a id="project-description" href="#project-description" className="block absolute bottom-4 z-10 animate-bounce text-[rgb(255,255,255)] no-underline">
                <span className="w-fit mx-auto block">
                    Learn more
                </span>
                <i className='bx bx-up-arrow-alt bx-rotate-180 text-sm mx-auto mb-2 block w-fit mx-auto' ></i>
            </a>
        </section>
    )
}

// Project Description
function ProjectDesc({className = ''}) {
  return (
    <section className={`h-fit flex items-stretch flex-col sm:flex-row gap-4 ${className}`}>
        <div className="bg-[#191B1A] rounded-[1.5rem] p-6 flex-1">
            
            <img src="../assets/img/circle-text.png" alt="circle-text" loading="lazy"
                className="w-[6rem] h-[6rem] object-center object-contain mb-4 ml-auto" 
            />
            <div className="flex flex-col items-start w-full gap-2 mb-2">
                <h1 className="text-[#29EEFF] text-4xl">FIxTime</h1>
                <h6 className="text-white">/ flex•time /</h6>
                <p className="text-[rgba(255,255,255,0.6)]">FlxTime is a project that allows miners (Flexers) to mine tokens using the method they want—via Crankk, ESP32-S3 board, Docker, and more.</p>
            </div>
        </div>
        <div className=" w-full sm:w-[30%] flex-none flex items-center justify-center p-4 rounded-[6vh] rounded-bl-[0.33rem] logo-wrapper ">
            <img src="../assets/img/colored-logo.png" alt="our logo" loading="lazy"
                className="w-auto h-[10rem] sm:w-full sm:h-auto object-contain object-center"
            />
        </div>
    </section>
  )
}

//  BECOME A FLEXER SECTION
function Flexer({className = ''}) {
    return(
        <div className={`flex flex-col gap-6 items-center ${className}`}>
            <h2 className=" text-2xl text-white w-fit text-center sm:text-left">Ready to become a Flexer ?</h2>
            <div className="flex gap-3 items-stretch justify-center flex-col sm:flex-row">
                {flex_cards.map(({description, id, icon, title})=>(<FlexerCard icon={icon} title={title} desc={description} key={id} />))}
            </div>
            <FilledBtn title='join FlexTime discord' icon="right-arrow-alt" href={'https://discord.com/invite/KYJyxH42xk'} />
        </div>
    )
}

// Tokenomics Section Component
function TokenomicsSection({className = ''}) {
    return (
      <section className={`bg-[#011208] text-white py-8 px-6 sm:p-8  lg:p-16  rounded-[1.5rem] ${className}`}>
        <div className="max-w-7xl mx-auto ">
          <div className="flex flex-col lg:flex-row gap-8 items-center overflow-hidden">
            <TokenomicsDescription className="flex-1 lg:flex-[40%]"/>
            <TokenomicsMap className="flex-1 lg:flex-[60%] py-3" />
          </div>
        </div>
      </section>
    );
}

// Stake Section Component
function StakeSection({className =''}) {
    return (
        <div className={`bg-[#191B1A] py-16 px-4 md:pl-16 md:px-8 h-fit relative rounded-[1.5rem] md:bg-[url('./assets/img/stack.png')]  md:bg-[length:auto_40%]  md:bg-contain bg-right bg-no-repeat ${className}`}>
            <div className="absolute inset-0 bg-[#191B1A]  mix-blend-screen rounded-[1.5rem]"></div>
            <h2 className="text-2xl font-bold mb-4 text-white">Stake your time</h2>
            <p className=" text-lg text-[rgba(255,255,255,0.8)]">
              Coming soon! Stake your $SAMPLE and earn more rewards.
            </p>
        </div>
    );
}
  
// Footer Component
function Footer({className=''}) {
    return (
        <footer className={`pt-8 pb-16 ${className=''}`}>
            <div className="max-w-7xl mx-auto text-left">
              <p className="text-sm text-white">FlxTime • 2024</p>
              <div className="flex flex-col justify-center items-start  mt-4 text-gray-400">
                {footer_links.map(link=>(<FooterLinks {...link} key={link.title} />))}
              </div>
            </div>
        </footer>
    );
}
  




//====CHILD COMPONENTS 

///NAV LINK
//nav link takes title of the link and the actual link
const NavLink= React.memo(({title, link})=>{
    if (link) {
        return(
            <a href={link}
                className="capitalize text-sm text-white no-underline block p-2 navlink"
                target="_blank"
            >   
                <span>{title}</span>
                {/* boxIcon is a third party icons package  */}
                <i className='bx bx-up-arrow-alt rotate-45 text-sm ml-1'></i>
            </a>
        )
    }
    else {
        return(
            <button onClick={()=>alert('SERVICE IS COMING SOON')}
                className="capitalize text-sm text-white no-underline block p-2 navlink"
            >   
                <span>{title}</span>
                {/* boxIcon is a third party icons package  */}
                <i className='bx bx-up-arrow-alt rotate-45 text-sm ml-1'></i>
            </button>
        )
    }
});

  
// Tokenomics Description Component
function TokenomicsDescription({className=''}) {
    return (
        <div className={`text-[rgba(255,255,255,0.8)] text-center lg:text-left ${className}`}>
            <h2 className="text-3xl font-bold mb-0 text-white">Tokenomics</h2>
            <p className="text-sm mb-4">/ flex-o-nomics /</p>
            <p className="mb-6 text-lg">
              $FLXT is the primary token of FlxTime for rewards and governance.
            </p>
            <FilledBtn title='read more in docs' icon="right-arrow-alt" className='mx-auto lg:mx-0'  href='https://flxtime.fun/docs/' />
        </div>
    );
}
  

  

///FILLED BUTTON
// icon is the name of the icon to be placed in the button  NOTE: all valid names are available at https://boxicons.com/
const FilledBtn = React.memo(({title, icon='', className ='', href='', onClick=''}) => {

    if (href){ return (
        <a href={href} target="_blank"
            className={`capitalize font-bold text-[#190D13] bg-[#29EEFF] text-sm flex gap-1 items-center justify-center py-2 px-4 rounded-[0.5rem] w-fit ${className}`}
        >
            <span>
                {title}
            </span>
            {icon && <i className={`bx bx-${icon} font-bold text-sm`}></i>}
        </a>
    )}
    else if(onClick){
        return(
            <button onClick={onClick}
            className={`capitalize font-bold text-[#190D13] bg-[#29EEFF] text-sm flex gap-1 items-center justify-center py-2 px-4 rounded-[0.5rem] w-fit ${className}`}
            >
                <span>
                    {title}
                </span>
                {icon && <i className={`bx bx-${icon} font-bold text-sm`}></i>}
            </button>
        )
    }
    
})

//FLEXER CARD
const FlexerCard = React.memo(({title, desc, icon})=>{
    return(
        <div className="bg-[#191B1A] w-full sm:w-[33%] md:w-[20%]  rounded-[1.5rem] px-4 py-8 flex flex-col gap-2 items-center justify-start">
            <img src={icon} alt={`${title} icon`} className="w-[2.5rem] h-[2.5rem] m-3 " loading="lazy" />
            <h6 className="text-2xl capitalize text-white text-center font-bold">{title}</h6>
            <p className="text-sm text-[rgba(255,255,255,0.6)] text-center">{desc}</p>
        </div>
    )
})

///SEPARATOR
const Separator = React.memo(({className =''})=>{
    return(
        <div className={`w-full h-[3rem] sm:h-[8rem] bg-[url('./assets/img/Separator.png')] bg-cover bg-no-repeat bg-center ${className}`}></div>
    )
})

// FOOTER LINKS 
function FooterLinks({title, icon, link}) {
    return(
        <a href={link} target="_blank" className="text-gray-400 hover:text-white group flex items-center gap-2 max-w-full">
            {icon && <img src={icon} className="w-[1.2rem] h-[1.2rem] object-contain  object-center"/>}
            <span className="text-ellipsis capitalize overflow-hidden text-nowrap">{title}</span>
        </a>
    )
}

/// TOKENOMICS DIAGRAM

/// MAIN MAP
function TokenomicsMap({className = ''}) {
    return(
        <div className={`flex items-center justify-center flex-col min-[580px]:flex-row -mb-[5rem] min-[580px]:mb-0 overflow-hidden gap-4 ${className}`}>
            <img src="./assets/img/coin-img.png" alt="our token" loading="lazy" 
                className=" w-[90%] h-auto min-[580px]:w-[14rem] min-[580px]:h-[14rem] object-contain object-center order-2 min-[580px]:order-1" 
            />
            <div className="flex flex-col gap-1 order-1 min-[580px]:order-2" >
                {
                    token_map.map(map=>(<MapPoint {...map} key={map.title} className='p-1' />))
                }
            </div>
        </div>
    )
}

/// MAP POINTS
function MapPoint({icon, title, className=''}) {
    return(
        <div className={`text-white capitalize flex items-center gap-4 w-fit p-2 transition duration-300 ${className}`}>
            <img src={icon} alt={`${title} icon`} className="w-[4rem] h-[4rem] object-contain object-center" loading="lazy" />
            <h6 className="text-base font-bold">
                {title}
            </h6>
        </div>
    )
}


///MOUNTS APP
ReactDOM.createRoot(document.getElementById('app')).render(<App />)