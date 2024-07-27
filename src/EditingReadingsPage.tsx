import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button } from '@mui/material';

const EditReadingsPage: React.FC = () => {
  const [readingId, setReadingId] = useState<string>('');
  const [readingValue, setReadingValue] = useState<string>('');

  const handleReadingIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReadingId(event.target.value);
  };

  const handleReadingValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReadingValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle reading editing logic here
    console.log('Reading ID:', readingId);
    console.log('Reading Value:', readingValue);
  };

  return (
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
        <Typography variant="h4" component="h1" gutterBottom>
          Edit Reading
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box mb={2}>
            <TextField
              label="Reading ID"
              variant="outlined"
              fullWidth
              value={readingId}
              onChange={handleReadingIdChange}
            />
          </Box>
          <Box mb={2}>
            <TextField
              label="Reading Value"
              variant="outlined"
              fullWidth
              value={readingValue}
              onChange={handleReadingValueChange}
            />
          </Box>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Save Changes
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default EditReadingsPage;
