import {ChangeEvent, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {selectAppDecode, selectAppEncode, selectAppError} from '../store/appSlice';
import {decodeMessage, encodeMessage} from '../store/appThunk';
import {Box, Button, Container, Grid, TextField, Typography} from '@mui/material';
import {Msg} from '../types';

const CodeForm = () => {
  const dispatch = useAppDispatch();
  const encodedMessage = useAppSelector(selectAppEncode);
  const decodedMessage = useAppSelector(selectAppDecode);
  const error = useAppSelector(selectAppError);

  const [inputText, setInputText] = useState<Msg>({
    message: '',
    password: '',
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputText((prevState) => ({ ...prevState, [name]: value }));
  };

  const Encode = async () => {
    if (inputText.message || inputText.password) {
      await dispatch(encodeMessage(inputText));
      setInputText({message: '', password: ''});
    }
    return;
  };

  const Decode = async () => {
    if (inputText.message || inputText.password) {
      await dispatch(decodeMessage(inputText));
      setInputText({message: '', password: ''});
    }
    return;
  };

  return (
    <Container maxWidth="md">
      <Box mt={5}>
        <Typography variant="h4" align="center" mb={4}>
          Vigenere Cipher
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Password"
              name="password"
              value={inputText.password}
              onChange={onChange}
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Message"
              name="message"
              multiline
              rows={4}
              value={inputText.message}
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              fullWidth
              variant="contained"
              onClick={Encode}
            >
              Encode
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              fullWidth
              variant="contained"
              onClick={Decode}
            >
              Decode
            </Button>
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
            <TextField
              fullWidth
              label="Encode Result is here!"
              multiline
              rows={4}
              value={encodedMessage}
              sx={{ flex: 1 }}
            />
            <TextField
              fullWidth
              label="Decode result is here!"
              multiline
              rows={4}
              value={decodedMessage}
              sx={{ flex: 1 }}
            />
          </Grid>

          {error && (
            <Grid item xs={12}>
              <Typography color="error" align="center">
                {error}
              </Typography>
            </Grid>
          )}

        </Grid>
      </Box>
    </Container>
  );
};

export default CodeForm;