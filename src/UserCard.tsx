import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/material/styles';

interface UserCardProps {
  user: {
    id: number;
    username: string;
    role: string;
  };
  onEdit: (id: number) => void;
}

const LightBlueCard = styled(Card)({
  backgroundColor: '#e0f7fa', // light blue background
});

const UserCard: React.FC<UserCardProps> = ({ user, onEdit }) => {
  return (
    <LightBlueCard>
      <CardContent>
        <Typography variant="h6" component="div">
          {user.username}
        </Typography>
        <Typography color="textSecondary">
          Role: {user.role}
        </Typography>
        <IconButton onClick={() => onEdit(user.id)}>
          <EditIcon />
        </IconButton>
      </CardContent>
    </LightBlueCard>
  );
};

export default UserCard;
