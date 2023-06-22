import PMlogo from './assets/PMlogo.png';

export default function Header() {
  return (
    <nav className="navbar bg-light mb-4 p-0">
        <div className="container">
            <a className="navbar-brand" href="/">
                <div className="d-flex">
                    <img src={PMlogo} alt="PMlogo" className="mr-2" />
                    <div>ProjectManagement</div>
                </div>
            </a>
        </div>
    </nav>
  )
}
