import React, { useRef, useState } from 'react';
import axios from 'axios';

export const ContactUs = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = {
      name: form.current.user_name.value,
      email: form.current.user_email.value,
      message: form.current.message.value,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);

      if (response.data.status === 'success') {
        setStatus('Message sent successfully!');
      } else {
        setStatus('An error occurred. Please try again laterrrrrr.');
      }
    } catch (error) {
      console.error("Error sending request:", error);
      setStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Message</label>
        <textarea name="message" required />
        <input type="submit" value="Send" />
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};
