import { useState } from 'react';
import { downloadUrl, navigation } from './config';

const A = '/assets/';

function Brand({ light = false }: { light?: boolean }) {
  return <a className={`brand ${light ? 'brand-light' : ''}`} href="#top" aria-label="DiveMind home"><img src={`${A}app-icon.png`} alt="" /><span>DiveMind</span></a>;
}

function DownloadButton() {
  const label = <><span className="store-icon" aria-hidden="true">↓</span><strong>Download app</strong></>;
  return downloadUrl
    ? <a className="store-button store-button-primary download-button" href={downloadUrl} target="_blank" rel="noopener noreferrer">{label}</a>
    : <button className="store-button store-button-primary download-button" type="button" disabled>{label}</button>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="container header-inner">
    <Brand />
    <nav className={`header-nav ${open ? 'is-open' : ''}`} aria-label="Main navigation">{navigation.map(item => <a onClick={() => setOpen(false)} href={item.href} key={item.href}>{item.label}</a>)}<a className="mobile-download" onClick={() => setOpen(false)} href="#download">Download app <span aria-hidden="true">↗</span></a></nav>
    <a className="header-cta" href="#download">Download app <span aria-hidden="true">↗</span></a>
    <button className="menu-button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button>
  </div></header>;
}

const games = [
  { name: 'Rewind', skill: 'MEMORY', file: 'rewind_card.svg', color: '#8B7BC7' },
  { name: 'Ink Match', skill: 'FOCUS', file: 'ink_match_card.svg', color: '#5B8FBF' },
  { name: 'Grid Detective', skill: 'LOGIC', file: 'grid_detective_card.svg', color: '#6B7BC7' },
  { name: 'Math Story', skill: 'MATH', file: 'math_story_card.svg', color: '#C98A5E' },
  { name: 'School of Fish', skill: 'PERCEPTION', file: 'school_of_fish_card.svg', color: '#6FA87E' },
  { name: 'Lane Driver', skill: 'SPEED', file: 'lane_driver_card.svg', color: '#D4A93C' },
];

