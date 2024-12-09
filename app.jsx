/// DUMMY DATA USED IN APP
const nav_links_data = [
    {   
        title : 'follow us on x',
        link: 'https://x.com'
    },
    {   
        title : 'join Discord',
        link: 'https://x.com'
    },
    {   
        title : 'docs',
        link: 'https://x.com'
    },
    {   
        title : 'trade $SAMPLE',
        link: 'https://x.com'
    }, 
]

const footer_links = [
    {   
        title : 'flex with us @FIxtime1',
        icon: '/assets/icon/x.svg',
        link:'#'
    },
    {   
        title : 'join the fun at discord',
        icon: '/assets/icon/discord.svg',
        link:'#'
    },
    {   
        title : 'CA: SampleCAxFLXxiVnRP8NtvhXzMNFCxE1HaYzdV9x7',
        icon: '/assets/icon/cre.svg',
        link:'#'
    } 
]

const flex_cards = [
    {
      id: 1,
      title: "Rewards",
      description:
        "Submit proofs to the oracle, and you will be rewarded for valid submissions.",
      icon:"./assets/icon/rewards.svg", // Path to the image
    },
    {
      id: 2,
      title: "Community",
      description:
        "Be part of a global, fast-growing, and active Flexers community.",
      icon: "./assets/icon/union.svg", // Path to the image
    },
    {
      id: 3,
      title: "Multi-modal",
      description:
        "Choose where you want to mine. Use Crankk, ESP32-S3 Board, Docker, and more.",
      icon: "./assets/icon/cards.svg", // Path to the image
    },
];
  



///============== MAIN HOME PAGE COMPONENT
function App (){
    return(
        <div className="bg-[#003338] ">
            <div className="flex flex-col relative gap-6 mx-0 w-full px-[8vw] min-[1500px]:px-0 min-[1500px]:w-[1300px] min-[1500px]:mx-auto">
                
                <div className="h-[100vh] flex flex-col items-center py-4  gap-6 w-full">
                    <NavBar />
                    <HeroSection className='flex-1' />
                </div>
                <ProjectDesc />
                <Separator />
                <Flexer />
                <TokenomicsSection />
                <StakeSection />
                <Separator />
                <Footer />
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
        <nav className="px-0 py-4 flex justify-between items-center sticky top-0 left-auto z-50  w-full bg-[#003338]">
            <a href="#" className="text-xl text-white no-underline font-bold block">FIxTime</a>
            <button type="button" onClick={handleOpenMenu}
                className="capitalize font-bold text-sm p-4 text-white block md:hidden"
            >
                <i className={`bx bx-${icon} font-bold text-sm`}></i>
            </button>
            <div className={`w-fit flex flex-col p-4 md:p-0 absolute top-[100%] right-0 md:relative md:flex-row md:top-0 gap-3 items-center items-center bg-[#003338] ${icon === 'menu' ? 'invisible' : 'visible'} md:visible transition-all duration-300 `}>
                {nav_links_data.map(link => (<NavLink link={link.link} title={link.title} key={link.title} />))}
                <FilledBtn title='console' onClick={()=>alert('action unavailable')} />
            </div>
        </nav>
    )
}

///HERO SECTION
function HeroSection({className =''}){
    return(
        <section className={`w-full p-4 relative flex flex-col items-center justify-center bg-[#161616] rounded-[1.5rem]  ${className}`}>
             <div class="absolute inset-0 bg-[url('/assets/hero.png')] bg-no-repeat bg-cover bg-center opacity-60 rounded-[1.5rem]"></div>
            <h1 className="text-white text-6xl text-center font-bold">FIxTime</h1>
            <h6 className="text-white text-lg text-center">Make time more rewarding.</h6>

            <a href="#projectDesc" className="block absolute bottom-4 z-10 animate-bounce text-[rgba(255,255,255,0.8)] no-underline">
                <span className="w-fit mx-auto block">
                    Learn more
                </span>
                <i className='bx bx-up-arrow-alt bx-rotate-180 text-sm mx-auto mb-2 block w-fit mx-auto' ></i>
            </a>
        </section>
    )
}

// Project Description
function ProjectDesc() {
  return (
    <section id="projectDesc" className="h-fit flex items-center flex-col sm:flex-row">
        <div className="bg-[#191B1A] rounded-[1.5rem] p-6 h-fit flex-1 order-2 sm:order-1">
            
            <img src="./assets/circle-text.png" alt="circle-text" 
                className="w-[6rem] h-[6rem] object-center object-contain mb-4 ml-auto" 
            />
            <div className="flex flex-col items-start w-full gap-2 mb-2">
                <h1 className="text-[#29EEFF] text-4xl">FIxTime</h1>
                <h6 className="text-white">/ flex•time /</h6>
                <p className="text-[rgba(255,255,255,0.6)]">FlxTime is a project that allows miners (Flexers) to mine tokens using the method they want—via Crankk, ESP32-S3 board, Docker, and more.</p>
            </div>
        </div>
        <div className="px-[6rem] p-4 order-1 sm:order-2">
            <h1 className="text-3xl font-bold text-white">FIxTime</h1>
        </div>
    </section>
  )
}

