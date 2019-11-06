import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavTitleWrapper = styled(Link)`
  display: block;
`;

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleMenuBar = () => setOpen(!isOpen);
  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <StyledNavTitleWrapper to="/" className=" navbar-item">
              <strong>Fidel Ramadhan</strong>
              &nbsp;
              <p>Portfolio</p>
            </StyledNavTitleWrapper>
            <button
              type="button"
              onClick={e => toggleMenuBar(e)}
              className={`navbar-burger ${isOpen ? 'is-active' : ''}`}
              aria-label="menu"
              aria-expanded="false"
              style={{
                background: 'none',
                border: 'none',
                outline: 'none',
              }}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>
          <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
            <Link className="navbar-item" to="/home" onClick={() => toggleMenuBar()}>
              Home
            </Link>
            <a
              className="navbar-item has-text-danger"
              href="https://www.fidelramadhan.com"
              onClick={() => toggleMenuBar()}
            >
              Visit FidelRamadhan.com
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
