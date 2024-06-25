import { useState } from 'react';

const FileAndTextForm = () => {
  const [formData, setFormData] = useState({
    product_title: '',
    about: '',
    application: '',
    capacity: '',
    head: '',
    temperature: '',
    tank_capacity: '',
    capacity: '',
    file: null,
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.file) {
      setMessage('Please select a file.');
      return;
    }

    const formPayload = new FormData();
    formPayload.append('product_title', formData.product_title);
    formPayload.append('about', formData.about);
    formPayload.append('application', formData.application);
    formPayload.append('capacity', formData.capacity);
    formPayload.append('head', formData.head);
    formPayload.append('temperature', formData.temperature);
    formPayload.append('tank_capacity', formData.tank_capacity);
    formPayload.append('category', formData.category);
    formPayload.append('file', formData.file);

    fetch('/api/upload', {
      method: 'POST',
      body: formPayload,
    })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          setMessage(data.error);
        } else {
          setMessage(JSON.stringify(data));
        }
      })
      .catch(error => {
        setMessage('Form submission error');
        console.error('Form submission error:', error);
      })
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Product Name:</label>
        <input
          type="text"
          id="name"
          name="product_title"
          value={formData.product_title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="about">About:</label>
        <input
          type="text"
          id="about"
          name="about"
          value={formData.about}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="application">application:</label>
        <input
          type="text"
          id="application"
          name="application"
          value={formData.application}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="capacity">capacity:</label>
        <input
          type="text"
          id="capacity"
          name="capacity"
          value={formData.capacity}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="head">head:</label>
        <input
          type="text"
          id="head"
          name="head"
          value={formData.head}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="temperature">temperature:</label>
        <input
          type="text"
          id="temperature"
          name="temperature"
          value={formData.temperature}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="tank_capacity">tank_capacity:</label>
        <input
          type="text"
          id="tank_capacity"
          name="tank_capacity"
          value={formData.tank_capacity}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="category">category:</label>
        <input
          type="text"
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="file">File:</label>
        <input
          type="file"
          id="file"
          name="file"
          onChange={handleFileChange}
        />
      </div>
      <button type="submit">Submit</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default FileAndTextForm;
