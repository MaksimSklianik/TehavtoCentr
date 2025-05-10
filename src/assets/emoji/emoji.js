import { Box } from '@mui/material';

const Emoji = ({ symbol, size = 24 }) => (
    <Box
        component="span"
        sx={{
            fontSize: `${size}px`,
            lineHeight: 1,
            display: 'inline-block',
        }}
    >
        {symbol}
    </Box>
);

export default Emoji;