function AppScreen({ type, className = '' }: { type: 'home' | 'play' | 'profile'; className?: string }) {
  return <div className={`phone ${className}`}><div className="phone-screen">
    <div className="phone-status"><span>9:41</span><span>●●● ▰</span></div>
    {type === 'home' && <div className="screen-content">
      <div className="screen-top"><span className="screen-kicker">YOUR HARBOR</span><span className="screen-avatar">✦</span></div>
      <h3>Good to see you<br />back.</h3><p className="screen-muted">A little progress, one dive at a time.</p>
      <div className="screen-dive"><div className="screen-dive-sky"><span className="screen-sun" /><span className="screen-boat">◢</span><span className="screen-wave" /></div><div className="screen-dive-body"><span className="screen-kicker">TODAY'S DIVE</span><h4>A new journey awaits.</h4><p>Short games, a fresh mix, your pace.</p><div className="screen-progress"><span /></div><span className="screen-action">Start today's dive <b>→</b></span></div></div>
      <div className="screen-small-row"><span>◌ &nbsp; Your week</span><span>View report →</span></div>
    </div>}
    {type === 'play' && <div className="screen-content"><span className="screen-kicker">THE LIBRARY</span><h3>Find your next<br />challenge.</h3><p className="screen-muted">Explore games across six skills.</p><div className="screen-game-list">{games.slice(0,4).map(g => <div className="screen-game" key={g.name}><img src={`${A}games/${g.file}`} alt="" /><div><small style={{ color: g.color }}>{g.skill}</small><strong>{g.name}</strong></div><span>↗</span></div>)}</div></div>}
    {type === 'profile' && <div className="screen-content"><span className="screen-kicker">YOUR PROFILE</span><h3>See how far<br />you've come.</h3><p className="screen-muted">Every session adds to the picture.</p><div className="screen-chart"><span className="screen-kicker">YOUR SEA CHART</span><div className="chart-art"><svg viewBox="0 0 260 180" role="img" aria-label="Illustration of a six-skill sea chart"><polygon points="130,14 220,55 220,130 130,170 40,130 40,55" fill="none" stroke="#35505a"/><polygon points="130,44 190,70 196,119 130,147 70,122 65,72" fill="#187f92" fillOpacity=".45" stroke="#35c0d4" strokeWidth="2"/><path d="M130 14V170M40 55l180 75M220 55L40 130" stroke="#35505a" /></svg></div><div className="screen-chart-footer"><span>Memory</span><span>Focus</span><span>Logic</span></div></div></div>}
    <div className="screen-bottom"><span className={type === 'home' ? 'active' : ''}>⌂<small>Home</small></span><span className={type === 'play' ? 'active' : ''}>▦<small>Play</small></span><span className={type === 'profile' ? 'active' : ''}>◉<small>Profile</small></span></div>
  </div></div>;
}

function Hero() {
  return <section className="hero" id="top"><div className="hero-horizon" /><div className="container hero-grid"><div className="hero-copy"><div className="eyebrow"><span className="eyebrow-line" /> A BETTER DAILY RITUAL</div><h1>Take a moment.<br /><em>Go deeper.</em></h1><p className="hero-lead">DiveMind turns brain training into a calm daily journey. Explore playful challenges, follow your progress, and keep coming back for your next dive.</p><div className="hero-actions"><DownloadButton /></div><p className="availability">Built for Android and iOS</p></div><div className="hero-visual" aria-label="DiveMind app interface previews"><div className="visual-caption visual-caption-top">01 / YOUR DAILY DIVE</div><AppScreen type="home" className="hero-phone-main" /><AppScreen type="play" className="hero-phone-back" /><div className="visual-caption visual-caption-bottom">A FRESH ROUTE THROUGH SIX SKILLS <span>↗</span></div></div></div><div className="container hero-bottom"><span>SCROLL TO EXPLORE <b>↓</b></span><span>MEMORY &nbsp;•&nbsp; FOCUS &nbsp;•&nbsp; LOGIC &nbsp;•&nbsp; MORE</span></div></section>;
}

function Intro() {
  return <section className="intro section" id="app"><div className="container intro-grid"><div><p className="section-label">THE IDEA</p><h2>Brain training with<br /><em>room to breathe.</em></h2></div><div className="intro-right"><p>Some days call for a quick challenge. Others call for a longer journey. DiveMind gives you a welcoming place to play, practice, and notice your growth.</p><a className="text-link" href="#features">Explore what’s inside <span>↗</span></a></div></div><div className="container stat-strip"><div><strong>6</strong><span>skills to explore</span></div><div><strong>Daily</strong><span>a fresh dive to return to</span></div><div><strong>Your pace</strong><span>progress without pressure</span></div></div></section>;
}

function Features() {
  return <section className="features section" id="features"><div className="container"><div className="section-heading"><div><p className="section-label">WHAT'S INSIDE</p><h2>More ways to<br /><em>stretch your mind.</em></h2></div><p>Each visit offers something different, while your progress stays connected across the journey.</p></div><div className="feature-layout"><article className="feature-large"><div className="feature-copy"><span className="feature-number">01 / DAILY DIVE</span><h3>A small journey,<br />ready every day.</h3><p>Open a curated set of games, move from one challenge to the next, and make a little progress in a sitting that fits your day.</p></div><div className="feature-visual feature-dive"><div className="dive-card-mini"><span className="mini-sun" /><span className="mini-wave" /><div><small>TODAY'S DIVE</small><strong>Your next dive is ready</strong><span className="mini-progress"><i /></span></div></div></div></article><article className="feature-small"><span className="feature-number">02 / THE LIBRARY</span><h3>Follow your curiosity.</h3><p>Browse challenges across Memory, Focus, Logic, Math, Perception, and Speed. There is always a different way in.</p><div className="skill-icons">{games.map(g => <img key={g.name} src={`${A}games/${g.file}`} alt={g.name} loading="lazy" />)}</div></article><article className="feature-wide"><div><span className="feature-number">03 / YOUR PROGRESS</span><h3>See your own pattern emerge.</h3><p>Your profile brings your skills, achievements, and streak together. Look back at the week and see the progress behind every session.</p></div><div className="feature-wide-art"><div className="feature-line" /><span>MEMORY</span><div className="bar"><i style={{ width: '71%', background: '#8B7BC7' }} /></div><span>FOCUS</span><div className="bar"><i style={{ width: '84%', background: '#5B8FBF' }} /></div><span>LOGIC</span><div className="bar"><i style={{ width: '60%', background: '#6B7BC7' }} /></div></div></article></div></div></section>;
}

function Showcase() {
  return <section className="showcase section" id="showcase"><div className="container"><div className="showcase-heading"><p className="section-label">A LOOK INSIDE</p><h2>From first tap<br />to your next milestone.</h2><p>Every part of DiveMind belongs to the same quiet, colorful world.</p></div><div className="showcase-phones"><div className="showcase-item"><AppScreen type="home" /><span>01 <b>Make a daily dive</b></span></div><div className="showcase-item showcase-middle"><AppScreen type="play" /><span>02 <b>Explore the library</b></span></div><div className="showcase-item"><AppScreen type="profile" /><span>03 <b>See your progress</b></span></div></div><p className="preview-note">Interface previews based on the mobile app’s screen components. Actual in-app artwork is used throughout.</p></div></section>;
}

function Capture() {
  return <section className="capture section"><div className="container capture-grid"><div className="capture-copy"><p className="section-label">FROM THE REAL APP</p><h2>Little details make<br /><em>the journey yours.</em></h2><p>The Daily Challenge has its own ocean scene, route markers, and calm teal controls. This image is a direct capture from the app’s visual tests.</p><div className="capture-detail"><span>↗</span><div><strong>Made to feel welcoming</strong><p>Thoughtful feedback, clear next steps, and a visual language that stays gentle even during a challenge.</p></div></div></div><div className="capture-image-wrap"><img src={`${A}daily-challenge-capture.png`} alt="Actual visual test capture of the DiveMind Daily Challenge card with ocean artwork, route markers, and teal action button" loading="lazy" /><span>DAILY CHALLENGE / TEST CAPTURE</span></div></div></section>;
}

function HowItWorks() {
  const steps = [
    ['01', 'Choose your dive', 'Start with today’s guided journey or pick a game from the library.'],
    ['02', 'Play at your pace', 'Move through short challenges across the skills you want to practice.'],
    ['03', 'See the journey', 'Return to your profile, weekly view, and achievements to see how you’re growing.'],
  ];
  return <section className="how section" id="how-it-works"><div className="container"><p className="section-label">SIMPLE BY DESIGN</p><div className="how-top"><h2>Just begin.<br /><em>The rest unfolds.</em></h2><p>A daily habit should feel easy to enter and satisfying to return to.</p></div><div className="steps">{steps.map(([n,title,desc]) => <div className="step" key={n}><span>{n}</span><div><h3>{title}</h3><p>{desc}</p></div><b aria-hidden="true">↗</b></div>)}</div></div></section>;
}

function Closing() {
  return <section className="closing" id="download"><div className="container closing-inner"><img src={`${A}app-icon.png`} alt="" /><p className="section-label">YOUR NEXT DIVE STARTS HERE</p><h2>Make space for<br /><em>a sharper you.</em></h2><p>Play a little. Discover a lot. DiveMind is preparing for release.</p>{/* Previous Google Play and App Store download buttons removed. */}<div className="closing-actions"><DownloadButton /></div>{!downloadUrl && <span className="release-note">Download link coming soon.</span>}</div></section>;
}

function Footer() {
  return <footer className="footer"><div className="container footer-main"><div><Brand light /><p>A calmer way to challenge your mind, one dive at a time.</p></div><div><strong>EXPLORE</strong><a href="#app">The app</a><a href="#features">Features</a><a href="#showcase">Inside DiveMind</a><a href="#how-it-works">How it works</a></div><div><strong>GET THE APP</strong><a href="#download">Download app</a><a href="/privacy.html">Privacy policy</a><a href="/delete-account.html">Delete account</a></div></div><div className="container footer-bottom"><span>© 2026 DiveMind. All rights reserved.</span><span>TAKE A MOMENT. GO DEEPER.</span></div></footer>;
}

export default function App() { return <><Header /><main><Hero /><Intro /><Features /><Showcase /><Capture /><HowItWorks /><Closing /></main><Footer /></>; }
