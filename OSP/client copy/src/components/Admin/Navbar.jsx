const Navbar = () => {
    return ( 
        <>

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Dashboard</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Add Scholarship</a>
                        </li>
                        
                       
                    </ul>
                    <form className="d-flex" role="search">
                        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
                        <button type="button" className="btn btn-primary">Logout</button>
                    </form>
                </div>
            </div>
        </nav>

        <div className="jumbotron">
            <br /><br /><br />
            <br /><br /><br />
  <h1 className="display-4">Welcome back Admin!</h1>
  <p className="lead"></p>
  {/* <hr className="my-4"/> */}
  {/* <p>It uses utility classes for typography and spacing to space content out within the larger container.</p> */}
  {/* <a className="btn btn-primary btn-lg" href="#" role="button">Manage Scholarship</a> */}
</div>
    </>
     );
}
 
export default Navbar;