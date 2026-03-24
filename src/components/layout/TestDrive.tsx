const TestDrive = () => {
  return (
    <section className="test-drive-section">
      <div className="test-drive-container">
        <h2 className="test-drive-title">Užsisakykite bandomąjį važiavimą</h2>
        <div className="test-drive-content">
          <div className="test-drive-card">
            <a href="/test-ride" className="test-drive-link">
              <button className="test-drive-button">
                <span className="button-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.16732 12.8342H15.4757L11.409 16.9009C11.084 17.2259 11.084 17.7592 11.409 18.0842C11.734 18.4092 12.259 18.4092 12.584 18.0842L18.0757 12.5926C18.4007 12.2676 18.4007 11.7426 18.0757 11.4176L12.5923 5.91758C12.2673 5.59258 11.7423 5.59258 11.4173 5.91758C11.0923 6.24258 11.0923 6.76758 11.4173 7.09258L15.4757 11.1676H6.16732C5.70898 11.1676 5.33398 11.5426 5.33398 12.0009C5.33398 12.4592 5.70898 12.8342 6.16732 12.8342Z" fill="#121212"></path>
                  </svg>
                </span>
                <span className="button-text">Užsisakyk dabar</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestDrive