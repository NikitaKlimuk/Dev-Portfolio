import "./styles.scss";

const ContactsPage = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Warsaw, Poland</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram / Mobile</h2>
            <p>
              <a href="tel:+79051234567">+48 514 060 233</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:webdev@protonmail.com">
                nikitaklimukjs@gmail.com
              </a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default ContactsPage;
