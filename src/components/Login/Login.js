import styles from './Login.module.css';
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/base/Button';
import Input, { inputClasses } from '@mui/base/Input';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { styled } from '@mui/system';
import { useState } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import Swal from 'sweetalert2';

const CustomInput = React.forwardRef(function CustomInput(props, ref) {

  const { slots, ...other } = props;
  return (
    <Input
      slots={{
        root: StyledInputRoot,
        input: StyledInputElement,
        ...slots,
      }}
      {...other}
      ref={ref}
    />
  );
});

CustomInput.propTypes = {

  slots: PropTypes.shape({
    input: PropTypes.elementType,
    root: PropTypes.elementType,
    textarea: PropTypes.elementType,
  }),
};

export default function InputAdornments() {
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const [toggle, setToggle] = useState(false);

  const toggleLogIn = () => {
    setToggle(!toggle)
  }

  const register = () => {
    setToggle(!toggle);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      iconColor: 'teal',
      title: 'Registered Successfully',
      showConfirmButton: false,
      timer: 1500
    })
  }

  const handleLogin = () => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      iconColor: 'teal',
      title: 'LoggedIn Successfully',
      showConfirmButton: false,
      timer: 1500
    })
  }

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.wrapper}>
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: 2,
      }}
    >
      { !toggle ?
      <div className={styles.container} >
        <h3>Register</h3>
      <CustomInput
        id="outlined-start-adornment"
        startAdornment={<InputAdornment>First Name</InputAdornment>}
      />
      <CustomInput
        id="outlined-start-adornment"
        startAdornment={<InputAdornment>Last Name</InputAdornment>}
      />
      <CustomInput
        id="outlined-start-adornment"
        startAdornment={<InputAdornment>Gender</InputAdornment>}
      />
      <CustomInput
        id="outlined-start-adornment"
        startAdornment={<InputAdornment>Age</InputAdornment>}
      />
      <CustomInput
        id="outlined-start-adornment"
        startAdornment={<InputAdornment>Email</InputAdornment>}
      />
      <CustomInput
        id="outlined-start-adornment"
        startAdornment={<InputAdornment>Mobile Number</InputAdornment>}
      />
      
      <CustomInput
        id="outlined-adornment-password"
        type={values.showPassword ? 'text' : 'password'}
        value={values.password}
        onChange={handleChange('password')}
        startAdornment={<InputAdornment>Password</InputAdornment>}
        endAdornment={
          <InputAdornment>
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      <Button onClick={register}>Register</Button>
      <p onClick={toggleLogIn}>Already a member</p>
      </div> :
      <div className={styles.login}>
        <h3>Login</h3>
        <CustomInput
        id="outlined-start-adornment"
        startAdornment={<InputAdornment>Email</InputAdornment>}
        />
      <CustomInput
        id="outlined-adornment-password"
        type={values.showPassword ? 'text' : 'password'}
        value={values.password}
        onChange={handleChange('password')}
        startAdornment={<InputAdornment>Password</InputAdornment>}
        endAdornment={
          <InputAdornment>
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      <Button onClick={handleLogin}>
        <NavHashLink to='/#home' smooth className={styles.link}>
          <section>Login</section>
        </NavHashLink>
      </Button>
      <p onClick={toggleLogIn}>Not a Member, Register</p>
      </div>
      }
      
    </Box>
    </div>
  );
}

const blue = {
  100: '#DAECFF',
  200: '#66b2b2',
  400: '#008080',
  500: '#006666',
  600: '#0072E5',
};

const grey = {
  50: '#F3F6F9',
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#004c4c',
  400: '#B2BAC2',
  500: '#004c4c',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
};

const StyledInputRoot = styled('div')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  border-radius: 8px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[500]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  display: flex;
  align-items: center;
  justify-content: center;


  &.${inputClasses.focused} {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
  }

  &:hover {
    border-color: ${blue[400]};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);

const StyledInputElement = styled('input')(
  ({ theme }) => `
  font-size: 0.875rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.5rem;
  flex-grow: 1;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: inherit;
  border: none;
  border-radius: inherit;
  padding: 8px 12px;
  outline: 0;
`,
);

const IconButton = styled(Button)(
  ({ theme }) => `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: inherit;
  cursor: pointer;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[700]};
  `,
);

const InputAdornment = styled('div')`
  margin: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
