import React from 'react';

function Sidebar(props) {
  function logout()
  {
    window.localStorage.removeItem('uid')
  }
    return (
        <div>
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    {/* Brand Logo */}
    <a href="index3.html" className="brand-link">
      {/* <div className='box-logo'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlrZqTCInyg6RfYC7Ape20o-EWP1EN_A8fOA&usqp=CAU" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} /> 
      </div> */}
      <span className="brand-text font-weight-light">AdminLTE</span>
    </a>
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="https://www.speak2university.com/assets/admin/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
        </div>
        <div className="info">
          <a href="#" className="d-block">Alexander Pierce</a>
        </div>
      </div>
      {/* SidebarSearch Form */}
      <div className="form-inline">
        <div className="input-group" data-widget="sidebar-search">
          <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
          <div className="input-group-append">
            <button className="btn btn-sidebar">
              <i className="fas fa-search fa-fw" />
            </button>
          </div>
        </div>
      </div>
      {/* Sidebar Menu */}
      <a href='/login' onClick={logout}>logout</a>
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
          <li className="nav-item menu-open">
            <a href="#" className="nav-link active">
              <i className="nav-icon fas fa-tachometer-alt" />
              <p>
                Dashboard
                <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="./index.html" className="nav-link active">
                  <i className="far fa-circle nav-icon" />
                  <p>Dashboard v1</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/dash2" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Dashboard v2</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="./index3.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Dashboard v3</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="/form" className="nav-link">
              <i className="nav-icon fas fa-th" />
              <p>
                Blog
                <span className="right badge badge-danger">New</span>
              </p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/table_data" className="nav-link">
              <i className="nav-icon fas fa-th" />
              <p>
                Blog View
                <span className="right badge badge-danger">New</span>
              </p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/comment_table" className="nav-link">
              <i className="nav-icon fas fa-th" />
              <p>
                Commentedit
                <span className="right badge badge-danger">New</span>
              </p>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-table" />
              <p>
                Tables
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Simple Tables</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/table_data" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>DataTables</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/tables/jsgrid.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>jsGrid</p>
                </a>
              </li>
            </ul>
          </li>
         
        </ul>
      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside> 
</div>

    );
}

export default Sidebar;