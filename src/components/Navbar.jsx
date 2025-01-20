const Navbar = () => {
  const routers = [
    { name: '相關連結', url: 'google.com.tw' },
    { name: '相關連結', url: 'google.com.tw' },
    { name: '相關連結', url: 'google.com.tw' },
    { name: '相關連結', url: 'google.com.tw' },
  ];

  return (
    <nav className='nav container mt-5'>
      <h1 className='nav__logo'>網頁標題</h1>
      <section className='nav__container'>
        <ul className='nav__links'>
          {routers.map((router, index) => (
            <li key={index}>
              <a href={router.url}>{router.name}</a>
            </li>
          ))}
        </ul>

        <ul className='nav__btns'>
          <li>
            <a className='block-btn block-btn--gradient' href='#'>
              Sign in
            </a>
          </li>
          <li>
            <a className='block-btn' href='#'>
              Sign Up
            </a>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
