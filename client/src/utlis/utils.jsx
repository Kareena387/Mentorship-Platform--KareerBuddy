
import { toast } from 'react-toastify';

// Utility function for success messages
export const handleSuccess = (message) => {
    toast.success(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};

// Utility function for error messages
export const handleError = (message) => {
    toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
};

// Utility function for informational messages
export const handleInfo = (message) => {
    toast.info(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};

// Utility function for warning messages
export const handleWarning = (message) => {
    toast.warning(message, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
};

// Function to validate email format (simple regex example)
export const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
};

// Function to check if the password is strong
export const validatePassword = (password) => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    // At least one letter, one number, and a minimum length of 8 characters
    return re.test(String(password));
};

// Function to handle API errors (generic for most requests)
export const handleApiError = (error) => {
    if (error.response) {
        // Request made and server responded
        return error.response.data.message || 'An error occurred. Please try again.';
    } else if (error.request) {
        // The request was made but no response was received
        return 'Network error. Please check your connection and try again.';
    } else {
        // Something happened in setting up the request
        return 'An unexpected error occurred.';
    }
};
