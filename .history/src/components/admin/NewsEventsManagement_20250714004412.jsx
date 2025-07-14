import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import axios from 'axios';

const NewsEventsManagement = () => {
  const [newsletterData, setNewsletterData] = useState({
    title: '',
    editorName: '',
    sections: [],
    pdfFile: null,
    publishPDF: false,
    publishContent: true,
    notifySubscribers: false,
  });

  const [newSection, setNewSection] = useState({
    heading: '',
    paragraph: '',
    image: null,
    align: 'left',
    fontSize: '16px',
    fontFamily: 'Arial',
  });

  const [numPages, setNumPages] = useState(null);

  const handleSectionChange = (e) => {
    const { name, value } = e.target;
    setNewSection({ ...newSection, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setNewSection({ ...newSection, image: file });
  };

  const addSection = () => {
    setNewsletterData((prev) => ({
      ...prev,
      sections: [...prev.sections, newSection],
    }));
    setNewSection({
      heading: '',
      paragraph: '',
      image: null,
      align: 'left',
      fontSize: '16px',
      fontFamily: 'Arial',
    });
  };

  const handlePdfUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setNewsletterData((prev) => ({ ...prev, pdfFile: file }));
    } else {
      alert('Please upload a valid PDF file.');
    }
  };

  const handlePublishNewsletter = async () => {
    const formData = new FormData();
    formData.append('title', newsletterData.title);
    formData.append('editorName', newsletterData.editorName);
    formData.append('sections', JSON.stringify(newsletterData.sections));
    formData.append('publishContent', newsletterData.publishContent);
    formData.append('publishPDF', newsletterData.publishPDF);
    formData.append('notifySubscribers', newsletterData.notifySubscribers);

    if (newsletterData.pdfFile) {
      formData.append('pdfFile', newsletterData.pdfFile);
    }

    try {
      const res = await axios.post('/api/newsletters/publish', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (res.data.success) {
        alert('Newsletter published successfully!');
        setNewsletterData({
          title: '',
          editorName: '',
          sections: [],
          pdfFile: null,
          publishPDF: false,
          publishContent: true,
          notifySubscribers: false,
        });
      } else {
        alert('Failed: ' + res.data.message);
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred while publishing.');
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">News & Events Management</h2>

      <input
        type="text"
        placeholder="Newsletter Title"
        value={newsletterData.title}
        onChange={(e) =>
          setNewsletterData({ ...newsletterData, title: e.target.value })
        }
        className="border px-3 py-2 mb-2 w-full rounded"
      />

      <input
        type="text"
        placeholder="Editor Name"
        value={newsletterData.editorName}
        onChange={(e) =>
          setNewsletterData({ ...newsletterData, editorName: e.target.value })
        }
        className="border px-3 py-2 mb-4 w-full rounded"
      />

      <div className="border p-4 rounded mb-4 bg-gray-50">
        <h3 className="font-semibold mb-2">Add Section</h3>
        <input
          type="text"
          name="heading"
          placeholder="Heading"
          value={newSection.heading}
          onChange={handleSectionChange}
          className="border px-3 py-1 mb-2 w-full rounded"
        />
        <textarea
          name="paragraph"
          placeholder="Paragraph"
          value={newSection.paragraph}
          onChange={handleSectionChange}
          className="border px-3 py-1 mb-2 w-full rounded"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="mb-2"
        />

        <div className="flex gap-4 mb-2">
          <select
            name="align"
            value={newSection.align}
            onChange={handleSectionChange}
            className="border px-2 py-1 rounded"
          >
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </select>

          <select
            name="fontSize"
            value={newSection.fontSize}
            onChange={handleSectionChange}
            className="border px-2 py-1 rounded"
          >
            <option value="14px">14px</option>
            <option value="16px">16px</option>
            <option value="18px">18px</option>
            <option value="20px">20px</option>
          </select>

          <select
            name="fontFamily"
            value={newSection.fontFamily}
            onChange={handleSectionChange}
            className="border px-2 py-1 rounded"
          >
            <option value="Arial">Arial</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Verdana">Verdana</option>
            <option value="Georgia">Georgia</option>
          </select>
        </div>

        <button
          onClick={addSection}
          className="bg-blue-500 text-white px-4 py-1 rounded"
        >
          Add Section
        </button>
      </div>

      <div className="my-4">
        <label className="block font-medium mb-2">Upload PDF Newsletter</label>
        <input
          type="file"
          accept="application/pdf"
          onChange={handlePdfUpload}
          className="mb-2"
        />
        {newsletterData.pdfFile && (
          <div className="border p-2">
            <Document
              file={newsletterData.pdfFile}
              onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            >
              {Array.from(new Array(numPages), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
              ))}
            </Document>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3 mb-6">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={newsletterData.publishContent}
            onChange={(e) =>
              setNewsletterData({
                ...newsletterData,
                publishContent: e.target.checked,
              })
            }
          />
          Publish Content
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={newsletterData.publishPDF}
            onChange={(e) =>
              setNewsletterData({
                ...newsletterData,
                publishPDF: e.target.checked,
              })
            }
          />
          Publish PDF
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={newsletterData.notifySubscribers}
            onChange={(e) =>
              setNewsletterData({
                ...newsletterData,
                notifySubscribers: e.target.checked,
              })
            }
          />
          Notify Subscribers via Email
        </label>
      </div>

      <button
        onClick={handlePublishNewsletter}
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        disabled={!newsletterData.publishContent && !newsletterData.publishPDF}
      >
        Publish Newsletter
      </button>
    </div>
  );
};

export default NewsEventsManagement;