//  BECOME A FLEXER SECTION
function Flexer() {
    return(
        <div className="flex flex-col gap-4 items-center py-4">
            <h2 className=" text-2xl text-white w-fit">Ready to become a Flexer ?</h2>
            <div className="flex gap-3 items-stretch justify-center flex-col sm:flex-row">
                {flex_cards.map(({description, id, icon, title})=>(<FlexerCard icon={icon} title={title} desc={description} key={id} />))}
            </div>
            <FilledBtn title='join FlexTime discord' icon="right-arrow-alt" />
        </div>
    )
}

// Tokenomics Section Component
function TokenomicsSection() {
    return (
      <section className="bg-[#011208] text-white p-6 sm:p-8  md:p-16  rounded-[1.5rem]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <TokenomicsDescription />
            <TokenomicsDiagram />
          </div>
        </div>
      </section>
    );
}

// Stake Section Component
function StakeSection() {
    return (
        <div className="bg-[#191B1A] py-16 px-4 md:pl-16 md:px-8 h-fit relative rounded-[1.5rem] bg-[url('/assets/stack.png')] bg-[30%] bg-[length:auto_40%]  md:bg-contain bg-right bg-no-repeat">
            <div class="absolute inset-0 bg-[#191B1A]  mix-blend-screen rounded-[1.5rem]"></div>
            <h2 className="text-2xl font-bold mb-4 text-white">Stake your time</h2>
            <p className=" text-lg text-[rgba(255,255,255,0.8)]">
              Coming soon! Stake your $SAMPLE and earn more rewards.
            </p>
        </div>
    );
}
  
// Footer Component
function Footer() {
    return (
        <footer className="py-8">
            <div className="max-w-7xl mx-auto px-6 text-left">
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
function NavLink({title, link}){
    return(
        <a href={link}
            className="capitalize text-sm text-white no-underline block p-2"
        >   
            <span>{title}</span>
            {/* boxIcon is a third party icons package  */}
            <i className='bx bx-up-arrow-alt rotate-45 text-sm ml-2'></i>
        </a>
    )
}

  
// Tokenomics Description Component
function TokenomicsDescription() {
    return (
        <div className="text-[rgba(255,255,255,0.8)] text-center sm:text-left">
            <h2 className="text-3xl font-bold mb-0 text-white">Tokenomics</h2>
            <p className="text-sm mb-4">/ flex-o-nomics /</p>
            <p className="mb-6 text-lg">
              $SAMPLE is the primary token of FlxTime for rewards and governance.
            </p>
            <FilledBtn title='read more in docs' icon="right-arrow-alt" className='mx-auto mx-0' />
        </div>
    );
}
  
// Tokenomics Diagram Component (Image Slot)
function TokenomicsDiagram() {
    return (
        <div className="relative flex justify-center items-center">
          <img
            src="/assets/tokenomics.png"
            alt="Tokenomics Diagram"
            className="w-full h-auto sm:w-64 sm:h-64 object-contain"
          />
        </div>
    );
}


  

///FILLED BUTTON
// icon is the name of the icon to be placed in the button  NOTE: all valid names are available at https://boxicons.com/
function FilledBtn({title, icon='', className ='', onClick}){
    return(
        <button type="button" onClick={onClick}
            className={`capitalize font-bold text-[#190D13] bg-[#29EEFF] text-sm flex gap-1 items-center justify-center py-2 px-4 rounded-[0.5rem] ${className}`}
        >
            <span>
                {title}
            </span>
            {icon && <i className={`bx bx-${icon} font-bold text-sm`}></i>}
        </button>
    )
}

//FLEXER CARD
function FlexerCard({title, desc, icon}) {
    return(
        <div className="bg-[#191B1A] w-full sm:w-[33%] md:w-[20%]  rounded-[1.5rem] px-4 py-6 flex flex-col gap-2 items-center justify-center">
            <img src={icon} alt={`${title} icon`} className="w-[1.2rem] h-[1.2rem]" />
            <h6 className="text-base capitalize text-white text-center font-bold">{title}</h6>
            <p className="text-xs text-[rgba(255,255,255,0.6)] text-center">{desc}</p>
        </div>
    )
}

///SEPARATOR
function Separator() {
    return(
        <div className="w-full h-[8rem] bg-[url('/assets/Separator.png')] bg-cover bg-no-repeat bg-center"></div>
    )
}

// FOOTER LINKS 
function FooterLinks({title, icon, link}) {
    return(
        <a href={link} className="text-gray-400 hover:text-white group flex items-center gap-2 max-w-full">
            {icon && <img src={icon} className="w-[1.2rem] h-[1.2rem] object-contain  object-center"/>}
            <span className="text-ellipsis overflow-hidden">{title}</span>
        </a>
    )
}

///MOUNTS APP
ReactDOM.createRoot(document.getElementById('app')).render(<App />)