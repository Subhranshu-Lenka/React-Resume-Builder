function MainFooter() {
  return (
    <>
      <footer className="min-h-[24vh] h-[40vh] px-[18%]">
        <div className="quick-links-section py-[5vh]">
          {/* */}
          <nav className="grid grid-cols-3 text-[16px]">
            <div className="links">
              <h4 className="text-xl font-bold mb-3">ResumeForge</h4>
              <ul className="space-y-2">
                <li>Building careers, one resume at a time.</li>
              </ul>
            </div>
            <div className="links">
              <h4 className="text-xl font-bold mb-3">Quick Links</h4>
              <ul className="space-y-2">
                <li>Templates</li>
                <li>Resume Builder</li>
                <li>Cover Letter</li>
                <li>Career Tips</li>
              </ul>
            </div>
            <div className="links">
              <h4 className="text-xl font-bold mb-3">Support</h4>
              <ul className="space-y-2">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>FAQ</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </nav>
        </div>
        <hr className="mb-[2%] border-0 border-t-[0.3px] border-gray-500" />
        <p className="text-center py-4 copyright">
          © 2025 ResumeForge. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default MainFooter;
