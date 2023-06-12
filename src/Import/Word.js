import React, { useState } from 'react';

function EmailCounter() {
  const [emailCount, setEmailCount] = useState(0);
  const [emails, setEmails] = useState([]);

  // function to handle file selection
  function handleFileSelection(event) {
    const file = event.target.files[0];

    if (file && (file.type === 'application/msword' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || file.type === 'text/plain' || file.type === 'application/pdf')) {
      const reader = new FileReader();

      reader.onload = function(event) {
        const contents = event.target.result;
        const emails = contents.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g) || []; // find all emails in contents using regex

        setEmailCount(emails.length);
        setEmails(emails);
      };

      reader.readAsText(file);
    } else {
      alert('Invalid file or file type.');
    }
  }

  return (
    <div>
      <input type="file" onChange={handleFileSelection} />
      <p>Number of emails found: {emailCount}</p>
      {emails.length > 0 && (
        <div>
          <p>Emails:</p>
          <ul>
            {emails.map(email => (
              <li key={email}>{email}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default EmailCounter;
