import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  IconButton,
  Divider,
} from "@mui/material";
import {
  Delete,
  Edit,
  Event,
  Image as ImageIcon,
  Preview,
  Cancel,
} from "@mui/icons-material";
import SubscriberList from "./SubscriberList";

const NewsEventsManagement = () => {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    image: null,
    imageUrl: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [previewing, setPreviewing] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: file,
        imageUrl: URL.createObjectURL(file),
      });
    }
  };

  const handlePublish = () => {
    if (!formData.title || !formData.description || !formData.date) {
      alert("Please fill in title, description, and date.");
      return;
    }

    if (editingId !== null) {
      const updated = items.map((item) =>
        item.id === editingId ? { ...item, ...formData, id: editingId } : item
      );
      setItems(updated);
    } else {
      const newItem = {
        ...formData,
        id: Date.now(),
      };
      setItems([newItem, ...items]);
    }

    resetForm();
  };

  const handleEdit = (item) => {
    setFormData({ ...item });
    setEditingId(item.id);
    setPreviewing(true);
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
    if (editingId === id) resetForm();
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      date: "",
      location: "",
      image: null,
      imageUrl: "",
    });
    setEditingId(null);
    setPreviewing(false);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold", color: "#fea434" }}>
        News & Events Management
      </Typography>

      <Card sx={{ p: 3, mb: 4, backgroundColor: "#fff8f0", borderRadius: 3, boxShadow: 3 }}>
        <CardContent>
          <Box display="flex" flexDirection="column" gap={2}>
            <TextField
              name="title"
              label="Title"
              value={formData.title}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              name="description"
              label="Description"
              multiline
              rows={4}
              value={formData.description}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              name="date"
              label="Date & Time"
              type="datetime-local"
              value={formData.date}
              onChange={handleInputChange}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              name="location"
              label="Location (Optional)"
              value={formData.location}
              onChange={handleInputChange}
              fullWidth
            />

            <Button
              variant="outlined"
              component="label"
              startIcon={<ImageIcon />}
              sx={{ alignSelf: "start", color: "#fea434", borderColor: "#fea434" }}
            >
              Upload Image
              <input type="file" hidden accept="image/*" onChange={handleImageUpload} />
            </Button>

            <Box display="flex" gap={2}>
              <Button
                variant="contained"
                sx={{ bgcolor: "#fea434", mr: 2 }}
                onClick={handlePublish}
              >
                {editingId ? "Save Changes" : "Publish"}
              </Button>
              <Button
                variant="outlined"
                color="error"
                startIcon={<Cancel />}
                onClick={resetForm}
              >
                Cancel
              </Button>
              {!previewing && (
                <Button
                  variant="outlined"
                  startIcon={<Preview />}
                  onClick={() => setPreviewing(true)}
                  sx={{ borderColor: "#fea434", color: "#fea434" }}
                >
                  Preview
                </Button>
              )}
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Preview */}
      {previewing && formData.title && formData.description && formData.date && (
        <Card
          sx={{
            mb: 4,
            backgroundColor: "#fff",
            border: "1px solid #ffe2c0",
            borderRadius: 3,
            boxShadow: 1,
          }}
        >
          <CardContent>
            <Typography variant="h5" color="#fea434" mb={2}>
              Preview
            </Typography>
            <Typography variant="h6">{formData.title}</Typography>
            <Typography variant="body2" mb={1}>
              {formData.description}
            </Typography>
            <Typography variant="body2">
              📅 {new Date(formData.date).toLocaleString()}
              {formData.location && ` | 📍 ${formData.location}`}
            </Typography>
            {formData.imageUrl && (
              <img
                src={formData.imageUrl}
                alt="Preview"
                style={{ width: "100%", maxHeight: 200, objectFit: "cover", borderRadius: 8, marginTop: 10 }}
              />
            )}
          </CardContent>
        </Card>
      )}

      {/* News & Events List */}
      <Typography variant="h5" sx={{ mb: 2, mt: 4, color: "#fea434" }}>
        All News & Events
      </Typography>

      {items.length === 0 ? (
        <Typography>No events yet.</Typography>
      ) : (
        items.map((item) => (
          <Card key={item.id} sx={{ mb: 3, backgroundColor: "#fff", borderRadius: 3, boxShadow: 1 }}>
            <CardContent>
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="body2" mb={1}>
                {item.description}
              </Typography>
              <Typography variant="body2">
                📅 {new Date(item.date).toLocaleString()}
                {item.location && ` | 📍 ${item.location}`}
              </Typography>
              {item.imageUrl && (
                <img
                  src={item.imageUrl}
                  alt="Event"
                  style={{ width: "100%", maxHeight: 200, objectFit: "cover", borderRadius: 8, marginTop: 10 }}
                />
              )}
              <Divider sx={{ my: 2 }} />
              <Box display="flex" gap={2}>
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<Edit />}
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  startIcon={<Delete />}
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))
      )}
    </Box>
  );
};

export default NewsEventsManagement;
